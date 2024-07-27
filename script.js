let inp = document.getElementById("inp")
let btn = document.getElementById("btn")
const length = document.getElementById('length')
const volume = document.getElementById('volume')
const mass = document.getElementById('mass')

btn.addEventListener('click', function(){
    convertLength()
    convertVolume()
    convertMass()
})

//1 meters = 3,28084 feet
//1 feet = 0,3048 meters

//1 liters = 0,264172 gallons
// 1 gallons = 3,78541 liters

//1 kilos = 2,20462 pounds
//1 pounds = 0,453592 kilos



function convertLength(){
    return length.innerHTML = `<p>
        ${inp.value} meters =  ${(inp.value * 3.28084).toFixed(3)} feet |
        ${inp.value} feet = ${(inp.value * 0.3048).toFixed(3)} meters
    <p/>`
}

function convertVolume(){
    return volume.innerHTML = `<p>
        ${inp.value} leters =  ${(inp.value * 0.264172).toFixed(3)} gallons |
        ${inp.value} gallons = ${(inp.value * 3.78541).toFixed(3)} leters
    <p/>`
}

function convertMass(){
    return mass.innerHTML = `<p>
        ${inp.value} kilos =  ${(inp.value * 2.20462).toFixed(3)} pounds |
        ${inp.value} pounds = ${(inp.value * 0.453592).toFixed(3)} kilos
    <p/>`
}