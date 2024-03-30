import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollIntoView(elementId:string) {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({behavior: "smooth"});
}