const outputWindow = document.getElementById("bundeslandInfoErgebnis");
const input = document.getElementById("bundeslandInfo");

function check() {
	switch (input.value) {
		case "Baden-Württemberg":
			output =
				"Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
			break;
		case "Bayern":
			output = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
			break;
		case "Berlin":
			output = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
			break;
		case "Brandenburg":
			output =
				"Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
			break;
		case "Bremen":
			output = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
			break;
		case "Hamburg":
			output = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
			break;
		case "Hessen":
			output =
				"Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
			break;
		case "Mecklenburg-Vorpommern":
			output =
				"Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die case Hauptstadt";
			break;
		case "Niedersachsen":
			output =
				"Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
			break;
		case "Nordrhein-Westfalen":
			output =
				"Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die case Hauptstadt";
			break;
		case "Rheinland-Pfalz":
			output =
				"Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
			break;
		case "Saarland":
			output =
				"Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
			break;
		case "Sachsen":
			output = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
			break;
		case "Sachsen-Anhalt":
			output =
				"Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
			break;
		case "Schleswig-Holstein":
			output =
				"Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
			break;
		case "Thüringen":
			output =
				"Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
			break;
		default:
			output = "Ein solches Bundesland gibt es in Deutschland nicht.";
			break;
	}

	outputWindow.innerHTML = output;
}
