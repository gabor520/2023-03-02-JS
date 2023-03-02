window.addEventListener("load",init);
function init() {


    const list = [{ nev: "Peti", mondat: "A kedd!", },
    { nev: "Gergo", mondat: "A kedd masodszor!", szemszin: "Kek/Zold", kor: 23, },
    { nev: "Niki", mondat: "Délelőtt kint játszottam a kutyussal" },
    { nev: "Asztrik", mondat: "Kedden, mert ott nem történt semmi." },
    { nev: "GergőT", mondat: "Kedd a legjóbb nap." },
    { név: "Sanyi", mondat: "Tegnap sikerült időben megoldani a java feladatot.",},
    { nev: "Márton", mondat: "Nem volt angol hétfőn" },
    { nev: "Dominik", mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.", }, 
    { nev: "Marci", mondat: "Ha gyenge vagy akkor legalább ne sírj" }, 
    { nev: "Bence", mondat: "Pillanat türelmet kérek javítom a mikrofont.", },];
    megjelenit(list);
}



function megjelenit(lista){
    for(let i = 0; i <list,length; i++){
        const div = document.createElement("div");
        const h = document.createElement("h3");
        const p = document.createElement("P");
        document.body.appendChild(div);
        div.appendChild(h);
        div.appendChild(p);
        const text = document.createTextNode(lista[i].nev);
        p.appendChild(document.createTextNode(lista[i].mondat));
        h.appendChild(text);
    }
}
/**JavaScipt objektum : kulcs - érték párok */

const obj = {
    nev:"Peti",
    mondat:"A kedd!"
    
}
const obj2 = {
    nev:"Gaboca",
    mondat:"Jó volt a kedd volt még fehércsokis Kinder Bueno"
}

/**console.log(obj)
console.log(obj.nev)
console.log(obj["nev"])
obj.kedvencAuto="trabant"
console.log(obj)
delete obj.szemszin
console.log(obj)
obj.nev="Péter"
console.log(obj)
//obj={nev:"Éva,"}
*/