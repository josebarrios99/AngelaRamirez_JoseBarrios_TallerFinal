class Logica{
    static escenario1;
    constructor(app){
        this.app = app;
        this.app.createCanvas(1200,1000);
        this.escenario1 = [[0,7,2,0,7,3,0,0,2,2,0,7,4,0,3],
        [4,1,1,1,1,1,7,1,1,1,1,1,2,1,7],
        [0,1,2,1,0,1,7,1,6,1,3,7,0,1,0],
        [0,1,0,1,3,1,1,1,5,1,1,1,1,1,6],
        [2,1,7,1,0,1,0,3,2,1,2,7,3,1,5],
        [3,1,6,1,1,1,1,1,0,1,1,1,1,1,0],
        [0,1,5,1,1,1,2,0,2,1,0,2,3,1,7],
        [7,1,1,1,1,1,1,1,3,1,1,1,1,1,2],
        [2,1,0,7,4,1,0,1,7,2,3,1,2,1,2],
        [0,1,1,1,0,1,1,1,1,1,1,1,2,1,7],
        [3,7,2,0,2,3,0,7,2,0,4,7,2,0,3]
        ];

        this.imagen = [];
        this.orbes = [];
        this.fuegos = [];
        this.fuegos2 = [];
        this.vidas1_img = [];
        this.vidas2_img = [];
        
        this.estado1 = 0;
        this.estado = 0;
        this.ancho=80;
        this.enemX=400;
        this.enemY=400;
        this.contadorOrbes = 1;
        this.vidas = 5;
        this.vidas2 = 5;
        this.pos1X = 80;
        this.pos1Y = 80;
        this.pos2X = 1040;
        this.pos2Y = 80;
        this.pantalla = 0;

        this.dragon1 = new Jugador (app,this.pos1X,this.pos1Y,"src/images/dragon1_",this.vidas,this.escenario1);
        this.dragon2 = new Jugador (app,this.pos2X,this.pos2Y,"src/images/dragon2_",this.vidas2,this.escenario1);
        
        this.tipo = this.app.loadFont("src/PRSTART.TTF");

        this.puerta = this.app.loadImage("src/images/puerta.png");
        this.tierra = this.app.loadImage("src/images/tierra.png");
        this.arbol = this.app.loadImage("src/images/arbol.png");
        this.arbol2 = this.app.loadImage("src/images/arbol2.png");
        this.arbol3 = this.app.loadImage("src/images/arbol3.png");
        this.gato = this.app.loadImage("src/images/gato.png");
        this.torre1 = this.app.loadImage("src/images/torre1.png");
        this.torre2 = this.app.loadImage("src/images/torre2.png");
        this.corazon = this.app.loadImage("src/images/corazon.png");
        this.inicio = this.app.loadImage("src/images/inicioinicio.jpg");
        this.inicioJugar = this.app.loadImage("src/images/inicioj.jpg");
        this.inicioInstrucciones = this.app.loadImage("src/images/inicioi.jpg");
        this.instrucciones = this.app.loadImage("src/images/instrucciones.jpg");
        this.instrucciones2 = this.app.loadImage("src/images/instrucciones2.jpg");
        this.gana = this.app.loadImage("src/images/gana 1.jpg");
        this.gana1 = this.app.loadImage("src/images/gana 1_1.jpg");
        this.gana2 = this.app.loadImage("src/images/gana 2.jpg");
        this.gana2_2 = this.app.loadImage("src/images/gana 2_2.jpg");
        this.vs = this.app.loadImage("src/images/vs.png");
        this.fondo = this.app.loadImage("src/images/textura fondo.jpg");
        for (let i = 0; i < 6; i++) {
            this.vidas1_img.push(this.app.loadImage("src/images/jugador 1 vida " + i + ".png")); 
        }
        for (let i = 0; i < 6; i++) {
            this.vidas2_img.push(this.app.loadImage("src/images/jugador 2 vida " + i + ".png")); 
        }

        this.app.soundFormats('mp3','wav');
        this.backgroundSound = this.app.loadSound("src/sounds/background.mp3");
        this.power = this.app.loadSound("src/sounds/power.wav");
        this.shoot = this.app.loadSound("src/sounds/shoot.wav");
        this.win = this.app.loadSound("src/sounds/win.mp3");
        this.golpe = this.app.loadSound("src/sounds/golpe.wav");
        this.seleccion = this.app.loadSound("src/sounds/seleccion.mp3");
        this.gong = this.app.loadSound("src/sounds/gong.mp3");
        this.menu = this.app.loadSound("src/sounds/menu.wav");
        
        this.agregarOrbe = this.agregarOrbe.bind(this);
        setInterval(this.agregarOrbe,15000);

        this.comenzarJuego = this.comenzarJuego.bind(this);
    }

    draw(){
        this.app.textFont(this.tipo);
        switch (this.pantalla) {
            case 0:
                this.vidas = 5;
                this.vidas2 = 5;
                this.win.stop();
                this.app.background(0);
                this.app.image(this.inicio,0,0);
                if (this.menu && this.menu.isLoaded() && !this.menu.isPlaying()){
                    this.menu.setVolume(0.5);
                    this.menu.play();
                }
                if (this.app.mouseX >= 285-(415/2) && this.app.mouseX <= 285+(415/2) && this.app.mouseY >= 904-(96/2) && this.app.mouseY <= 904+(96/2)) {
                    this.app.image(this.inicioJugar,0,0);
                }
                if (this.app.mouseX >= 926-(424/2) && this.app.mouseX <= 926+(424/2) && this.app.mouseY >= 904-(96/2) && this.app.mouseY <= 904+(96/2)) {
                    this.app.image(this.inicioInstrucciones,0,0);
                }

                break;
        
            case 1:
                this.app.image(this.instrucciones,0,0);
                if (this.app.mouseX >= 920-(439/2) && this.app.mouseX <= 920+(439/2) && this.app.mouseY >= 904-(96/2) && this.app.mouseY <= 904+(96/2)) {
                    this.app.image(this.instrucciones2,0,0);
                }

                break;
            case 2:
                    this.app.rectMode(this.app.CORNER);
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.fondo,0,0);
                    this.menu.stop();
                    if (this.backgroundSound && this.backgroundSound.isLoaded() && !this.backgroundSound.isPlaying()){
                        this.backgroundSound.setVolume(1);
                        this.backgroundSound.play();
                    }
                    
                    for(let i=0;i<11;i++){
                        for(let j=0;j<15;j++){
                
                            let value=this.escenario1[i];
                            let value2=value[j];
                            
                            if(value2==0){
                                this.app.image(this.arbol,j*this.ancho,i*this.ancho, this.ancho, this.ancho);
                            }
                            else if(value2==2){
                                this.app.image(this.arbol2,j*this.ancho,i*this.ancho, this.ancho, this.ancho);
                            }
                            else if(value2==3){
                                this.app.image(this.puerta,j*this.ancho,i*this.ancho, this.ancho, this.ancho);
                            }
                            else if(value2==4){
                                this.app.image(this.gato,j*this.ancho,i*this.ancho, this.ancho, this.ancho);
                            }
                            else if(value2==5){
                                this.app.image(this.torre1,j*this.ancho,i*this.ancho, this.ancho, this.ancho);
                            }
                            else if(value2==6){
                                this.app.image(this.torre2,j*this.ancho,i*this.ancho, this.ancho, this.ancho);
                            }
                            else if(value2==7){
                                this.app.image(this.arbol3,j*this.ancho,i*this.ancho, this.ancho, this.ancho);
                            }
                            else{
                                this.app.image(this.tierra,j*this.ancho,i*this.ancho, this.ancho, this.ancho);
                            }
                        }
                    }
                    for (let i = 0; i < this.orbes.length; i++) {
                        this.orbes[i].dibujarOrbe();
                        if (this.validarChoque(this.dragon1,this.orbes[i])) {
                            if (this.vidas < 5) {
                                this.vidas++;
                              }  
                              this.orbes.splice(i,1);
                              this.contadorOrbes -= 1;
                              this.power.setVolume(0.5);
                              this.power.play();
                              return;
                          }
                          if (this.validarChoque(this.dragon2,this.orbes[i])) {
                            if (this.vidas2 < 5) {
                                this.vidas2++;
                            }
                            this.orbes.splice(i,1);
                            this.contadorOrbes -= 1;
                            this.power.setVolume(0.5);
                            this.power.play();
                            return;
                           
                        }
                        }
                    
                    this.dragon1.dibujarDragon();
                    this.dragon2.dibujarDragon();
                    for (let i = 0; i < this.fuegos2.length; i++) {
                        this.fuegos2[i].dibujarFuego();
                        if (this.validarChoque(this.fuegos2[i],this.dragon1)) {
                            this.golpe.play();
                            this.fuegos2[i].activo2 = false;
                            this.vidas -= 1;
                            this.dragon1.x = this.app.random([80,160,320,400,640,720,800,880,1040]);
                            this.dragon1.y = this.app.random([80,720]);
                        }
                        if (this.fuegos2[i].activo2==false){
                            this.fuegos2.splice(i,1);
                        }
                    }
                    for (let i = 0; i < this.fuegos.length; i++) {
                        this.fuegos[i].dibujarFuego();
                        if (this.validarChoque(this.fuegos[i],this.dragon2)) {
                            this.golpe.play();
                            this.fuegos[i].activo = false;
                            this.vidas2 -= 1;
                            this.dragon2.x = this.app.random([80,160,320,400,640,720,800,880,1040]);
                            this.dragon2.y = this.app.random([80,720]);
                        }
                        if (this.fuegos[i].activo==false){
                            this.fuegos.splice(i,1);
                        }
                    }
                    
                    this.app.textSize(20);
                    this.app.image(this.vidas1_img[this.vidas2],0,0);
                    this.app.image(this.vidas2_img[this.vidas],0,0);
                    this.app.image(this.vs,0,0);
                    this.app.textSize(60);
                    if(this.vidas == 0){
                        this.pantalla = 3;
                    }
                    else if(this.vidas2 == 0){
                        this.pantalla = 4;
                    }
                break;
            case 3:
                this.backgroundSound.stop();
                    this.app.image(this.gana,0,0);
                    if (this.win && this.win.isLoaded() && !this.win.isPlaying()){
                        this.win.setVolume(0.5);
                        this.win.play();
                    }
                    if (this.app.mouseX >= 874-(320/2) && this.app.mouseX <= 974+(320/2) && this.app.mouseY >= 904-(96/2) && this.app.mouseY <= 904+(96/2)) {
                        this.app.image(this.gana1,0,0);
                    }

                break;
            case 4:
                this.backgroundSound.stop();
                this.app.image(this.gana2,0,0);
                if (this.win && this.win.isLoaded() && !this.win.isPlaying()){
                    this.win.setVolume(0.5);
                    this.win.play();
                }
                if (this.app.mouseX >= 874-(320/2) && this.app.mouseX <= 974+(320/2) && this.app.mouseY >= 904-(96/2) && this.app.mouseY <= 904+(96/2)) {
                    this.app.image(this.gana2_2,0,0);
                }

                break;
        }
        
    }
    
    key(){
        //jugador1
        this.dragon1.moverJugador1();
        if(this.app.keyCode==this.app.UP_ARROW){
            this.dir = 0;
        }
        else if(this.app.keyCode==this.app.DOWN_ARROW){
            this.dir = 1;
        }
        else if(this.app.keyCode==this.app.LEFT_ARROW){
            this.dir = 2;
        }
        else if(this.app.keyCode==this.app.RIGHT_ARROW){
            this.dir = 3;
        }
        
        //jugador 2
        this.dragon2.moverJugador2();
        if(this.app.keyCode==87){
            this.dir2 = 0;
        }
        else if(this.app.keyCode==83){
            this.dir2 = 1;
        }
        else if(this.app.keyCode==65){
            this.dir2 = 2;
        }
        else if(this.app.keyCode==68){
            this.dir2 = 3;
        }
        this.agregarDisparos();
    }
    mouse(){
        switch (this.pantalla) {
            case 0:
                if (this.app.mouseX >= 285-(415/2) && this.app.mouseX <= 285+(415/2) && this.app.mouseY >= 904-(96/2) && this.app.mouseY <= 904+(96/2)) {
                    this.gong.play();
                    setInterval(this.comenzarJuego,4000);
                }
                if (this.app.mouseX >= 926-(424/2) && this.app.mouseX <= 926+(424/2) && this.app.mouseY >= 904-(96/2) && this.app.mouseY <= 904+(96/2)) {
                        this.pantalla = 1;
                        this.seleccion.play();
                }
                break;
        
            case 1:
                    if (this.app.mouseX >= 920-(439/2) && this.app.mouseX <= 920+(439/2) && this.app.mouseY >= 904-(96/2) && this.app.mouseY <= 904+(96/2)) {
                        this.gong.play();
                        setInterval(this.comenzarJuego,4000);
                    }
                break;
            case 3:
                    if (this.app.mouseX >= 874-(320/2) && this.app.mouseX <= 974+(320/2) && this.app.mouseY >= 904-(96/2) && this.app.mouseY <= 904+(96/2)) {
                        this.vidas = 3;
                        this.vidas2 = 3;
                        this.pantalla = 0;
                    }
                break;
            case 4:
                    if (this.app.mouseX >= 874-(320/2) && this.app.mouseX <= 974+(320/2) && this.app.mouseY >= 904-(96/2) && this.app.mouseY <= 904+(96/2)) {
                        
                        this.pantalla = 0;
                    }
                break;

        } 
        
    }
    validarChoque(d,e){
        if (d.x + 10 > e.x && d.x - 10 < e.x && d.y + 10 > e.y && d.y - 10 < e.y) {
          return true;
        }
        return false;
      }

    agregarOrbe(){        
        if(this.contadorOrbes < 3 && this.pantalla == 2){
            this.contadorOrbes++;
            this.orbe = new Orbe (this.app,400,400,"src/images/escudito.png",this.escenario1);
        }
        this.orbes.push(this.orbe);
    }
    agregarDisparos(){
        if(this.app.keyCode==70){
            let r = new Fuego2(this.app,this.dragon2.x,this.dragon2.y,"src/images/fuego2.png",this.escenario1,this.dir2,this.activo2);
            this.fuegos2.push(r);
            if (!this.shoot.isPlaying()) {
                this.shoot.playMode('restart');
                this.shoot.play();
            }
            
        }
        if(this.app.keyCode==32){
            let r = new Fuego(this.app,this.dragon1.x,this.dragon1.y,"src/images/fuego.png",this.escenario1,this.dir,this.activo);
            this.fuegos.push(r);
            if (!this.shoot.isPlaying()) {
                this.shoot.playMode('restart');
                this.shoot.play();
            }
        }
    }
    comenzarJuego(){
        this.pantalla = 2;
    }
}