'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './inbox.module.css';
import EmojiPicker from 'emoji-picker-react';
const ChatInbox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesContainerRef = useRef(null); // Add this line


  const groupMessagesByDate = (messages) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    return messages.reduce((acc, message) => {
      const messageDate = new Date(message.message_time);
      const dateKey = messageDate.toLocaleDateString();

      let dateHeader;
      if (messageDate.toDateString() === today.toDateString()) {
        dateHeader = 'Today';
      } else if (messageDate.toDateString() === yesterday.toDateString()) {
        dateHeader = 'Yesterday';
      } else {
        dateHeader = messageDate.toLocaleDateString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric'
        });
      }

      const existingGroup = acc.find(group => group.dateHeader === dateHeader);
      if (existingGroup) {
        existingGroup.messages.push(message);
      } else {
        acc.push({ dateHeader, messages: [message] });
      }

      return acc;
    }, []);
  };
  // Retrieve the JWT token from localStorage
  const getToken = () => {
    try {
      return localStorage.getItem('secure') || null;
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
  };

  // Save the JWT token in localStorage
  const setToken = (token) => {
    try {
      localStorage.setItem('secure', token);
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };

  const setLocalUser = (user) => {
    try {
      localStorage.setItem('user_id', JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user:', error);
    }
  }
  // Fetch and set the token if not present
  const fetchToken = async () => {
    const token = getToken();
    if (!token) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/secure`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (data.cookie) {
            setLocalUser(data.user);
            setToken(data.cookie);

          }
        } else {
          console.error('Failed to fetch token:', response.status);
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
  };

  // Initialize WebSocket connection
  const initializeWebSocket = useCallback(() => {
    const token = getToken();
    if (!token) {
      console.error('Token is missing. WebSocket connection aborted.');
      return null;
    }

    const ws = new WebSocket(
      `ws://127.0.0.1:8000/ws/chat/${encodeURIComponent(token)}`
    );

    ws.onopen = () => {
      setIsSocketConnected(true);
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === 'chat_history' && Array.isArray(data.messages)) {
          setMessages(data.messages);
          return;
        }

        if (data.id && data.message) {
          setMessages((prev) => {

            // Prevent duplicate messages
            const isDuplicate = prev.some((msg) => msg.id === data.id);
            return isDuplicate ? prev : [...prev, data];
          });
        }
      } catch (error) {
        console.error('Message handling error:', error);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      setIsSocketConnected(false);
      console.log('WebSocket disconnected.');
    };

    setSocket(ws);
    return ws;
  }, []);

  // Cleanup WebSocket connection
  const cleanupWebSocket = useCallback(() => {
    if (socket) {
      socket.close();
      setSocket(null);
      setIsSocketConnected(false);
    }
  }, [socket]);

  // Toggle modal visibility and manage WebSocket lifecycle
  const toggleModal = () => {
    setIsModalOpen((prevState) => {
      if (!prevState) {
        // Opening modal: initialize WebSocket
        initializeWebSocket();
      } else {
        // Closing modal: cleanup WebSocket
        cleanupWebSocket();
      }
      return !prevState;
    });
  };

  // Send a message via WebSocket
  const sendMessage = () => {
    if (!message.trim()) {
      console.warn('Cannot send an empty message.');
      return;
    }

    if (!isSocketConnected || !socket) {
      console.warn('WebSocket is not connected.');
      return;
    }

    const messageData = { message };
    socket.send(JSON.stringify(messageData));
    setMessage(''); // Reset message input
  };

  // Fetch token and user data on component mount
  useEffect(() => {
    fetchToken();

  }, []);
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isModalOpen]);

  return (
    <>
      <button className={styles.live_btn} onClick={toggleModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-chat-dots-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        </svg>
      </button>
       <div className="modal fade" id="fullChatScreen" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
            </div>
          </div>
        </div>
      </div> 

      {/* Modal */}
      {isModalOpen && (

        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.chatHeader}>

              <button className={styles.closeButton} data-bs-target="#fullChatScreen" data-bs-toggle="modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" />
                </svg>
              </button> 
              <h6 className='mb-0'>Live Chat</h6>
              <button className={styles.closeButton} onClick={toggleModal}>
                &times;
              </button>
            </div>
            <div className={styles.inboxAll} ref={messagesContainerRef}>
              {showEmojiPicker && (
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  height={300}
                  style={{ position: 'absolute', bottom: '60px', left: "0px", zIndex:500}}
                />
              )}

              {groupMessagesByDate(messages).map((group) => (
                <div key={group.dateHeader}>
                  <div className={styles.dateSeparator}>
                    <span>{group.dateHeader}</span>
                  </div>
                  {group.messages.map((msg) => {
                    const messageTime = new Date(msg.message_time).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true
                    });

                    return (
                      <div
                        key={msg.id}
                        className={`${styles.message} ${msg.user.id === JSON.parse(localStorage.getItem('user_id')).id
                          ? styles.primaryMessage
                          : styles.secondaryMessage
                          }`}
                      >
                        <div className={styles.messageContent}>
                          <p className={`mb-0 ${styles.inboxMessage}`} style={{ width: "100%", wordBreak: "break-word" }}>{msg.message}</p>
                          <span className={styles.timestamp} style={{ fontSize: "10px", fontWeight: "bold" }}>{messageTime}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className={styles.chatSend}>

              <div className={styles.chatUtiles}>
                <label className="btn btn-light w-100 h-100 rounded-1" type="button" htmlFor="file">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#143A52" className="bi bi-paperclip" viewBox="0 0 16 16">
                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
                  </svg>
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
                <button
                  className="btn btn-light w-100 h-100 rounded-1"
                  type="button"
                  onClick={() => setShowEmojiPicker((prev) => !prev)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#143A52" className="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                  </svg>
                </button>
              </div>
              <textarea
                rows="1"
                className={styles.messageInput}
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault(); // Prevent newline in textarea
                    sendMessage();
                  }
                }}
              ></textarea>
              <button
                className="btn btn-light d-flex justify-content-center align-items-center p-2  rounded-1"
                type="button"
                onClick={sendMessage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatInbox;
