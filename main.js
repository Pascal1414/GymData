window.onfocus = function() {
    loadData();
};
window.onload = function() {
    loadData();
};

function loadData() {
    document.getElementById("Beinpresse").value = getCookie("Beinpresse");
    document.getElementById("Beinbeuger").value = getCookie("Beinbeuger");
    document.getElementById("Waden").value = getCookie("Waden");
    document.getElementById("Rückenstrecker").value = getCookie("Rueckenstrecker");
    document.getElementById("Rudern").value = getCookie("Rudern");
    document.getElementById("Latzug").value = getCookie("Latzug");
    document.getElementById("Brust_KH").value = getCookie("Brust_KH");
    document.getElementById("Brustpresse").value = getCookie("Brustpresse");
    document.getElementById("Schulterpresse").value = getCookie("Schulterpresse");
    document.getElementById("Bizeps").value = getCookie("Bizeps");
    document.getElementById("Trizeps").value = getCookie("Trizeps");
}

function deleteData() {
    Check = confirm("Möchten Sie die Daten wirklich löschen?");
    if (Check == true) {
        document.getElementById("Beinpresse").value = "";
        document.getElementById("Beinbeuger").value = "";
        document.getElementById("Waden").value = "";
        document.getElementById("Rückenstrecker").value = "";
        document.getElementById("Rudern").value = "";
        document.getElementById("Latzug").value = "";
        document.getElementById("Brust_KH").value = "";
        document.getElementById("Brustpresse").value = "";
        document.getElementById("Schulterpresse").value = "";
        document.getElementById("Bizeps").value = "";
        document.getElementById("Trizeps").value = "";

        Beinpresse_change();
        Beinbeuger_change();
        Waden_change();
        Rückenstrecker_change();
        Rudern_change();
        Latzug_change();
        Brust_KH_change();
        Brustpresse_change();
        Schulterpresse_change();
        Bizeps_change();
        Trizeps_change();
    }
}

function getexpiresdate(exdays) {

    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    return "expires=" + d.toUTCString();
}

function Beinpresse_change() {
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = "Beinpresse=" + document.getElementById("Beinpresse").value + ";" + getexpiresdate(7);
}

function Beinbeuger_change() {
    document.cookie = "Beinbeuger=" + document.getElementById("Beinbeuger").value + ";" + getexpiresdate(7);
}

function Waden_change() {
    document.cookie = "Waden=" + document.getElementById("Waden").value + ";" + getexpiresdate(7);
}

function Rückenstrecker_change() {
    document.cookie = "Rueckenstrecker=" + document.getElementById("Rückenstrecker").value + ";" + getexpiresdate(7);
}

function Rudern_change() {
    document.cookie = "Rudern=" + document.getElementById("Rudern").value + ";" + getexpiresdate(7);
}

function Latzug_change() {
    document.cookie = "Latzug=" + document.getElementById("Latzug").value + ";" + getexpiresdate(7);
}

function Brust_KH_change() {
    document.cookie = "Brust_KH=" + document.getElementById("Brust_KH").value + ";" + getexpiresdate(7);
}

function Brustpresse_change() {
    document.cookie = "Brustpresse=" + document.getElementById("Brustpresse").value + ";" + getexpiresdate(7);
}

function Schulterpresse_change() {
    document.cookie = "Schulterpresse=" + document.getElementById("Schulterpresse").value + ";" + getexpiresdate(7);
}

function Bizeps_change() {
    document.cookie = "Bizeps=" + document.getElementById("Bizeps").value + ";" + getexpiresdate(7);
}

function Trizeps_change() {
    document.cookie = "Trizeps=" + document.getElementById("Trizeps").value + ";" + getexpiresdate(7);
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