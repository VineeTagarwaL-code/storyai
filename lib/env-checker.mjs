export const checkEnv = () => {
  const requiredEnv = [
    "NEXT_PUBLIC_GOOGLE_CLIENT_ID",
    "NEXT_PUBLIC_GOOGLE_CLIENT_SECRET",
    "NEXTAUTH_URL",
    "NEXT_PUBLIC_DATABASE_URL",
    "JWT_SECRET",
  ];

  const missingVars = requiredEnv.filter((env) => !process.env[env]);

  if (missingVars.length > 0) {
    throw new Error(`Missing environment variables: ${missingVars.join(", ")}`);
  }
};
