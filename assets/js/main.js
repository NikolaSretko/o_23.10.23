

function check(){
    event.preventDefault();
    const bundesLand = document.body.querySelector('#bundeslandInfo');
    const output = document.body.querySelector('#bundeslandInfoErgebnis');
    
    switch (bundesLand.value) {
        case "Baden-Württemberg" && "BaWü" :
        output.textContent = `${bundesLand.value} hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt.`;
        break;
        case "Bayern" && "bayer":
        output.textContent = `${bundesLand.value} hat 12,844 Mio Einwohner und München ist die Hauptstadt.`
        break;
        case "Berlin" :
        output.textContent = `${bundesLand.value} hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt.`
        break;
        case "Brandenburg"  :
        output.textContent = `${bundesLand.value} hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt.`;
        break;
        case "Bremen" :
        output.textContent = `${bundesLand.value} hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt.`
        break;
        case "Hamburg"  :
        output.textContent = `${bundesLand.value} hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt.`;
        break;
        case "Hessen" :
        output.textContent = `${bundesLand.value} Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt.`
        break;
        case "Mecklenburg-Vorpommern" :
        output.textContent = `${bundesLand.value} hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt.`
        break;
        case "Niedersachsen" :
        output.textContent = `${bundesLand.value} hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt.`
        break;
        case "Nordrhein-Westfalen" :
        output.textContent = `${bundesLand.value} hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt.`
        break;
        case "Rheinland-Pfalz" :
        output.textContent = `${bundesLand.value} hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt.`
        break;
        case "Saarland" :
        output.textContent = `${bundesLand.value} hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt
        .`
        break;
        case "Sachsen" :
        output.textContent = `${bundesLand.value} hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt.`
        break;
        case "Sachsen-Anhalt" :
        output.textContent = `${bundesLand.value} hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt.`
        break;
        case "Schleswig-Holstein" :
        output.textContent = `${bundesLand.value} hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt.`
        break;
        case "Thüringen" :
        output.textContent = `${bundesLand.value} hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt.`
        break;
        default:
            output.textContent = `Ein solches Bundesland gibt es in Deutschland nicht.`
    }

}