import tutor1 from "../assets/tutor1.png";
import tutor2 from "../assets/tutor2.png";
import tutor3 from "../assets/tutor3.png";
import tutor4 from "../assets/tutor4.png";

function Tutors() {
    const tutors = [
        {
            name: "Arnav",
            course: "Web Development",
            image: tutor1,
        },
        {
            name: "Arnav",
            course: "Data Science",
            image: tutor2,
        },
        {
            name: "Arnav",
            course: "Artificial Intelligence",
            image: tutor3,
        },
        {
            name: "Arnav",
            course: "Business Studies",
            image: tutor4,
        },
    ];
    return(
        <section className="bg-white px-6 py-12 dark:bg-[#09090B]">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-center text-3xl font-bold text-[#18181B] dark:text-[#F4F4F5]">
                    Meet Our Expert Tutors
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {tutors.map((tutor) => (
                        <div key={tutor.name} className="cursor-pointer overflow-hidden rounded-2xl border border-[#E4E4E7] bg-white shadow-sm dark:border-[#27272A] dark:bg-[#18181B]">
                            <img src={tutor.image} className="h-64 w-full object-cover"/>
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-[#18181B] dark:text-[#F4F4F5]">
                                    {tutor.name}
                                </h3>
                                <p className="mt-1 font-medium text-[#6366F1]">
                                    {tutor.course}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Tutors;