import React, { useMemo } from 'react';
import { FeatureFlags } from '../featureFlags';
import { Features } from '../features';

export interface FeatureFlagsProviderProps {
  children: JSX.Element;
}

export const FeatureFlagsProvider = ({ children }: FeatureFlagsProviderProps): JSX.Element => {
  const features: Features = useMemo(
    () => ({
      isGoogleLoginEnabled: import.meta.env.VITE_GOOGLE_LOGIN_ENABLED === 'true'
    }),
    []
  );

  return <FeatureFlags.Provider value={features}>{children}</FeatureFlags.Provider>;
};
