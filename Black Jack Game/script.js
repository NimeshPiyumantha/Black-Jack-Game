function main() {
    let confirm = document.getElementById('mainResult').innerHTML;
    if (confirm === "Your Lost !!") {
        alert("Game Over ! Please restart the game");
    } else {
        let x;
        do {
            x = Math.floor(Math.random() * 100 / 7.6);
        } while (x === 0);

        let currentTotal = parseInt(document.getElementById('result').innerHTML);
        let total = currentTotal + x;
        document.getElementById('result').innerHTML = total;

        if (total < 21) {
            document.getElementById('mainResult').innerHTML = "Generate another card ?"
        } else if (total === 21) {
            document.getElementById('mainResult').innerHTML = "Your are Won !! &#128513"
            alert("Congratulation !");
            document.getElementById('btn-restart').style.display = "block";
        } else if (total > 21) {
            document.getElementById('mainResult').innerHTML = "Your are Lost !! &#128557"
            alert("Lost !! ,Click restart to play again");
            document.getElementById('btn-restart').style.display = "block";
        }else{
            alert("Lost !! ,Click restart to play again");
            document.getElementById('btn-restart').style.display = "block";
        }

        const img = document.createElement("img");
        img.src = "assest/" + x + ".png";
        img.height = 300;
        img.width = 200;

        document.body.appendChild(img);
    }
}

function restart() {
    location.reload();
}