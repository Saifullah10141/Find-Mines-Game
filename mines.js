let minesContainer = document.querySelector(".mines-container");

function createMines(){
    let html = ''
    for (let i = 1; i <= 30; i++){
        html += `<button class="mines-box${i} mines-box"></button>`
    }
    minesContainer.innerHTML = html
}
document.querySelector(".check-box").checked? 2 : 9
createMines();
let score = 0;
let scoree = 0;
let checkBox = document.querySelector(".check-box").checked ? Math.random() * 3 : Math.random() * 18 + 5;
document.querySelector(".check-box").addEventListener("change", () =>{
    checkBox = document.querySelector(".check-box").checked ? Math.random() * 3 : Math.random() * 6 + 10;
})
function display(){
    for (let i = 1; i <= 30; i++){
        document.querySelector(`.mines-box${i}`).addEventListener("click", () =>{
        score += Math.random();
        scoree += 1;
        if (score < checkBox){
            document.querySelector(`.mines-box${i}`).style.backgroundColor= "green"
            if (scoree === 29){
                setTimeout(() =>{alert("Congratulations! You won the Game, Start Again!")
                    score = 0;
                    scoree -= 29;
                    createMines();
                    display();},100)
            }
        }
        else {
            document.querySelector(`.mines-box${i}`).style.backgroundColor= "red"
            setTimeout(() =>{alert("Game Over, Try Again!")
                score = 0;
                scoree = 0;
                createMines();
                display();},100)
            }
        })
    }
}
display();