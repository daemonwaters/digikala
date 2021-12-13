import React from 'react'
import { FaChevronLeft, FaHistory, FaTrash } from 'react-icons/fa'
import historyPic from '../media/search-hostory.jpeg'

function SearchHistory({history,setHistory,historyCard}) {

    if(!historyCard) return null


    const handleDeleteHistory = ()=>{
        setHistory([])
    }

    return (
        <div className="search-history" id="search-history">
            <div className="history-top">
                <div className="icons">
                    <FaHistory/>
                    <h5>
                        تاریخچه جستوجوهای شما
                    </h5>
                    <FaTrash onClick={handleDeleteHistory}/>
                </div>
                <div className="history-tabs">
                    {history.map((item,index)=>(
                        <span key={index}>
                            {item}
                            <FaChevronLeft/>
                        </span>
                    ))}
                </div>
            </div>
                <div className="history-pic">
                    <img src={historyPic} alt="somepic"/>
                </div>
        </div>)
}

export default SearchHistory
