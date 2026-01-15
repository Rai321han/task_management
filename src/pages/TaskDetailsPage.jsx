import { useParams } from "react-router"
import Badge from "../components/Badge"
import useFetch from "../hooks/useFetch"
import Loading from "../components/Loading"

export default function TaskDetailsPage() {
    const { id } = useParams()
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const { data: task, loading, error } = useFetch(url)
    if (loading) {
        return <div className="h-[100%] min-h-[100vh] bg-background flex items-center justify-center">
            <Loading />
        </div>
    }

    if (error) {
        return <div className="h-[100%] min-h-[100vh] bg-background flex items-center justify-center">Something went wrong.</div>
    }

    return <main className="flex justify-center items-center bg-background h-[100%] min-h-[100vh]">
        <div className="flex flex-col gap-2 items-start p-2">
            <p className="opacity-50">Task ID: #{task.id}</p>
            <p className="text-3xl">{task.title}</p>
            {
                task.completed ?
                    <Badge type="success">Completed</Badge>
                    :
                    <Badge type="error">Not Completed</Badge>
            }
        </div>
    </main>
}