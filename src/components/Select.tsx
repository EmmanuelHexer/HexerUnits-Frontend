import EndPoints from "../services/EndPoints.ts";
import {useSelectedUnit} from "../context/SelectedUnitContext.tsx";

const Select = () => {
    const {selectedUnit, setSelectedUnit} = useSelectedUnit();
    return (
        <select
            value={selectedUnit}
            data-test-name={"select-button"}
            onChange={(e) => setSelectedUnit(e.target.value)}
            className="bg-gradient-to-r from-violet-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-inner transition duration-200"
        >
            {Object.keys(EndPoints).map((label) => (
                <option 
                    className={`bg-white text-black rounded-xl shadow-lg`} 
                    data-test-name={label}
                    key={label} 
                    value={label}
                >
                    {label}
                </option>
            ))}
        </select>
    )
}

export default Select;