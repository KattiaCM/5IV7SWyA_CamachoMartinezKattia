const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");
const textoDescifrado= document.getElementById("mensajeDes")
//vamos a crear uina funcion para cifrar
function cifrado(){
    //obtener el texto que se ingresa
    const textoIngresado = texto.value;
    //obtener caracter por caracter y validar la entrada del texto
    textoCifrado.value = textoIngresado.split('').map(c => { 
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if(valorEntero >= 97 && valorEntero <= 122){
            const valorDesplazamiento = parseInt(desplazamiento.value);
            if(valorEntero + valorDesplazamiento > 122){
                valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
            }else{
                valorEntero = valorEntero + valorDesplazamiento;
            }

        }
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}

function descifrado(){
    const textoCifrado = texto.value;
    textoDescifrado.value = textoCifrado.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if (valorEntero >= 97 && valorEntero <= 122) {
            const valorDesplazamiento = parseInt(desplazamiento.value);
            if (valorEntero - valorDesplazamiento < 97) {
                valorEntero = 122 - (97 - (valorEntero - valorDesplazamiento)) + 1;
            } else {
                valorEntero = valorEntero - valorDesplazamiento;
            }
        }
        let descifrado = String.fromCharCode(valorEntero);
        return mayus ? descifrado.toUpperCase() : descifrado;
    }).join('');
}
texto.addEventListener("keyup", cifrado);
desplazamiento.addEventListener("change", cifrado);