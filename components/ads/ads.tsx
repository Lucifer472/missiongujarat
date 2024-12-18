"use client";
import { AdsWrapper } from "@/components/wrappers/ad-wrapper";
import { url } from "@/constant";

export const Ad1 = () => {
  return <AdsWrapper id="7388748503" />;
};

export const Ad2 = () => {
  return <AdsWrapper id="8262846471" />;
};

export const Ad3 = () => {
  return <AdsWrapper id="3073997349" />;
};

export const Ad4 = () => {
  return <AdsWrapper id="4762585168" />;
};

export const Ad5 = () => {
  return <AdsWrapper id="4096370750" />;
};

export const OutBrain1 = () => {
  return (
    <div className="OUTBRAIN" data-src={url} data-widget-id="CRMB_2"></div>
  );
};

export const OutBrain2 = () => {
  return (
    <div className="OUTBRAIN" data-src={url} data-widget-id="CRMB_1"></div>
  );
};

export const OutBrain3 = () => {
  return (
    <div className="OUTBRAIN" data-src={url} data-widget-id="CRMB_3"></div>
  );
};
