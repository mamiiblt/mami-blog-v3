export const ADMIN_PASSWORD =
  process.env.ADMIN_PASSWORD || "your-secure-password";

export function isAuthenticated(password: string) {
  return password === ADMIN_PASSWORD;
}
