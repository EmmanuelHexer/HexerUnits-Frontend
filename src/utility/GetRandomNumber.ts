const GetRandomNumber = (min: number, max: number) => {
    if (min >= max) throw new Error("Invalid Parameters");
    return Math.floor(Math.random() * 1000);
}

export default GetRandomNumber;