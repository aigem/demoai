import React, { useState, useEffect } from 'react';
import { Monitor, Code2 } from 'lucide-react';
import type { GradioApp } from '../types/app';
import { AppCard } from '../components/AppCard';
import { AppViewer } from '../components/AppViewer';
import { loadApps } from '../services/appService';

export function HomePage() {
  const [apps, setApps] = useState<GradioApp[]>([]);
  const [selectedApp, setSelectedApp] = useState<GradioApp | null>(null);
  const [viewMode, setViewMode] = useState<'webcomponent' | 'iframe'>('webcomponent');

  useEffect(() => {
    setApps(loadApps());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Gradio Apps Gallery</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setViewMode('webcomponent')}
                className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                  viewMode === 'webcomponent' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>Web Component</span>
              </button>
              <button
                onClick={() => setViewMode('iframe')}
                className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                  viewMode === 'iframe' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>IFrame</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <AppCard
              key={app.directUrl}
              app={app}
              onSelect={setSelectedApp}
              viewOnly
            />
          ))}
        </div>

        {selectedApp && (
          <AppViewer
            app={selectedApp}
            viewMode={viewMode}
            onClose={() => setSelectedApp(null)}
          />
        )}
      </main>
    </div>
  );
}