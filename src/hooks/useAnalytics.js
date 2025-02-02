import ReactGA from 'react-ga4';

const useAnalytics = () => {
  const trackEvent = (category, action, label) => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };

  const trackPageView = (page) => {
    ReactGA.send({ hitType: "pageview", page });
  };

  return {
    trackEvent,
    trackPageView,
  };
};

export default useAnalytics; 