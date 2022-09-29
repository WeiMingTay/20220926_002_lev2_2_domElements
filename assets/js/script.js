let vorname = document.getElementById("vorname");
let nachname = document.getElementById("nachname");
let land = document.getElementById("land");
// .value gern bei den Variablen hinterlegen!!!
function submitInfo() {
	console.log(
		`who diz, new phone: ${vorname.value} mit Nachnamen ${nachname.value} aus ${land.value}`
	);
}
