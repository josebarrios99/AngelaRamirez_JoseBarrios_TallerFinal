class Jugador {

    constructor(app,x, y, ruta, vidas,escenario1) {
        this.app = app;
        this.x = x;
        this.y = y;
        this.ruta = ruta;
        this.escenario1 = escenario1;
        this.estado = 0;
        this.imagen = [];
        for (let i = 0; i < 4; i++) {
            this.imagen.push(this.app.loadImage(this.ruta + i + ".png"));
        }
        
        this.vidas = vidas;
    }

    dibujarDragon(){
        this.app.image(this.imagen[this.estado],this.x,this.y,90,90);
    }
    moverJugador1(){
        if(this.app.keyCode==this.app.UP_ARROW){
            this.dir = 0;
            this.estado = 2;
            var matX=(this.x)/80;
            var matY=(this.y)/80;
            var val =this.escenario1[matY-1];
            var val2=val[matX];
            if(val2==1){
                this.y-=80;
            }
        }
        else if(this.app.keyCode==this.app.DOWN_ARROW){
            this.dir = 1;
            this.estado = 1;
            var matX=(this.x)/80;
            var matY=(this.y)/80;
            var val =this.escenario1[matY+1];
            var val2=val[matX];
            if(val2==1){
                this.y+=80;
            }
        }
        else if(this.app.keyCode==this.app.LEFT_ARROW){
            this.dir = 2;
            this.estado = 0;
            var matX=(this.x)/80;
            var matY=(this.y)/80;
            var val =this.escenario1[matY];
            var val2=val[matX-1];
            if(val2==1){
                this.x-=80;
            }
        }
        else if(this.app.keyCode==this.app.RIGHT_ARROW){
            this.dir = 3;
            this.estado = 3;
            var matX=(this.x)/80;
            var matY=(this.y)/80;
            var val =this.escenario1[matY];
            var val2=val[matX+1];
            if(val2==1){
                this.x+=80;
            }
        }
    }
        moverJugador2(){
            if(this.app.keyCode==87){
                this.dir2 = 0;
                this.estado = 1;
                var matX=(this.x)/80;
                var matY=(this.y)/80;
                var val =this.escenario1[matY-1];
                var val2=val[matX];
                if(val2==1){
                    this.y-=80;
                }
            }
            else if(this.app.keyCode==83){
                this.dir2 = 1;
                this.estado = 2;
                var matX=(this.x)/80;
                var matY=(this.y)/80;
                var val =this.escenario1[matY+1];
                var val2=val[matX];
                if(val2==1){
                    this.y+=80;
                }
            }
            else if(this.app.keyCode==65){
                this.dir2 = 2;
                this.estado = 0;
                var matX=(this.x)/80;
                var matY=(this.y)/80;
                var val =this.escenario1[matY];
                var val2=val[matX-1];
                if(val2==1){
                    this.x-=80;
                }
            }
            else if(this.app.keyCode==68){
                this.dir2 = 3;
                this.estado = 3;
                var matX=(this.x)/80;
                var matY=(this.y)/80;
                var val =this.escenario1[matY];
                var val2=val[matX+1];
                if(val2==1){
                    this.x+=80;
                }
            }
        }
}