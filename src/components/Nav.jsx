import { Link, NavLink, Outlet } from "react-router";

export default function Nav() {
    return (
        <>
            <nav className="bg-background p-7 flex justify-between">
                <Link to={"/tasks"} className="flex gap-2 items-center">
                    <img alt="logo" src="/public/task-icon.png" className="w-10 h-10" />
                    <p>Task
                        <span className="font-bold">
                            Manager
                        </span>
                    </p>
                </Link>
                <div>
                    <NavLink to="/tasks" className="px-5 py-2 border-b-2 border-b-secondary">All tasks</NavLink>
                </div>
            </nav>
            <Outlet />

        </>
    )
}



