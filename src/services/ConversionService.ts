const BASE_URL = "http://localhost:5184/Conversion";

export interface ConversionResponse {
    message: string;
    result: number;
}

const convertUnits = async (unit:  string, value: string) : Promise<ConversionResponse> => {
    const response = await fetch(`${BASE_URL}/${unit}/${value}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "credentials": "include",
        }
    });
    
    if(!response.ok) {
        throw new Error("Conversion Failed");
    }
    
    return response.json();
}

export default convertUnits;