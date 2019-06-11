
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCRO7kY1x6GMmC6Nj91kVf1FRcHKXtWuug",
    authDomain: "prueba-2d05b.firebaseapp.com",
    databaseURL: "https://prueba-2d05b.firebaseio.com",
    projectId: "prueba-2d05b",
    storageBucket: "prueba-2d05b.appspot.com",
    messagingSenderId: "1079810032865",
    appId: "1:1079810032865:web:6a69fbc0a6e2f8cb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function inputTask(id,result){
  return document.getElementById(id).value=result; //funcion para obtener la insercion anterior.

}

function getId(id){
    return document.getElementById(id).value; //CON ESTO obtengo los id de mis inputs y botones.

}



function json(id,name,lastname,email,telefono,placa){
  var datos={
    cedula:id,
    nombre:name,
    apellido:lastname,
    email:email,
    telefono:telefono,
    placa:placa
  };
return datos;
}



function validar_email( email ) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}




function Task(){
  var id=getId("id");
  var id1 = getId("name");
  var cant= getId("lastname");
  var email= getId("email");
  var telefono= getId("telefono");
  var  placas=getId("placa");
   //Ahora obtengo los ids de mis inputs
  console.log(id1+cant+email+telefono+placas);

if(id.length<=4 || id1.length==0 || cant.length==0 || email.length==0 ||  !validar_email(email)   || telefono.length==0|| placas.length==0){
swal("OOPS","Tus datos no se enviaron, hay campos vacios o algun dato incorrecto","error");}else{ 


  var arraydata=json(id,id1,cant,email,telefono,placas);
  var tarea= firebase.database().ref("Clientes/"+id); //el id, es el nombre del nuevo nodo que se va a agregar, puedo quisas tomar el nombre solo del id del producto aqui seteo la configuracion para que la app web acceda a la base de datos
  tarea.update(arraydata);//Aqui establezco que se agreguen datos
  swal("Enhorabuena", "Tus datos fueron guardados exitosamente", "success");
  inputTask("id","");
  inputTask("name","");
  inputTask("lastname",""); 
  inputTask("email","");
  inputTask("telefono","");
  inputTask("placa","");
}
}

function update(cedula,nombre,apellido,email,telefono,placa){
inputTask("id",cedula);
  inputTask("name",nombre);
  inputTask("lastname",apellido); 
  inputTask("email",email);
  inputTask("telefono",telefono);
  inputTask("placa",placa);
}




function justNumbers(e)
        {
        var keynum = window.event ? window.event.keyCode : e.which;
        if ((keynum == 0) || (keynum == 46))
        return true;
         
        return /\d/.test(String.fromCharCode(keynum));
      }
//Con esta funcion planeo mostrar los datos, una web nueva con los clientes.

function val(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /[A-Za-zñÑ-áéíóúÁÉÍÓÚ\s\t-]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}