import TaskList from './components/TaskList'
import { Toaster } from "@/components/ui/sonner"
function App() {
  return (
    <main className='p-4'>
      <TaskList/>
      <Toaster richColors />
    </main>
  )
}

export default App
