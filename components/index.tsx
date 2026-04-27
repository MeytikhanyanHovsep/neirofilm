"use client";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { ReactLenis } from "lenis/react";
import { ModalProvider } from "./modals";
type Props = {
  children: React.ReactNode;
};

export default function Components({ children }: Props) {
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.5,
          smoothWheel: true,
        }}
      >
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </ReactLenis>
    </>
  );
}
