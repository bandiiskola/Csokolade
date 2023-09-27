var index = 0
var x = ""

var csokik = [{
        nev: "Milka",
        kep: "Milka.png",
        kiszereles: "100g",
        orszag: "Német"
    },
    {
        nev: "Feastables",
        kep: "Feastables.png",
        kiszereles: "60g",
        orszag: "USA"
    },
    {
        nev: "Hersheys",
        kep: "Hersheys.png",
        kiszereles: "150g",
        orszag: "USA"
    },
    {
        nev: "Tibi",
        kep: "Tibi.png",
        kiszereles: "100g",
        orszag: "Magyar"
    },
    {
        nev: "Snickers",
        kep: "Snickers.png",
        kiszereles: "45g",
        orszag: "USA"
    }
]

const Lapoz = (szam) => {
    index += szam
    if (index < 0) {
        index = csokik.length - 1
    } else if (index >= csokik.length) {
        index = 0
    }
}

const Kirajzol = (x, t) => {
    var s = ""
    s = "<img class='img animate__animated animate__fadeIn' src='assets/images/" + t[x].kep + "'>"
    s += "<h1 class='animate__animated animate__fadeIn'>" + t[x].nev + "</h1>"
    s += "<p class='animate__animated animate__fadeIn'>" + t[x].kiszereles + "</p>"
    s += "<p class='orszag animate__animated animate__fadeIn'>" + t[x].orszag + "</p>"
    document.getElementById("kep").innerHTML = s
}

const Update = () => {
    Kirajzol(index, csokik)
}

Kirajzol(index, csokik)