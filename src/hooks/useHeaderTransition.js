import { useEffect, useRef } from "react";

const getHeaderTransitionRGB = (targetRGB, originalRGB, ratio) => {
  // original 1 -> target 0
  const r = originalRGB.r - (1 - ratio) * (originalRGB.r - targetRGB.r);
  const g = originalRGB.g - (1 - ratio) * (originalRGB.g - targetRGB.g);
  const b = originalRGB.b - (1 - ratio) * (originalRGB.b - targetRGB.b);

  return { r, g, b };
};

const updateHeader = (entries, header, name) => {
  const ratio = entries[0].intersectionRatio;

  const headerBgColor = {
    targetRGB: {
      r: 71,
      g: 156,
      b: 157,
    },
    originalRGB: {
      r: 243,
      g: 243,
      b: 243,
    },
  };

  const headerNameColor = {
    targetRGB: {
      r: 0,
      g: 0,
      b: 0,
    },
    originalRGB: { r: 0, g: 123, b: 255 },
  };

  const headerRgb = getHeaderTransitionRGB(
    headerBgColor.targetRGB,
    headerBgColor.originalRGB,
    ratio
  );
  const nameRgb = getHeaderTransitionRGB(
    headerNameColor.targetRGB,
    headerNameColor.originalRGB,
    ratio
  );

  header.style.background = `rgb(${headerRgb.r}, ${headerRgb.g}, ${headerRgb.b})`;
  name.style.color = `rgb(${nameRgb.r}, ${nameRgb.g}, ${nameRgb.b})`;
};

const getThreshold = (steps) => {
  const threshold = [];
  for (let i = 1.0; i <= steps; i++) {
    threshold.push(i / steps);
  }
  threshold.push(0);
  return threshold;
};

export const useHeaderTransition = () => {
  const headerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    let observer;
    const header = headerRef?.current;
    const target = targetRef?.current;
    const name = document.getElementById("header-name");
    if (header) {
      const headerHeight = header.offsetHeight;
      const marginTop = -120;

      const options = {
        rootMargin: `${marginTop}px 0px 0px 0px`,
        threshold: getThreshold(headerHeight),
      };
      observer = new IntersectionObserver(
        (entries) => updateHeader(entries, header, name),
        options
      );
      observer.observe(target);
    }

    return () => {
      observer?.unobserve(target);
    };
  });

  return {
    headerRef,
    targetRef,
  };
};
