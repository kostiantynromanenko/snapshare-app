import { useContext } from 'react';
import { FeatureFlags } from './featureFlags';
import { Features } from './features';

export const useFeatureFlags = (): Features => useContext(FeatureFlags);
