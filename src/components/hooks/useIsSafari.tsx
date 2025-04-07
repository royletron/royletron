import { useEffect, useState } from "react";

export default function useIsSafari() {
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    try {
      const isSafari =
        //@ts-ignore
        /constructor/i.test(window.HTMLElement) ||
        (function (p) {
          return p.toString() === "[object SafariRemoteNotification]";
        })(
          !window["safari"] ||
            //@ts-ignore
            (typeof safari !== "undefined" && safari.pushNotification)
        );
      setIsSafari(isSafari);
    } catch (error) {}
  }, []);

  return isSafari;
}
