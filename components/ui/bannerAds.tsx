"use client";

import { HTMLAttributes, useEffect, useRef } from "react";

const BannerAds = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className } = props;
  const container = useRef<HTMLDivElement>(null);

  const isWindow = typeof window !== "undefined";

  const atOptions = {
    key: "d6f6568aafbe19353e2438fa0cea8c4a",
    format: "iframe",
    height: 60,
    width: 468,
    params: {},
  };

  useEffect(() => {
    console.log("icic");
    if (isWindow && container.current && !container.current.firstChild) {
      console.log("passe");

      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//pl24277107.cpmrevenuegate.com/${atOptions.key}/invoke.js`;
      script.async = true;
      script.defer = true;
      conf.async = true;
      conf.defer = true;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      container.current.append(conf);
      container.current.append(script);
    }
  }, [container, isWindow]);

  return (
    <div
      ref={container}
      className=" super-test flex items-center justify-center"
    />
  );
};

export default BannerAds;
