function Footer(){
    return(
        <footer className="bg-[#18181B] px-6 py-10 text-[#F4F4F5]">
            <div className="flex max-w-7xl justify-between gap-10">
                <div>
                <h2 className="text-2xl font-bold text-[#6366F1]">
                    Skillora
                </h2>
                <p>
                    Upgrade your skills.
                    Advance your future.
                </p>
                </div>
                <div className="flex flex-col gap-2 text-[#F4F4F5]">
                    <a href="#">Home</a>
                    <a href="#">Courses</a>
                    <a href="#">Tutors</a>
                    <a href="#">Sign In</a>
                </div>
            </div>
            <div className="text-center text-[#F4F4F5]">
                © 2026 Skillora. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;