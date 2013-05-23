/*
 * fireworks.js - Kenneth Kufluk (http://kenneth.kufluk.com/)
 * http://js-fireworks.appspot.com/
 * MIT (X11) Licensed
 
 Copyright (c) 2010 Kenneth Kufluk

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 
 *
 */

var items = Array(
	'Cada instante contigo bien vivido hace que cada Ayer sea un sueño de felicidad y cada Mañana una aventura. Me gustaría estar contigo cada décima de segundo.',
	'Soy afortunado de compartir días de mi vida contigo y cuando se cumple un año más tomo conciencia de lo que te amo.',
	'Cada año que paso contigo me sabe a solo unos minutos, me gustaría vivir eternamente, respirar tu aire, sentir tu pulso y tu corazón mil siglos más.',
	'Te deseo que tu día de cumpleaños me tengas tan presente como te he tenido en mi corazón cada segundo, cada instante.',
	'Un amor que continua abriéndose paso en la dificultades se alimenta para toda la vida.. ¡Feliz cumpleaños!',
	'Mi amor hoy es un día muy especial para agradecerle a dios por la fortuna de tenerte conmigo.',
	'Con cada año que pasa, te haces más hermosa, y mi amor se hace mas grande.',
	'Doy gracias a dios porque permitió que un día como hoy naciera una de las mas bellas flores.',
	'Para la persona que llena todo mi corazón en este día. Feliz Cumple Isabelita.',
	'Un día como hoy naciste para la dicha de quienes te queremos y te amamos de verdad. Que dios y la virgen te llenen de bendiciones.',
	'Es tan bonito compartir momentos especiales con alguien como tu. Feliz cumpleaños',
	'El corazón que ama siempre será joven. Te deseo un año lleno de amor y alegría.',
	'Solamente para ti, Isa, deseandole a una persona hermosa... un día hermoso.',
	'Pensando en ti el día de tu cumpleaños, y deseándote mucha felicidad.',
	'Espero que tu cumpleaños sea tan divertido, que se convierta en un acontecimiento anual.',
	'Feliz Cumpleaños. Que tus regalos hoy sean amor y felicidad.',
	'Tu amor Isabelita es una prueba de que Dios me quiere.',
	'Aprovechamos esta fecha tan especial para expresarte de todo corazón el gran cariño y admiración que sentemos hacia ti.',
	'Hoy es un día muy especial para manifestarte un deseo, que tu vida sea premiada con mucha felicidad y que tus cumpleaños sean maravillosos.',
	'Cada cumpleaños es un año más de juventud cuando se tiene un corazón sin edad, una vida inspirada por el amor y guiada por la inteligencia.',
	'Hoy es un día excepcional. El sol irradia alegría. Hoy como todos los días despierto y mi primer pensamiento es hacia ti.',
	'Que el jardín de tu vida este siempre lleno de bellas flores en semejanza a tus invaluables virtudes.',
	'Los cumpleaños van y vienen. Pero las personas inolvidables como tu permanecen en el corazón para siempre.',
	'La mas hermosa de todas las flores empieza a florecer sus pétalos llenos de vida, llenos de amor. Son el símbolo de una linda mujer que cumple años hoy.',
	'Que este día sea el comienzo de otro año de felicidad.',
	'No hay regalo que pueda superar mi deuda eterna contigo, aunque vivieras mil años.',
	'Recuerda que la vida es bella, y que no interesa cuántos cumplas lo que realmente interesa es el cariño y el entusiasmo que colocas a esta fecha tan especial.',
	'Tu amor es para mi tan importante que no quiero dejar de compartirlo mil años más contigo...',
	'La distancia hace que el silencio no hable; con palabras que viven con tu voz y con el eco de tu risa.',
	'En tu cumpleaños quiero recordar contigo momentos especiales, momentos llenos de alegría, es decir, cada segundo a tu lado.',
	'Hay un día especial en el año, en que nos acordamos lo grandioso que es compartir contigo.',
	'Que este año sea una perla mas en el collar de tus aventuras y logros.',
	'La mas hermosa de todas las rosas empieza a florecer, sus pétalos llenos de vida, llenos de amor. Son el símbolo de una linda mujer que cumple años hoy.',
	'Para la mujercita mas bella y dulce de este mundo, rogando a dios le conceda muchos años mas de vida.',
	'Que las sanas ilusiones de hoy se conviertan en realidad y que toda la dicha del mundo sea tuya hoy.',
	'El nacimiento nos da la vida y tu presencia en la tierra es un regalo permanente ¡Feliz Cumple!',
	'Quiero felicitarte por tu cumpleaños y desear que tus sueños jamás desaparezcan y que continúen tan vivos y tan lindos como tu.',
	'Que tu vida no se llene de años, sino que tus años se llenen de vida.Feliz Cumpleaños.',
	'Un año más se queda atrás, y uno nuevo llega para llenarlo de sonrisas, abrazos y momentos especiales.',
	'Hoy brindamos por tu felicidad, que siempre brille para tí la estrella del éxito y del amor.',
	'Gracias por ser alguien con quien siempre puedo hablar, meditar, reflexionar y compartir mi vida.',
	'Lo pasado ha huido, lo que esperas está ausente, pero el presente es tuyo.',
	'En la medida en que pasan los años nos damos cuenta lo hermosa que es la vida y de lo que nos enriquecemos con el pasar de los años.',
	'No hay porque esconderse, solo es un año mas. Feliz Cumpleaños.',
	'Un año más, un año menos: lo importante es que lo gocemos.',
	'No pienses que te amo, porque en realidad te amo mas de lo que piensas.',
	'Alguna vez fuiste a la luna?... Porque yo voy a marte siempre....',
	'Si en la noche no puedes dormir, no cuentes estrellas...cuenta conmigo.',
	'No desayuno por pensar en ti, No almuerzo por pensar en ti, No ceno por pensar en ti, No duermo porque tengo hambre.',
	'Felicidad es una palabra de 9 letras, la mia resume en 2...TU, talvez 3... ISA',
	'De todas las flores, la más bonita es la rosa y de todas las mujeres, tú eres la más hermosa.',
	'¿Sabes por qué los ángeles están enfadado conmigo? Por que en vez de soñar con ellos sueño contigo.',
	'Mi dulce paraíso, acúname en tu tierno amor con tu corazón de miel, elévame al cielo con tus besos, mi angel bella.',
	'Si pudiera elegir un poder, elegiria el poder de estar siempre contigo mi vida.',
	'Empezaste como amiga, terminaste como amor, poco a poco así has robado todo mi corazón.',
	'Cuando mires las estrellas acuérdate de mí, por que en cada una de ellas hay un beso para ti.',
	'Dormire temprano, para soñar mas tiempo contigo mi cabeza de bombon.',
	'La vida es mia, pero el corazon... es tuyo. La sonrisa es mia, pero el motivo... eres tu.',
	'El pasado fue mio, mi presente es tuyo, y el futuro es nuestro.',
	'Ayer te soñé, hoy te conocí, mañana te querré, jamas te olvidaré.',
	'Necesito un diccionario, porque desde que te ví me he quedado sin palabras.',
	'Tu sonrisa es mi vida, no me dejes morir.',
	'En mi corazon solo hay sitío para tí, tanto te amo, que ya no hay sitío ni para mí.',
	'Es verdad que necesito el corazon para vivir, pero más te necesito a tí para hacerlo latir.',
	'El amor no se mira, se siente, y aún más cuando tú estás junto a mi.',
	'Hoy celebramos que eres un año mayor...pero no te preocupes que estás mucho mejor.'
);
function getMsgs(){
	$('#mismensajes').fadeOut('slow',function() {
		var item = items[Math.floor(Math.random()*items.length)];
		$('#mismensajes').html(item).fadeIn('slow');
	});
}

$(document).ready(function(){
	getMsgs();
	$('#mismensajes').click(function(){
		getMsgs();
    });

    var resizeTimer = null; 
    $(window).bind('resize', function() { 
        if (document.all) return;
        if (resizeTimer) clearTimeout(resizeTimer); 
        resizeTimer = setTimeout("location.reload()", 100); 
    }); 

    var params = location.search;
    var message = "";
    FireworkDisplay.launchText();
});

FireworkDisplay = {
    GRAVITY : 4,
    FRAME_RATE : 40,
    DEPLOYMENT_RATE : 10,
    FIREWORK_SPEED : 3,
    DISPERSION_WIDTH : 1,
    DISPERSION_HEIGHT : 2,
    FIREWORK_PAYLOAD : 10,
    FRAGMENT_SPREAD : 5,
    TEXT_LINE_HEIGHT : 55,
    FIREWORK_READY : 0,
    FIREWORK_LAUNCHED : 1,
    FIREWORK_EXPLODED : 3,
    FIREWORK_FRAGMENT : 2,
    canvas : 0,
    canvaswidth : 320,
    canvasheight : 240,
    ctx : 0,
    blockPointer : 0,
    fireworks : [],
    allBlocks : new Array(),
    gameloop : 0,
    updateDisplay : function() {
        this.ctx.clearRect(0, 0, this.canvaswidth, this.canvasheight);
        var firecount = 0;
        for (var i=0;i<this.fireworks.length;i++) {
            if (this.fireworks[i]==null) continue; 
            if (this.fireworks[i].status!=this.FIREWORK_EXPLODED) {
                firecount++;
            }
            this.displayFirework(this.fireworks[i]);
        }
        if (firecount == 0) {
            $('#cv').fadeOut('slow');
            $('#form').fadeIn('slow');
        }
    },
    addFireworks : function() {
        if (this.blockPointer>=this.allBlocks.length) {
            return;
        }
        var fw = this.fireworks[this.fireworks.length] = new Firework(this.fireworks.length);
        var targetx = this.allBlocks[this.blockPointer][0];
        targetx = (((targetx)) / 300) * this.DISPERSION_HEIGHT;
        var targety = this.allBlocks[this.blockPointer][1];
        targety = (((10-targety) / 100) * this.DISPERSION_WIDTH) + 3.5;
        this.launchFirework(fw, targetx, targety);
        this.blockPointer++;
        setTimeout("FireworkDisplay.addFireworks()", 1000/this.DEPLOYMENT_RATE);
    },
    launchText :  function() {
        this.fireworks = [];
        this.blockPointer = 0;
        clearTimeout(this.gameloop);
        //CANVAS
        this.canvas = $("#cv").get(0);
        if (typeof G_vmlCanvasManager != "undefined") {
            this.canvas = G_vmlCanvasManager.initElement(this.canvas);
        }
        this.ctx = this.canvas.getContext("2d");
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.lineWidth = "2";
        this.ctx.strokeStyle = "rgb(255, 255, 255)";
        this.canvaswidth = $(window).width();
        this.canvasheight = $(window).height();

        $(this.canvas).bind('click', function() { 
            $('#cv').hide();
			$('#form').fadeIn('slow');
        });
        var text = 'ISABELITA';

        var totalHeightOffset = 0;
        var totalWidthOffset = new Array();
        var widthCounter = 0;
        totalWidthOffset[widthCounter] = 0;
        for (var i=0;i<text.length;i++) {
            if (text.charAt(i)==' ') {
                totalHeightOffset += this.TEXT_LINE_HEIGHT;
                widthCounter++;
                totalWidthOffset[widthCounter] = 0;
            } else {
                var maxWidthOffset = 0;
                for (var j=0;j<FONT_FIREWORK[text.charAt(i)].length;j++) {
                    var chararr = FONT_FIREWORK[text.charAt(i)][j];
                    maxWidthOffset = Math.max(maxWidthOffset, chararr[0]);
                }
                totalWidthOffset[widthCounter] += maxWidthOffset + 20;
            }
        }

        this.allBlocks = new Array();
        var windowHeight = $(window).height();
        var offsetTop = totalHeightOffset;
        offsetTop += (windowHeight-totalHeightOffset)/6;
        var offsetLeft = 0;
        var heightOffsetCount = 0;
        for (var i=0;i<text.length;i++) {
            if (text.charAt(i)==' ') {
                heightOffsetCount++;
                offsetTop = offsetTop - this.TEXT_LINE_HEIGHT;
                offsetLeft = 0;
            } else {
                var maxWidthOffset = 0;
                for (var j=0;j<FONT_FIREWORK[text.charAt(i)].length;j++) {
                    var chararr = FONT_FIREWORK[text.charAt(i)][j];
                    this.allBlocks[this.allBlocks.length] = [(chararr[0]+offsetLeft)-(totalWidthOffset[heightOffsetCount]/2), chararr[1]-offsetTop];
                    maxWidthOffset = Math.max(maxWidthOffset, chararr[0]);
                }
                offsetLeft += maxWidthOffset+20;  //plus character spacing
            }
        }
        this.gameloop = setInterval("FireworkDisplay.updateDisplay()", 1000/this.FRAME_RATE);
        this.addFireworks();
        $('#form').fadeOut('slow');
    },
    launchFirework : function(fw, dispersion, speed) {
        fw.dx = dispersion;
        fw.dy = speed;
        fw.status = this.FIREWORK_LAUNCHED;
    },
    disperseFirework : function(fw, speed) {
        fw.dx = speed * (0.5-Math.random());
        fw.dy = speed * (0.5-Math.random()) + 1;
    },
    explodeFirework : function(fw, speed) {
        fw.status = this.FIREWORK_EXPLODED;
        fw.r = (Math.random() /2) + 0.5;
        fw.g = (Math.random() /2) + 0.5;
        fw.b = (Math.random() /2) + 0.5;
        fw.brightness = 200;
        this.ctx.strokeStyle = "rgb(200, 200, 200)";
        // add the fragments
        var frags = Math.random() * this.FIREWORK_PAYLOAD;
        for (var i=0;i<frags;i++) { 
            var spark = this.fireworks[this.fireworks.length] = new Firework(this.fireworks.length);
            spark.x = fw.x;
            spark.y = fw.y;
            spark.r = fw.r;
            spark.g = fw.g;
            spark.b = fw.b;
            spark.status = this.FIREWORK_FRAGMENT;
            this.disperseFirework(spark, Math.random()*this.FRAGMENT_SPREAD);
        }
    },
    destroyFirework : function(fw) {
        this.fireworks[fw.index] = null;
    },
    displayFirework : function(fw, speed) {
        if (fw.y<0) this.destroyFirework(fw);
        if (fw.status==this.FIREWORK_EXPLODED) {
            this.ctx.beginPath();
            this.ctx.fillStyle = "rgb(200, 200, 200)";
            var radius         = 3;                    // Arc radius
            var startAngle     = 0;                     // Starting point on circle
            var endAngle       = Math.PI*2; // End point on circle
            var anticlockwise  = true; // clockwise or anticlockwise
            this.ctx.arc(fw.x, this.canvas.height-fw.y, radius, startAngle, endAngle, anticlockwise);
            this.ctx.fill();
            return;
        }
        fw.colour = "rgb(80, 80, 80)";
        this.ctx.strokeStyle = fw.colour;
        var forces = {x:0,y:-0.05};
        if (fw.status==this.FIREWORK_FRAGMENT) {
            forces.y = this.GRAVITY/-100;
            fw.colour = "rgb("+Math.round(fw.r*fw.brightness)+", "+Math.round(fw.g*fw.brightness)+", "+Math.round(fw.b*fw.brightness)+")";
            this.ctx.strokeStyle = fw.colour;
            fw.brightness-=5;
            if (fw.brightness<0) this.destroyFirework(fw);
        }
        if (fw.dy<-1 && fw.status==this.FIREWORK_LAUNCHED) {
            this.explodeFirework(fw);
        }
        fw.start = {x:fw.x, y:fw.y};
        //apply accelerations
        fw.dx += forces.x*this.FIREWORK_SPEED;
        fw.dy += forces.y*this.FIREWORK_SPEED;
        //apply velocities
        fw.x += fw.dx*this.FIREWORK_SPEED;
        fw.y += fw.dy*this.FIREWORK_SPEED;
        //show
        if (fw.previous) {
            this.ctx.beginPath();
            this.ctx.moveTo(fw.previous.x, this.canvas.height-fw.previous.y);
            this.ctx.lineTo(fw.x, this.canvas.height-fw.y);
            this.ctx.stroke();
            this.ctx.closePath();
        }
        fw.previous = {x:fw.start.x, y:fw.start.y};
    }
}

Firework = function(index) {
    this.index = index;
    this.dx = 0;
    this.dy = 0;
    //this.x = FireworkDisplay.canvaswidth/8;
    this.x = 200;
    this.y = 0;
    this.status = FireworkDisplay.FIREWORK_READY;
    this.brightness = 255;
    this.r = 9;
    this.g = 1;
    this.b = 1;
    this.start = {x:0, y:0};
    this.previous = 0;
}


// Home-made point-based font.
var FONT_FIREWORK = {"!":[[5,-40],[5,-30],[5,-20],[5,0]],"\"":[[20,-40],[20,-30],[5,-40],[5,-30]],"#":[[35,-40],[45,-30],[35,-30],[15,-40],[25,-30],[35,-20],[45,-10],[15,-30],[35,-10],[5,-30],[15,-20],[25,-10],[35,0],[15,-10],[5,-10],[15,0]],"%":[[45,-40],[35,-30],[15,-40],[45,-10],[5,-40],[15,-30],[25,-20],[35,-10],[45,0],[5,-30],[35,0],[15,-10],[5,0]],"&":[[35,-40],[25,-40],[35,-30],[15,-40],[35,-20],[15,-30],[25,-20],[15,-20],[25,-10],[35,0],[5,-20],[25,0],[5,-10],[15,0],[25,10],[5,0]],"'":[[5,-40],[5,-30]],"(":[[15,-40],[5,-30],[5,-20],[5,-10],[15,0]],")":[[5,-40],[15,-30],[15,-20],[15,-10],[5,0]],"*":[[25,-40],[5,-40],[15,-30],[25,-20],[5,-20]],"+":[[20,-40],[35,-20],[20,-30],[25,-20],[15,-20],[20,-10],[5,-20],[20,0]],",":[[5,0],[5,10]],"-":[[35,-20],[25,-20],[15,-20],[5,-20]],"-":[[35,-20],[25,-20],[15,-20],[5,-20]],".":[[5,0]],"/":[[45,-40],[35,-30],[25,-20],[15,-10],[5,0]],":":[[5,-30],[5,-10]],";":[[5,-30],[5,-10],[5,0]],"<":[[15,-25],[5,-15],[15,-5]],"=":[[35,-30],[25,-30],[15,-30],[35,-10],[5,-30],[25,-10],[15,-10],[5,-10]],">":[[5,-25],[15,-15],[5,-5]],"?":[[35,-40],[25,-40],[35,-30],[15,-40],[35,-20],[5,-40],[25,-20],[15,-20],[15,0]],"@":[[35,-30],[25,-40],[15,-40],[35,-20],[25,-20],[35,-10],[5,-30],[35,0],[15,-15],[5,-20],[25,0],[15,-5],[5,-10],[15,5],[5,0]],"A":[[35,-30],[25,-40],[15,-40],[35,-20],[25,-20],[35,-10],[5,-30],[15,-20],[35,0],[5,-20],[5,-10],[5,0]],"B":[[25,-40],[15,-40],[25,-30],[35,-20],[5,-40],[25,-20],[35,-10],[5,-30],[15,-20],[35,0],[5,-20],[25,0],[5,-10],[15,0],[5,0]],"C":[[35,-40],[25,-40],[15,-40],[5,-30],[35,0],[5,-20],[25,0],[5,-10],[15,0]],"D":[[35,-30],[25,-40],[15,-40],[35,-20],[5,-40],[35,-10],[5,-30],[5,-20],[25,0],[5,-10],[15,0],[5,0]],"E":[[35,-40],[25,-40],[15,-40],[5,-40],[25,-20],[5,-30],[15,-20],[35,0],[5,-20],[25,0],[5,-10],[15,0],[5,0]],"F":[[35,-40],[25,-40],[15,-40],[5,-40],[25,-20],[5,-30],[15,-20],[5,-20],[5,-10],[5,0]],"G":[[35,-40],[25,-40],[15,-40],[35,-20],[25,-20],[35,-10],[5,-30],[35,0],[5,-20],[25,0],[5,-10],[15,0]],"H":[[35,-40],[35,-30],[35,-20],[5,-40],[25,-20],[35,-10],[5,-30],[15,-20],[35,0],[5,-20],[5,-10],[5,0]],"I":[[25,-40],[15,-40],[5,-40],[15,-30],[15,-20],[15,-10],[25,0],[15,0],[5,0]],"J":[[35,-40],[25,-40],[35,-30],[35,-20],[35,-10],[25,0],[5,-10],[15,0]],"K":[[35,-40],[25,-30],[5,-40],[25,-20],[35,-10],[5,-30],[15,-20],[35,0],[5,-20],[5,-10],[5,0]],"L":[[5,-40],[5,-30],[35,0],[5,-20],[25,0],[5,-10],[15,0],[5,0]],"M":[[35,-40],[35,-30],[25,-30],[35,-20],[5,-40],[15,-30],[35,-10],[20,-20],[5,-30],[35,0],[5,-20],[5,-10],[5,0]],"N":[[35,-40],[35,-30],[35,-20],[5,-40],[15,-30],[25,-20],[35,-10],[5,-30],[35,0],[5,-20],[5,-10],[5,0]],"O":[[35,-30],[25,-40],[15,-40],[35,-20],[35,-10],[5,-30],[5,-20],[25,0],[5,-10],[15,0]],"P":[[35,-30],[25,-40],[15,-40],[5,-40],[25,-20],[5,-30],[15,-20],[5,-20],[5,-10],[5,0]],"Q":[[35,-30],[25,-40],[15,-40],[35,-20],[35,-10],[5,-30],[25,-10],[35,0],[5,-20],[25,0],[5,-10],[15,0]],"R":[[35,-30],[25,-40],[15,-40],[5,-40],[25,-20],[35,-10],[5,-30],[15,-20],[35,0],[5,-20],[5,-10],[5,0]],"S":[[35,-35],[25,-40],[15,-40],[35,-15],[25,-20],[5,-35],[35,-5],[15,-20],[5,-25],[25,0],[15,0],[5,-5]],"T":[[35,-40],[25,-40],[15,-40],[20,-30],[5,-40],[20,-20],[20,-10],[20,0]],"U":[[35,-40],[35,-30],[35,-20],[5,-40],[35,-10],[5,-30],[5,-20],[25,0],[5,-10],[15,0]],"V":[[35,-40],[35,-30],[35,-20],[5,-40],[5,-30],[25,-10],[5,-20],[15,-10],[20,0]],"W":[[35,-40],[35,-30],[20,-40],[35,-20],[20,-30],[5,-40],[35,-10],[20,-20],[5,-30],[35,0],[20,-10],[5,-20],[25,0],[5,-10],[15,0]],"X":[[35,-40],[25,-30],[5,-40],[15,-30],[20,-20],[25,-10],[35,0],[15,-10],[5,0]],"Y":[[35,-40],[35,-30],[5,-40],[25,-20],[5,-30],[15,-20],[20,-10],[20,0]],"Z":[[35,-40],[25,-40],[15,-40],[25,-30],[5,-40],[20,-20],[35,0],[15,-10],[25,0],[15,0],[5,0]],"_":[[45,0],[35,0],[25,0],[15,0],[5,0]],"a":[[25,-30],[35,-20],[15,-30],[35,-10],[25,-15],[5,-30],[35,0],[15,-15],[25,0],[5,-10],[15,0]],"b":[[25,-30],[35,-20],[5,-40],[15,-30],[35,-10],[5,-30],[5,-20],[25,0],[5,-10],[15,0],[5,0]],"c":[[35,-30],[25,-30],[15,-30],[35,0],[5,-20],[25,0],[5,-10],[15,0]],"d":[[35,-40],[35,-30],[25,-30],[35,-20],[15,-30],[35,-10],[35,0],[5,-20],[25,0],[5,-10],[15,0]],"e":[[25,-30],[35,-20],[15,-30],[25,-15],[35,0],[15,-15],[5,-20],[25,0],[5,-10],[15,0]],"f":[[25,-40],[15,-40],[25,-20],[5,-30],[15,-20],[5,-20],[5,-10],[5,0]],"g":[[35,-30],[25,-30],[35,-20],[15,-30],[35,-10],[25,-10],[35,0],[5,-20],[15,-10],[25,10],[15,10],[5,10]],"h":[[5,-40],[25,-20],[35,-10],[5,-30],[15,-20],[35,0],[5,-20],[5,-10],[5,0]],"i":[[5,-40],[5,-20],[5,-10],[5,0]],"j":[[15,-40],[15,-20],[15,-10],[15,0],[5,10]],"k":[[35,-30],[5,-40],[25,-20],[35,-10],[5,-30],[15,-20],[35,0],[5,-20],[5,-10],[5,0]],"l":[[5,-40],[5,-30],[5,-20],[5,-10],[15,0]],"m":[[35,-30],[45,-20],[25,-30],[45,-10],[15,-30],[25,-20],[45,0],[5,-30],[25,-10],[5,-20],[25,0],[5,-10],[5,0]],"n":[[25,-30],[35,-20],[15,-30],[35,-10],[5,-30],[35,0],[5,-20],[5,-10],[5,0]],"o":[[25,-30],[35,-20],[15,-30],[35,-10],[5,-20],[25,0],[5,-10],[15,0]],"p":[[25,-30],[35,-20],[15,-30],[35,-10],[5,-30],[5,-20],[25,0],[5,-10],[15,0],[5,0],[5,10]],"q":[[35,-30],[25,-30],[35,-20],[15,-30],[35,-10],[35,0],[5,-20],[25,0],[35,10],[5,-10],[15,0]],"r":[[35,-30],[25,-30],[5,-30],[15,-20],[5,-20],[5,-10],[5,0]],"s":[[35,-30],[25,-30],[15,-30],[35,-10],[25,-15],[15,-15],[5,-20],[25,0],[15,0],[5,0]],"t":[[25,-30],[5,-40],[15,-30],[5,-30],[5,-20],[25,0],[5,-10],[15,0]],"u":[[35,-30],[35,-20],[35,-10],[5,-30],[35,0],[5,-20],[25,0],[5,-10],[15,0]],"v":[[35,-30],[35,-20],[5,-30],[25,-10],[5,-20],[15,-10],[20,0]],"w":[[35,-30],[35,-20],[20,-30],[35,-10],[20,-20],[5,-30],[35,0],[20,-10],[5,-20],[25,0],[5,-10],[15,0]],"x":[[35,-30],[25,-20],[5,-30],[15,-20],[25,-10],[35,0],[15,-10],[5,0]],"y":[[35,-30],[35,-20],[35,-10],[5,-30],[25,-10],[35,0],[5,-20],[15,-10],[25,10],[15,10]],"z":[[35,-30],[25,-30],[15,-30],[25,-20],[5,-30],[35,0],[15,-10],[25,0],[15,0],[5,0]],"0":[[35,-30],[25,-40],[15,-40],[35,-20],[35,-10],[15,-25],[25,-15],[5,-30],[5,-20],[25,0],[5,-10],[15,0]],"1":[[15,-40],[15,-30],[5,-30],[15,-20],[15,-10],[15,0]],"2":[[35,-35],[25,-40],[35,-25],[15,-40],[25,-20],[5,-35],[15,-20],[35,0],[25,0],[5,-10],[15,0],[5,0]],"3":[[25,-40],[35,-30],[15,-40],[5,-40],[25,-20],[35,-10],[15,-20],[25,0],[15,0],[5,0]],"4":[[35,-40],[35,-30],[35,-20],[5,-40],[25,-20],[35,-10],[5,-30],[15,-20],[35,0],[5,-20]],"5":[[35,-40],[25,-40],[15,-40],[35,-15],[5,-40],[25,-20],[35,-5],[5,-30],[15,-20],[5,-20],[25,0],[15,0],[5,0]],"6":[[35,-40],[25,-40],[15,-40],[35,-20],[25,-20],[35,-10],[5,-30],[15,-20],[5,-20],[25,0],[5,-10],[15,0]],"7":[[35,-40],[35,-30],[25,-40],[15,-40],[5,-40],[25,-20],[5,-30],[25,-10],[25,0]],"8":[[35,-35],[25,-40],[35,-25],[15,-40],[35,-15],[25,-20],[5,-35],[35,-5],[15,-20],[5,-25],[25,0],[5,-15],[15,0],[5,-5]],"9":[[35,-30],[25,-40],[15,-40],[35,-20],[25,-20],[35,-10],[5,-30],[15,-20],[5,-20],[25,0],[15,0],[5,0]]};