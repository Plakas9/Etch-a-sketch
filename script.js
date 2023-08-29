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

function buildGridwithoutReset(size,y){ 
    
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
    
    
}


function randomColor(){ // i used different for loop instead of forEach just to practice using different logic.
    let cellNodeList_2 = document.querySelectorAll('.rowCell')
    let cell_Array = Array.from(cellNodeList_2);
    for(let i=0; i < cell_Array.length; i++){ 
        cellNodeList_2[i].addEventListener("mouseover", e =>{
            let c1=Math.round(Math.random()*255);
            let c2=Math.round(Math.random()*255);
            let c3=Math.round(Math.random()*255);
            
            
            e.target.style.backgroundColor = "rgb("+ c1 +"," +c2+ ","+ c3 +")";
        })
    }


    /*
    cellNodeList_2.forEach((node)=>{
        node.addEventListener('mouseover', e =>{
            c1=Math.round(Math.random()*255);
            c2=Math.round(Math.random()*255);
            c3=Math.round(Math.random()*255);
            console.log(c1,c2,c3);
            
            e.target.style.backgroundColor = 'rgb(c1,c2,c3)'
        });
    });*/
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

function Controlbuttons(){
    
    // color blue
    let BlueButton = document.querySelector('#colorBlue');
    
    BlueButton.addEventListener('click', colorBlue);

    //RandomColor
    let randomButton = document.querySelector('#random');
    randomButton.addEventListener('click', randomColor);
    
    // reset
    let reset = document.querySelector('#reset');
    reset.addEventListener('click',  ()=>{

        buildGrid(1,1);
        let sliderOutput = document.getElementById('sliderValue');
        sliderOutput.textContent = "   "+  1 + " x " + 1;
        
    });

   

}



Controlbuttons();
gridSize();
buildGrid(16,16);

//randomColor();

