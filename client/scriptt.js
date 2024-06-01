// Socket.io: Verbindung zum Server herstellen
// Die socket Variable enthält eine Verbindung zum Server.
const socket = io();
const cellSize = 20;

// setup Funktion von p5.js
function setup() {
    createCanvas(windowWidth, windowHeight);
   
}

// Mit socket.on() können wir auf Ereignisse vom Server reagieren.
// Hier reagieren wir auf das Ereignis matrix, das uns die aktuelle Matrix vom Server sendet.
socket.on('matrix', (matrix) => {
    // Die Matrix wird auf den Bildschirm gezeichnet.
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
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
            rect(y * cellSize, x * cellSize, cellSize, cellSize);
        }
        
    }
});

// wir können hier auch auf andere Ereignisse reagieren, die der Server sendet
// socket.on('someEvent', (data) => {