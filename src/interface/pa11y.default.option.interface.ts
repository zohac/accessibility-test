import { Browser, Page } from 'puppeteer'

type AccessibilityStandard = 'Section508' | 'WCAG2A' | 'WCAG2AA' | 'WCAG2AAA'

interface LaunchConfig {
  executablePath: string;
  ignoreHTTPSErrors: boolean;
}

interface LogConfig {
  debug?: (() => void);
  error?: (() => void);
  info?: (() => void);
}

interface Viewport {
  width: number;
  height: number;
  deviceScaleFactor?: number;
  isMobile?: boolean;
  isLandscape?: boolean;
  hasTouch?: boolean;
}

interface Options {
  actions?: string[];
  browser?: Browser;
  page?: Page;
  pages?: Page[];
  chromeLaunchConfig?: LaunchConfig;
  headers?: object;
  hideElements?: string;
  ignore?: string[];
  ignoreUrl?: boolean;
  includeNotices?: boolean;
  includeWarnings?: boolean;
  level?: string;
  log?: LogConfig;
  method?: string;
  postData?: string;
  reporter?: string;
  rootElement?: string;
  runners?: string[];
  rules?: string[];
  screenCapture?: string;
  standard?: AccessibilityStandard;
  threshold?: number;
  timeout?: number;
  userAgent?: string;
  viewport?: Viewport;
  wait?: number;
}

export interface Pa11yDefaultOptionInterface {
  url: string,
  options: Options
}
