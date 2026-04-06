const rawBaseUrl = process.env.REACT_APP_API_BASE_URL || '';

// Default to relative /api so production uses the same domain.
export const API_BASE_URL = rawBaseUrl.trim() || '/api';

export function apiUrl(path: string): string {
  if (!path) return API_BASE_URL;
  return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
