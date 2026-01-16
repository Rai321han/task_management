import { useState } from "react"
import Pagination from "../components/Pagination"
import TaskList from "../components/TaskList"
import useFetch from "../hooks/useFetch"
import Loading from "../components/Loading"

export default function TaskListPage() {
    const [page, setPage] = useState(0)
    
    const url = `https://jsonplaceholder.typicode.com/todos?_start=${20*page}&_limit=20`

    const {data: tasks, loading, error} = useFetch(url, {}, [page])

    if (loading) {
        return <div className="h-full min-h-screen bg-background flex items-center justify-center">
            <Loading />
        </div>
    }
    
    if (error) {
        return <div className="h-full min-h-screen bg-background flex items-center justify-center">Cannot fetch tasks.<br/>Something went wrong.</div>
    }


    return <main className="h-full min-h-screen bg-background">
        <div className="max-w-[1000px] w-full mx-auto p-2">
            <TaskList data={tasks}/>
            <Pagination currPage={page} totalPages={200/20 - 1} setPage={setPage}/>
        </div>
    </main>
}