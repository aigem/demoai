import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import type { GradioApp } from '../types/app';

interface BatchAppFormProps {
  onSubmit: (apps: GradioApp[]) => void;
  onClose: () => void;
}

export function BatchAppForm({ onSubmit, onClose }: BatchAppFormProps) {
  const [apps, setApps] = useState<GradioApp[]>([{
    directUrl: '',
    name: '',
    description: ''
  }]);

  const addApp = () => {
    setApps([...apps, { directUrl: '', name: '', description: '' }]);
  };

  const removeApp = (index: number) => {
    setApps(apps.filter((_, i) => i !== index));
  };

  const updateApp = (index: number, field: keyof GradioApp, value: string) => {
    const newApps = [...apps];
    newApps[index] = { ...newApps[index], [field]: value };
    setApps(newApps);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(apps.filter(app => app.directUrl && app.name));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-4xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">批量添加应用</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {apps.map((app, index) => (
            <div key={index} className="p-4 border rounded-lg bg-gray-50 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">应用 #{index + 1}</h3>
                {apps.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeApp(index)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    直接链接
                  </label>
                  <input
                    type="url"
                    required
                    value={app.directUrl}
                    onChange={e => updateApp(index, 'directUrl', e.target.value)}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="https://example.space"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    应用名称
                  </label>
                  <input
                    type="text"
                    required
                    value={app.name}
                    onChange={e => updateApp(index, 'name', e.target.value)}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="输入应用名称"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    应用描述
                  </label>
                  <textarea
                    required
                    value={app.description}
                    onChange={e => updateApp(index, 'description', e.target.value)}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="输入应用描述"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          ))}
          
          <button
            type="button"
            onClick={addApp}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center justify-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>添加另一个应用</span>
          </button>
          
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              保存全部
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}