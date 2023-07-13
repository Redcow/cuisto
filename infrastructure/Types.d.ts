type User = {
  id: string;
  name: string;
  access_token: string;
};

export type ServerState = {
  user: User | null;
  error: { code: number; msg: string } | null;
};