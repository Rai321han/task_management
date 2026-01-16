import { Link } from "react-router";
import Badge from "./Badge";
import { useState } from "react";

export default function Task({ data }) {
    const [completed, setCompleted] = useState(() => {
        const statusObj = localStorage.getItem("status");
        const statusMap = statusObj ? JSON.parse(statusObj) : {};
        if(statusMap[data.id]) return statusMap[data.id] === "completed"
        else return data.completed
    })

    const handleChangeTaskStatus = () => {
        const statusMapObj = localStorage.getItem("status");
        const statusMap = statusMapObj ? JSON.parse(statusMapObj) : {}
        if(completed) {
            statusMap[data.id] = "pending";
            localStorage.setItem("status", JSON.stringify(statusMap))
            setCompleted(false)
        } else {
            statusMap[data.id] = "completed"
            localStorage.setItem("status", JSON.stringify(statusMap))
            setCompleted(true)
        }
    }

    return (
        <div className="p-3 bg-dim border border-border hover:border-secondary flex flex-col gap-7">
                <p className="max-w-[250px]">{data.title}</p>
                <div className="grow flex flex-row justify-between items-end">
                    {
                        completed ?
                            <Badge onClick={handleChangeTaskStatus} type="success">Done</Badge>
                            :
                            <Badge onClick={handleChangeTaskStatus} type="error">Not Completed</Badge>
                    }
                <Link  to={`/tasks/${data.id}`}  className="self-end gap-2 items-center p-1 inline-flex">
                    <p className="text-secondary">Details</p>
                    <svg className="fill-secondary" width="20px" height="20px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z" />
                </svg>
                </Link>
            </div>
        </div>
    );
}