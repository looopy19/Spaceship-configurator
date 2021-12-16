export const configMap = {
  basePrice: "Base price",
  color: "Color",
  power: "Power",
  warpDrive: "Warp drive",
  optionPackage: "Option package"
};

export function totalCount(config) {
  return Object.values(config).reduce((acc, el) => acc + el, 0);
}