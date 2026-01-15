import { useEffect, useState } from "react"
import Task from "../components/Task"
import Pagination from "../components/Pagination"
import Search from "../components/Search"
import TaskList from "../components/TaskList"

export default function TaskListPage() {
    const [tasks, setTasks] = useState([])
    const [page, setPage] = useState(0)
    
    useEffect(() => {
        const fetchTasks = async () => {
            const url = `https://jsonplaceholder.typicode.com/todos?_start=${20*page}&_limit=20`
            const res = await fetch(url);
            const tasks = await res.json();
            setTasks(tasks)
        }
        fetchTasks()
    }, [page])

    return <main className="h-full min-h-screen bg-background ">
        <div className="max-w-[1000px] w-full mx-auto p-2">
            <TaskList data={tasks}/>
            <Pagination totalPages={200/20 - 1} setPage={setPage}/>
        </div>
    </main>
}