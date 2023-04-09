export const OKTA_CONFIG = {
  issuer: `${import.meta.env.VITE_OKTA_DOMAIN}/oauth2/default`,
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID,
  redirectUri: `${window.location.origin}/login/callback`
};

export const OKTA_GOOGLE_IDP = import.meta.env.VITE_OKTA_GOOGLE_IDP;
