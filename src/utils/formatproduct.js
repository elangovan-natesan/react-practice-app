export const formatSpecs = (specs) => {
  const specsArray = Object.entries(specs).map(([key, value]) => {
    let displayValue;
    if (typeof value == "boolean") {
      displayValue = value ? "yes" : "No";
    } else {
      displayValue = value;
    }
    return [key, displayValue];
  });

  return specsArray;
};
