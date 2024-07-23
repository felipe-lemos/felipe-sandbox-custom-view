/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'Felipe Sandbox Custom View',
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: 'b2b-demo-fr',
    },
    production: {
      customViewId: 'clyy3uoz9003c2zhpls19im57',
      url: 'https://felipe-sandbox-custom-view.vercel.app/',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  type: 'CustomPanel',
  typeSettings: {
    size: 'LARGE',
  },
  locators: ['products.product_details.general'],
};

export default config;
