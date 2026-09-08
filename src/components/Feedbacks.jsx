function Feedbacks() {
    const feedbacks = [
        {
            feedback: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "Arnav",
        },
        {
            feedback: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "Arnav",
        },
        {
            feedback: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "Arnav",
        },
        {
            feedback: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "Arnav",
        },
    ];
    return(
        <section className="bg-white px-6 py-12 dark:bg-[#09090B]">
            <div className="mx-auto max-w-7xl text-center">
                <h2 className="text-center text-3xl font-bold text-[#18181B] dark:text-[#F4F4F5]">
                    What our students say
                </h2>
                <div className="mt-10 flex gap-3">
                    {feedbacks.map((item) => (
                        <div key={item.name} className="rounded-2xl border border-[#E4E4E7] bg-white p-6 dark:border-[#27272A] dark:bg-[#18181B]">
                            <p className="text-[16px] leading-7 text-[#71717A] dark:text-[#A1A1AA]">
                                {item.feedback}
                            </p>
                            <p className="mt-6 text-right text-[#18181B] dark:text-[#F4F4F5]">
                                -{item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feedbacks;