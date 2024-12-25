import React from 'react';
import { ExternalLink, Pencil, Trash2 } from 'lucide-react';
import type { GradioApp } from '../types/app';

interface AppCardProps {
  app: GradioApp;
  onSelect?: (app: GradioApp) => void;
  onEdit?: (app: GradioApp) => void;
  onDelete?: (directUrl: string) => void;
  viewOnly?: boolean;
}

export function AppCard({ 
  app, 
  onSelect, 
  onEdit, 
  onDelete,
  viewOnly = false 
}: AppCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-800">{app.name}</h3>
        <div className="flex space-x-2">
          {!viewOnly && onEdit && (
            <button
              onClick={() => onEdit(app)}
              className="p-1.5 hover:bg-gray-100 rounded-full"
            >
              <Pencil className="w-4 h-4 text-gray-500" />
            </button>
          )}
          {!viewOnly && onDelete && (
            <button
              onClick={() => onDelete(app.directUrl)}
              className="p-1.5 hover:bg-gray-100 rounded-full"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
          )}
          {onSelect && (
            <button
              onClick={() => onSelect(app)}
              className="p-1.5 hover:bg-gray-100 rounded-full"
            >
              <ExternalLink className="w-4 h-4 text-blue-500" />
            </button>
          )}
        </div>
      </div>
      <p className="mt-2 text-gray-600">{app.description}</p>
    </div>
  );
}