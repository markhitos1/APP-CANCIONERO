
/*BUTTON THE CADENAS*/
const boton = document.querySelector(".cadena-coros-Mayores");
const botonMenor = document.querySelector(".cadena-coros-menores");
const pantalla = document.querySelector(".pantalla-cadena");
const atras = document.querySelector(".atras");
const listasAgregadas = document.getElementById("ol");
const tituloCadenas = document.querySelector(".ti-cadenas");
const listasDeCoros = document.querySelector('.btn-lista');
const hojaCadenas =  document.querySelector('.todos-los-coros')
const btnAtras = document.querySelector('.btn-atras');

const acordes = document.querySelectorAll('h3')

let ver = acordes.forEach(index=>{
  if (index.textContent.includes('C')) {
   index.textContent = 'la-m'
  }

})


const corosMayores = ["yo tengo un amigo",'esta alegria','caminando hacia Canaan','yo siento paz','gloria al Padre','yo le alabo',
'vida abundate','bendicion vine a buscar','yo canto en la lucha','vamos cantando','el es el Rey','Jesus yo te amo','una mirada de fe',
'estamos de fiesta','estoy contento','yo siento un fuego','este es el dia','este es el cristo','no pierdas la fe','cantare , cantare',
'todo lo que respira', 'oh que alegria','quiero sentir','siento gozo en mi alma','hay vida en Jesus','si el espiritu de Dios se mueve',
'que bueno es conocer','cuando Cristo vino','viva la fe','el Dios de la biblia','sonrie que Jesus','hay una senda','si hoy si hoy',
'todos deben de saber','no hay temores','esta es la cosa mas hermosa','yo me levantare','no sabeis que somos templo',
'El Dios de la biblia vive','un milagro','solamente en Cristo','hay una senda','a que tu no sabes','yo me gozo el lunes','si hoy si hoy',
'sonrie que Jesus te ama','Jesus tomo micarga','oh juventud','el mundo dice','todos deben de saber','puede hacerlo otre vez',
'no hay temores en mi ser','yo tengo un Dios muy grande','manda fuego Señor','se siente el fuego','Jesus no vino a condenar'
]
const corosMenores =[
    'yo he creido','para ti','si me preguntan','a Jenezaret','sino hubiera sido','despierta oh alma mia','Dios tiene un barcos',
    'te espero Señor','un poco mas','querido hermano','yo se que estas aqui','preparate para que sientas','esta noche nos vamos a gozar',
    'como ladron en la noche','la palabra de Dios','hay una paloma blanca','no puede estar triste','yo espero el son','espiritu de Dios',
    'como no decite que yo te amo','El vive en mi','vamos escalando peldaños','oh moradora','cantare al Señor','ven,ven,ven espiritu',
    'grandes y maravillosas','aunque un ejercito','El angel removia las aguas','Estamos en la iglesia de Dios','Dios es nuestro amparo',
    'caminare tomado','me gozare, me alegrare','Jesus de Nazaret alegro','Cristo es la peña','como el siervo brama','hay victoria',
    'El hombre de Galilea','no hay fuerte como Jesus','enamorado de Jesus','Cristo te necesita','no hay saludo mas bonito',
    'pon aceite','de donde vendra mi socorro','levantate y resplandece','si tuviera fe','solo en Dios seremos vencedor','ven te invito',
    'como la auroa','aunque tenga que cruzar montes','somos Evangelistas','yo he creido'
]


var estadoLista = false;

boton.addEventListener("click",function(){
   estadoLista = true
    pantalla.style.visibility = "visible";
    tituloCadenas.innerText = 'CADENAS MAYORES'
   
        for(let i=0; i <= 9; i++){
        let numero = Math.floor(Math.random()*36)
       let listaCreada = document.createElement('li');
       listaCreada.innerText = `${corosMayores[numero]}.`;
       listasAgregadas.appendChild(listaCreada);
     }
  
     listasDeCoros.addEventListener('click',function(){
      hojaCadenas.style.visibility='visible';
       if(estadoLista == true){
          for(e = 0; e <= corosMayores.length-1;e++){
            hojaCadenas.style.heigth = `${corosMayores.length * 26}px`
             let listaEnteraMayor = document.createElement('li');
             listaEnteraMayor.innerText = `${corosMayores[e]}`
             hojaCadenas.appendChild(listaEnteraMayor);

          }
       }
 
     })
})

botonMenor.addEventListener("click",function(){
    estadoLista = false
    pantalla.style.visibility = "visible";
    tituloCadenas.innerText = 'CADENAS MENORES'
    
        for(let i=0; i <= 10; i++){
        let numero = Math.floor(Math.random()*50)
       let listaCreada = document.createElement('li');
       listaCreada.innerText = `${corosMenores[numero]}.`;
       listasAgregadas.appendChild(listaCreada);
      }

      listasDeCoros.addEventListener('click',function(){
         hojaCadenas.style.visibility='visible';
          if(estadoLista == false){
             for(e = 0; e <= corosMenores.length-1;e++){
               hojaCadenas.style.heigth = `${corosMenores.length * 26}px`
                let listaEnteraMenor = document.createElement('li');
                listaEnteraMenor.innerText = `${corosMenores[e]}`
                hojaCadenas.appendChild(listaEnteraMenor);
   
             }
          }
    
        })

})

btnAtras.addEventListener("click", ()=>{
  hojaCadenas.style.visibility = 'hidden';
   
})

atras.addEventListener("click", ()=>{
    pantalla.style.visibility = 'hidden';
    location.reload();
})






/*FUNCIONAMIENTO DEL BUTTON*/

function texto(nota,numero,titulo1,titulo2,letra1,letra2,letra3,letra4,letra5,letra6,letra7,letra8,letra9,letra10,letra11,letra12,letra13,letra14,letra15,letra16,letra17){

   const contenedor = document.querySelector('#ceparar-1');
  


   const item1 = document.createElement("div");
   const item2 = document.createElement("button");
   const item3 = document.createElement("div");
   const item4 = document.createElement("div");
   const item5 = document.createElement("div");
   const item6 = document.createElement("div");
   const item7 = document.createElement("h1");
   const item8 = document.createElement("button");
   const item9 = document.createElement("div");

  contenedor.appendChild(item1)
   item1.appendChild(item2);
   item1.appendChild(item3);
   item3.appendChild(item4);
   item4.appendChild(item5);
   item5.appendChild(item6);
   item6.appendChild(item7);
   item6.appendChild(item8);
   item5.appendChild(item9);

   item1.setAttribute("class", `${nota}${numero}`);
   item1.setAttribute("id", `ceparar-1`);

   item2.setAttribute("class",`${nota}`);
   item2.setAttribute("id",`${nota}${numero}`);
   item2.setAttribute("type","button");
   item2.setAttribute("data-bs-toggle","modal");
   item2.setAttribute("data-bs-target",`#exampleModal${numero}`);

   item3.setAttribute("class","modal fade");
   item3.setAttribute("id",`exampleModal${numero}`);
   item3.setAttribute("tabindex","-1");
   item3.setAttribute("aria-labelledby","exampleModalLabel");
   item3.setAttribute("aria-hidden","true");
   
   item4.setAttribute("class","modal-dialog");
   
   item5.setAttribute("class","modal-content");

   item6.setAttribute("class","modal-header");

   item7.setAttribute("class","modal-title fs-5");
   item7.setAttribute("id","exampleModalLabel");

   item8.setAttribute("type","button");
   item8.setAttribute("class","btn-close");
   item8.setAttribute("data-bs-dismiss","modal");
   item8.setAttribute("aria-label","Close");
   item9.setAttribute("class","modal-body");
   item9.setAttribute("id",`mayor-${numero}`);

   const i1 = document.createElement("h2");
   const i2 = document.createElement("h2");
   const i3 = document.createElement("h2");
   const i4 = document.createElement("h2");
   const i5 = document.createElement("h2");
   const i6 = document.createElement("h2");
   const i7 = document.createElement("h2");
   const i8 = document.createElement("h2");
   const i9 = document.createElement("h2");
   const i10 = document.createElement("h2");
   const i11 = document.createElement("h2");
   const i12 = document.createElement("h2");
   const i13 = document.createElement("h2");
   const i14 = document.createElement("h2");
   const i15 = document.createElement("h2");
   const i16 = document.createElement("h2");
   const i17 = document.createElement("h2");


    i1.setAttribute("class","a1");
    i2.setAttribute("class","a2");
    i3.setAttribute("class","a3");
    i4.setAttribute("class","a4");
    i5.setAttribute("class","a5");
    i6.setAttribute("class","a6");
    i7.setAttribute("class","a7");
    i8.setAttribute("class","a8");
    i9.setAttribute("class","a9");
    i10.setAttribute("class","a10");
    i11.setAttribute("class","a11");
    i12.setAttribute("class","a12");
    i13.setAttribute("class","a13");
    i14.setAttribute("class","a14");
    i15.setAttribute("class","a15");
    i16.setAttribute("class","a16");
    i17.setAttribute("class","a17");
   
   


   const text = document.createTextNode(`${titulo1}`);
   const text2 = document.createTextNode(`${titulo2}`);
   const h = document.createTextNode(`${letra1}`);
   const h2 = document.createTextNode(`${letra2}`);
   const h3 = document.createTextNode(`${letra3}`);
   const h4 = document.createTextNode(`${letra4}`);
   const h5 = document.createTextNode(`${letra5}`);
   const h6 = document.createTextNode(`${letra6}`);
   const h7 = document.createTextNode(`${letra7}`);
   const h8 = document.createTextNode(`${letra8}`);
   const h9 = document.createTextNode(`${letra9}`);
   const h10 = document.createTextNode(`${letra10}`);
   const h11 = document.createTextNode(`${letra11}`);
   const h12 = document.createTextNode(`${letra12}`);
   const h13 = document.createTextNode(`${letra13}`);
   const h14 = document.createTextNode(`${letra14}`);
   const h15 = document.createTextNode(`${letra15}`);
   const h16 = document.createTextNode(`${letra16}`);
   const h17 = document.createTextNode(`${letra17}`);
   
   item2.appendChild(text);
   item7.appendChild(text2);

   item9.appendChild(i1);
   item9.appendChild(i2);
   item9.appendChild(i3);
   item9.appendChild(i4);
   item9.appendChild(i5);
   item9.appendChild(i6);
   item9.appendChild(i7);
   item9.appendChild(i8);
   item9.appendChild(i9);
   item9.appendChild(i10);
   item9.appendChild(i11);
   item9.appendChild(i12);
   item9.appendChild(i13);
   item9.appendChild(i14);
   item9.appendChild(i15);
   item9.appendChild(i16);
   item9.appendChild(i17);

   i1.appendChild(h);
   i2.appendChild(h2);
   i3.appendChild(h3);
   i4.appendChild(h4);
   i5.appendChild(h5);
   i6.appendChild(h6);
   i7.appendChild(h7);
   i8.appendChild(h8);
   i9.appendChild(h9);
   i10.appendChild(h10);
   i11.appendChild(h11);
   i12.appendChild(h12);
   i13.appendChild(h13);
   i14.appendChild(h14);
   i15.appendChild(h15);
   i16.appendChild(h16);
   i17.appendChild(h17);

   
}





texto("mayor","1","NO HAY DIOS TAN GRANDE COMO TU","𝙉𝙊 𝙃𝘼𝙔 𝘿𝙄𝙊𝙎 𝙏𝘼𝙉 𝙂𝙍𝘼𝙉𝘿𝙀 𝘾𝙊𝙈𝙊 𝙏𝙐",`//NO HAY DIOS TAN GRANDE COMO TU `,`NO LO HAY , NO LO HAY//`,"//NO HAY DIOS QUE PUEDA HACER LAS OBRAS ","COMO LAS QUE HACES TU//",'','','','','','','','','','','','','','');

$(document).ready(function(){
   $(" #mayor-1 .a1 ").before("<h3>DO</h3>");
   $(" #mayor-1 .a2 ").before("<h3>SOL</h3><h3>DO - DO7</h3>");
   $(" #mayor-1 .a3 ").before("<h3>FA</h3><h3> </h3><h3>DO</h3>");
   $(" #mayor-1 .a4 ").before("<h3>SOL</h3><h3>DO</h3>");
 
});

texto("mayor","2","ESTE ES EL CRISTO", "𝙀𝙎𝙏𝙀 𝙀𝙎 𝙀𝙇 𝘾𝙍𝙄𝙎𝙏𝙊",`ESTE ES EL CRISTO `,"QUE YO PREDICO","Y NO ME CANSO DE PREDICAR","SANA A LOS ENFERMOS","AUYENTA A LOS DEMONIOS","CALMA LOS VIENTOS ","Y TAMBIEN LA TEMPESTAD"," Y YO LE ALABARE "," Y YO LE ALABARE "," Y YO LE ALABARE ","DICIENDO GLORIA A DIOS","","","","" ,"","","","" );

$(document).ready(function(){
   $(" #mayor-2 .a1 ").before("<h3>DO</h3><h3></h3>");
   $(" #mayor-2 .a2 ").before("<h3>DO</h3><h3></h3>");
   $(" #mayor-2 .a3 ").before("<h3>DO</h3><h3>SOL</h3>");
   $(" #mayor-2 .a4 ").before("<h3>SOL</h3><h3></h3>");
   $(" #mayor-2 .a5 ").before("<h3>SOL</h3><h3></h3>");
   $(" #mayor-2 .a6 ").before("<h3>SOL</h3><h3></h3>");
   $(" #mayor-2 .a7 ").before("<h3>SOL</h3><h3>FA-DO</h3>");
   $(" #mayor-2 .a8 ").before("<h3>DO7</h3><h3>FA</h3>");
   $(" #mayor-2 .a9 ").before("<h3>FA</h3><h3>DO</h3>");
   $(" #mayor-2 .a10 ").before("<h3>DO</h3><h3>SOL</h3>");
   $(" #mayor-2 .a11 ").before("<h3>SOL</h3><h3>DO</h3>");
});


texto("mayor","3","VIVA LA FE ","𝙑𝙄𝙑𝘼 𝙇𝘼 𝙁𝙀",`VIVA LA FE VIVA LA ESPERANZA`,"VIVA EL AMOR",`VIVA LA FE VIVA LA ESPERANZA`,"VIVA EL AMOR",`VIVA LA FE VIVA LA ESPERANZA`,"VIVA EL AMOR","QUE VIVA CRISTO","QUE VIVA CRISTO ","QUE VIVA CRISTO EL","----------------","QUE VIVA CRISTO ","QUE VIVA  QUE VIVA CRISTO ","QUE VIVA  QUE VIVA CRISTO ","QUE VIVA EL ","","","","");

$(document).ready(function(){

   $(" #mayor-3 .a1 ").before("<h3>DO</h3><h3></h3>");
   $(" #mayor-3 .a2 ").before("<h3>SOL</h3><h3></h3>");
   $(" #mayor-3 .a3 ").before("<h3>SOL</h3><h3></h3>");
   $(" #mayor-3 .a4 ").before("<h3>DO</h3><h3></h3>");
   $(" #mayor-3 .a5 ").before("<h3>DO-DO7</h3><h3></h3>");
   $(" #mayor-3 .a6 ").before("<h3>FA</h3><h3></h3>");
   $(" #mayor-3 .a7 ").before("<h3>DO</h3><h3></h3>");
   $(" #mayor-3 .a8 ").before("<h3>SOL</h3><h3></h3>");
   $(" #mayor-3 .a9 ").before("<h3>DO</h3><h3></h3>");
   $(" #mayor-3 .a11 ").before("<h3>DO</h3><h3>SOL</h3>");
   $(" #mayor-3 .a12 ").before("<h3>SOL</h3><h3>DO</h3>");
   $(" #mayor-3 .a13 ").before("<h3>DO</h3><h3>SOL</h3>");
   $(" #mayor-3 .a14 ").before("<h3>SOL</h3><h3>DO</h3>");


});


texto("mayor","4","UNA MIRADA DE FE", "𝙐𝙉𝘼 𝙈𝙄𝙍𝘼𝘿𝘼 𝘿𝙀 𝙁𝙀","//UNA MIRADA DE FE ","UNA MIRADA DE AMOR ","ES LA QUE PUEDE ","SALVAR AL PECADOR//","Y SI TU VIERES A CRISTO JESUS","EL TE PERDONARA","PORQUE UN A MIRADA DE FE","ES LA QUE PUEDE TE PUEDE SALVAR ","","","","","","","","","","");

$(document).ready(function(){
   $(" #mayor-4 .a1 ").before("<h3>DO</h3><h3>DO</h3>");
   $(" #mayor-4 .a2 ").before("<h3>DO</h3><h3>DO</h3>");
   $(" #mayor-4 .a3 ").before("<h3>SOL</h3><h3>SOL</h3>");
   $(" #mayor-4 .a4 ").before("<h3>Do</h3><h3>DO-DO7</h3>");
   $(" #mayor-4 .a5 ").before("<h3>FA</h3><h3>FA</h3>");
   $(" #mayor-4 .a6 ").before("<h3>FA</h3><h3>DO</h3>");
   $(" #mayor-4 .a7 ").before("<h3>DO</h3><h3>SOL</h3>");
   $(" #mayor-4 .a8 ").before("<h3>SOL</h3><h3>DO</h3>");
});


texto("mayor","5","YO TENGO UN AMIGO QUE ME AMA","𝙔𝙊 𝙏𝙀𝙉𝙂𝙊 𝙐𝙉 𝘼𝙈𝙄𝙂𝙊 𝙌𝙐𝙀 𝙈𝙀 𝘼𝙈𝘼","YO TENGO UN AMIGO QUE ME AMA","ME AMA , ME AMA","YO TENGO UN AMIGO QUE ME AMA"," SU NOMBRE ES JESUS","//EL ME AMA//","EL ME AMA ASI CON TIERNO AMOR","//EL ME AMA//","SU NOMBRE ES JESUS","","","","","","","","","");

$(document).ready(function(){
   $(" #mayor-5 .a1 ").before("<h3>DO</h3><h3>DO</h3>");
   $(" #mayor-5 .a2 ").before("<h3>SOL</h3><h3>DO</h3>");
   $(" #mayor-5 .a3 ").before("<h3>DO</h3><h3>DO</h3>");
   $(" #mayor-5 .a4 ").before("<h3>FA-SOL</h3><h3>DO-DO7</h3>");
   $(" #mayor-5 .a5 ").before("<h3>FA</h3><h3>DO</h3>");
   $(" #mayor-5 .a6 ").before("<h3>SOL</h3><h3>DO-DO7</h3>");
   $(" #mayor-5 .a7 ").before("<h3>FA</h3><h3>DO</h3>");
   $(" #mayor-5 .a8 ").before("<h3>REm</h3><h3>SOL-DO</h3>");
});


texto("mayor","777","ALELUYA SOY UN SALVO","𝘼𝙇𝙀𝙇𝙐𝙔𝘼 𝙎𝙊𝙔 𝙐𝙉 𝙎𝘼𝙇𝙑𝙊","//ALELUYA SOY UN SALVO","PUES JESUCRISTO CON SU SANGRE ME LAVO","ALELUYA SOY UN SALVO","Y POR ESO ALEGRE ESTOY","ALELUYA SOY UN SALVO","EL EVANGELIO ANUNCIARE","//ALELUYA ESTA VIDA ES DIFERENTE","CON JESÚS ETERNAMENTE VOY ","A MI CELESTE HOGAR//","","","","","","","",'');

$(document).ready(function(){
   $(" #mayor-777 .a1 ").before("<h3>DO</h3><h3>DO</h3>");
   $(" #mayor-777 .a2 ").before("<h3>DO</h3><h3>SOL</h3>");
   $(" #mayor-777 .a3 ").before("<h3>SOL</h3><h3>SOL</h3>");
   $(" #mayor-777 .a4 ").before("<h3>SOL</h3><h3>DO</h3>");
   $(" #mayor-777 .a5 ").before("<h3>DO</h3><h3>DO</h3>");
   $(" #mayor-777 .a6 ").before("<h3>DO</h3><h3>D07-FA</h3>");
   $(" #mayor-777 .a7 ").before("<h3>FA</h3><h3>DO</h3>");
   $(" #mayor-777 .a8 ").before("<h3>DO</h3><h3>SOL</h3>");
   $(" #mayor-777 .a9 ").before("<h3>SOL</h3><h3>DO</h3>");
});


texto("mayor","6","CRISTO ROMPE LAS CADENAS","CRISTO ROMPE LAS CADENAS","//CRISTO ROMPE LAS CADENAS","CRISTO ROMPE LAS CADENAS//","Y ME DA SEGURIDAD" , "-------- O ---------","COMO ES POSIBLE YO VIVIR SIN TI JESUS","SI EL FUNDAMENTO DE MI VIDA ERES TU","TU ME SALVASTE Y ME LIBRASTE","DE LA MUERTE..","COMO ES POSIBLE YO VIVIR SIN TI JESUS","","","","","","","","");

$(document).ready(function(){
   $(" #mayor-6 .a1 ").before("<h3>DO</h3><h3>SOL</h3>");
   $(" #mayor-6 .a2 ").before("<h3>SOL</h3><h3>DO</h3>");
   $(" #mayor-6 .a3 ").before("<h3>SOL</h3><h3>DO</h3>");
   $(" #mayor-6 .a5 ").before("<h3>DO</h3><h3>SOL</h3>");
   $(" #mayor-6 .a6 ").before("<h3>SOL</h3><h3>DO</h3>");
   $(" #mayor-6 .a7 ").before("<h3>DO</h3><h3>DO</h3>");
   $(" #mayor-6 .a8 ").before("<h3>REm</h3><h3></h3>");
   $(" #mayor-6 .a9 ").before("<h3>SOL</h3><h3>DO</h3>");
});


texto("mayor","7","DONDE ESTA EL ESPIRITU DE DIOS","DONDE ESTA EL ESPIRITU DE DIOS","DONDE ESTA EL ESPIRITU DE DIOS ","HAY LIUBERTAD ","HAY LIBERTAD","DONDE ESTA EL ESPIRITU DE DIOS ","ALLI SIEMPRE HAY LIBERTAD","///LIBERTAD...///","DONDE ESTA EL ESPIRITU DE DIOS ","ALLI SIEMPRE HAY LIBERTAD.","");

$(document).ready(function(){
   $(" #mayor-7 .a1 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-7 .a2 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-7 .a3 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-7 .a4 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-7 .a5 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-7 .a6 ").before("<h3>DO</h3><h3>RE</h3>");
});


texto("mayor","8","PASA POR AQUI SEÑOR","PASA POR AQUI SEÑOR","PASA POR AQUI SEÑOR PASA POR AQUI","PASA POR AQUI SEÑOR PASA POR AQUI","------ O ------","OHH OHH SEÑOR PASA POR AQUI","OHH OHH SEÑOR PASA POR AQUI..","","","","","");

$(document).ready(function(){
   $(" #mayor-8 .a1 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-8 .a2 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-8 .a3 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-8 .a4 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-8 .a5 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-8 .a6 ").before("<h3>DO</h3><h3>RE</h3>");
});


texto("mayor","9","ARDIENDO EL FUEGO","ARDIENDO EL FUEGO","ARDIENDO EL FUEGO EN MI ALMA ESTA","ARDIENDO EL FUEGO EN MI ALMA ESTA","GLORIOSA LLAMA ME LIBRARA","OHH ALELUYA ARDIENDO EL FUEGO ESTA","------ O ------","OHHH SEÑOR QUIERO QUE ARDAS EN MI SER ","COMO LA ZARZA QUIERO ARDE CON TU PODER","EN NUEVAS LENGUA QUIERO HABLAR COMO SEÑAL","QUE ESTOY ARDIENDO CON EL FUEGO CELESTIAL ","QUIERO ALABARTE Y ADORARTE SOLO A TI","COMO SE DORA EN ESPIRITU Y EN VERDAD","//OHHH SEÑOR QUIERO QUE ARDAS EN MI SER","COMO LA ZARZA QUIERO ARDER CON TU PODER//","");

$(document).ready(function(){
   $(" #mayor-9 .a1 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-9 .a2 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-9 .a3 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-9 .a4 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-9 .a5 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-9 .a6 ").before("<h3>DO</h3><h3>RE</h3>");
});


texto("mayor","10","BENDITO SEA JEHOVA LA ROCA","BENDITO SEA JEHOVA LA ROCA","BENDITO SEA JEHOVA LA ROCA","POR TODA LA ETERNIDAD","MI ESCONDEDERO Y MI REDFUGIO ","ERES TU BENDITO JEHOVA","EN TU PALABRA YO ESPERARE ","Y MI CONFIANZA EN TI PONDER ","OHH GLORIA OHH ALELUYA ","//AMEN AMEN..//","","","","","","","");

$(document).ready(function(){
   $(" #mayor-10 .a1 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-10 .a2 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-10 .a3 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-10 .a4 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-10 .a5 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-10 .a6 ").before("<h3>DO</h3><h3>RE</h3>");
});


texto("mayor","11","QUE NO SE APAGUE EL FUEGO","QUE NO SE APAGUE EL FUEGO QUE HAY EN MI CORAZÓN","QUE NO SE APAGUE EL FUEGO QUE HAY EN MI CORAZÓN","QUE NO SE APAGUE EL FUEGO QUE SIGA","QUE SIGA ARDIENDO MAS Y MAS","DAME GOZO SEÑOR "," DAME PAZ Y AMOR"," QUE YO QUIERO MORAR"," MAS ALLÁ DEL SOL","");

$(document).ready(function(){
   $(" #mayor-11 .a1 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-11 .a2 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-11 .a3 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-11 .a4 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-11 .a5 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-11 .a6 ").before("<h3>DO</h3><h3>RE</h3>");
});


texto("mayor","12","CRISTO TIENE PODER","CRISTO TIENE PODER","//CRISTO TIENE PODER//","CRISTO TIENE PODER ALELUYA TIENE PODER","CRISTO TIENE PODER CRISTO TIENE PODER","JESUCRISTO ES PODEROSO","JESUCRISTO  TIENE PODER","JESUCRISTO ES PODEROSO","JESUCRISTO TIENE PODER","");

$(document).ready(function(){
   $(" #mayor-12 .a1 ").before("<h3>DO</h3><h3>DO</h3>");
   $(" #mayor-12 .a2 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-12 .a3 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-12 .a4 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-12 .a5 ").before("<h3>DO</h3><h3>RE</h3>");
   $(" #mayor-12 .a6 ").before("<h3>DO</h3><h3>RE</h3>");
});

texto("mayor","13","YO LE ALABO DE CORAZON ","YO LE ALABO DE CORAZON","//YO LE ALABO DE CORAZON "," YO LE ALABO CON MI VOZ//","Y SI ME FALTA LA VOZ ","YO LE ALABO CON MIS MANOS","Y SI ME FALATN LAS MANOS","YO LE ALABO CON MIS PIES ","Y SI ME FALTA LOS PIES ","YO LE ALABO CON EL ALMA","Y SI ME FALTARA EL ALMA..","ES.. QUE.. YA ESTOY CON EL...","//ALABALE ALABALE","ALABALE DE CORAZON//");

texto("mayor","14","CUANDO CRISTO VINO A MI CORAZON","CUANDO CRISTO VINO A MI CORAZON","CUANDO CRISTO VINO A MI CORAZON","MI VIDA ENTERA CAMBIO..","SU PAZ Y SU AMOR ALEJARON DE MI","LAS DUDAS EL MIEDO Y EL TEMOR","------- O -------","//MI VIDA COMENZO ","CUANDO EL SEÑOR LLEGO","Y HOY PUEDO CANTAR DE SU AMOR//","","","","","","");

texto("mayor","15","BENDICION VINE A BUSCAR","BENDICION VINE A BUSCAR","//BENDICION VINE A BUSCAR","Y SIN ELLA NO ME IRE//","Y DAME MAS SEÑOR","DE TU GRAN PODER","Y DAME MAS SEÑOR","DE TU GRAN PODER");

texto("mayor","16","VIDA ABUNDANTE QUIERO TENER","VIDA ABUNDANTE QUIERO TENER","VIDA ABUNDANTE QUIERO TENER","QUIERO TENER QUIERO TENER","VIDA ABUNDANTE QUIERO TENER","SOLO JESUCRISTO TE LA DA","ANDAR CON CRISTO EN COMUNION","CON LOS HERMANOS EN AMOR","QUE GOZO TENGO EN MI CORAZON ","SOLO JESUCRISTO ME LO DA");

texto("mayor","17","HAY VIDA EN JESUS","HAY VIDA EN JESUS","HAY VIDA HAY VIDA EN JESUS","HAY VIDA HAY VIDA EN JESUS","YO VOY A MORAR ","A LA PATRIA CELESTIAL","PORQUE HAY VIDA ","HAY VIDA EN JESUS","//HAY GOZO HAY GOZO EN JESUS//","YO VOY A MORAR A LA PATRIA CELESTIAL","PORQUE HAY GOZO HAY GOZO EN JESUS","","","","","","");

texto('mayor','18','ESTA ALEGRIA');

texto('mayor','19','CAMINANDO HACIA CANAAN');

texto('mayor','20','YO SIENTO PAZ');

texto('mayor','21','GLORIA AL PADRE');

texto('mayor','22','YO CANTO EN LA LUCHA');

texto('mayor','23','VAMOS CANTANDO');

texto('mayor','24','EL ES REY DE REYES');

texto('mayor','25','JESUS YO TE AMO');

texto('mayor','26','ESTAMOS DE FIESTA');

texto('mayor','27','ESTOY CONTENTO');

texto('mayor','28','YO SIENTO UN FUEGO');

texto('mayor','29','ESTE ES EL DIA');

texto('mayor','30','NO PIERDAS LA FE');

texto('mayor','31','CANTARE CANTARE');

texto('mayor','32','TODO LO QUE RESPIRA');

texto('mayor','33','OH QUE ALEGRIA');

texto('mayor','34','QUIERO SENTIR');

texto('mayor','35','SIENTO GOZO EN MI ALMA');

texto('mayor','36','HAY VIDA EN JESUS');

texto('mayor','37','SI EL ESPIRITU DE DIOS SE MUEVE');

texto('mayor','38','QUE BUENO ES CONOCER');

texto('mayor','39','EL DIOS DE LA BIBLIA');

texto('mayor','40','SONRIE QUE JESUS');

texto('mayor','41','HAY UNA SENDA');

texto('mayor','42','SI HOY SI HOY');

texto('mayor','43','TODOS DEBEN DE SABER');

texto('mayor','44','NO HAY TEMORES');

texto('mayor','45','ESTA ES LA COSA MAS HERMOSA');

texto('mayor','46','YO ME LEVANTARE');

texto('mayor','47','NO SABEIS QUE SOMOS TEMPLO');

texto('mayor','48','EL DIOS DE LA BIBLIA VIVE');

texto('mayor','49','UN MILAGRO');

texto('mayor','50','SOLAMENTE CRISTO');











/* COROS MENORES */


texto("menor","30","COMO LADRON DE LA NOCHE","COMO LADRON EN LA NOCHE","//COMO LADRON EN LA NOCHE//","ASI SERA LA VENIDA DEL HIJO DEL HOMBRE","//ESO LO DICE LA BIBLIA ","LA BIBLIA NO HA DE MENTIR","JESUCRISTO VENDRA ","COMO LADRON EN LA NOCHE//");
texto("menor","31","COMO EL SIERVO BRAMA","COMO EL SIERVO BRAMA","COMO EL SIERVO BRAMA","POR LAS CORRIENTES DE LAS AGUAS","ASÍ CLAMA POR TI","OH DIOS EL ALMA MIA","//MI ALMA TIENE SED DE DIOS","TIENE SED DE DIOS","TIENE SED DE DIOS// "); 
texto("menor","32","YO HE CREIDO EN UN PODER QUE NO SE TOCA","YO HE CREIDO EN UN PODER QUE  NO SE TOCA","YO HE CREIDO EN UN PODER QUE  NO SE TOCA","YO EH CREIDO EN UN PODER QUE NO SE VE","//YO EH CREIDO EN UN PODER"," QUE NO SE TOCA NI SE VE","PERO SE SIENTE EN EL CORAZÓN//"); 
texto("menor","33","AH GENEZARET","AH GENEZARET","//AH GENEZARET//","YA LLEGÓ JESÚS","LA PRESENCIA DE ÉL","INVADIO EL LUGAR DE FELICIDAD","LOS ENFERMOS QUE","PRECISABAN DE ÉL","SE POSTRARÓN AL VERLO LLEGAR","//Y EN AQUEL LUGAR","LOGRARON TOCAR","EL BORDE DE SU MANTO//","//DEJAME TOCAR TU MANTO JESÚS","DEJAME TOCAR TU  MANTO JESÚS","Y AL INSTANTE SANARÉ//");
texto("menor","34","RENUEVAME","RENUEVAME","//RENUEVAME//","Y LLENAME DE TU PODER","CON FUEGO SANTO Y AMOR","SEÑOR DIOS","POR QUE MI VIDA VACIA ESTA","DE BENDICIONES TIENES QUE LLENAR","TODO MI CUERPO TU HARAS TEMBLAR","CON FUEGO SANTO","FUEGO CELESTIAL","ROMPE MI VIDA Y MI CORAZÓN","DAME UNO NUEVO LLENO DE AMOR","QUE SEA TUYO OH MI SALVADOR","JESUCRISTO DIOS");
texto("menor","35","MIRA QUE TE MANDO QUE TE ESFUERCES","MIRA QUE TE MANDO QUE TE ESFUERCES","//MIRA QUE TE MANDO QUE TE ESFUERCES ","Y QUE SEAS VALIENTE Y QUE SEAS VALIENTE//","------ O ------","//NO TEMAS NI DESMAYES ","PORQUE JEHOVA TU DIOS","ESTARA CONTIGO ","DONDE QUIERAS QUE TU VAYAS//","","","","","","","","");
texto("menor","36","QUERIDO HERMANO","QUERIDO HERMANO","//QUERIDO HERMANO NUNCA DESMAYES","QUE JESUCRISTO ","A TU LADO ESTA//","------ O ------","YO VENCERE TU VENCERAS","Y TODOS VENCEREMOS ","EN EL NOMBRE DE JESUS","","","","","","","");
texto("menor","37","PARA TI OH JEHOVA ","PARA TI OH JEHOVA ","//PARA TI OH JEHOVA ","PARA TI QUIERO CANTAR","SIENTO GOZO EN MI ALMA","CUANDO CANTO PARA TI//","----- O -----","POR TU GRANDE AMOR ","QUE ES LO MAXIMO","Y MI ALMA SE GOZA ","CUANDO CANTO PARA TI","","","","","");
texto("menor","38","DIOS TIENE UN BARCO ","DIOS TIENE UN BARCO ","//DIOS TIENE UN BARCO ","QUE NAVEGA EN ALTA MAR","Y JESUCRISTO ES EL CAPITAN//","------ O ------","LOS MARINEROS ","QUE NAVENGAN A SU LADO","SON AQUELLOS QUE HAN LAVADO","CON SU SANGRE EL CORAZON","","","","","","");
texto("menor","39","YO ESPERO EL SON","YO ESPERO EL SON","//YO ESPERO EL SON","YO ESPERO EL SON","YO ESPERO EL SON DE LA TROMPETA FINAL//","------ O ------","YO SE QUE CRISTO MUY PRONTO VENDRA","Y A SU PUEBLO EL SE LLEVARA","YO SE QUE CRISTO MUY PRONTO VENDRA ","CUANDO SUENE LA TROMPETA FINAL","","","","","","");
texto("menor","40","Y COMO NO DECIRTE","Y COMO NO DECIRTE","//Y COMO NO DECIRTE","QUE YO TE AMO","Y COMO NO DECIRTE ","QUE YO TE QUIERO","Y COMO NO DECIRTE ","QUE TU ERES MI VIDA ","SI TU ERES MI TODO JESUS NAZARENO//","------ O ------","//TU ERES TODO PARA MI","TU ERES TODO PARA MI","TU ERES TODO PARA MI","JESUS AMADO....//","","","","");
texto("menor","41");
texto("menor","42");
texto("menor","43");
texto("menor","44");
texto("menor","45");
texto("menor","46");
texto("menor","47");
texto("menor","48");
texto("menor","49");
texto("menor","50");
texto("menor","51");

/* ALABANZAS MAYORES */

texto("al-mayor","90","DIOS ESTA AQUI","DIOS ESTA AQUI","DIOS ESTA AQUI","TAN SIERTO COMO EL AIRE QUE RESPIRO","TAN SIERTO COMO LA MAÑANA","SE LEVANTA","TAN SIERTO QUE LE CANTO","Y EL ME PUEDDE OIR","------ O ------","LE HABLARE EN SILENCIO AL OIDO","LE CONTARE COSAS QUE HAY EN MI","Y QUE SOLO A EL","LE INTERESARA","TU ERES MAS QUE UN MITO","PARA MI...","TAN CERCA DE MI","TAN CERCA DE TI","QUE HASTA LO PUEDO TOCAR..","DIOS ESTA AQUI");
texto("al-mayor","91");
texto("al-mayor","92");
texto("al-mayor","93");
texto("al-mayor","94");
texto("al-mayor","95");
texto("al-mayor","96");
texto("al-mayor","97");
texto("al-mayor","98");
texto("al-mayor","99");
texto("al-mayor","100");

/* ALABANZAS MENORES*/

texto("al-menor","130","SEGUIRTE SOLO A TI","SEGUIRTE SOLO A TI","SEGUIRTE SOLO A TI");
texto("al-menor","131","CREO EN TI","CREO EN TI","QUIERO LEVANTAR A TI MIS MANOS","MARAVILLOSO JESUS","MILAGROSO SEÑOR","CREO EN TI JESUS","EN LO NQUE HARAS EN MI","YO CREO EN TI JESUS","Y EN LO QUE HARAS EN MI","EN MI EN MI...","//RECIBE TODA LA GLORIA","RECIBE TODA LA HONRA","PRECIOSO HIJO DE DIOS//");
texto("al-menor","132","YO SE QUE ESTAS AQUI","YO SE QUE ESTAS AQUI","//YO SE QUE ESTAS AQUI MI SEÑOR","YO SE QUE ESTAS AQUI//","Y MI ALMA TE ALABA","Y MI ALMA TE ALABA","Y MI ALMA TE ALABA","PORQUE SE QUE ESTAS AQUI");
texto("al-menor","133");
texto("al-menor","134");
texto("al-menor","135");
texto("al-menor","136");
texto("al-menor","137");
texto("al-menor","138");
texto("al-menor","139");
texto("al-menor","140");
texto("al-menor","141");
texto("al-menor","142");
texto("al-menor","143");
texto("al-menor","144");





