import support from "../Assets/support.svg"
const Support = () => {
    return (
        <section id="support" className="relative min-h-screen overflow-hidden p-8 mt-10 flex items-center justify-center flex-wrap sm:flex-nowrap">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-blue-600">
                    Support
                </h2>
                <p className="text-lg text-base-content/80 leading-relaxed mb-6">
                    We're here to help! If you have any questions or need assistance with the Unit Converter app, please don’t hesitate to reach out. Whether you're facing issues with conversions or have any suggestions for improvement, our support team is ready to assist you.
                </p>
                <div className="mt-10 flex justify-center gap-6">
                    <a
                        href="mailto:Emmanuelhexer@gmail.com"
                        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-inner transition duration-200"
                    >
                        Email Support
                    </a>
                </div>
                <div className="mt-12">
                    <p className="text-lg text-base-content/80 mb-4">For urgent support, reach out to us immediately!</p>
                    <a
                        href="tel:+233538841363"
                        className="text-lg text-violet-600 hover:text-violet-700 font-medium"
                    >
                        Call Us: +233 538841363
                    </a>
                </div>
            </div>
            <img src={support} alt={`support`}  className={`w-full max-w-3/2 md:max-w-2/4 mx-auto`}/>
        </section>
    );
};

export default Support;
