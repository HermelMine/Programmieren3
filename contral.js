//utils
function random(...args) {
    if (args.length === 0) {
        return Math.random();
    } else if (args.length === 1 && Array.isArray(args[0])) {
        return args[0][Math.floor(Math.random() * args[0].length)];
    } else if (args.length === 1 && typeof args[0] === 'number') {
        return Math.floor(Math.random() * args[0]);
    } else if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
        return Math.floor(Math.random() * (args[1] - args[0] + 1) - args[0]);
    } else {
        console.log(args);
        throw new Error('Invalid arguments');
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
            else if(r>98){
                matrix[h][w]=4
            }
            else if(r>97){
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

    return matrix
 }

function Mitosis{
    let genderCount=random(2)
    if(gendercount=)
}


let grassArr=[];
let herbiArr=[];
let carniArr=[];
let exploArr=[];
let assassArr=[];
let side= 10;
let fr = 3
let matrix=getrandommatrix(20,20)

module.exports= {matrix}

module.exports= {
    grassArr: grassArr,
    herbiArr: herbiArr,
    carniArr: carniArr,
    exploArr: exploArr,
    assassArr: assassArr,
    side: side,
    fr: fr,
    matrix:matrix,
    random:random,
    getrandommatrix:getrandommatrix

}