'use client';
import React, { useState, useEffect, useCallback } from "react";

const Notification = () => {
  const [notifications, setNotifications] = useState([]); // State for notifications

  const getToken = () => {
    try {
      return localStorage.getItem("secure") || null;
    } catch (error) {
      console.error("Error retrieving token:", error);
      return null;
    }
  };

  const setToken = (token) => {
    try {
      localStorage.setItem("secure", token);
    } catch (error) {
      console.error("Error saving token:", error);
    }
  };

  const fetchToken = async () => {
    const token = getToken();
    if (!token) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/secure`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (data.cookie) setToken(data.cookie);
        } else {
          console.error("Failed to fetch token:", response.status);
        }
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    }
  };

  const initializeWebSocket = useCallback(() => {
    const token = getToken();
    if (!token) return;

    const ws = new WebSocket(
      `ws://127.0.0.1:8000/ws/notification/${encodeURIComponent(token)}`
    );

    ws.onopen = () => {
      console.log("WebSocket connected.");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.message) {
          // Add notification to the state
          setNotifications((prev) => [...prev, { id: Date.now(), text: data.message }]);
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected.");
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    fetchToken();
    const cleanupWebSocket = initializeWebSocket();
    return () => {
      if (cleanupWebSocket) cleanupWebSocket();
    };
  }, [initializeWebSocket]);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };
  useEffect(() => {
    const timers = notifications.map((notif) =>
      setTimeout(() => removeNotification(notif.id), 5000)
    );
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [notifications]);
  

  return (
    <>
      <div className="notification-container">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="notification"
            onClick={() => removeNotification(notif.id)}
          >
            {notif.text}
          </div>
        ))}
      </div>
      <style jsx>{`
        .notification-container {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 9999;
        }
        .notification {
          background-color: #333;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          margin-bottom: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }
        .notification:hover {
          opacity: 0.9;
        }
      `}</style>
    </>
  );
};

export default Notification;
