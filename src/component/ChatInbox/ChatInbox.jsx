'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './inbox.module.css';

const ChatInbox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const [primaryId, setPrimaryId] = useState(0);

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
          if (data.cookie) setToken(data.cookie);
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
        console.log('Received data:', data);

        if (data.type === 'chat_history' && Array.isArray(data.messages)) {
          setMessages(data.messages); // Load chat history
        }

        if (data.id && data.message) {
          setMessages((prev) => {
            // Prevent duplicate messages
            const isDuplicate = prev.some((msg) => msg.id === data.id);
            return isDuplicate ? prev : [...prev, data];
          });
        }
      } catch (error) {
        console.error('Error parsing message:', error);
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
    primaryIdsetter();
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
              <h4>Live Chat</h4>
              <button className={styles.closeButton} onClick={toggleModal}>
                &times;
              </button>
            </div>
            <div className={styles.inboxAll}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`${styles.message} ${msg.user.id === primaryId // Replace with the primary user's ID
                    ? styles.primaryMessage // Right-aligned for primary user
                    : styles.secondaryMessage // Left-aligned for secondary user
                    }`}
                >
                  <p className="mb-0">{msg.message}</p>
                </div>
              ))}
            </div>
            <div className={styles.chatSend}>
              <input
                type="text"
                className={styles.messageInput}
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className={styles.sendButton} onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatInbox;
