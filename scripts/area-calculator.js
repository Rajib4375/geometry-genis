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

    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
   rectangleAreaSpan.innerText = area;
}
