import React, { useState } from 'react';
import { Task, updateTask } from '../api/tasksAPI';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { useNotification } from '@/hooks/useNotification';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const TaskItem: React.FC<{
  task: Task;
  onDelete: (id: string) => void;
  onUpdated: () => void;
}> = ({ task, onDelete, onUpdated }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [isCompleted, setIsCompleted] = useState(task.is_completed);
  const notify = useNotification();

  const handleUpdate = async () => {
    await updateTask(task.id, title, description, isCompleted);
    notify({ title: 'Task updated', description: 'Changes saved successfully.' });
    setEditing(false);
    onUpdated();
  };
  const handleDelete = async () =>{
    onDelete(task.id)
    notify({title: 'Task deleted', description: 'Changes saved successfully.' })
  }
  return (
    <div className="p-4 rounded-xl bg-white shadow flex flex-col gap-2">
      <div className="text-lg font-semibold">{task.title}</div>
      <div>{task.description}</div>
      <div>Status: {task.is_completed ? ' Done' : ' Not done'}</div>
      <div className="flex gap-2 mt-2">
        <Dialog open={editing} onOpenChange={setEditing}>
          <DialogTrigger asChild>
            <Button>Edit</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Task</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label className="flex items-center gap-2">
                <Checkbox
                  checked={isCompleted}
                  onCheckedChange={(checked) => setIsCompleted(Boolean(checked))}
                />
                Done
              </label>
            </div>
            <DialogFooter>
              <Button onClick={handleUpdate}>Save</Button>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button variant="destructive" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
