import React, { useState } from 'react'
import bookData from './Json/Book.json'
import ClipLoader from 'react-spinners/ClipLoader'
import { Link } from 'react-router-dom'

const Book = () => {
    const [loading, setLoading] = useState(false)
    const [showAllbooks, setShowAllbooks] = useState(false)
    console.log("bookData: ", bookData)
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const handleAllBooks = () => {
        setShowAllbooks(!showAllbooks)
    }

    const booksToBeDisplayed = showAllbooks ? bookData : bookData.slice(0, 3)

    return (
        <>
            <div>
                <h1 className="main-faq text-center text-5xl m-10 font-bold">Popular <span className="marquee-name">Books</span></h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 py-4">
                    {
                        loading ? (
                            <ClipLoader
                                color={'#4b4bda'}
                                loading={loading}
                                cssOverride={override}
                                size={150}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        ) : (
                            booksToBeDisplayed.map((book, index) => (
                                <div key={index} className="w-[36rem] rounded-xl shadow-slate-50 bg-gray-800 shadow-inner  text-white py-10 px-20 hover:scale-105 animate-fadeIn">
                                    <img className="w-full h-80 object-fit" src={book.image} alt={book.title} />
                                    <div>
                                        <h1 className="text-5xl text-center m-3 font-extrabold">{book.name}</h1>
                                        <h2 className="text-3xl text-center text-white">{book.title}</h2>
                                        <button className=" text-3xl text-center bg-blue-400 p-3 mx-auto rounded-lg w-full mt-10">
                                            <a href={book.link} rel="noreferrer" target='_blank' className="hover:text-black">Click To get book</a>
                                        </button>
                                    </div>
                                </div>)
                            ))}
                </div>
                {showAllbooks ? <h1 onClick={handleAllBooks} className="cursor-pointer text-center text-3xl italic font-bold">Show Less</h1> : <h1 onClick={handleAllBooks} className="cursor-pointer text-center text-3xl italic font-bold">Show More</h1>}
            </div>
        </>
    )
}

export default Book