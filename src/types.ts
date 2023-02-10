export interface Config {
  packageVersion: string;
  path: string;
  secret: string;
}

export interface ExpandParams {
  expand?: string[];
}

export interface PaginationParams {
  ending_before?: any;
  limit?: number;
  starting_after?: any;
}
