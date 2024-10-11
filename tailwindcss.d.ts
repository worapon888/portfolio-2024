declare module "tailwindcss/lib/util/flattenColorPalette" {
  import { Theme } from "tailwindcss/types/config";

  export default function flattenColorPalette(
    colors: Theme["colors"]
  ): Record<string, string>;
}

declare module "tailwindcss/types/config" {
  export interface AddBase {
    (base: { [selector: string]: { [property: string]: string } }): void;
  }

  export interface Theme {
    (key: string): string; // คุณสามารถปรับปรุงประเภทนี้ให้เหมาะสมกับการใช้งานของคุณ
  }
}
