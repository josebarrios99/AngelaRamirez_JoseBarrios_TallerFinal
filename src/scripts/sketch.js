new p5 (function(app){
    var logica;

    app.setup=function(){
        logica = new Logica(app);
}


    app.draw=function(){
        logica.draw();
}
    app.mousePressed=function(){
        logica.mouse();
}

    app.keyPressed=function(){
        logica.key();
}
});
