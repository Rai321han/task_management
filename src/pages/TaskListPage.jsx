import { useState } from "react"
import TaskList from "../components/TaskList"
import useFetch from "../hooks/useFetch"
import Loading from "../components/Loading"

export default function TaskListPage() {
    const [page, setPage] = useState(0)
    
    const url = `https://jsonplaceholder.typicode.com/todos?_start=${20*page}&_limit=20`

    const {data: tasks, loading, error} = useFetch(url, {})

    if (loading) {
        return <div className="h-full min-h-screen bg-background flex items-center justify-center">
            <Loading />
        </div>
    }
    
    if (error || !tasks) {
        return <div className="h-full min-h-screen bg-background flex items-center justify-center">
            <div className="mt-5 p-10 flex bg-dim justify-center opacity-60 items-center text-center h-[70vh] w-full max-w-[600px]">
                Cannot load tasks. Something went wrong.
            </div>
        </div>
    }

    return <main className="h-full min-h-screen bg-background">
        <div className="max-w-[1000px] w-full mx-auto p-2">
            <TaskList data={tasks} page={page} setPage={setPage}/>
        </div>
    </main>
}   