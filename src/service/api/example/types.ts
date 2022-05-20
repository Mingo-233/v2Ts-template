export interface AAParams {
  code: string;
  url: string;
}

export interface I_exampleApi {
  getAaPage: (params: AAParams) => Promise<any>;
}
