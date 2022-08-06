export interface Profile {
  firstname: string;
  lastname: string;
}

export interface Identity extends Profile {
  city: string;
  company: {
    name: string;
  };
  title: string;
  coordinator: Profile;
}
