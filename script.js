let row;
let column;
let grid;

// creating the grid

function buildGrid(x,y){ 

    for(let i = 0; i<x; i++){ // creating columns\
        grid = document.querySelector('.grid');
        column = document.createElement('div');
        column.classList.add('colCell')
        grid.appendChild(column);
        
        for(let j = 0; j<y; j++){ // creating rows
            row = document.createElement('div');
            row.classList.add('rowCell')
            column.appendChild(row);     
        }
    }
}

function ColorBlue(){
let cellNodeList = document.querySelectorAll('.rowCell');
let cell_Array = Array.from(cellNodeList);

 
cellNodeList.forEach((node)=>{ // a more familiar method is written below.
    node.addEventListener("mouseover", ele =>{
        console.log(ele);
        ele.target.style.backgroundColor = "blue"
    });

});
/*
for(let i=0; i < cell_Array.length; i++){ 
    cellNodeList[i].addEventListener("mouseover", e =>{
        e.target.style.backgroundColor = 'blue';
    })
}*/
}

let slider = document.getElementById("myRange");
let Output = document.getElementById("sliderValue")
Output.textContent = "   " + slider.value +" x " + slider.value;
slider.oninput = function(){
    Output.textContent = "   "+ this.value + " x " + this.value;
    console.log(this.value);
    
    //buildGrid(this.value,this.value);
}

ColorBlue();



