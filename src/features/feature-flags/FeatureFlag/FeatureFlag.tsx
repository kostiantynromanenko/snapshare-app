import { useFeatureFlags } from '../useFeatureFlags';
import { Features } from '../features';

export interface FeatureFlagProps {
  feature: keyof Features;
  children: JSX.Element;
}

export const FeatureFlag = ({ feature, children }: FeatureFlagProps): JSX.Element | null => {
  const features = useFeatureFlags();

  return feature in features && features[feature] ? children : null;
};
