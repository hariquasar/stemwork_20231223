var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function(){
    setGame();
}

function setGame(){
    board = [
            [2, 2, 2, 2],
            [2, 2, 2, 2],
            [4, 4, 8, 8],
            [4, 4, 8, 8]
        ];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile,num)
            document.getElementById("board").append(tile);
        }
    }
}

function updateTile(tile, num){
    tile.innerText = ""
    tile.classList.value = ""
    tile.classList.add("tile")
    if(num > 0){
        tile.innerText = num.toString()
    }
}

document.addEventListener('keyup',(e) =>{
    if(e.code == "ArrowLeft") {
        slideLeft();
    }
    else if (e.code == "ArrowRight"){
        slideRight()
    }
    else if (e.code == "ArrowUp"){
        slideUp()
    }
    else if(e.code == "ArrowDown"){
        slideDown()
    }
    document.getElementById("score").innerText = score
})

function filterZero(row){
    return row.filter(num => num != 0)
}

function slide(row){
    //0 2 2 2
    row = filterZero(row) // 2 2 2
    for(let i = 0; i < row.length-1; i++){
        if(row[i] == row[i+1]){
            row[i] *= 2;
            row[i+1] = 0
            score += row[i]
        }
    }//4 0 2
    row = filterZero(row) // 4 2
    while (row.length < columns){
        row.push(0)
    }// 4 2 0 0
    return row
}

function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row;
        for (let c = 0; c < columns; c++){
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}
function slideRight(){
    for(let r = 0; r < rows; r++){
        let row = board[r]; // 0 2 2 2
        row.reverse() // 2 2 2 0
        row = slide(row) //4 2 0 0
        board[r] = row.reverse() // 0 0 2 4
        for(let c =0;c < columns;c++){
            let tile = document.getElementById(r.toString()+ "-"+c.toString())
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}
function slideUp(){
    for ( let c=0; c<columns; c++){
        let row=[board[0][c],board[1][c],board[2][c],board[3][c]]
        row = slide(row)
        for(let r = 0;r<rows;r++){
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString()+"-"+c.toString())
            let num = board[r][c]
            updateTile(tile,num)
        }
    }
}
function slideDown(){
    for(let c =0; c<columns;c++){
        let row = [board[0][c],board[1][c],board[2][c],board[3][c]]
        row.reverse()
        row = slide(row)
        row.reverse()
        for(let r = 0; r < rows; r++){
            board[r][c] = row[r]
            let tile = document.getElementById(r.toString()+"-"+c.toString())
            let num = board[r][c]
            updateTile(tile,num)
        }
    }
}

function setTwo(){
    if(!hasEmptyTile()){
        return
    }
    let found = false;
    
}

function hasEmptyTile(){
    let count = 0;
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < columns; c++){
            if (board[r][c] == 0){
                return true
            }
        }
    }
    return false
}
