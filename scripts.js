let chance = "X"
let cells=document.querySelectorAll('.cell')
let chance_represent=document.getElementById('chance-span');
chance_represent.innerHTML=`${chance} turn`
let x_arr=[]
let y_arr=[]
let n=1
let winning_patterns=[[1,2,3],[3,6,9],[7,8,9],
                    [1,4,7],[3,5,7],[1,5,9],
                    [4,5,6],[2,5,8]]

insert_sign();

let continue_game=true;


function insert_sign(){
    cells.forEach((cell)=>{
        cell.addEventListener('click',(e)=>{
            if (continue_game && n<=9 && !cell.innerHTML){
                let img;
                if(chance === "X"){
                    img = "cross.png"
                    x_arr.push(parseInt(e.target.id))
                    chance = "O";  
                }
                else{
                    img = "zero.png";
                    y_arr.push(parseInt(e.target.id))
                    chance = "X";
                }
                chance_represent.innerHTML=`${chance} turn`;
                cell.innerHTML=`<img src=${img} alt=${chance} id="sign-img"/>`
                check_pattern()
                if(n==9){
                    chance_represent.innerHTML=`Game over`
                    continue_game=false;
                }
                n++;
            }
            
        })
    })
}

function check_pattern(){
    for(let i=0;i<8;i++){
        if(x_arr.includes(winning_patterns[i][0]) && x_arr.includes(winning_patterns[i][1]) && x_arr.includes(winning_patterns[i][2])){
            chance_represent.innerHTML=`X wins`;
            continue_game=false;
        }
        if(y_arr.includes(winning_patterns[i][0]) && y_arr.includes(winning_patterns[i][1]) && y_arr.includes(winning_patterns[i][2])){
            chance_represent.innerHTML=`Y wins`;
            continue_game=false;
        }

    }
}

document.querySelector('.restart-button').addEventListener('click',()=>{
    chance="X"
    x_arr=[]
    y_arr=[]
    n=1;
    chance_represent.innerHTML=`X turn`
    cells.forEach((cell)=>{
        cell.innerHTML="";
    })
    continue_game=true;
})