import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// export const fetchComponentSource = async (
//   componentPath: string,
// ): Promise<string> => {
//   const response = await fetch(componentPath);
//   const sourceCode = await response.text();
//   return sourceCode;
// };

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
