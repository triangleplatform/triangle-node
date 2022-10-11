export interface Config {
  packageVersion: string;
  path: string;
  secret: string;
}

export interface ExpandParams {
  expand?: string[];
}
