import Image from "next/image";

import { useState } from "react";
import { portfolio } from "../data/portfolio";



export default function Portfolio() {

    const [page, setPage] = useState(1);
    const [numberPerPage, setNumberPerPage] = useState(10);
    const [maxPage, setMaxPage] = useState(Math.ceil(portfolio.length / numberPerPage));

    return (
        <>

            <div>
                <section>
                    <h1 className="text-4xl text-center font-semibold text-gray-700 tracking-wider self-center">
                        <span className="text-primary">My</span> Portfolio
                    </h1>
                    <p className="text-center text-xl">my works...</p>

                    <div className="mx-8 md:mx-10 mt-16 md:mt-20">
                        {/* Simple */}
                        {portfolio.map(
                            (item, index) =>
                                // Calculate start and end index for a page
                                index >= (page - 1) * numberPerPage &&
                                index < page * numberPerPage && (
                                    <div className="mb-12 md:mb-24 md:grid md:grid-cols-5 md:gap-x-0 gap-x-0 " key={item.id}>
                                        <div className="md:col-span-3 drop-shadow-lg mx-auto w-[20vw] h-[20vw]">
                                            <Image src={item.img} alt="hello"  />
                                        </div>

                                        <div className="py-8 md:col-span-2 md:self-end md:-mb-6">
                                            <div className="text-primary text-lg font-bold tracking-wider lg:text-2xl leading-5 mb-2">{item.title}</div>
                                            <div className="text-gray-700 text-base">{item.description}</div>

                                            <div className="mt-4 flex justify-center md:justify-start">
                                                <a rel="noreferrer" target="_blank" href={item.url}>
                                                    <button className="bg-primary text-base text-white font-semibold py-3 px-5 rounded inline-flex space-x-2 items-center hover:text-primary hover:bg-white hover:ring-2 hover:ring-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                        <span className="tracking-wide">View Project</span>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                        )}

                      
                     
                    </div>

                    {/* Pagination */}
                    {portfolio.length > numberPerPage && (
                        <>
                            <div className="flex flex-row items-center justify-center space-x-3">
                                <button
                                    onClick={() => {
                                        setPage((old) => Math.max(old - 1, 1));
                                        window.scrollTo(0, 0);
                                    }}
                                    disabled={page === 1}
                                    className="flex flex-row w-fit items-center py-2 px-4 text-sm font-medium text-white bg-primary rounded-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                                >
                                    <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span>Previous</span>
                                </button>

                                <div className="font-medium">
                                    {page} / {maxPage}
                                </div>

                                <button
                                    onClick={() => {
                                        setPage((old) => Math.min(old + 1, maxPage));
                                        window.scrollTo(0, 0);
                                    }}
                                    disabled={page === maxPage}
                                    className="flex flex-row w-fit items-center py-2 px-4 text-sm font-medium text-white bg-primary rounded-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                                >
                                    <span>Next</span>
                                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </>
                    )}
                </section>
            </div>

        </>
    )
}