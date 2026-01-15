import { useParams } from "react-router"

export default function TaskDetailsPage() {
    const {id} = useParams()
    return <p>This is task details page of id: {id}</p>
}