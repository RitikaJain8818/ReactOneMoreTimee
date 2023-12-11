import { useEffect, useState } from "react";

const useOnlineStatus = (props) => {
  console.log("Inside online status " + props);
  const [onlineStatus, setOnlineStatus] = useState(true);

  //Check if Online

  useEffect(() => {
    console.log("Inside online status useEffect " + props);
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
