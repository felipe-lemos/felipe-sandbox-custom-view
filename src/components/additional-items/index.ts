import { lazy } from 'react';

const AdditionalItems = lazy(
  () => import('./additionalItems' /* webpackChunkName: "additionalItems" */)
);

export default AdditionalItems;
