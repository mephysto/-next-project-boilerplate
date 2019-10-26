import React, {useEffect} from "react";
import ReactGA from 'react-ga';

const trackingId = "UA-150977759-1";

export const usePageTracking = ({ path }) => {

  useEffect(() => {
    ReactGA.initialize(trackingId);
  }, [trackingId]);

  useEffect(() => {
    ReactGA.pageview(path)
  }, [path]);
}