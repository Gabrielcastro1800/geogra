let canvas = document.getElementById("canvas")
let c = canvas.getContext("2d")
let tela = 0
let startbutton = new Image()
startbutton.src = "imgs/starticon.png"
let car = new Image()
car.src = "imgs/car.png"
let background = new Image()
background.src = "imgs/background.jpg"
let smokeimg = new Image()
smokeimg.src = "imgs/smoke.png"
let earth = new Image()
earth.src = "imgs/earth.png"
let fire = new Image()
fire.src = "imgs/fire.png"
let smokes = [[160,340],[370,340],[210,340],[300,340]]
let quantidade = 1
let score = 175
let au = 0
let time = 0
let dire = 0
setInterval(function(){
    c.clearRect(0,0,800,600)
    time+=1
    if(tela == 0){
        c.drawImage(startbutton,250,100,300,300)

    }
    if(tela == 1){
        c.drawImage(background,0,0,1200,600)
        c.drawImage(car,50,400,200,150)
        if(quantidade == 1){
        c.drawImage(smokeimg,smokes[0][0],smokes[0][1],140,180)
            smokes[1][1] = 10000
            smokes[2][1] = 10000
            smokes[3][1] = 10000
        }
        if(quantidade == 2){
            c.drawImage(smokeimg,smokes[0][0],smokes[0][1],140,180)
            c.drawImage(smokeimg,smokes[1][0],smokes[1][1],140,180)
            smokes[2][1] = 10000
            smokes[3][1] = 10000
        }
        if(quantidade == 3){
            c.drawImage(smokeimg,smokes[0][0],smokes[0][1],140,180)
            c.drawImage(smokeimg,smokes[1][0],smokes[1][1],140,180)
            c.drawImage(smokeimg,smokes[2][0],smokes[2][1],140,180)
            smokes[3][1] = 10000
        }
        if(quantidade == 4){
            c.drawImage(smokeimg,smokes[0][0],smokes[0][1],140,180)
            c.drawImage(smokeimg,smokes[1][0],smokes[1][1],140,180)
            c.drawImage(smokeimg,smokes[2][0],smokes[2][1],140,180)
            c.drawImage(smokeimg,smokes[3][0],smokes[3][1],140,180)
            
        } 
        c.fillStyle = "black"
        c.fillRect(230,50,350,30)
        c.fillStyle = "green"
        c.fillRect(230,50,score,30)
        c.drawImage(earth,600,50,50,50)
        c.drawImage(fire,150,30,80,80)
    }
    for(con = 0;con < smokes.length; con++){
        smokes[con][1] = smokes[con][1]-Math.floor(Math.random() * 3);
        if(dire == 1){
        smokes[con][0] = smokes[con][0]-Math.floor(Math.random() * 4);
        
        }
        if(dire == 0){
            smokes[con][0] = smokes[con][0]+Math.floor(Math.random() * 4);}
        if(smokes[con][1] < 0){
            score = score-10
            smokes[con][1] = 10000
        }
        dire = Math.floor(Math.random() * 1)
    }
    if(time > 500){
        quantidade = Math.floor(Math.random() * 3)+1
        smokes = [[160,340],[370,340],[210,340],[300,340]]
        time = 0
    }
    
 },10)

 canvas.addEventListener("click", function(){
    if(event.offsetX > 250 && event.offsetX < 250+300 && event.offsetY > 100 && event.offsetY < 100+300 && tela == 0){
        tela = 1
    }
    if(tela == 1){
        au = 0
        if(event.offsetX > smokes[au][0] && event.offsetX < smokes[au][0]+140 && event.offsetY > smokes[au][1] && event.offsetY < smokes[au][1]+180){
            score = score+20
            smokes[au][1] = 10000
        }
        au = 1
        if(event.offsetX > smokes[au][0] && event.offsetX < smokes[au][0]+140 && event.offsetY > smokes[au][1] && event.offsetY < smokes[au][1]+180){
            score = score+20
            smokes[au][1] = 10000
        }
        au = 2
        if(event.offsetX > smokes[au][0] && event.offsetX < smokes[au][0]+140 && event.offsetY > smokes[au][1] && event.offsetY < smokes[au][1]+180){
            score = score+20
            smokes[au][1] = 10000
        }
        au = 3
        if(event.offsetX > smokes[au][0] && event.offsetX < smokes[au][0]+140 && event.offsetY > smokes[au][1] && event.offsetY < smokes[au][1]+180){
            score = score+20
            smokes[au][1] = 10000
        }

    }
    console.log(smokes,event.offsetX,event.offsetY)
 })
