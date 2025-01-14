export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export function isAuthenticated(password: string) {
  if (!ADMIN_PASSWORD) {
    console.error("ADMIN_PASSWORD environment variable is not set");
    return false;
  }
  return password === ADMIN_PASSWORD;
}
