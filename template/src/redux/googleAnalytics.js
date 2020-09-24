import ReactGA from 'react-ga';
import { LOCATION_CHANGE } from 'connected-react-router';

ReactGA.initialize(process.env.GOOGLE_TRACKING_CODE);
const options = {};

const trackPage = (page) => {
  ReactGA.set({
    page,
    ...options,
  });
  ReactGA.pageview(page);
};

let currentPage;

const trackEvent = (action) => {
  ReactGA.event({
    category: 'event',
    action: action.type,
  });
};

const googleAnalytics = () => (next) => (action) => {
  if (action.type === LOCATION_CHANGE) {
    const nextPage = `${action.payload.location.pathname}${action.payload.location.search}`;

    if (currentPage !== nextPage) {
      currentPage = nextPage;
      trackPage(nextPage);
    }
  } else {
    trackEvent(action);
  }
  return next(action);
};

export default googleAnalytics;
