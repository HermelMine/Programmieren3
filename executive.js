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
 let fr=3
 function setup(){
    matrix=getrandommatrix(40,40)
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
