const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export interface SignUpData {
  username: string;
  password: string;
  name: string;
}

export interface SignInData {
  username: string;
  password: string;
}

export interface AuthResponse {
  token?: string;
  userId?: string;
  message?: string;
}

export async function signUp(data: SignUpData): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function signIn(data: SignInData): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function createRoom(name: string, token: string) {
  const response = await fetch(`${API_URL}/room`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  });
  return response.json();
}

export function getToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
}

export function setToken(token: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
}

export function removeToken(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
}

export function isAuthenticated(): boolean {
  return !!getToken();
}
