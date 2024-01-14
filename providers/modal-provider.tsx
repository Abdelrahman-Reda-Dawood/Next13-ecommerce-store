"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";

const ModalProvider = () => {
  const [isMonuted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMonuted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
