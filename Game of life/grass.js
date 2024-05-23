var life = require("./module")
module.exports = class Grass {

    constructor(x, y) {
        this.x = x
        this.y = y
        //Position
        //Colour
        this.colouValue = 1
        //Count
        this.replicate = 0
        this.neighbours = [
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

    //FindFreeCells
    findfreecells(symbol) {
        let freecells = []
        for (let i = 0; i < this.neighbours.length; i++) {
            let pos = this.neighbours[i]
            let myX = pos[0]
            let myY = pos[1]
            if (myY >= 0 && myY < matrix.length && myX >= 0 && myX < matrix[0].length) {
                let matrixwert = matrix[myY][myX];
                if (matrixwert === symbol) {
                    freecells.push(pos)




                }




            }
        }
        return freecells
    }




    mul() {
        this.replicate++
        if (this.replicate >= 6) {




            let emptyfields = this.findfreecells(0);
            if (emptyfields.length > 0) {
                let randPos = random(emptyfields)
                let newX = randPos[0]
                let newY = randPos[1]
                matrix[newY][newX] = 1;
                //neuesGrassobjekt
                let grassObj = new Grass(newX, newY)
                grassArr.push(grassObj)
            }








            this.replicate = 0
        }
    }

}