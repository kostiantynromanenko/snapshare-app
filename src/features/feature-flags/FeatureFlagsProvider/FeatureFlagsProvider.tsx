import React, { useMemo } from 'react';
import { FeatureFlags } from '../featureFlags';
import { Features } from '../features';

export interface FeatureFlagsProviderProps {
  children: JSX.Element;
}

export const FeatureFlagsProvider = ({ children }: FeatureFlagsProviderProps): JSX.Element => {
  const features = useMemo(() => ({} as Features), []);

  return <FeatureFlags.Provider value={features}>{children}</FeatureFlags.Provider>;
};
