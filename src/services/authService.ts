import { AdminCredentials } from '../types/auth';
import { AUTH_CONFIG } from '../config/auth';

export function login(credentials: AdminCredentials): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.username === AUTH_CONFIG.username && 
        credentials.password === AUTH_CONFIG.password
      ) {
        localStorage.setItem('isAuthenticated', 'true');
        resolve(true);
      } else {
        reject(new Error('用户名或密码错误'));
      }
    }, 500);
  });
}

export function logout(): void {
  localStorage.removeItem('isAuthenticated');
}

export function isAuthenticated(): boolean {
  return localStorage.getItem('isAuthenticated') === 'true';
}