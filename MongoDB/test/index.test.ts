const FahrtoCelcius = require('../src/index')
const celcToFarh = require('../src/index')

test('Should calculate from Fahrenheit', () => {
    const result = FahrtoCelcius(32)
    expect(result).toBe(0)
})

test('Should calcualte from celcius', () => {
    const result = celcToFarh(0)
    expect(result).toBe(32)
});
