export enum ResumeTemplate {
  Tehran = 'tehran',
  Karaj = 'karaj',
  Rasht = 'rasht',
  Shiraz = 'shiraz',
}

export type ResumeSocial = Partial<{
  website: string;
  github: string;
  linkedin: string;
  facebook: string;
  twitter: string;
  instagram: string;
  telegram: string;
  whatsapp: string;
  skype: string;
}>;

export type ResumePosition = Partial<{
  title: string;
}>;

export type ResumeLocation = Partial<{
  country: string;
  city: string;
}>;

export type ResumeData = Partial<{
  name: string;
  position: ResumePosition;
  location: ResumeLocation;
  phone: string;
  email: string;
  social: ResumeSocial;
}>;
