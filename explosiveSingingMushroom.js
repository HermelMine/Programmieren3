const { matrix,life,exploArr,herbiArr}= require("./contral")
const {random}=require("./executive")
module.exports=class ExplosiveSingingMushroom {

    constructor(x, y) {
        this.song = [
            ["Oh, oh, oh I, "],
            ["I will survive"],
            ["As long as I, "],
            ["I just don't move"],
            ["I know I'll stay alive"],
            ["I've got alot of time to spend,"],
            ["but you touch me? It is your end!"],
            ["You won't survive! You won't survive!"],
            ["No, no!"],
            [""]
        ]
        this.x = x
        this.y = y
        this.colourValue = 5
        this.explodecounter = 0
        this.neighbours = [
            [this.x, this.y],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
        ]
    }
    explode() {
        for (let i = 0; i < this.neighbours.length; i++) {
            let neighbour = this.neighbours[i]
            let newX = neighbour[0]
            let newY = neighbour[1]
            //update Matrix
            if (newY >= 0 && newY < matrix.length && newX >= 0 && newX < matrix[0].length) {
                matrix[newY][newX] = 6
                matrix[this.y][this.x] = 6
                matrix[newY][newX] = 6
                matrix[this.y][this.x] = 6
                //elemente aus arrays entfernen
                newX = neighbour[0]
                newY = neighbour[1]
                if (matrix[newY][newX] === 1) {
                    for (let i = 0; i < grassArr.length; i++) {
                        let grassObj = grassArr[i];
                        if (newX === grassObj.x && newY === grassObj.y) {
                            grassArr.splice(i, 1)
                        }
                    }
                }
                else if (matrix[newY][newX] === 2) {
                    for (let i = 0; i < herbiArr.length; i++) {
                        let herbiObj = herbiArr[i];
                        if (newX === herbiObj.x && newY === herbiObj.y) {
                            herbiArr.splice(i, 1)
                        }
                    }
                }
                else if (matrix[newY][newX] === 3) {
                    for (let i = 0; i < carniArr.length; i++) {
                        let carniObj = carniArr[i];
                        if (newX === carniObj.x && newY === carniObj.y) {
                            carniArr.splice(i, 1)
                        }
                    }
                }
                matrix[this.y][this.x] = 6
                for (let i = 0; i < exploArr.length; i++) {
                    let exploObj = exploArr[i];
                    if (newX === exploObj.x && newY === exploObj.y) {
                        exploArr.splice(i, 1)
                    }
                }
                for (let i = 0; i > herbiArr.length; i++) {
                    let herbiObj = herbiArr[i];
                    if (newX === herbiObj.x && newY === herbiObj[i]) {
                        herbiArr.splice(i, 1)
                    }
                }
            }
        }
    }


    checkMatrix() {
        let i = 0
        let matrixwert = matrix[this.y][this.x]
        if (matrixwert === this.colourValue) {
            while (i < 9) {
                //console.log(this.song[i])
                i++
            }
        }
        else {
            console.log("You dare touch me?! You'll regret that!")
            this.explode()
            this.explodecounter++
        }
        if (this.explodecounter > 0) {
            this.explodecounter++
        }
        if (this.explodecounter === 1) {
            for (let i = 0; i < this.neighbours.length; i++) {
                let neighbour = this.neighbours[i]
                let newX = neighbour[0]
                let newY = neighbour[1]
                this.explodecounter = 0
                matrix[newY][newX] = 0
                matrix[this.y][this.x] = 0
            }
        }
    }
}
