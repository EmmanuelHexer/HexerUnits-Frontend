import EndPoints from "../services/EndPoints.ts";
import {useSelectedUnit} from "../context/SelectedUnitContext.tsx";

const Select = () => {
    const {selectedUnit, setSelectedUnit} = useSelectedUnit();
    return (
        <select
            value={selectedUnit}
            data-test-name={"select-button"}
            onChange={(e) => setSelectedUnit(e.target.value)}
            className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-700 hover:to-blue-700 text-white bg-violet-600 font-bold text-sm px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
        >
            {Object.keys(EndPoints).map((label) => (
                <option 
                    className={`text-white`} 
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