import { useState, useEffect } from "react";
import SuprSendInbox from "@suprsend/react-inbox";
import "react-toastify/dist/ReactToastify.css";
import { suprsend } from "@/conf/suprsend";
import { useSelector } from "react-redux";

const Notif = () => {
  const user = useSelector((state) => state.auth.userData);
  const [subscriberId, setSubscriberId] = useState(null);

  useEffect(() => {
    const fetchSubscriberId = async () => {
      try {
        const response = await fetch(
          `https://leetstats.onrender.com/generate-subscriber-id?distinct_id=${user.$id}`
        )
          .then((res) => res.json())
          .then((data) => data.subscriber_id);
        setSubscriberId(response);
        // const data = await response.json();
        // setSubscriberId(data.subscriber_id);
      } catch (error) {
        console.error("Error fetching subscriber_id:", error);
      }
    };

    fetchSubscriberId();
  }, [user.$id]);

  if (!subscriberId) {
    return <div>Loading...</div>;
  }
  console.log(subscriberId);
  console.log(user.$id);
  return (
    <div>
      <SuprSendInbox
        workspaceKey={suprsend.workspaceKey}
        subscriberId={subscriberId}
        distinctId={user.$id}
      />
    </div>
  );
};

export default Notif;
