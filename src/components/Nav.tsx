import logo from "../Assets/logo.png";
import Select from "../components/Select";

const Nav = () => {
    return (
        <div className="shadow-sm mb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3">
                        <img src={logo} alt="HexerUnits logo" className="h-10 w-auto" />
                        <a className="text-2xl font-bold italic text-base-content tracking-tight">Hexer
                            <span className="text-violet-600">Units</span>
                        </a>
                    </div>
                    <div className="sm:flex items-center space-x-6 text-base-content hidden">
                        <Select />
                        <a
                            href="#"
                            className="text-base-content hover:text-violet-600 text-sm font-medium transition"
                        >
                            Support
                        </a>
                        <a
                            href="#"
                            className="text-base-content hover:text-violet-600 text-sm font-medium transition"
                        >
                            About
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Nav