const { matrix,life, herbiArr,grassArr,random}= require("./contral")
module.exports = class Herbivore {

    constructor(x, y,gender) {
        this.x = x
        this.y = y
        this.gender= {
            let gendercount= 
        }
        //Position
        //Colour
        this.colouValue = 2
        //Count
        this.eatcounter = 0
        this.noteatencounter = 0
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




    updateNeighbours() {
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
        this.updateNeighbours()
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




    move() {
        let emptyfields = this.findfreecells(0)
        if (emptyfields.length > 0) {
            let randPos = random(emptyfields)
            let newX = randPos[0]
            let newY = randPos[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
        }
    }


    eat() {
        let grassfields = this.findfreecells(1)
        let poisonousMushrooms = this.findfreecells(5)
        if (poisonousMushrooms.length > 0) {
            grassfields.push(poisonousMushrooms[0])
        }
        if (grassfields.length > 0) {
            let randPos = random(grassfields)
            let myX = randPos[0]
            let myY = randPos[1]


                // console.log(myX,myY)
                //update matrix
                matrix[myY][myX] = 2
                matrix[this.y][this.x] = 0
                //update own position
                this.x = myX
                this.y = myY
                //delete grassobject
                for (let i = 0; i < grassArr.length; i++) {
                    let element = grassArr[i];
                    if (this.x === element.x && this.y === element.y) {
                        grassArr.splice(i, 1)
                        break;
                    }




                }
                this.eatcounter++
                this.noteatencounter = 0
                this.mul()
            }
       
                else {
                    this.eatcounter = 0
                    this.noteatencounter++
                    if (this.noteatencounter >= 5) {
                        this.die()
                    }
                    else {
                        this.move()
                    }
                    // }
               
            }
        }
   
    die() {
        matrix[this.y][this.x] = 0
        for (let i = 0; i < herbiArr.length; i++) {
            let herbiObj = herbiArr[i];
            if (this.x === herbiObj.x && this.y === herbiObj.y) {
                herbiArr.splice(i, 1)
            }




        }








    }


    mul() {
        if (this.eatcounter >= 5) {
            let emptyfields = this.findfreecells(0)
            if (emptyfields.length > 0) {
                let randPos = random(emptyfields)
                let newX = randPos[0]
                let newY = randPos[1]
                matrix[newY][newX] = 2
                let herbiObj = new Herbivore(newX, newY)
                herbiArr.push(herbiObj)
                this.eatcounter = 0




            }




        }








    }












}
