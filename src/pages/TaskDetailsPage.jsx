import { useNavigate, useParams } from "react-router"
import Badge from "../components/Badge"
import useFetch from "../hooks/useFetch"
import Loading from "../components/Loading"
import { useEffect, useState } from "react"

export default function TaskDetailsPage() {
    const { id } = useParams()
    const navigate = useNavigate()
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
        <div onClick={() => navigate(-1)} className="flex mb-10 gap-2 items-center text-txt opacity-50 cursor-pointer border-b border-transparent hover:border-b hover:border-secondary">
            <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path className="fill-txt" d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>
            <p>Back to tasks list</p>
        </div>
            <div className="flex gap-2 justify-between w-full">
                <p className="opacity-50">Task ID: #{task.id}</p>
                <p className="opacity-50">User ID: #{task.userId}</p>
            </div>
            <p className="text-3xl max-w-[600px]">{task.title}</p>
            <div className="flex gap-2">
                <p className="opacity-50">Status: </p> 
                {completed ? 
                    <span className="text-success font-bold">Done</span> : 
                    <span className="text-danger font-bold">Not completed</span>    
                }
            </div>
            <div className="mt-5">
            {
                completed ?
                <Badge onClick={handleChangeTaskStatus} type="error">Mark as incomplete</Badge>
                :
                <Badge onClick={handleChangeTaskStatus} type="success">Mark as done</Badge>
            }
            </div>  
        </div>
    </main>
}