export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "member";
}

export const MOCK_USER: User = {
  id: "usr_community_01",
  name: "Community Developer",
  email: "dev@community.dev",
  role: "member",
};

export async function getCurrentUser(): Promise<User | null> {
  return MOCK_USER;
}

export async function signIn(
  email: string,
  _password?: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  if (!email || !email.includes("@")) {
    return { success: false, error: "Please provide a valid email address." };
  }
  return {
    success: true,
    user: {
      ...MOCK_USER,
      email,
    },
  };
}

export async function signOut(): Promise<{ success: boolean }> {
  return { success: true };
}
