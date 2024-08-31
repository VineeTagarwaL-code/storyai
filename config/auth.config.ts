class AuthConfig {
  private static instance: AuthConfig;
  private secret: string = "";
  private client: string = "";
  private databaseUrl: string = "";

  public static getInstance(): AuthConfig {
    if (!AuthConfig.instance) {
      AuthConfig.instance = new AuthConfig();
    }
    return AuthConfig.instance;
  }

  public getDatabaseString(): string {
    if (process.env.NEXT_PUBLIC_DATABASE_URL) {
      this.databaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL;
    } else {
      throw new Error("Database String is not defined");
    }
    return this.databaseUrl;
  }

  public getSecret(): string {
    if (process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET) {
      this.secret = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;
    } else {
      throw new Error("Google Client Secret is not defined");
    }
    return this.secret;
  }

  public getClient(): string {
    if (process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
      this.client = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    } else {
      throw new Error("Google Client ID is not defined");
    }
    return this.client;
  }
}

export { AuthConfig };
