import AI from '../assets/AI.png'
import DS from '../assets/DS.png'
import WebDev from '../assets/WebDev.png'
import Business from '../assets/Business.png'

function Courses() {
    const popularCourses = [
        {
            title: "Complete Web Development",
            price: "₹999",
            image: WebDev,
        },  
        {
            title: "Data Science with Python",
            price: "₹1499",
            image: DS,
        },
        {
            title: "Business Studies",
            price: "₹1999",
            image: Business,
        },
        {
            title: "Artificial Intelligence",
            price: "₹2499",
            image: AI,
        },
    ];
    return (
        <section className="bg-white px-6 py-12 dark:bg-[#09090B]">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#F4F4F5]">
                    Popular Courses
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {popularCourses.map((Course) => (
                        <div key={Course.title} className="cursor-pointer hover:shadow-lg overflow-hidden rounded-2xl border border-[#E4E4E7] bg-white dark:border-[#27272A] dark:bg-[#18181B]">
                            <img src={Course.image} className="h-44 w-full object-cover" />
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-[#18181B] dark:text-[#F4F4F5]">
                                    {Course.title}
                                </h3>
                                <p className="mt-4 text-xl font-bold text-[#6366F1]">
                                    {Course.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Courses;