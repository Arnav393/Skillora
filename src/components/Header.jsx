import { useState } from "react";

function Header() {
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    function switchDarkMode(){
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    }

    return(
        <header className="w-full border-b border-[#E4E4E7] bg-white dark:border-[#27272A] dark:bg-[#09090B]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                <div className="-ml-20 flex items-baseline gap-[20px]">
                <div className="cursor-pointer text-2xl font-bold text-[#6366F1]">
                    Skillora
                </div>
                <div className="relative">
                    <button onClick={() => setIsCoursesOpen(!isCoursesOpen)} className="cursor-pointer flex items-center font-medium text-[#18181B] hover:text-[#6366F1] dark:text-[#F4F4F5] dark:hover:text-[#A78BFA]">
                        Courses
                    </button>
                    {isCoursesOpen && (
                        <div className="absolute left-0 top-10 z-10 w-48 rounded-lg border border-[#E4E4E7] bg-white py-2 shadow-lg">
                            <ul>
                                <li><button className="cursor-pointer block w-full px-4 py-2 text-left text-[#18181B] hover:bg-[#F5F7FF] hover:text-[#6366F1]">Artificial Intelligence</button></li>
                                <li><button className="cursor-pointer block w-full px-4 py-2 text-left text-[#18181B] hover:bg-[#F5F7FF] hover:text-[#6366F1]">Business</button></li>
                                <li><button className="cursor-pointer block w-full px-4 py-2 text-left text-[#18181B] hover:bg-[#F5F7FF] hover:text-[#6366F1]">Data Science</button></li>
                                <li><button className="cursor-pointer block w-full px-4 py-2 text-left text-[#18181B] hover:bg-[#F5F7FF] hover:text-[#6366F1]">Information Technology</button></li>
                                <li><button className="cursor-pointer block w-full px-4 py-2 text-left text-[#18181B] hover:bg-[#F5F7FF] hover:text-[#6366F1]">Computer Science</button></li>
                                <li><button className="cursor-pointer block w-full px-4 py-2 text-left text-[#18181B] hover:bg-[#F5F7FF] hover:text-[#6366F1]">Healthcare</button></li>
                            </ul>
                        </div>
                    )}
                </div>
                </div>
                <div className="-ml-50 flex w-200 items-center rounded-lg border border-[#E4E4E7] bg-[#F5F7FF] px-3 py-2 dark:border-[#27272A] dark:bg-[#18181B]">
                    <span className="mr-2">🔍</span>
                    <input type="text" placeholder="What do you want to learn?" className="w-full bg-transparent text-[#18181B] outline-none placeholder:text-[#71717A] rounded-[4px] dark:text-[#F4F4F5] dark:placeholder:text-[#A1A1AA]">
                    </input>
                </div>
                <div className="-mr-20 flex items-baseline gap-[20px]">
                <div className="flex items-center gap-4">
                    <button className="cursor-pointer font-medium text-[#18181B] hover:text-[#6366F1] dark:text-[#F4F4F5] dark:hover:text-[#A78BFA]">
                        Sign In
                    </button>
                </div>
                <div>
                    <button onClick={() => switchDarkMode()} className="text-xl cursor-pointer">
                        {isDarkMode ? "☀️" : "🌙"}
                    </button>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;