import { Menu, X } from "lucide-react";
import Select from "./Select.tsx"
import {useState} from "react"; 

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    return (
        <div className={`sm:hidden relative`}>
            <button onClick={() => setIsOpen(!isOpen)} className={`text-base-content focus:outline-none`}>
                {isOpen ? <X size={30} /> : <Menu size={30}/>}
            </button>
            
            {isOpen && (
                <div className={`fixed inset-0 bg-base-100 bg-opacity-80 backdrop-blur-2xl z-50 flex items-center justify-center`}>
                    <X onClick={() => setIsOpen(false)} size={30} className={`absolute top-4 right-4`}/>
                    <div className="flex flex-col items-center space-y-4">
                    <Select />
                    <a
                        href="#"
                        className={`text-base-content hover:text-violet-600 text-sm font-medium transition`}
                    >
                        Support
                    </a>
                    <a
                        href="#"
                        className={`text-base-content hover:text-violet-600 text-sm font-medium transition`}
                    >
                        About
                    </a>
                </div>
                </div>
            )};
        </div>
    );
};

export default HamburgerMenu;