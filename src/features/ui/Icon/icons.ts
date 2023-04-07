export type IconCode = 'ua-flag' | 'gb-flag';

export interface IconItem {
  readonly code: IconCode;
  readonly path: string;
  readonly alt: string;
}

export const ICONS: IconItem[] = [
  {
    code: 'ua-flag',
    path: 'ua-flag.svg',
    alt: 'Icon - flag of Ukraine'
  },
  {
    code: 'gb-flag',
    path: 'gb-flag.svg',
    alt: 'Icon - flag of Great Britain'
  }
];
