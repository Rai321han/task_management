import { useEffect, useState } from "react"
import Task from "../components/Task"

export default function TaskListPage() {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const fetchTasks = async () => {
            const url = 'https://jsonplaceholder.typicode.com/todos?_limit=20'
            const res = await fetch(url);
            const tasks = await res.json();
            setTasks(tasks)
        }
        fetchTasks()
    }, [])

    return <main className="h-[100%] min-h-[100vh] bg-background ">
        <div className="p-2 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[1000px] w-[100%] mx-auto">
            {
                tasks.map(task => <Task key={task.id} data={task} />)
            }
        </div>
    </main>
}