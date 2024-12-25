import { GradioApp } from '../types/app';
import { getItem, setItem } from '../utils/storage';

export function loadApps(): GradioApp[] {
  return getItem('APPS') || [];
}

export function saveApps(apps: GradioApp[]): void {
  setItem('APPS', apps);
}

export function addApps(newApps: GradioApp[]): GradioApp[] {
  const apps = loadApps();
  const updatedApps = [...apps, ...newApps];
  saveApps(updatedApps);
  return updatedApps;
}

export function deleteApp(directUrl: string): GradioApp[] {
  const apps = loadApps();
  const newApps = apps.filter(app => app.directUrl !== directUrl);
  saveApps(newApps);
  return newApps;
}

export function updateApp(updatedApp: GradioApp): GradioApp[] {
  const apps = loadApps();
  const newApps = apps.map(app => 
    app.directUrl === updatedApp.directUrl ? updatedApp : app
  );
  saveApps(newApps);
  return newApps;
}