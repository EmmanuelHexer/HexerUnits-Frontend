import about from "../Assets/about.png"

const About = () => {
    return (
        <section id={`about`} className="flex items-center justify-center flex-wrap md:flex-nowrap min-h-screen bg-gradient-to-br from-white via-violet-50 to-blue-50 p-8">
            <img src={about} alt={`about`} className={`w-full max-w-3/2 md:max-w-2/4 mx-auto `}/>
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-blue-600">
                    About Hexer Units
                </h2>
                <p className="text-lg text-base-content leading-relaxed mb-6">
                    Our Unit Converter app is designed to help you convert between various measurement units
                    quickly and accurately. Whether you're working with length, weight, temperature, or volume,
                    this tool makes conversions simple — no math required.
                </p>
                <p className="text-lg text-base-content leading-relaxed">
                    Built with speed, clarity, and ease of use in mind, this app is perfect for students,
                    professionals, and anyone who needs accurate unit conversions at their fingertips.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <a
                        href="#"
                        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-inner transition duration-200"
                    >
                        Try It Now
                    </a>
                    <a
                        href="#"
                        className="px-6 py-2 rounded-full border border-violet-600 text-violet-600 hover:bg-violet-50 transition font-medium"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
