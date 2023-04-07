export type BreakpointKey = 'mobile' | 'tablet' | 'laptop' | 'desktop';

type BreakpointUnit = 'px';

export interface Breakpoints {
  values: Record<BreakpointKey, number>;
  up: (key: BreakpointKey) => string;
  down: (key: BreakpointKey) => string;
  unit: BreakpointUnit;
}

export type BreakpointsOptions = Partial<Pick<Breakpoints, 'values' | 'unit'>>;

const defaultBreakpointsValues = {
  mobile: 600,
  tablet: 768,
  laptop: 992,
  desktop: 1200
};

export const createBreakpoints = (options?: BreakpointsOptions): Breakpoints => {
  const values = options?.values || defaultBreakpointsValues;
  const unit = options?.unit || 'px';
  return {
    values,
    unit,
    up: (key: BreakpointKey) => `@media (min-width: ${values[key]}${unit})`,
    down: (key: BreakpointKey) => `@media (max-width: ${values[key] - 0.05}${unit})`
  };
};
