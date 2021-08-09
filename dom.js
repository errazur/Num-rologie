function btn1() {

    var prenom = document.getElementById('prenom').value;
    var nom = document.getElementById('nom').value;
    var datedenaissance = document.getElementById('dtn').value;

    var ullist = document.getElementById('liste')

    var liactif = document.createElement('li');
    liactif.id = "nbactif";

    var liheredit = document.createElement('li');
    liheredit.id = "nbhered";

    var liexpress = document.createElement('li');
    liexpress.id = "nbexpress";

    var liintime = document.createElement('li');
    liintime.id = "nbintime";

    var lirea = document.createElement('li');
    lirea.id = "lireal";

    var liinitia = document.createElement('li');
    liinitia.id = "liinitial";

    var lievo = document.createElement('li');
    lievo.id = "lievolution";


    var Tableau = new Array();

    for (var i = 0; i < 10; i++)
        Tableau[i] = new Array();

    for (var i = 0; i < 10; i++) {

        for (var j = 0; j < 3; j++) {
            Tableau[i][j] = 0;
        }
    }

    Tableau[1][0] = ("A"); Tableau[1][1] = ("J"); Tableau[1][2] = ("S");
    Tableau[2][0] = ("B"); Tableau[2][1] = ("K"); Tableau[2][2] = ("T");
    Tableau[3][0] = ("C"); Tableau[3][1] = ("L"); Tableau[3][2] = ("U");
    Tableau[4][0] = ("D"); Tableau[4][1] = ("M"); Tableau[4][2] = ("V");
    Tableau[5][0] = ("E"); Tableau[5][1] = ("N"); Tableau[5][2] = ("W");
    Tableau[6][0] = ("F"); Tableau[6][1] = ("O"); Tableau[6][2] = ("X");
    Tableau[7][0] = ("G"); Tableau[7][1] = ("P"); Tableau[7][2] = ("Y");
    Tableau[8][0] = ("H"); Tableau[8][1] = ("Q"); Tableau[8][2] = ("Z");
    Tableau[9][0] = ("I"); Tableau[9][1] = ("R");

    //console.log(JSON.stringify(Tableau, null, 4))

    function Addition(x, y) {
        return x + y;
    }

    function calcNb3premier(tab, tab2) {
        var res = 0;
        var resultat = 0;
        var passage = new String;
        for (var t = 0; t < tab.length; t++) {
            for (var i = 1; i < 10; i++) {
                for (var j = 0; j < 3; j++) {
                    if (tab[t].toUpperCase() == tab2[i][j]) {
                        res += i;
                    }
                }
            }
        }
        passage = res.toString();
        for (var q = 0; q < passage.length; q++) {
            resultat = resultat + parseInt(passage.charAt(q));
        }
        return resultat;
    }

    var nbAct = calcNb3premier(prenom, Tableau);
    var nbHeredi = calcNb3premier(nom, Tableau);
    var nbExpressi = Addition(nbAct, nbHeredi);

    function Voyelles(tab, tab2) {
        var res = 0;
        var resultat = 0;
        var passage = new String;
        for (var t = 0; t < tab.length; t++) {
            if (tab[t].toUpperCase() == tab2[1][0]) {
                res += 1;
            }
            if (tab[t].toUpperCase() == tab2[5][0]) {
                res += 5;
            }
            if (tab[t].toUpperCase() == tab2[9][0]) {
                res += 9;
            }
            if (tab[t].toUpperCase() == tab2[6][1]) {
                res += 6;
            }
            if (tab[t].toUpperCase() == tab2[3][2]) {
                res += 3;
            }
            if (tab[t].toUpperCase() == tab2[7][2]) {
                res += 7;
            }
        }
        passage = res.toString();
        for (var q = 0; q < passage.length; q++) {
            resultat = resultat + parseInt(passage.charAt(q));
        }
        return resultat;
    }

    var nbIntime = Addition(Voyelles(prenom, Tableau), Voyelles(nom, Tableau));

    function Consonne(tab, tab2) {
        var res = 0;
        var resultat = 0;
        var passage = new String;
        for (var t = 0; t < tab.length; t++) {
            if (tab[t].toUpperCase() != tab2[1][0] && tab[t].toUpperCase() != tab2[5][0] && tab[t].toUpperCase() != tab2[9][0] && tab[t].toUpperCase() != tab2[6][1] && tab[t].toUpperCase() != tab2[3][2] && tab[t].toUpperCase() != tab2[7][2]) {
                for (var i = 1; i < 10; i++) {
                    for (var j = 0; j < 3; j++) {
                        if (tab[t].toUpperCase() == tab2[i][j]) {
                            res += i;
                        }
                    }
                }
            }
        }
        passage = res.toString();
        for (var q = 0; q < passage.length; q++) {
            resultat = resultat + parseInt(passage.charAt(q));
        }
        return resultat;
    }

    var nbRea = Addition(Consonne(prenom, Tableau), Consonne(nom, Tableau));

    function Initiale(tab, tab2) {
        var res = 0;
        var resultat = 0;
        var passage2 = new String;
        for (var t = 0; t < tab.length; t++) {
            for (var i = 1; i < 10; i++) {
                for (var j = 0; j < 3; j++) {
                    if (tab.charAt(0).toUpperCase() == tab2[i][j]) {
                        res += i;
                    }
                }
            }
        }
        passage2 = res.toString();
        do {
            resultat= 0;
            for (var q = 0; q < passage2.length; q++) {
                resultat += parseInt(passage2.charAt(q));
            }
            passage2 = resultat.toString();
        }
        while (resultat >= 10);
        return resultat;
    }

    var nbInitiale = Addition(Initiale(prenom, Tableau), Initiale(nom, Tableau));

    function naissance(date, Tab) {
        var passage = date.split("/");
        var un = parseInt(passage[0]);
        var deux = parseInt(passage[1]);
        var res = 0;
        var x = parseInt(passage[0]);
        var y = parseInt(passage[1]);

        if (un >= 10) {
            var x = 0;
            var x = un[0] + un[1];
        }
        if (deux >= 10) {
            var y = 0;
            var y = deux[0] + deux[1];
        }
        var resultat = x + y;
        var passage2 = resultat.toString();
        for (var q = 0; q < passage2.length; q++) {
            res += parseInt(passage2.charAt(q));
        }

        return res;
    }

    var nbEvo = naissance(datedenaissance, Tableau);

    var textactif = document.createTextNode("Votre nombre actif est : " + nbAct);
    var textHeredit = document.createTextNode("Votre nombre Héréditaire est : " + nbHeredi);
    var textExpress = document.createTextNode("Votre nombre d'expression est : " + nbExpressi);
    var textIntime = document.createTextNode("Votre nombre intime est : " + nbIntime);
    var textRea = document.createTextNode("Votre nombre de réalisation est : " + nbRea);
    var textInitiale = document.createTextNode("Votre nombre issu des initiale est : " + nbInitiale);
    var textEvolution = document.createTextNode("Votre nombre d'évolution est : " + nbEvo);

    liactif.appendChild(textactif);
    liheredit.appendChild(textHeredit);
    liexpress.appendChild(textExpress);
    liintime.appendChild(textIntime);
    lirea.appendChild(textRea);
    liinitia.appendChild(textInitiale);
    lievo.appendChild(textEvolution);

    ullist.appendChild(liactif);
    ullist.appendChild(liheredit);
    ullist.appendChild(liexpress);
    ullist.appendChild(liintime);
    ullist.appendChild(lirea);
    ullist.appendChild(liinitia);
    ullist.appendChild(lievo);
}