import React, { useEffect } from 'react';

const TextBanner = () => {
  useEffect(() => {
    const css = `
      @keyframes move-rtl {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .animate-marquee {
        animation: move-rtl 6000ms linear infinite;
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.innerHTML = css;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="flex justify-start bg-blue-600 overflow-hidden">
      <h3 className="text-xl uppercase text-transparent bg-clip-text text-white whitespace-nowrap px-24 py-1 tracking-wider animate-marquee">HOUSE OF WISDOM FUNDAMENTALS OF BLOCKCHAIN SALE IS LIVE</h3>
      <h3 className="text-xl uppercase text-transparent bg-clip-text text-white whitespace-nowrap px-24 py-1 tracking-wider animate-marquee">HOUSE OF WISDOM FUNDAMENTALS OF BLOCKCHAIN SALE IS LIVE</h3>
    </div>
  );
};

export default TextBanner;
