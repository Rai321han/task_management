import { Link } from "react-router";
import Badge from "./Badge";

export default function Task({ data }) {
    const isCompleted = data.completed || false;
    return (
        <div className="p-3 bg-dim border border-border hover:border-secondary flex flex-col gap-7">
                <p className="max-w-[250px]">{data.title}</p>
                <div className="grow flex flex-row justify-between items-end">
                    {
                        isCompleted ?
                            <Badge type="success">Done</Badge>
                            :
                            <Badge type="error">Not Completed</Badge>
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