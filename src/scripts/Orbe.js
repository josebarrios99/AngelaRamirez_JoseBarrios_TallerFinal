class Orbe{
    constructor(app,x,y,ruta,escenario1){
        this.app = app;
        this.x = x;
        this.y = y;
        this.ruta = ruta;
        this.imagen = this.app.loadImage(this.ruta);
        this.escenario1 = escenario1;
        this.moverOrbe = this.moverOrbe.bind(this);
        setInterval(this.moverOrbe,500);
    }

    dibujarOrbe(){
        this.app.image(this.imagen,this.x,this.y,90,90);
    }
    
    moverOrbe(){
        var opciones=[0,1,2,3];
        var opcion=this.app.random(opciones);
        if(opcion==0){
    
            var matX=(this.x)/80;
            var matY=(this.y)/80;
            var val =this.escenario1[matY-1];
            var val2=val[matX];
            if(val2==1){
                this.y-=80;
            }
        }
        else if(opcion==1){
    
            var matX=(this.x)/80;
            var matY=(this.y)/80;
            var val =this.escenario1[matY+1];
            var val2=val[matX];
            if(val2==1){
                this.y+=80;
            }
        }
        else if(opcion==2){
    
            var matX=(this.x)/80;
            var matY=(this.y)/80;
            var val =this.escenario1[matY];
            var val2=val[matX-1];
            if(val2==1){
                this.x-=80;
            }
        }
        else if(opcion==3){
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