"use client";

import { useEffect } from "react";

const TitleUpdater = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  });

  return null;
};

export default TitleUpdater;
