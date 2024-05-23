module.exports = class AssassinsWeed {




    constructor(x, y) {
        this.x = x
        this.y = y
        //Position
        //Colour
        this.colourValue = 4
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
        if (this.replicate >= 20) {




            let emptyfields = this.findfreecells(1);
            if (emptyfields.length > 0) {
                let randPos = random(emptyfields)
                let newX = randPos[0]
                let newY = randPos[1]
                matrix[newY][newX] = 4;
                //neuesAssasObjekt
                let assassObj = new AssassinsWeed(newX, newY)
                assassArr.push(assassObj)
            }
            this.replicate = 0
        }
    }
}