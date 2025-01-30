'use client';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styles from './chat.module.css';
import EmojiPicker from 'emoji-picker-react';


const Page = () => {
  const [users, setUsers] = useState([]); // List of users
  const [selectedUser, setSelectedUser] = useState(null); // Currently selected user
  const [messages, setMessages] = useState([]); // Messages for the selected user
  const [newMessage, setNewMessage] = useState(''); // New message input
  const [socket, setSocket] = useState(null);
  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Retrieve JWT token from localStorage
  const getToken = () => localStorage.getItem('secure') || null;

  // Save JWT token in localStorage
  const setToken = (token) => {
    try {
      localStorage.setItem('secure', token);
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };

  // Fetch and set token if not present
  const fetchToken = async () => {
    const token = getToken();
    if (!token) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/secure`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
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

  async function listAllAssociatedUsers() {
    try {
      // Retrieve user ID from localStorage and validate
      const user_data = JSON.parse(localStorage.getItem('user_id'));
      if (!user_data || !user_data.id) {
        throw new Error('User ID not found in localStorage');
      }

      // Ensure the server endpoint is defined
      const serverEndpoint = process.env.NEXT_PUBLIC_SERVER_END_POINT;
      if (!serverEndpoint) {
        throw new Error('Server endpoint is not defined');
      }

      // Make the API request
      const response = await axios.get(`${serverEndpoint}/chat/message/${user_data.id}/`);

      // Check for HTTP errors
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.data.error || 'Failed to fetch associated users');
      }

      // Update state with retrieved users
      const data = response.data;
      if (data && data.users) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error('Error fetching associated users:', error.message || error);
    }
  }

  const handleEmojiClick = (emojiObject) => {
    setNewMessage((prev) => prev + emojiObject.emoji);
  };

  // Initialize WebSocket connection
  const initializeWebSocket = useCallback(() => {
    const token = getToken();
    if (!token || !selectedUser) return;

    // Using selectedUser.id in the WebSocket URL as a query parameter
    const wsUrl = `ws://127.0.0.1:8000/ws/chat/${encodeURIComponent(token)}?roomName=${selectedUser.id}`;

    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      setIsSocketConnected(true);
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log(data);
        if (data.type === 'chat_history' && Array.isArray(data.messages)) {
          setMessages(data.messages); // Load chat history
        }
        if (data.message) {
          users.map((user) => {
            if (user.id !== data.user.id) {
                setUsers((prev) => [...prev, data.user]);
            }
          });
          setMessages((prev) => [...prev, data.message]);
        }
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      setIsSocketConnected(false);
    };

    ws.onclose = () => {
      setIsSocketConnected(false);
      console.log('WebSocket disconnected.');
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, [selectedUser]);

  useEffect(() => {
    fetchToken();
    listAllAssociatedUsers();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      initializeWebSocket();
    }
    return () => {
      if (socket) socket.close();
    };
  }, [selectedUser, initializeWebSocket]);

  // Send message via WebSocket
  const sendMessage = () => {
    if (!newMessage.trim()) {
      console.warn('Cannot send an empty message.');
      return;
    }

    if (!isSocketConnected || !socket) {
      console.warn('WebSocket is not connected.');
      return;
    }

    const messageData = { message: newMessage, roomName: selectedUser.id };
    socket.send(JSON.stringify(messageData));
    setMessages((prev) => [...prev, { content: newMessage, isAdmin: false }]);
    setNewMessage('');
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setMessages([]); // Clear previous messages when selecting a new user
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Sidebar */}
        <div className="col-md-3 bg-light p-0">
          <div className={styles.chat_header}>
            <h3 className={styles.chat_text}>Chat Inbox</h3>
            <div className="mb-3">

              <input type="search" className="form-control" id="" aria-describedby="emailHelp" />
            </div>
          </div>
          <ul className="list-group">
            {users.map((user) => (
              <li
                key={user.id}
                className={`list-group-item ${selectedUser?.id === user.id ? 'active' : ''}`}
                onClick={() => handleUserClick(user)}
                style={{ cursor: 'pointer', borderRadius: 0 }}
              >
                <div className="d-flex justify-content-start align-items-center">
                  <div className={styles.avatar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.chat_username}>
                      {user.first_name === 'Anonymous' ? `${user.id} Anonymous User` : user.first_name}
                    </span>
                    <small className="d-block">user message</small>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Panel */}
        <div className="col-md-9 d-flex flex-column p-0" style={{ position: 'relative' }}>
          {selectedUser ? (
            <>
              {/* Chat Header */}
              <div className={styles.chat_user_header}>
                <div className='d-flex align-items-center'>

                  <div className={styles.avatar} style={{ backgroundColor: 'white', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </div>

                  <div>
                    <h5 className="mb-0">Chat with {selectedUser.first_name}</h5>
                    <span>online</span>
                  </div>
                </div>

                <div className="search">
                  <button className='btn btn-light rounded-pill d-flex align-items-center justify-content-center' style={{ width: '40px', height: '40px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-grow-1 overflow-auto p-3" style={{ background: '#CDE3EB', overflowY: 'auto', height:'400px' }}>
                {messages.map((msg, index) => (
                  <div key={index} className={`mb-2 ${msg.isAdmin ? 'text-end' : 'text-start'}`}>
                    <span
                      className={`d-inline-block p-2 rounded ${msg.isAdmin ? 'bg-primary text-white' : 'bg-secondary text-white'}`}
                    >
                      {msg.message}
                    </span>
                  </div>
                ))}

              </div>
              {showEmojiPicker && (

                <EmojiPicker onEmojiClick={handleEmojiClick} height={300} style={{ position: 'absolute', bottom: '60px', left: "50px" }} />
              )}
              <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
                <div className="row w-100 p-0 me-0">
                  <div className="col-lg-1 p-0">
                    <button className="btn btn-light w-100 h-100 rounded-0" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#143A52" className="bi bi-paperclip" viewBox="0 0 16 16">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="col-lg-1 p-0">
                    <button
                      className="btn btn-light w-100 h-100 rounded-0"
                      type="button"
                      onClick={() => setShowEmojiPicker((prev) => !prev)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#143A52" className="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                      </svg>
                    </button>
                  </div>
                  <div className="col-lg-10 p-0">
                    <textarea
                      rows="1"
                      placeholder="Type a message"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault(); // Prevent newline in textarea
                          sendMessage();
                        }
                      }}
                      className={styles.send_chat_input}
                    ></textarea>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className="d-flex justify-content-center align-items-center h-100">
              <h5>Select a user to start chatting</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
