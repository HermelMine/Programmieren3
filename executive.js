
//sketch

const {getrandommatrix,random,grassArr, herbiArr, carniArr, exploArr, assassArr, fr, side}= require("./contral")
let {matrix}= require("./contral")
const Life = require("./life")
const Grass = require("./grass")
console.log("import", Grass)

const Herbivore = require("./herbivore")
const Carnivore = require("./carnivore")
const AssassinsWeed = require("./assassinsWeed")
const ExplosiveSingingMushroom = require("./explosiveSingingMushroom")


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
                //fill("LightSlateGrey")
                process.stdout.write(" ")
            }
            else if(matrix[x][y]===1){
                //fill("#1F760B")
                process.stdout.write("1")
            }
            else if(matrix[x][y]===2){
                //fill("#FFDB00")
                process.stdout.write("2")
            }
            else if(matrix[x][y]===4){
                //fill("#c81bb0")
                process.stdout.write("4")
            }
            else if(matrix[x][y]===5){
                //fill("#1204b5")
                process.stdout.write("5")
            }
           else if(matrix[x][y]===3){
                //fill("#c8221b")
                process.stdout.write("3")
            }
            else if(matrix[x][y]===6){
                //fill("#b56404")
                process.stdout.write("6")
            }
            //rect(y*side,x*side,side,side)
        }
    }
 }


 function setup(){
    //matrix=getrandommatrix(40,40)
    //console.log(matrix)
    //createCanvas(matrix[1].length*side+1,matrix.length*side+1)
    //background("#acabaa")
    //frameRate(fr)
    for(let y=0;y<matrix.length;y++){
        for(x=0;x<matrix[y].length;x++){
            if(matrix[y][x]===1){
                console.log(Grass)
                let grassObj=new Grass(x,y);
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
    //console.log(grassArr)
 }

 module.exports={
     draw:draw,
     setup:setup,
     matrix:matrix
 }