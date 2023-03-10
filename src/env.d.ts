/// <reference types="astro/client" />

export type Link = {
  label?: string;
  icon?: string;
  url: string;
}

export type Links = Link[];

export type Icon = {
  name: string;
  pack: string;
  color?: string;
}

export type Skill = {
  name: string;
  description: string;
  icon: Icon;
};

export type Skills = Skill[];

export type Service = {
  icon: Icon;
  name: string;
  description: string;
};

export type Services = Service[];
