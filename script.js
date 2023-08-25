let row;
let column;
let grid;

// creating the grid

function buildGrid(size,y){ 
    resetGrid();
    for(let i = 0; i<size; i++){ // creating columns\
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

function colorBlue(){
    let cellNodeList = document.querySelectorAll('.rowCell');
    
    cellNodeList.forEach((node)=>{ // a more familiar method is written below.
        node.addEventListener("mouseover", ele =>{
        // console.log(ele);
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
function gridSize(){

    let slider = document.getElementById("myRange");
    let Output = document.getElementById("sliderValue")
    Output.textContent = "   " + slider.value +" size " + slider.value;
    let size = slider.value;
    slider.oninput = function(){
        Output.textContent = "   "+ this.value + " x " + this.value;
        size = this.value;
        buildGrid(size,size);
        
        return size;
        
    }
}

function resetGrid(){
    let cellNodeListRow = document.querySelectorAll('.rowCell');
    let cellNodeCol = document.querySelectorAll('.colCell')
    
    cellNodeListRow.forEach((rowNode)=>{
        rowNode.remove();
    })
    cellNodeCol.forEach((colNode)=>{
        colNode.remove();
    })    

}

function buttons(){
    
    // color blue
    let BlueButton = document.querySelector('#colorBlue');
    console.log(BlueButton);
    BlueButton.addEventListener("click", colorBlue);
    // reset
    let reset = document.querySelector('#reset');
    reset.addEventListener('click',  ()=>{

        resetGrid();
        let sliderOutput = document.getElementById('sliderValue');
        sliderOutput.textContent = "   "+  0 + " x " + 0;
    });


}


buttons();
gridSize();
buildGrid(16,16);



