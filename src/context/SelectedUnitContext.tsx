import {createContext, useContext, useState, ReactNode} from "react";

type UnitContext = {
    selectedUnit : string;
    setSelectedUnit: (unit: string) => void;
}

const SelectedUnitContext = createContext<UnitContext | undefined>(undefined);

export const SelectedUnitProvider = ({children}: {children: ReactNode}) => {
    const [selectedUnit, setSelectedUnit] = useState("Grams to Kilograms");
    return (
        <SelectedUnitContext.Provider value={{selectedUnit, setSelectedUnit}}>
            {children}
        </SelectedUnitContext.Provider>
    );
};

export const useSelectedUnit = () => {
    const context = useContext(SelectedUnitContext);
    if (!context) {
        throw new Error("useSelectedUnit: useSelectedUnit");
    }
    return context;
}