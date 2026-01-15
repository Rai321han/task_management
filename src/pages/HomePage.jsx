import { Link, Navigate } from "react-router";

export default function HomePage() {
    return <main className="h-[100vh] bg-background p-2 flex items-center justify-center">
        <div className="flex flex-col gap-3 text-center">
            <h1 className="text-2xl">Welcome to{" "}
                <span className="font-bold text-secondary">
                    TaskManager
                </span>
            </h1>
            <p className="text-center">Explore your tasks and stay productive!</p>

            <div>
                <Link to="/tasks" className="px-3 py-2 bg-secondary text-black">View Tasks</Link>
            </div>
        </div>
    </main>
}