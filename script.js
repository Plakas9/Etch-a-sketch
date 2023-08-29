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





function rainbow(){ // i used different for loop instead of forEach just to practice using different logic.
    let cellNodeList_2 = document.querySelectorAll('.rowCell')
    let cell_Array = Array.from(cellNodeList_2);
    for(let i=0; i < cell_Array.length; i++){ 
        cellNodeList_2[i].addEventListener("mouseover", e =>{
            
            let randomR=Math.round(Math.random()*255);
            let randomG=Math.round(Math.random()*255);
            let randomB=Math.round(Math.random()*255);
            console.log(randomR,randomG,randomB);
            
            e.target.style.backgroundColor = "rgb("+ randomR +"," +randomG+ ","+ randomB +")";
        })
    }


    /*
    cellNodeList_2.forEach((node)=>{
        node.addEventListener('mouseover', e =>{
            randomR=Math.round(Math.random()*255);
            randomG=Math.round(Math.random()*255);
            randomB=Math.round(Math.random()*255);
            console.log(randomR,randomG,randomB);
            
            e.target.style.backgroundColor = 'rgb(randomR,randomG,randomB)'
        });
    });*/
}


function gridSize(){

    let slider = document.getElementById("myRange");
    let Output = document.getElementById("sliderValue")
    Output.textContent = "   " + slider.value +" x " + slider.value;
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
    

    //RandomColor
    document.querySelector('#random').addEventListener('click', rainbow);
    
    // Fade to black
    document.querySelector('#fadeBlack').addEventListener('click', FadeToBlack);

    // color wheel

    document.querySelector('#colorpicker').addEventListener('click',colorWheel);
    // reset
    document.querySelector('#reset').addEventListener('click',  ()=>{

        buildGrid(1,1);
        let sliderOutput = document.getElementById('sliderValue');
        sliderOutput.textContent = "   "+  1 + " x " + 1;
        
    });

   

}
function FadeToBlack(){ // 10 interations was to fast so i made it more

    let cellNodeList = document.querySelectorAll('.rowCell');
    console.log(cellNodeList);
    let intialColor = 255;
    cellNodeList.forEach(cell => {
        cell.addEventListener("mouseover",(darker)=>{
            console.log(intialColor);
        darker.target.style.backgroundColor = "rgb("+ intialColor +"," +intialColor+ ","+ intialColor +")";
        
        if(intialColor >= 0){
            intialColor = intialColor - 0.75;
            console.log(intialColor);
        }
        });
   
    });


}
function colorWheel(){
   
    let cellNodeList = document.querySelectorAll('.rowCell');
    console.log(cellNodeList);
    
    cellNodeList.forEach(e=>{
        e.addEventListener('mouseover', ele =>{
            let color= document.querySelector("#colorpicker").value
    
            ele.target.style.backgroundColor = ' '+ color +' '
        });
    })
}

Controlbuttons();
gridSize();
buildGrid(16,16);

//rainbow();

