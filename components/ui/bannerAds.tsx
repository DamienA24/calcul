"use client";

import { HTMLAttributes, useEffect, useRef } from "react";

const BannerAds = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className } = props;
  const banner = useRef<HTMLDivElement>(null);

  const isWindow = typeof window !== "undefined";

  const atOptions = {
    key: "d6f6568aafbe19353e2438fa0cea8c4a",
    format: "js",
    async: true,
    height: 50,
    width: 320,
    params: {},
  };

  useEffect(() => {
    if (isWindow && banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.async = true;
      script.type = "text/javascript";
      script.src = `https://pl24277107.cpmrevenuegate.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner, isWindow]);

  return (
    <div
      ref={banner}
      className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
    />
  );
};

export default BannerAds;
