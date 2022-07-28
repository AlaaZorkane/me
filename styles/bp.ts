type bpName = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

const breakpoints = new Map<bpName, number>([
  ["xs", 0],
  ["sm", 576],
  ["md", 768],
  ["lg", 992],
  ["xl", 1200],
  ["xxl", 1400],
]);

export const bp = (breakpoint: bpName) => {
  return `@media (min-width: ${breakpoints.get(breakpoint)}px)`;
};
