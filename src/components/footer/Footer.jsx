import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Container from "../container";

const Footer = () => {
  return (
    <Container>
        <footer className="flex flex-col md:flex-row items-center justify-between gap-4 py-3 px-10 border-t border-neutral-100 ">
      <p className="text-xs text-gray-500">
        Built with love by Deepak Kumar
      </p>

      <div className="flex items-center gap-4">
        <a
          href="https://x.com/DeepakK86449533"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
            <FaXTwitter className="size-4 text-neutral-400 hover:text-neutral-700"/>
        </a>

        <a
          href="https://www.linkedin.com/in/deepaklohana41/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
            <FaLinkedinIn className="size-4 text-neutral-400 hover:text-neutral-700" />
        </a>

        <a
          href="https://github.com/deepaklohana"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaGithub className="size-4 text-neutral-400 hover:text-neutral-700"/>
        </a>
      </div>
    </footer>
    </Container>
  );
};

export default Footer;
