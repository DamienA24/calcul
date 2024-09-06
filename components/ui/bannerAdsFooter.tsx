"use client";

import { useEffect, useRef } from "react";

const BannerAdsFooter = () => {
  const banner = useRef<HTMLDivElement>(null);

  const isWindow = typeof window !== "undefined";

  const atOptions = {
    key: "695f8c7cbdcae0dc66d43886336144a2",
    format: "iframe",
    height: 50,
    width: 320,
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
      className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
      ref={banner}
    ></div>
  );
};

export default BannerAdsFooter;
