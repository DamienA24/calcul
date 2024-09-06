"use client";

import { useEffect, useRef } from "react";

const BannerAdsLateral = () => {
  const banner = useRef<HTMLDivElement>(null);

  const isWindow = typeof window !== "undefined";

  const atOptions = {
    key: "77cca5c2130fa04d2039105f1ebfdff1",
    format: "iframe",
    height: 300,
    width: 160,
    params: {},
  };

  useEffect(() => {
    if (isWindow && banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.topcreativeformat.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner, isWindow]);

  return (
    <div
      className="ml-5 border border-gray-200 justify-center items-center text-white text-center"
      ref={banner}
    ></div>
  );
};

export default BannerAdsLateral;
