"use client";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";

export function useSocket(handlers = {}) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const sock = io({
      path: "/api/socket",
      transports: ["websocket", "polling"],
    });
    setSocket(sock);

    const onConnect = () => console.log("[useSocket] connected:", sock.id);
    sock.on("connect", onConnect);

    const wrapped = {};
    for (const [evt, fn] of Object.entries(handlers)) {
      const wrapper = (data) => fn(data, sock);
      wrapped[evt] = wrapper;
      sock.on(evt, wrapper);
    }

    return () => {
      sock.off("connect", onConnect);
      for (const [evt, wrapper] of Object.entries(wrapped)) {
        sock.off(evt, wrapper);
      }
      sock.disconnect();
    };
  }, []);

  return socket;
}
