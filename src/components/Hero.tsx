import { useSelectedUnit } from "../context/SelectedUnitContext.tsx";
import Modal from "./Modal.tsx"
import {useState} from "react";
import conversion from "../Assets/conversion.svg";
const Hero = () => {
    const {selectedUnit} = useSelectedUnit();
    const [openModal, setOpenModal] = useState<boolean>(false);
    
    return (
        <div className={`flex flex-col lg:flex-nowrap items-center justify-center gap-8 h-[calc(100vh-69px)] sm:h-[calc(100vh-149px) max-w-7xl md:mx-auto p-4 relative ${openModal ? `mx-4  h-[calc(100vh-160px)]` : ''}`}>
        <div className={`w-full md:mx-auto`}>
                <img src={conversion} alt={`conversion`} className={`w-full max-w-2/3 md:max-w-2/5 mx-auto `}/>
                <h1 className={`text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[3rem] font-bold bg-gradient-to-r from-violet-500 to-blue-600 text-transparent bg-clip-text mb-4 text-center`}>{selectedUnit} Converter</h1>
                <p className={`leading-relaxed text-[1rem] text-base-content text-center lg:w-1/2 mx-auto`}>
                    Convert between common units quickly and easily. Whether you're switching from kilometers to miles, grams to kilograms, Celsius to Fahrenheit, or liters to gallons — this tool has you covered. Just enter your value and get instant, accurate results for everyday use.
                </p>
            </div>
            {openModal && (
                <>
                      <div 
                        className="fixed inset-0 bg-black opacity-50 z-40" 
                        onClick={() => setOpenModal(false)
                    }></div>
                    <Modal setOpenModal={setOpenModal}/>
                </>
            )}
            <button
                onClick={() => setOpenModal(true)}
                data-test-name={"hero-convert-button"}
                type="submit"
                className={`px-6 py-2 md:px-12 sm:text-2xl md:py-3 text-lg font-semibold text-white rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-700 hover:to-blue-700 transition-all duration-300`}
            >
                Convert Now
            </button>
        </div>
    )
}

export default Hero;