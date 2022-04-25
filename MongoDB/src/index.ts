export const FahrtoCelcius = (temp: number) => {
    return (temp - 32) / 1.8
}

export const celcToFarh = (temp: number) => {
    return (temp * 1.8) + 32
}