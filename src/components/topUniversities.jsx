function TopUniversities() {
    const universities = [
        "Harvard", "Stanford", "MIT", "Oxford", "Cambridge", "Yale", "Princeton", "Columbia"
    ]
    return (
        <section className="bg-white px-6 py-10 dark:bg-[#09090B]">
            <div className="mx-auto max-w-7xl text-center">
                <h2 className="text-2xl font-bold text-[#18181B] dark:text-[#F4F4F5]">
                    Learn from top universities around the world
                </h2>
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                    {universities.map((university) => (
                        <div key={university} className="flex h-16 min-w-32 items-center justify-center rounded-xl border border-[#E4E4E7] bg-white px-6 font-semibold text-[#18181B] shadow-sm dark:border-[#27272A] dark:bg-[#18181B] dark:text-[#F4F4F5]">
                            {university}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopUniversities;