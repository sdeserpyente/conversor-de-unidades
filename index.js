function redirigir_m() {
    window.location.href = 'masa.html';
}

function redirigir_l() {
    window.location.href = 'longitud.html';
}

function redirigir_v() {
    window.location.href = 'velocidad.html';
}

function regresar() {
    window.location.href = 'index.html';
}

function redirigir() {
    window.location.href = 'otro.html';
}

function regresar() {
    window.location.href = 'index.html';
}

function convertir_m() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        alert('Por favor, introduce un valor numérico.');
        return;
    }

    const conversionFactors = {
        'kg': 1,
        'g': 1000,
        'lb': 2.20462,
        'oz': 35.274
    };

    const valueInKg = inputValue / conversionFactors[inputUnit];
    const outputValue = valueInKg * conversionFactors[outputUnit];

    document.getElementById('result').innerText = outputValue.toFixed(2) + ' ' + outputUnit;
}



function convertir_l() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        alert('Por favor, introduce un valor numérico.');
        return;
    }

    const conversionFactors = {
        'm': 1,
        'cm': 100,
        'mm': 1000,
        'in': 39.3701,
        'ft': 3.28084,
        'yd': 1.09361,
        'km': 0.001,
        'mi': 0.000621371
    };

    const valueInMeters = inputValue / conversionFactors[inputUnit];
    const outputValue = valueInMeters * conversionFactors[outputUnit];

    document.getElementById('result').innerText = outputValue.toFixed(2) + ' ' + outputUnit;
}

function convertir_v() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        alert('Por favor, introduce un valor numérico.');
        return;
    }

    const conversionFactors = {
        'mps': 1,
        'kph': 3.6,
        'mph': 2.23694,
        'fps': 3.28084
    };

    const valueInMps = inputValue / conversionFactors[inputUnit];
    const outputValue = valueInMps * conversionFactors[outputUnit];

    document.getElementById('result').innerText = outputValue.toFixed(2) + ' ' + outputUnit;
}
