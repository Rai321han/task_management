import { useParams } from "react-router"
import Badge from "../components/Badge"
import useFetch from "../hooks/useFetch"
import Loading from "../components/Loading"
import { useEffect, useState } from "react"

export default function TaskDetailsPage() {
    const { id } = useParams()
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const { data: task, loading, error } = useFetch(url)
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        if(!task) return
        let completed = false;
        const statusObj = localStorage.getItem("status");
        const statusMap = statusObj ? JSON.parse(statusObj) : {};
        if(statusMap[task.id]) completed = statusMap[task.id] === "completed"
        else completed = task.completed
        setCompleted(completed)
    })

    const handleChangeTaskStatus = () => {
        const statusMapObj = localStorage.getItem("status");
        const statusMap = statusMapObj ? JSON.parse(statusMapObj) : {}
        if(completed) {
            statusMap[task.id] = "pending";
            localStorage.setItem("status", JSON.stringify(statusMap))
            setCompleted(false)
        } else {
            statusMap[task.id] = "completed"
            localStorage.setItem("status", JSON.stringify(statusMap))
            setCompleted(true)
        }
    }


    
    if (loading) {
        return <div className="h-full min-h-screen bg-background flex items-center justify-center">
            <Loading />
        </div>
    }

    if (error) {
        return <div className="h-full min-h-screen bg-background flex items-center justify-center">No task with this id.<br/>Try with different id.</div>
    }

    return <main className="flex justify-center items-center bg-background h-full min-h-screen">
        <div className="flex flex-col gap-2 items-start p-5">
            <div className="flex gap-2">
            <p className="opacity-50">Task ID: #{task.id}</p>
            <p className="opacity-50">User ID: #{task.userId}</p>
            </div>
            <p className="text-3xl max-w-[600px]">{task.title}</p>
            {
               completed ?
                    <Badge onClick={handleChangeTaskStatus} type="success">Done</Badge>
                    :
                    <Badge onClick={handleChangeTaskStatus} type="error">Not Completed</Badge>
            }
        </div>
    </main>
}