export const earlyAccessEmployeeBands = [
  "1-49",
  "50-249",
  "250-999",
  "1,000-4,999",
  "5,000+",
] as const;

export type EarlyAccessSubmission = {
  organisation: string;
};
