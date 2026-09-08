import heroPic from '../assets/hero.png'

function Hero() {
    return(
        <section className="bg-white px-4 py-0 dark:bg-[#09090B]">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-12">
                <div className="max-w-2xl">
                    <h1 className="text-5xl font-bold text-[#18181B] dark:text-[#F4F4F5]">
                        Upgrade your skills.
                    </h1>
                    <h1 className="text-5xl font-bold text-[#6366F1]">
                        Advance your future.
                    </h1>
                    <p className="text-[18px] leading-[1.5] text-[#18181B] dark:text-[#F4F4F5]">
                        Learn from the best. Get certified.<br />
                        Achieve your career goals.
                    </p>
                </div>
                <div className="hidden lg:block -ml-20">
                    <img src={heroPic} className="w-[500px] object-contain "/>
                </div>
            </div>
        </section>
    )
}

export default Hero;