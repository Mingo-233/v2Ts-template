export interface ILoginParams {
  account: string;
  password: string | number;
  platform: string;
}
export interface ILoginApi {
  login: (params: ILoginParams) => Promise<any>;
  check: (params: ILoginParams) => Promise<any>;
}
