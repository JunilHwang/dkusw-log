export interface User {
  idx: number,
  id: string,
  name: string,
  email: string,
  profileImage: string
}

export interface UserInput {
  id: string,
  pw: string
}

export interface UserGoogleToken {
  googleAccessToken: string
}

export interface UserGithubToken {
  UserGithubToken: string
}