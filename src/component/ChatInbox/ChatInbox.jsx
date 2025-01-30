'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './inbox.module.css';
import EmojiPicker from 'emoji-picker-react';
const ChatInbox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);


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

  // Fetch primary user id from localStorage
  const primaryIdsetter = () => {
    try {
      const user = JSON.parse(localStorage.getItem('user_id'));
      setPrimaryId(user.id);
    } catch (error) {
      console.error('Error retrieving user:', error);
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

      {/* Modal */}
      {isModalOpen && (

        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.chatHeader}>
              <h6 className='mb-0'>Live Chat</h6>
              <button className={styles.closeButton} onClick={toggleModal}>
                &times;
              </button>
            </div>
            <div className={styles.inboxAll}>
              {showEmojiPicker && (

                <EmojiPicker onEmojiClick={handleEmojiClick} height={300} style={{ position: 'absolute', bottom: '60px', left: "50px" }} />
              )}
              {
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`${styles.message} ${msg.user.id === JSON.parse(localStorage.getItem('user_id')).id // Replace with the primary user's ID
                    ? styles.primaryMessage // Right-aligned for primary user
                    : styles.secondaryMessage // Left-aligned for secondary user
                    }`}
                >
                  <p className={`mb-0 ${styles.inboxMessage}`}>{msg.message}</p>
                </div>
              ))}
            </div>
            <div className={styles.chatSend}>
              <div className={styles.chatUtiles}>
                <button className="btn btn-light w-100 h-100 rounded-1" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#143A52" className="bi bi-paperclip" viewBox="0 0 16 16">
                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
                  </svg>
                </button>
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

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatInbox;
