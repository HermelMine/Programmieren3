class Grass {

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












class Herbivore {




    constructor(x, y) {
        this.x = x
        this.y = y
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































































class Carnivore {




    constructor(x, y) {
        this.x = x
        this.y = y
        //Position
        //Colour
        this.colourValue = 3
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
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
        }
    }
    eat() {
        let prey = this.findfreecells(2)
        if (prey.length > 0) {
            let randPos = random(prey)
            let myX = randPos[0]
            let myY = randPos[1]
            //update matrix
            matrix[myY][myX] = 3
            matrix[this.y][this.x] = 0
            //update own position
            this.x = myX
            this.y = myY
            //delete grassobject
            for (let i = 0; i < herbiArr.length; i++) {
                let element = herbiArr[i];
                if (this.x === element.x && this.y === element.y) {
                    herbiArr.splice(i, 1)
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
            if (this.noteatencounter >= 8) {
                this.die()
            }
            else {
                this.move()
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (let i = 0; i < carniArr.length; i++) {
            let carniObj = carniArr[i];
            if (this.x === carniObj.x && this.y === carniObj.y) {
                carniArr.splice(i, 1)
            }




        }








    }




















    mul() {
        if (this.eatcounter >= 2) {
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
















class AssassinsWeed {




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












class ExplosiveSingingMushroom {


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








function getrandommatrix(x,y){
    let matrix=[]
    for(let h = 0;h<y;h++){
        matrix.push([])
        for(let w=0;w<x;w++){
           
            matrix[h][w]=0
            let r = random(100)
            if(r<45){
                matrix[h][w]=0
            }
            else if(r>99){
                matrix[h][w]=4
            }
            else if(r>98){
                matrix[h][w]=2
            }
            else if(r>96){
                matrix[h][w]=3
            }
            else if(r>95){
                matrix[h][w]=5
            }
            else{
                matrix[h][w]=1
            }
        }
    }
    console.log(matrix)
    return matrix
 }
  let matrix = [
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 3, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 2, 0],
    [1, 1, 0, 0, 0]
 ];
 let grassArr=[];
 let herbiArr=[];
 let carniArr=[];
 let canniArr=[];
 let exploArr=[];
 let assassArr=[];
 let side= 10;


 function draw(){
    for (let m = 0; m <exploArr.length; m++) {
        let exploObj = exploArr[m];
        exploObj.checkMatrix()
       
    }
    for (let m = 0; m <grassArr.length; m++) {
        let grassObj = grassArr[m];
        grassObj.mul()
       
    }
    for (let m = 0; m<assassArr.length; m++) {
        let assassObj = assassArr[m];
         assassObj.mul()
       
    }
    for(let m=0;m<carniArr.length;m++){
        let carniObj=carniArr[m]
        carniObj.eat()
    }
    for(let m=0;m<herbiArr.length;m++){
        let herbiObj=herbiArr[m]
        herbiObj.eat()
    }
    for(x=0;x<matrix.length;x++){
        for(y=0;y<matrix[x].length;y++){
           
            if(matrix[x][y]===0){
                fill("LightSlateGrey")
            }
            else if(matrix[x][y]===1){
                fill("#1F760B")
            }
            else if(matrix[x][y]===2){
                fill("#FFDB00")
            }
            else if(matrix[x][y]===4){
                fill("#c81bb0")
            }
            else if(matrix[x][y]===5){
                fill("#1204b5")
            }
           else if(matrix[x][y]===3){
                fill("#c8221b")
            }
            else if(matrix[x][y]===6){
                fill("#b56404")
            }
            rect(y*side,x*side,side,side)
        }
    }
 }
 let fr=1
 function setup(){
    matrix=getrandommatrix(20,20)
    console.log(matrix)
    createCanvas(matrix[1].length*side+1,matrix.length*side+1)
    background("#acabaa")
    frameRate(fr)
    for(let y=0;y<matrix.length;y++){
        for(x=0;x<matrix[y].length;x++){
            if(matrix[y][x]===1){
                let grassObj=new Grass(x,y);
                // console.log(grassObj)
                // console.log(grassObj.multiply)
                grassArr.push(grassObj)
            }
            else if(matrix[y][x]===4){
                let assassObj=new AssassinsWeed(x,y)
                assassArr.push(assassObj)
            }
            else if(matrix[y][x]===2){
                let herbiObj= new Herbivore(x,y)
                herbiArr.push(herbiObj)
            }
            else if (matrix[y][x]===3){
                let carniObj=new Carnivore(x,y)
                carniArr.push(carniObj)
            }
            else if(matrix[y][x]===5){
                let exploObj= new ExplosiveSingingMushroom(x,y)
                exploArr.push(exploObj)
            }
        }
    }
    console.log(grassArr)
 }
