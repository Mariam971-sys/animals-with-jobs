export interface IAnimal { 
  name: string;
  kindOfAnimal: string;
  job: string;
  skills?: string | string[];
  birthYear: string; // note: string in JSON, convert with parseInt
  imageUrl: string;
  employmentStartDate: string;
  employmentEndDate?: string;
}