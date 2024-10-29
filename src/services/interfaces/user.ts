export interface Child {
  name: string;
  first_name?: string;
  last_name?: string;
  birthday: string;
  class: string;
}

export interface FakeChild {
  first_name?: string;
  last_name?: string;
}

export interface userInterface {
  id: number;
  firstname: string;
  lastname: string;
  profil_picture: string;
  phone: string;
  created_at: Date;
  address: { address_line_1: string; city: string; zip_code: string };
  children: Child[];
  email?: string;
  role?: string;
}
export interface fakeUserInterface {
  id: number;
  avatar: string;
  first_name?: string;
  last_name?: string;
  phone: string;
  createdAt: Date;
  address: string;
  children: FakeChild[];
  email?: string;
  role?: string;
  password: string;
}

export interface userCardInterface {
  id: number;
  firstname: string;
  lastname: string;
  profil_picture: string;
}
