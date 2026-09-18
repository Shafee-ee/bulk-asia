import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import "./index.css";
import App from "./App.jsx";

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    function handleAnchorClick(event) {
      const link = event.target.closest('a[href^="#"]');

      if (!link) return;

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      lenis.scrollTo(target, {
        duration: 1.5,
      });
    }

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScroll />
  </StrictMode>,
);
