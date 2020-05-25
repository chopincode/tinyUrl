export interface TinyUrl {
  url: string;
  requestTimes: number;
  truncatedUrl: string;
}

export interface Admin {
  isAuthentciated: boolean;
  tinyUrlHistory: TinyUrl[];
}

export interface Alert {
  id: string;
  msg: string;
  alertType: string;
}
