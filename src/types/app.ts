export interface GradioApp {
  directUrl: string;
  name: string;
  description: string;
}

export const apps: GradioApp[] = [
  {
    directUrl: 'https://qwen-qvq-72b-preview.hf.space',
    name: 'Qwen QVQ 72B Preview',
    description: 'A powerful language model for natural language processing tasks'
  }
];