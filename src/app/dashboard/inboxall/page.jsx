'use client';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { chatUser } from '@/static-data';

const Page = () => {
  const [users, setUsers] = useState([]); // List of users
  const [selectedUser, setSelectedUser] = useState(null); // Currently selected user
  const [messages, setMessages] = useState([]); // Messages for the selected user
  const [newMessage, setNewMessage] = useState(''); // New message input
  const [socket, setSocket] = useState(null);
  const [isSocketConnected, setIsSocketConnected] = useState(false);

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

  // Initialize WebSocket connection
  const initializeWebSocket = useCallback(() => {
    const token = getToken();
    if (!token || !selectedUser) return;
  
    // Using selectedUser.id in the WebSocket URL as a query parameter
    const wsUrl = `ws://127.0.0.1:8000/ws/chat/${encodeURIComponent(token)}?roomName=${selectedUser.id}`;
  
    const ws = new WebSocket(wsUrl);
  
    ws.onopen = () => {
      setIsSocketConnected(true);
      console.log('WebSocket connected.');
    };
  
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.message) {
          console.log(data.message)
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
        <div className="col-md-3 border-end bg-light">
          <h5 className="py-3 text-center">Users</h5>
          <ul className="list-group">
            {chatUser.map((user) => (
              <li
                key={user.id}
                className={`list-group-item ${selectedUser?.id === user.id ? 'active' : ''}`}
                onClick={() => handleUserClick(user)}
                style={{ cursor: 'pointer' }}
              >
                {user.first_name}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Panel */}
        <div className="col-md-9 d-flex flex-column">
          {selectedUser ? (
            <>
              {/* Chat Header */}
              <div className="border-bottom py-2 px-3">
                <h5 className="mb-0">Chat with {selectedUser.first_name}</h5>
              </div>

              {/* Chat Messages */}
              <div className="flex-grow-1 overflow-auto p-3" style={{ background: '#f8f9fa' }}>
                {messages.map((msg, index) => (
                  <div key={index} className={`mb-2 ${msg.isAdmin ? 'text-end' : 'text-start'}`}>
                    <span
                      className={`d-inline-block p-2 rounded ${msg.isAdmin ? 'bg-primary text-white' : 'bg-secondary text-white'}`}
                    >
                      {msg.content}
                    </span>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-top p-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <button className="btn btn-primary" onClick={sendMessage}>
                    Send
                  </button>
                </div>
              </div>
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
