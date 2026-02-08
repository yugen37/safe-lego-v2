import configData from './site-config.json';

export interface SiteConfig {
  profession: string;
  professionSingular: string;
  domain: string;
  tagline: string;
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
  };
}

export const config: SiteConfig = configData as SiteConfig;
export default config;
