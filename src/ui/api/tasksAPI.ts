export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/tasks';

export interface Task {
  id: string;
  title: string;
  description: string;
  is_completed: boolean;
  created_at?: string;
  updated_at?: string;
}

export async function fetchAllTasks(): Promise<Task[]> {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createTask(
  title: string,
  description: string,
  isCompleted = false
): Promise<void> {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, isCompleted }),
  });
}

export async function updateTask(
  id: string,
  title: string,
  description: string,
  isCompleted: boolean
): Promise<void> {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, isCompleted }),
  });
}

export async function deleteTask(id: string): Promise<void> {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
}

export async function filterTasks(isCompleted: boolean): Promise<Task[]> {
  const res = await fetch(`${API_URL}?completed=${isCompleted}`);
  return res.json();
}

export async function searchTasks(query: string): Promise<Task[]> {
  const res = await fetch(`${API_URL}?q=${encodeURIComponent(query)}`);
  return res.json();
}
