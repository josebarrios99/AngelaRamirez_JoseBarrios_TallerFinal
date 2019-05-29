class Fuego {
    constructor(app,x,y,ruta,escenario1,dir){
        this.app = app;
        this.x = x;
        this.y = y;
        this.ruta = ruta;
        this.imagen = this.app.loadImage(this.ruta);
        this.escenario1 = escenario1;
        this.dir = dir;
        this.moverFuego = this.moverFuego.bind(this);
        this.activo = true;
        setInterval(this.moverFuego,200);
    }
    dibujarFuego(){
        this.app.image(this.imagen,this.x,this.y,80,80);
    }
    moverFuego(){
    
        if(this.dir==0){
            var matX=(this.x)/80;
            var matY=(this.y)/80;
            var val =this.escenario1[matY-1];
            var val2=val[matX];
            if(val2==1){
                this.y-=80;
            }else {
                this.activo=false;
            }
        }
        else if(this.dir==1){
    
            var matX=(this.x)/80;
            var matY=(this.y)/80;
            var val =this.escenario1[matY+1];
            var val2=val[matX];
            if(val2==1){
                this.y+=80;
            }
            else {
                this.activo=false;
            }
        }
        else if(this.dir==2){
    
            var matX=(this.x)/80;
            var matY=(this.y)/80;
            var val =this.escenario1[matY];
            var val2=val[matX-1];
            if(val2==1){
                this.x-=80;
            }
            else {
                this.activo=false;
            }
        }
        else if(this.dir==3){
            var matX=(this.x)/80;
            var matY=(this.y)/80;
            var val =this.escenario1[matY];
            var val2=val[matX+1];
            if(val2==1){
                this.x+=80;
            }
            else {
                this.activo=false;
            }
    }
    }

}