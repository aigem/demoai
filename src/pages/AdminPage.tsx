import React, { useState, useEffect } from 'react';
import { Plus, LogOut } from 'lucide-react';
import type { GradioApp } from '../types/app';
import { AppCard } from '../components/AppCard';
import { AppForm } from '../components/AppForm';
import { BatchAppForm } from '../components/BatchAppForm';
import { loadApps, addApps, deleteApp, updateApp } from '../services/appService';
import { logout } from '../services/authService';

export function AdminPage() {
  const [apps, setApps] = useState<GradioApp[]>([]);
  const [editingApp, setEditingApp] = useState<GradioApp | null>(null);
  const [isAddingApp, setIsAddingApp] = useState(false);
  const [isBatchAdding, setIsBatchAdding] = useState(false);

  useEffect(() => {
    setApps(loadApps());
  }, []);

  const handleAddApps = (newApps: GradioApp[]) => {
    const updatedApps = addApps(newApps);
    setApps(updatedApps);
    setIsBatchAdding(false);
  };

  const handleUpdateApp = (updatedApp: GradioApp) => {
    const updatedApps = updateApp(updatedApp);
    setApps(updatedApps);
    setEditingApp(null);
  };

  const handleDeleteApp = (directUrl: string) => {
    if (window.confirm('确定要删除这个应用吗？')) {
      const updatedApps = deleteApp(directUrl);
      setApps(updatedApps);
    }
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">管理控制台</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>退出登录</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 flex space-x-4">
          <button
            onClick={() => setIsAddingApp(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>添加单个应用</span>
          </button>
          <button
            onClick={() => setIsBatchAdding(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>批量添加应用</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <AppCard
              key={app.directUrl}
              app={app}
              onEdit={setEditingApp}
              onDelete={handleDeleteApp}
              viewOnly={false}
            />
          ))}
        </div>

        {isAddingApp && (
          <AppForm
            onSubmit={(app) => handleAddApps([app])}
            onClose={() => setIsAddingApp(false)}
          />
        )}

        {isBatchAdding && (
          <BatchAppForm
            onSubmit={handleAddApps}
            onClose={() => setIsBatchAdding(false)}
          />
        )}

        {editingApp && (
          <AppForm
            initialData={editingApp}
            onSubmit={handleUpdateApp}
            onClose={() => setEditingApp(null)}
          />
        )}
      </main>
    </div>
  );
}