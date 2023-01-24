const selected = document.querySelector("#myList");
const outPutWindow = document.getElementById("masse");
let btn = document.querySelector(".dhlButton");

btn.addEventListener("click", showtxt);

function showtxt() {
	let input = Number(selected.value);
	let output;
	switch (input) {
		case 0:
			output =
				"<b>Brief und Postkarte</b> <br />" +
				"L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
			break;
		case 1:
			output = "<b>DHL Paket 2 kg</b> <br />" + "bis 60 x 30 x 15 cm";
			break;
		case 2:
			output = "<b>DHL Paket 5 kg</b> <br />" + "bis 120 x 60 x 60 cm";
			break;
		case 3:
			output = "<b>DHL Paket 10 kg</b> <br />" + "bis 120 x 60 x 60 cm ";
			break;
		default:
			output = "<b>Extra große Größe</b>";
	}
	outPutWindow.innerHTML = output;
}
