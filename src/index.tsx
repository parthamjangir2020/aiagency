import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./main-component/App/App";
import "swiper/css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/fontawesome.css";
import "./css/themify-icons.css";
import "./css/animate.css";
import "./css/mousecursor.css";
import "./css/imageRevealHover.css";
import "./css/custom-fonts.css";
import "./css/main.css";

if (process.env.NODE_ENV === "development") {
  const hasExt = (s: string | undefined) => !!s && s.includes("chrome-extension://");
  window.addEventListener("error", (e) => {
    const ev = e as ErrorEvent;
    const src = ev.filename || (ev.error && ev.error.stack) || "";
    if (hasExt(src)) {
      e.preventDefault();
    }
  });
  window.addEventListener("unhandledrejection", (e) => {
    const ev = e as PromiseRejectionEvent;
    const reason: any = ev.reason;
    const stack = (reason && reason.stack) || "";
    if (hasExt(stack)) {
      e.preventDefault();
    }
  });
}

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
);

reportWebVitals();
