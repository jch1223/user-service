export interface Login {
  email: string;
  password: string;
}

export interface LoginSuccess {
  accessToken: string;
}

export interface UserInfoSuccess {
  name: string;
  email: string;
  profileImage: string;
  lastConnectedAt: Date;
}
