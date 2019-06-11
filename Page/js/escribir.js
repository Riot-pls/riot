
function innerHTML(id,result){
  return document.getElementById(id).innerHTML+=result;
}

function table(cedula,nombre,apellido,email,telefono,placa){
  return '<tr>'+'<td><center>'+nombre+'</center></td>'+
  '<td><center>'+apellido+'</center></td>'+
  
  '<td id="uno"><center>'+email+'</center></td>'+
  '<td id="uno"><center>'+telefono+'</center></td>'+
  '<td id="uno"><center>'+placa+'</center></td>'+'<td><center>'+cedula+'</center></td>'+
  '<td id="uno"><center><i class="fas fa-trash size-fas" onclick="remove('+cedula+')"></i></center></td>'+
   
  
'</tr>';
}

//intento de solucionar el llamado de datos
//pos este si funciono, estas funciones son para llamar los datos.
function readtask(){
var task= firebase.database().ref("Clientes/");
task.on('child_added',function(data){
  var taskvalue=data.val();
  
  var result= table(taskvalue.cedula,taskvalue.nombre,taskvalue.apellido,taskvalue.email,taskvalue.telefono,taskvalue.placa);
     innerHTML('dato',result);
  
});
}
//funcion para remover
function remove(id){
  var task=firebase.database().ref('Clientes/'+id);
  task.remove();
  location.reload();

}



