"use client";

import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    (async () => {
      const locomotiveScroll = new LocomotiveScroll();
      return locomotiveScroll;
    })();
  }, []);
  return <div data-scroll-container>{children}</div>;
};

export default Template;
