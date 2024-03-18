import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export function scrollIntoView(elementId:string) {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({behavior: "smooth"});
}