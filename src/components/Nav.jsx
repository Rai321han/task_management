import { NavLink, Outlet } from "react-router";

export default function Nav() {
    return (
        <>
        <nav className="bg-gray-200 dark:bg-gray-600 p-7 flex justify-between">
            <div className="text-black dark:text-white">
                TaskManager
            </div>
            <div>
                <NavLink to="/tasks" className="">Tasks</NavLink>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}



