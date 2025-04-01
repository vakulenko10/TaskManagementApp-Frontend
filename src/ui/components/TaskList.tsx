import React, { useEffect, useState } from 'react';
import { Task, fetchAllTasks, deleteTask, searchTasks, filterTasks } from '../api/tasksAPI';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const loadTasks = async () => {
    const data = await fetchAllTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSearch = async () => {
    if (!searchQuery) return loadTasks();
    const data = await searchTasks(searchQuery);
    setTasks(data);
  };

  const handleFilter = async (status: boolean) => {
    const data = await filterTasks(status);
    setTasks(data);
  };

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div className="space-y-6">
      <TaskForm onTaskAdded={loadTasks} />

      <div className="flex gap-2">
        <Input
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
        <Button onClick={() => handleFilter(true)}>✅ Done</Button>
        <Button onClick={() => handleFilter(false)}>❌ Not Done</Button>
        <Button variant="outline" onClick={loadTasks}>🔄 All</Button>
      </div>

      <div className="space-y-3">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={handleDelete} onUpdated={loadTasks} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;