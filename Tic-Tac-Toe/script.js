let cells = ["","","","","","","","",""];
let currPlayer = "X";
let res = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conds = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const ticTac = (ele, ind) => {
    ele.value = currPlayer;
    ele.disabled = true; // So that the same place picking is avoided
    cells[ind] = currPlayer;
    currPlayer = currPlayer == "X" ? "O" : "X";
    res.innerHTML = `Player ${currPlayer} Turn`;
    let draw = 1;

    for (let i=0;i<conds.length;i++){
        let condition = conds[i];
        let ele1 = cells[condition[0]];
        let ele2 = cells[condition[1]];
        let ele3 = cells[condition[2]];

        if(ele1 == "" || ele2 == "" || ele3 == ""){
            continue;
        }
        if((ele1 == ele2) && (ele2 == ele3)){
            res.innerHTML = `Player ${ele1} Won`;
            btns.forEach((btn) => btn.disabled = true);
            draw = 0;
        }
    }
    let c = 0;
    for(let i=0;i<cells.length;i++){
        if(cells[i] != ""){
            c++;
        }
    }
    if(c == cells.length && draw == 1){
        res.innerHTML = `Match Draw`
    }
};

function Reset() {
    cells = ["","","","","","","","",""];
    btns.forEach((btn) => {
        btn.value = "";
    });
    currPlayer = "X";
    res.innerHTML = `Player X Turn`;
    btns.forEach((btn) => btn.disabled = false);
};

document.querySelector('#reset').addEventListener("click", Reset);

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => ticTac(btn, i));
});
