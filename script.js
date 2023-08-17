
let grid = document.querySelector('.grid');
console.log(grid)
// creating the grid

function creatGrid(x,y){
    for(let i = 0; i<y; i++){ // creating columns\
        let column = document.createElement('div');
        column.classList.add('colCell')
        grid.appendChild(column);
        
        for(let j = 0; j<x+1; j++){
            let row = document.createElement('div');
            row.classList.add('rowCell')
            column.appendChild(row);
        }

    }
}
creatGrid(16,16)

