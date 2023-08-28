import { FaTwitterSquare, FaInstagramSquare, FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";




export default function Footer() {
    return (
        <footer
            className="bg-primary w-full py-10 px-4 m-auto"
        >
            <h1
                className="focus:outline-none text-3xl text-white font-bold text-center"
            >
                Damisi Babalola
            </h1>


            <div className="my-8">
                <ul className="flex flex-col space-y-8 items-center md:flex-row md:space-y-0 md:justify-center md:space-x-10">
                    <li>
                        <a href="https://twitter.com/JaegersDen" target="_blank" rel="noopener noreferrer">
                            <FaTwitterSquare className="text-white text-5xl" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/dami_s_13/" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare className="text-white text-5xl" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Dbabalola600" target="_blank" rel="noopener noreferrer">
                            <FaGithubSquare className="text-white text-5xl" />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/damisi-babalola-4018201b7" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-white text-5xl" />
                        </a>
                    </li>
                    {/* <li>
                        <a href="https://medium.com/@toluolatubosun" target="_blank" rel="noopener noreferrer">
                            <FaMedium className="text-white text-5xl" />
                        </a>
                    </li> */}
                </ul>
            </div>

            <div className="text-center text-white">
                <p className="text-base">&copy; {new Date().getFullYear()} John Olatubosun</p>
            </div>
        </footer>
    )
}