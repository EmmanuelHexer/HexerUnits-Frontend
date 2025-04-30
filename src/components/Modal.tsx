import { useState} from "react";
import convertUnits from "../services/ConversionService.ts";
import EndPoints from "../services/EndPoints.ts";
import {useSelectedUnit} from "../context/SelectedUnitContext.tsx";

const Modal = ({setOpenModal} : any) => {
    const [number, setNumber] = useState<string>("");
    const [converted, setConverted] = useState<number>(0);
    const {selectedUnit} = useSelectedUnit();
    const [errorMessage, setErrorMessage] = useState<string>("");
    
    const unitOne = selectedUnit.split("to")[0];
    const unitTwo = selectedUnit.split("to")[1];
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const data = await convertUnits(EndPoints[selectedUnit], number);
            setConverted(data.result);
            
            if(data.result){
                setErrorMessage("");
            }
        } catch (error) {
            if (number.length === 0) {
                setErrorMessage("Enter Something bro");
            }  else {
                console.error(`Failed to convert units for ${selectedUnit}`, error); 
            }
        }
    };

    const clearConverted = (): void => {
        setNumber("");
        setConverted(0);
    }
    
    return (
        <form
            onSubmit={handleSubmit}
            data-test-name={"conversion-modal"}
            className={`bg-white w-full max-w-xl mx-auto my-16 px-8 py-10 rounded-2xl shadow-2xl space-y-8 transition-all text-black duration-300 absolute z-50`}
        >
            <div className={`flex justify-center relative`}>
                <h1 className={`text-4xl font-bold text-center text-violet-700 tracking-tight`}>
                    Convert Units
                </h1>
                <button 
                    onClick={() => setOpenModal(false)}
                    data-test-name={"close-modal"}
                    className={`cursor-pointer absolute right-0 top-[-2rem] font-bold text-[1.5rem] text-violet-600`
                }>X</button>
            </div>
            <div className={`space-y-2`}>
                <label
                    htmlFor="grams"
                    className={`block text-base font-medium text-base-content`}
                >
                    {unitOne}
                </label>
                <input
                    id="grams"
                    type="number"
                    min="0"
                    placeholder={`Enter value in ${unitOne.toLowerCase()}`}
                    value={number}
                    data-test-name={"input-value"}
                    onChange={(e) => setNumber(e.target.value)}
                    className={`w-full p-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition duration-200`}
                />
                {errorMessage && (
                    <p className="text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded-md mt-2 shadow-sm">
                        ⚠️ {errorMessage}
                    </p>
                )}
            </div>
            <div className={`space-y-2`}>
                <label
                    htmlFor="kilograms"
                    className={`block text-base font-medium text-base-content`}
                >
                    {unitTwo}
                </label>
                <input
                    id="kilograms"
                    type="text"
                    placeholder="Converted value"
                    value={converted}
                    data-test-name={"converted-value"}
                    disabled
                    className={`w-full p-4 text-lg border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed`}
                />
            </div>
            <div className={`flex items-center space-x-4 pt-2`}>
                <button
                    type="submit"
                    data-test-name={"modal-convert-button"}
                    className={`px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-700 hover:to-blue-700 transition-all duration-300`}
                >
                    Convert
                </button>
                <button
                    type="button"
                    onClick={clearConverted}
                    className={`text-2xl text-base-content hover:text-violet-600 transition`}
                    aria-label="Reset conversion"
                >
                    ↺
                </button>
            </div>
        </form>

    )
}

export default Modal;