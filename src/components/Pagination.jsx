import { useState } from "react";

export default function Pagination({ totalPages = 1, setPage }) {
    const [currPage, setCurrPage] = useState(0)

    const pageNext = () => {
        if(currPage < totalPages) {
            setPage(currPage + 1)
            setCurrPage(currPage + 1)
        }
        return
    }

    const pagePrev = () => {
        if(currPage > 0) {
            setPage(currPage - 1)
            setCurrPage(currPage - 1)
        }
        return
    }

    const pageEnd = () => {
        if(currPage < totalPages) {
            setPage(totalPages)
            setCurrPage(totalPages)
        }
        return
    }

    const pageStart = () => {
        if(currPage > 0) {
            setPage(0)
            setCurrPage(0)
        }
        return
    }

    return (
        <div className="flex justify-between gap-3">
            <div className="flex gap-4">
                <div onClick={pageStart} className={`hover:border-b hover:border-secondary border-offset-2 ${currPage === 0 && "opacity-50"}`}>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18L6 12L12 6" stroke="#ffffff" />
                        <path d="M18 18L12 12L18 6" stroke="#ffffff" />
                    </svg>
                </div>
                <div onClick={pagePrev} className={`hover:border-b hover:border-secondary border-offset-2 ${currPage === 0 && "opacity-50"}`}>
                    <svg width="30px" height="30px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#ffffff" /></svg>
                </div>
                <div>
                    <p>Page {currPage + 1} of {totalPages + 1}</p>
                </div>
                <div onClick={pageNext} className={`hover:border-b hover:border-secondary border-offset-2 ${currPage ===  totalPages && "opacity-50"}`}>
                    <svg width="30px" height="30px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff" /></svg>
                </div>
                <div onClick={pageEnd} className={`hover:border-b hover:border-secondary border-offset-2 ${currPage ===  totalPages && "opacity-50"}`}>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18L18 12L12 6" stroke="#fafafa" />
                        <path d="M6 18L12 12L6 6" stroke="#fcfcfc" />
                    </svg>
                </div>
            </div>
        </div>
    );
}