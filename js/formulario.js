function readText(){
    //obtener los valores de los campos 
    var name = document.getElementById("username").value;
    var mail = document.getElementById("email").value;

    // mostrar por la consola los valores 
    console.log(name);
    console.log(mail);
    alert("El nombre del usuario es: "+name);
    alert("El Email es: "+mail);
    alert("La contraseña es:  No te puedo decir porque es secreto :(");

}

function forgot()
{
    alert("Acordate bien");
}

// crear una funcion para el moetodo prompt
function show(value)
{
    var name;
     name = prompt("Ingresa el nombre de usuario que te gustaria usar:");
    // document.getElementById("username").innerHTML=valor; 
    alert("Bienvenid@ "+name);
}