import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
      console.log("online");
    };

    const handleOffline = () => {
      setOnline(false);
      console.log("offline");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online;
};

export default useOnline;
