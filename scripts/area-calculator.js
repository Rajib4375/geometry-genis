function calculateTriangleAra(){
    // get Triangle base value
    const baseFiled = document.getElementById('triangle-base');
    const baseValueText = baseFiled.value;
    const base = parseFloat(baseValueText);
    
    // get tringle hight value

    const heightFiled = document.getElementById('triangle-height');
    const heightValueText = heightFiled.value;
    const height = parseFloat(heightValueText);
    

    const area = 0.5 * base * height;

    const areaspan =document.getElementById('triangle-ara');
    areaspan.innerText = area;
    

}

function calculateRectangleAra(){

    const widthFiled =document.getElementById('rectangle-width');
    const widthValueText = widthFiled.value;
    const width = parseFloat(widthValueText);
    

    const lengthFiled = document.getElementById('rectangle-length');
    const lengthValueText =lengthFiled.value;
    const length = parseFloat(lengthValueText);

    // validate input width and length

    if(isNaN(width) || isNaN(length)){
        alert('please insert a number');
        return;
    }

    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
   rectangleAreaSpan.innerText = area;
}

// reusable function --> reduce dublicate code
function calculateParallelogramAra(){
    const base = getInputValue('parallelogram-base');
    console.log(base)

    const height = getInputValue('parallelogram-height');
    console.log(height)

    // validate input
    if(isNaN(base) || isNaN(height)){
        alert('please insert a number');
        return;
    }


    const area = base * height;

    setElementInnerText('parallelogram-area', area);

}
function calculateEllipseAra(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const mainorRadius = getInputValue('ellipse-mainor-radius');
    const area = 3.14 * mainorRadius * mainorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
}

// reusable input value filed in number
function getInputValue(filedId){
    const inputFiled = document.getElementById(filedId);
    const inputValueText = inputFiled.value;
    const value = parseFloat(inputValueText);
    return value;

}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
