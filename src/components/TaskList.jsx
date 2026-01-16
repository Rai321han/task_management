import { useEffect, useState } from "react";
import Search from "./Search";
import Task from "./Task";
import { useDebounce } from "../hooks/useDebounce";

export default function TaskList({data}) {
    const [tasks, setTasks] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
    setTasks(data);
  }, [data]);

  const debouncedSearchText = useDebounce(searchText);

  // filter tasks when search changes
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(debouncedSearchText.toLowerCase())
  );



    return (
        <>
        <Search value={searchText} onChange={setSearchText}/>
        <div className="mt-5 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-2 mb-5 h-[80vh] overflow-auto pr-2
                            
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-thumb]:bg-gray-300
                            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
                            ">
                    {
                        filteredTasks.map(task => <Task key={task.id} data={task} />)
                    }
                </div>
                    </>
    );
}