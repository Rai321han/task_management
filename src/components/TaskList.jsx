import { useEffect, useState } from "react";
import Search from "./Search";
import Task from "./Task";
import { useDebounce } from "../hooks/useDebounce";
import Pagination from "./Pagination";

export default function TaskList({data , page, setPage}) {
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
         {
           filteredTasks.length === 0 ? <div className="mt-5 p-10 flex bg-dim justify-center opacity-60 items-center text-center h-[70vh]">
            No tasks found.
        </div> :
        <div className="mt-5 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-2 mb-5 h-[80vh] overflow-auto pr-2
                            
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-dim-2
                            [&::-webkit-scrollbar-thumb]:bg-dim
 
                            ">
                    {
                        filteredTasks.map(task => <Task key={task.id} data={task} />)
                    }
                </div>
         }
         {
         debouncedSearchText === "" &&
            <Pagination currPage={page} totalPages={200/20 - 1} setPage={setPage}/>
         }
        </>
    );
}