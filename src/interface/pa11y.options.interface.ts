import { AccessibilityStandardType } from '../type'
import { Browser, Page } from 'puppeteer'

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

export interface Pa11yOptionsInterface {
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
  standard?: AccessibilityStandardType;
  threshold?: number;
  timeout?: number;
  userAgent?: string;
  viewport?: Viewport;
  wait?: number;
}
