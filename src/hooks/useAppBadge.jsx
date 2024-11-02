import { useState } from "react";

export default function useAppBadge() {
  const [counter, setCounter] = useState(1);

  const setBadge = () => {
    setCounter(1);
    if (navigator.setAppBadge) {
      navigator.setAppBadge(counter);
    } else if (navigator.setClientBadge) {
      navigator.setClientBadge();
    }
  };

  const clearBadge = () => {
    if (navigator.clearAppBadge) {
      navigator.clearAppBadge(counter);
    } else if (navigator.clearClientBadge) {
      navigator.clearClientBadge();
    }
  };

  return [setBadge, clearBadge];
}
