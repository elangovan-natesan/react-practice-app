import { DISPLAY } from "../constants/display";
export const formatSpecs = (specs) => {
  const specsArray = Object.entries(specs).map(([key, value]) => {
    let displayValue;
    if (typeof value == "boolean") {
      displayValue = value ? DISPLAY.YES : DISPLAY.NO;
    } else {
      displayValue = value;
    }
    return [key, displayValue];
  });

  return specsArray;
};
