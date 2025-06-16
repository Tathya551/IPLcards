// pages/_app.js
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    fetch("/api/socket").catch((err) =>
      console.error("Socket init failed:", err)
    );
  }, []);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
