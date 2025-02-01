'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import styles from './chat.module.css';
import EmojiPicker from 'emoji-picker-react';

const Page = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesContainerRef = useRef(null); // Add this line
  // Group messages by date
  const groupMessagesByDate = useCallback((messages) => {
    const grouped = messages.reduce((acc, message) => {
      const date = new Date(message.message_time).toDateString();
      if (!acc[date]) acc[date] = [];
      acc[date].push(message);
      return acc;
    }, {});

    return Object.entries(grouped).map(([date, messages]) => ({
      date,
      messages
    }));
  }, []);

  // Token management
  const getToken = () => localStorage.getItem('secure');
  const setToken = (token) => localStorage.setItem('secure', token);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!getToken()) {
          const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/secure`, {
            method: 'POST'
          });
          const data = await response.json();
          setToken(data.cookie);
        }

        const userData = JSON.parse(localStorage.getItem('user_id'));
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_END_POINT}/chat/message/${userData.id}/`
        );
        setUsers(response.data.users);
      } catch (error) {
        console.error('Initialization error:', error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, selectedUser]);
  // WebSocket management
  useEffect(() => {
    if (!selectedUser) return;

    const ws = new WebSocket(
      `ws://${process.env.NEXT_PUBLIC_WS_SERVER_END_POINT}/ws/chat/${encodeURIComponent(getToken())}?roomName=${selectedUser.id}`
    );

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: 'chat_history' }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'chat_history') {
        setMessages(data.messages);
      } else if (data.message && data.message_time) {
        setMessages(prev => [...prev, data]);
      }
    };

    setSocket(ws);

    return () => ws.close();
  }, [selectedUser]);

  // Message handling
  const sendMessage = () => {
    if (!newMessage.trim() || !socket) return;

    const messageData = {
      message: newMessage,
      roomName: selectedUser.id,
      isAdmin: true // Assuming admin is the sender
    };

    socket.send(JSON.stringify(messageData));
    setNewMessage('');
    setShowEmojiPicker(false);
  };

  // UI helpers
  const MessageBubble = ({ message }) => (
    
    <div className={`${styles.messageBubble} ${message.isAdmin ? styles.sent : styles.received}`}>
      <div className={styles.messageContent}>{message.message}</div>
      <div className={styles.messageTime}>
        {new Date(message.message_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {/* Users List */}
      <div className={styles.usersPanel}>
        <div className={styles.usersHeader}>
          <h3>Chat Inbox</h3>
          <input type="search" placeholder="Search users..." />
        </div>
        <ul className={styles.usersList}>
          {users.map(user => (
            <li
              key={user.id}
              className={`${styles.userItem} ${selectedUser?.id === user.id ? styles.active : ''}`}
              onClick={() => setSelectedUser(user)}
            >
              <div className={styles.userAvatar}>
                {user.first_name[0].toUpperCase()}
              </div>
              <div className={styles.userInfo}>
                <span>{user.first_name || `User ${user.id}`}</span>
                <small>{user.last_message || 'No messages yet'}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className={styles.chatPanel}>
        {selectedUser ? (
          <>
            <div className={styles.chatHeader}>
              <div className={styles.userProfile}>
                <div className={styles.userAvatar}>
                  {selectedUser.first_name[0].toUpperCase()}
                </div>
                <div>
                  <h4>{selectedUser.first_name}</h4>
                  <span>Online</span>
                </div>
              </div>
            </div>

            <div className={styles.messagesContainer} ref={messagesContainerRef}>
              {groupMessagesByDate(messages).map((group) => (
                <div key={group.date} className={styles.dateGroup}>
                  <div className={styles.dateHeader}>
                    {new Date(group.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                  {group.messages.map((message, index) => (
                    
                    
                    <MessageBubble key={index} message={message} />
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.messageInput}>
              {showEmojiPicker && (
                <div className={styles.emojiPicker}>
                  <EmojiPicker onEmojiClick={(e) => setNewMessage(v => v + e.emoji)} />
                </div>
              )}
              <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage} disabled={!newMessage.trim()}>
                Send
              </button>
            </div>
          </>
        ) : (
          <div className={styles.emptyState}>
            Select a user to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;