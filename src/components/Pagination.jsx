import { useState } from "react";

export default function Pagination({ totalPages = 1, setPage, currPage }) {


    const pageNext = () => (currPage < totalPages) && setPage(currPage + 1)
    const pagePrev = () => (currPage > 0) && setPage(currPage - 1)
    const pageEnd = () => (currPage < totalPages) && setPage(totalPages)
    const pageStart = () => (currPage > 0) && setPage(0)


    return (
        <div className="flex justify-between gap-3">
            <div className="flex gap-4">
                <div onClick={pageStart} className={`hover:border-b hover:border-secondary border-offset-2 ${currPage === 0 && "opacity-50"}`}>
                   <svg className="text-txt" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M18 17L13 12L18 7M11 17L6 12L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
                </div>
                <div onClick={pagePrev} className={`hover:border-b hover:border-secondary border-offset-2 ${currPage === 0 && "opacity-50"}`}>
                    <svg className="fill-txt" width="30px" height="30px" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"/></svg>
                </div>
                <div>
                    <p>Page {currPage + 1} of {totalPages + 1}</p>
                </div>
                <div onClick={pageNext} className={`hover:border-b hover:border-secondary border-offset-2 ${currPage ===  totalPages && "opacity-50"}`}>
                    <svg className="fill-txt"  width="30px" height="30px" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"/></svg>
                </div>
                <div onClick={pageEnd} className={`hover:border-b hover:border-secondary border-offset-2 ${currPage ===  totalPages && "opacity-50"}`}>
                    <svg className="text-txt" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M6 17L11 12L6 7M13 17L18 12L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
                </div>
            </div>
        </div>
    );
}