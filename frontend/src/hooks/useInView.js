import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook that uses IntersectionObserver to detect when an element
 * enters the viewport. Used to lazy-render heavy below-the-fold components.
 *
 * @param {Object} options - IntersectionObserver options
 * @param {string} options.rootMargin - Margin around root (default: '200px')
 * @param {number} options.threshold - Visibility threshold (default: 0)
 * @returns {[React.RefObject, boolean]} - [ref to attach to container, isInView]
 */
const useInView = ({ rootMargin = '200px', threshold = 0 } = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isInView) return;

    // Fallback: if IntersectionObserver not supported, show immediately
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Only needs to trigger once
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold, isInView]);

  return [ref, isInView];
};

export default useInView;
