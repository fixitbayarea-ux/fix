import React, { useEffect } from 'react';

const ThumbtackReviewWidget = () => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const container = document.getElementById('tt-dynamic');
    if (!container) return;

    // Avoid injecting script more than once
    if (document.getElementById('tt-review-widget-script')) return;

    const script = document.createElement('script');
    script.src = 'https://www.thumbtack.com/profile/widgets/scripts/?service_pk=479092434655600644&widget_id=review&type=one';
    script.async = true;
    script.id = 'tt-review-widget-script';
    container.appendChild(script);

    return () => {
      const existing = document.getElementById('tt-review-widget-script');
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div
        className="rounded-2xl bg-white shadow-md p-4 sm:p-6 flex flex-col gap-4"
      >
        <div
          className="widget"
          id="tt-review-widget-one"
        >
          <img
            src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg"
            alt="Thumbtack"
            className="h-5 mb-3"
          />
          <div id="tt-dynamic">
            <div className="flex items-start gap-3">
              <div className="tt-left flex-shrink-0">
                <img
                  src="https://cdn.thumbtackstatic.com/fe-assets-web/_assets/images/release/components/avatar/images/legacy-default-avatar-50x50.25cbe35c0002a2eef6cbc5f1c4f271545eafbb59.png"
                  alt="Thumbtack reviewer avatar"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="tt-right flex-1 text-left">
                <div className="tt-name font-semibold text-gray-900 mb-1">Heather O.</div>
                <div className="tt-stars flex items-center flex-wrap gap-1 mb-2 text-xs text-gray-600">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img
                      key={i}
                      src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg"
                      alt="Star rating"
                      className="h-4 w-4"
                    />
                  ))}
                  <span className="ml-2">66 reviews</span>
                  <span className="ml-2 text-gray-400">1d ago</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Andrei was awesome! He diagnosed the problem with my washing machine and fixed it, giving me 2 options along the way in terms of cost. He was punctual and professional. Would use him again!
                </p>
                <a
                  target="_blank" rel="noopener noreferrer"
                  rel="noopener noreferrer"
                  href="https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644"
                  className="inline-flex text-sm font-semibold text-[#1A3B5D] hover:text-[#C0362C] underline"
                 aria-label="opens in new tab">
                  See all reviews
                </a>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThumbtackReviewWidget;
