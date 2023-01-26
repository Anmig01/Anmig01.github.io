/*
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/

//  funcionalidad de encriptar
function encriptar(texto) 
{
	let stringTest = texto; // -> gaitober
	let arrayStringTest = stringTest.split("");

	for (let char = 0; char<arrayStringTest.length;char++)
	{
		switch(arrayStringTest[char]){
			case "a":
				arrayStringTest[char] = "ai";
				//console.log("ai")
				break;
			case "e":
				arrayStringTest[char] = "enter";
				//console.log("enter");
				break;
			case "i":
				arrayStringTest[char] = "imes";
				//console.log("imes");
				break;
			case "o":
				arrayStringTest[char] = "ober";
				//console.log("ober");
				break;
			case "u":
				arrayStringTest[char] = "ufat";
				//console.log("ufat");
				break;
			default:
				//console.log("no vocales");
				break;
		}

	}
	//console.log(arrayStringTest.join(""));
	return arrayStringTest.join("");
	
}


//funcionalidad desencriptar
function desencriptar(strEncript) {

	let arrayStrEncript = strEncript.split("ai");
	let strDesEncript = arrayStrEncript.join("a");
	
	arrayStrEncript = strDesEncript.split("enter");
	strDesEncript = arrayStrEncript.join("e");
	
	arrayStrEncript = strDesEncript.split("imes");
	strDesEncript = arrayStrEncript.join("i");
	
	arrayStrEncript = strDesEncript.split("ober");
	strDesEncript = arrayStrEncript.join("o");
	
	arrayStrEncript = strDesEncript.split("ufat");
	strDesEncript = arrayStrEncript.join("u");

	//console.log(strDesEncript);
	return(strDesEncript);
}

function clickBtnCopiar(btnCopiar,textField) {
	btnCopiar.onclick = function(){
	let textoCopiado = textField.textContent;
	navigator.clipboard.writeText(textoCopiado);
}

}

//-----------------------------------------------------------------------------------------------

const textfieldtoEncript = document.getElementById("textfield");
const btnEncriptar = document.getElementById("btnEncriptar");
const textfieldtoDesEncript = document.getElementById("containerResult");
const btnDesEncriptar = document.getElementById("btnDesencriptar");





btnEncriptar.onclick = function(){
	let text = textfieldtoEncript.value; //obtener el texto del campo de texto con el ID "textfield"
	if (text != "") 
	{
		let textoEncriptado = encriptar(text).toLowerCase();
		textoEncriptado = '<p id="pTextResult">'+ textoEncriptado +'</p>'
		let botonInner = '<input type="button" id="btnCopiar" value="Copiar" class="text btn">';
		textfieldtoDesEncript.innerHTML = textoEncriptado + botonInner;
		const btnCopiar = document.getElementById("btnCopiar");
		clickBtnCopiar(btnCopiar,textfieldtoDesEncript);
	}



	//console.log(textoEncriptado);
};
btnDesEncriptar.onclick = function(){
	let textToDesEncript = textfieldtoEncript.value;
	if (textToDesEncript != "") 
	{
		let textoDesEncriptado = desencriptar(textToDesEncript).toLowerCase();
		textoDesEncriptado = '<p id="pTextResult">'+ textoDesEncriptado +'</p>'
		let botonInner = '<input type="button" id="btnCopiar" value="Copiar" class="text">';
		textfieldtoDesEncript.innerHTML = textoDesEncriptado + botonInner;
		const btnCopiar = document.getElementById("btnCopiar");
		clickBtnCopiar(btnCopiar,textfieldtoDesEncript);
	}	
};





