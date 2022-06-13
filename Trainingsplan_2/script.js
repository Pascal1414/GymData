window.onfocus = function() {
    loadData();
};
window.onload = function() {
    loadData();
};

function loadData() {
    document.getElementById("Beinstrecker").value = getCookie("Beinstrecker");
    document.getElementById("Waden").value = getCookie("Waden");
    document.getElementById("Squads").value = getCookie("Squads");
    document.getElementById("Brustpresse").value = getCookie("Brustpresse");
    document.getElementById("Schulter").value = getCookie("Schulter");
    document.getElementById("Bizeps").value = getCookie("Bizeps");
    document.getElementById("Trizeps").value = getCookie("Trizeps");
    document.getElementById("Rudern").value = getCookie("Rudern");
    document.getElementById("Klimmzüge").value = getCookie("Klimmzuege");


    document.querySelector('.Bauch').checked = getCookie("Bauch");
}

function deleteData() {
    Check = confirm("Möchten Sie die Daten wirklich löschen?");
    if (Check == true) {
        document.getElementById("Beinstrecker").value = "";
        document.getElementById("Waden").value = "";
        document.getElementById("Squads").value = "";
        document.getElementById("Brustpresse").value = "";
        document.getElementById("Schulter").value = "";
        document.getElementById("Bizeps").value = "";
        document.getElementById("Trizeps").value = "";
        document.getElementById("Rudern").value = "";
        document.getElementById("Klimmzüge").value = "";
        document.getElementById("Bauch").value = "";


        Beinstrecker_change();
        Waden_change();
        Squads_change();
        Brustpresse_change();
        Schulter_change();
        Bizeps_change();
        Trizeps_change();
        Rudern_change();
        Klimmzüge_change();
        Bauch_change();
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getexpiresdate(exdays) {

    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    return "expires=" + d.toUTCString();
}

function Beinstrecker_change() {
    document.cookie = "Beinstrecker=" + document.getElementById("Beinstrecker").value + ";" + getexpiresdate(7);
}

function Waden_change() {
    document.cookie = "Waden=" + document.getElementById("Waden").value + ";" + getexpiresdate(7);
}

function Squads_change() {
    document.cookie = "Squads=" + document.getElementById("Squads").value + ";" + getexpiresdate(7);
}

function Bauch_change() {
    document.cookie = "Bauch=" + document.querySelector('.Bauch').checked + ";" + getexpiresdate(7);
}

function Brustpresse_change() {
    document.cookie = "Brustpresse=" + document.getElementById("Brustpresse").value + ";" + getexpiresdate(7);

}

function Schulter_change() {
    document.cookie = "Schulter=" + document.getElementById("Schulter").value + ";" + getexpiresdate(7);

}

function Bizeps_change() {
    document.cookie = "Bizeps=" + document.getElementById("Bizeps").value + ";" + getexpiresdate(7);

}

function Trizeps_change() {
    document.cookie = "Trizeps=" + document.getElementById("Trizeps").value + ";" + getexpiresdate(7);

}

function Rudern_change() {
    document.cookie = "Rudern=" + document.getElementById("Rudern").value + ";" + getexpiresdate(7);

}

function Klimmzüge_change() {
    document.cookie = "Klimmzuege=" + document.getElementById("Klimmzüge").value + ";" + getexpiresdate(7);

}