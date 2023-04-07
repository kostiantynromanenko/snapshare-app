type SpacingArg = number;

export interface Spacing {
  (): string;

  (value: number): string;

  (topBottom: SpacingArg, rightLeft: SpacingArg): string;

  (top: SpacingArg, rightLeft: SpacingArg, bottom: SpacingArg): string;

  (top: SpacingArg, right: SpacingArg, bottom: SpacingArg, left: SpacingArg): string;
}

export const createSpacing =
  (baseSpacing: number = 8): Spacing =>
  (...argsInput: ReadonlyArray<number>): string => {
    if (process.env.NODE_ENV !== 'production') {
      if (argsInput.length > 4) {
        // eslint-disable-next-line no-console
        console.error(
          `Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`
        );
      }
    }

    const args = argsInput.length === 0 ? [1] : argsInput;

    return args.map((arg) => `${baseSpacing * arg}px`).join(' ');
  };
