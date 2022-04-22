window.onfocus = function() {
    loadDataOnFocus();
};
window.onload = function() {
    loadDataOnLoad();
};

function loadDataOnFocus() {
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

function loadDataOnLoad() {
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

    let string1 = getCookie("1");
    if (string1 != "") {
        document.getElementById("Empty1").value = string1.split(",")[0];
        document.getElementById("Empty2").value = string1.split(",")[1];
        document.getElementById("Empty1").style.background = backgroundSuccess;
        document.getElementById("Empty2").style.background = backgroundSuccess;
    }
    let string2 = getCookie("2");
    if (string2 != "") {
        document.getElementById("Empty3").value = string2.split(",")[0];
        document.getElementById("Empty4").value = string2.split(",")[1];
        document.getElementById("Empty3").style.background = backgroundSuccess;
        document.getElementById("Empty4").style.background = backgroundSuccess;
    }
    let string3 = getCookie("3");
    if (string3 != "") {
        document.getElementById("Empty5").value = string3.split(",")[0];
        document.getElementById("Empty6").value = string3.split(",")[1];
        document.getElementById("Empty5").style.background = backgroundSuccess;
        document.getElementById("Empty6").style.background = backgroundSuccess;
    }
    let string4 = getCookie("4");
    if (string4 != "") {
        document.getElementById("Empty7").value = string4.split(",")[0];
        document.getElementById("Empty8").value = string4.split(",")[1];
        document.getElementById("Empty7").style.background = backgroundSuccess;
        document.getElementById("Empty8").style.background = backgroundSuccess;
    }
    let string5 = getCookie("5");
    if (string5 != "") {
        document.getElementById("Empty9").value = string5.split(",")[0];
        document.getElementById("Empty10").value = string5.split(",")[1];
        document.getElementById("Empty9").style.background = backgroundSuccess;
        document.getElementById("Empty10").style.background = backgroundSuccess;
    }
    let string6 = getCookie("6");
    if (string6 != "") {
        document.getElementById("Empty11").value = string6.split(",")[0];
        document.getElementById("Empty12").value = string6.split(",")[1];
        document.getElementById("Empty11").style.background = backgroundSuccess;
        document.getElementById("Empty12").style.background = backgroundSuccess;
    }
    let string7 = getCookie("7");
    if (string7 != "") {
        document.getElementById("Empty13").value = string7.split(",")[0];
        document.getElementById("Empty14").value = string7.split(",")[1];
        document.getElementById("Empty13").style.background = backgroundSuccess;
        document.getElementById("Empty14").style.background = backgroundSuccess;
    }
    let string8 = getCookie("8");
    if (string8 != "") {
        document.getElementById("Empty15").value = string8.split(",")[0];
        document.getElementById("Empty16").value = string8.split(",")[1];
        document.getElementById("Empty15").style.background = backgroundSuccess;
        document.getElementById("Empty16").style.background = backgroundSuccess;
    }

    let string9 = getCookie("9");
    if (string9 != "") {
        document.getElementById("Empty17").value = string9.split(",")[0];
        document.getElementById("Empty18").value = string9.split(",")[1];
        document.getElementById("Empty17").style.background = backgroundSuccess;
        document.getElementById("Empty18").style.background = backgroundSuccess;
    }
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

var backgroundSuccess = "lightgreen";

function save1() {
    if (document.getElementById("Empty1").value != "" &&
        document.getElementById("Empty2").value != "") {
        savecookie2Days("1" + "=" + document.getElementById("Empty1").value + "," + document.getElementById("Empty2").value);
        document.getElementById("Empty1").style.background = backgroundSuccess;
        document.getElementById("Empty2").style.background = backgroundSuccess;
    }
}

function save2() {
    if (document.getElementById("Empty3").value != "" &&
        document.getElementById("Empty4").value != "") {
        savecookie2Days("2" + "=" + document.getElementById("Empty3").value + "," + document.getElementById("Empty4").value);
        document.getElementById("Empty3").style.background = backgroundSuccess;
        document.getElementById("Empty4").style.background = backgroundSuccess;
    }
}

function save3() {
    if (document.getElementById("Empty5").value != "" &&
        document.getElementById("Empty6").value != "") {
        savecookie2Days("3" + "=" + document.getElementById("Empty5").value + "," + document.getElementById("Empty6").value);
        document.getElementById("Empty5").style.background = backgroundSuccess;
        document.getElementById("Empty6").style.background = backgroundSuccess;
    }
}

function save4() {
    if (document.getElementById("Empty7").value != "" &&
        document.getElementById("Empty8").value != "") {
        savecookie2Days("4" + "=" + document.getElementById("Empty7").value + "," + document.getElementById("Empty8").value);
        document.getElementById("Empty7").style.background = backgroundSuccess;
        document.getElementById("Empty8").style.background = backgroundSuccess;
    }
}

function save5() {
    if (document.getElementById("Empty9").value != "" &&
        document.getElementById("Empty10").value != "") {
        savecookie2Days("5" + "=" + document.getElementById("Empty9").value + "," + document.getElementById("Empty10").value);
        document.getElementById("Empty9").style.background = backgroundSuccess;
        document.getElementById("Empty10").style.background = backgroundSuccess;
    }
}

function save6() {
    if (document.getElementById("Empty11").value != "" &&
        document.getElementById("Empty12").value != "") {
        savecookie2Days("6" + "=" + document.getElementById("Empty11").value + "," + document.getElementById("Empty12").value);
        document.getElementById("Empty11").style.background = backgroundSuccess;
        document.getElementById("Empty12").style.background = backgroundSuccess;
    }
}

function save7() {
    if (document.getElementById("Empty13").value != "" &&
        document.getElementById("Empty14").value != "") {
        savecookie2Days("7" + "=" + document.getElementById("Empty13").value + "," + document.getElementById("Empty14").value);
        document.getElementById("Empty13").style.background = backgroundSuccess;
        document.getElementById("Empty14").style.background = backgroundSuccess;
    }
}

function save8() {
    if (document.getElementById("Empty15").value != "" &&
        document.getElementById("Empty16").value != "") {
        savecookie2Days("8" + "=" + document.getElementById("Empty15").value + "," + document.getElementById("Empty16").value);
        document.getElementById("Empty15").style.background = backgroundSuccess;
        document.getElementById("Empty16").style.background = backgroundSuccess;
    }
}

function save9() {
    if (document.getElementById("Empty17").value != "" &&
        document.getElementById("Empty18").value != "") {
        savecookie2Days("9" + "=" + document.getElementById("Empty17").value + "," + document.getElementById("Empty18").value);
        document.getElementById("Empty17").style.background = backgroundSuccess;
        document.getElementById("Empty18").style.background = backgroundSuccess;
    }
}

function savecookie2Days(savestring) {
    document.cookie = savestring + ";" + getexpiresdate(2);
}

function Empty1_change() {
    document.getElementById("Empty1").style.background = "";
    document.getElementById("Empty2").style.background = "";
}

function Empty2_change() {
    document.getElementById("Empty3").style.background = "";
    document.getElementById("Empty4").style.background = "";
}

function Empty3_change() {
    document.getElementById("Empty5").style.background = "";
    document.getElementById("Empty6").style.background = "";
}

function Empty4_change() {
    document.getElementById("Empty7").style.background = "";
    document.getElementById("Empty8").style.background = "";
}

function Empty5_change() {
    document.getElementById("Empty9").style.background = "";
    document.getElementById("Empty10").style.background = "";
}

function Empty6_change() {
    document.getElementById("Empty11").style.background = "";
    document.getElementById("Empty12").style.background = "";
}

function Empty7_change() {
    document.getElementById("Empty13").style.background = "";
    document.getElementById("Empty14").style.background = "";
}

function Empty8_change() {
    document.getElementById("Empty15").style.background = "";
    document.getElementById("Empty16").style.background = "";
}

function Empty9_change() {
    document.getElementById("Empty17").style.background = "";
    document.getElementById("Empty18").style.background = "";
}

function deleteDataTable() {
    Check = confirm("Möchten Sie die Daten wirklich löschen?");
    if (Check == true) {
        document.cookie = "1" + "=";
        document.cookie = "2" + "=";
        document.cookie = "3" + "=";
        document.cookie = "4" + "=";
        document.cookie = "5" + "=";
        document.cookie = "6" + "=";
        document.cookie = "7" + "=";
        document.cookie = "8" + "=";
        document.cookie = "9" + "=";

        document.getElementById("Empty1").style.background = "";
        document.getElementById("Empty2").style.background = "";
        document.getElementById("Empty3").style.background = "";
        document.getElementById("Empty4").style.background = "";
        document.getElementById("Empty5").style.background = "";
        document.getElementById("Empty6").style.background = "";
        document.getElementById("Empty7").style.background = "";
        document.getElementById("Empty8").style.background = "";
        document.getElementById("Empty9").style.background = "";
        document.getElementById("Empty10").style.background = "";
        document.getElementById("Empty11").style.background = "";
        document.getElementById("Empty12").style.background = "";
        document.getElementById("Empty13").style.background = "";
        document.getElementById("Empty14").style.background = "";
        document.getElementById("Empty15").style.background = "";
        document.getElementById("Empty16").style.background = "";
        document.getElementById("Empty17").style.background = "";
        document.getElementById("Empty18").style.background = "";

        document.getElementById("Empty1").value = "";
        document.getElementById("Empty2").value = "";
        document.getElementById("Empty3").value = "";
        document.getElementById("Empty4").value = "";
        document.getElementById("Empty5").value = "";
        document.getElementById("Empty6").value = "";
        document.getElementById("Empty7").value = "";
        document.getElementById("Empty8").value = "";
        document.getElementById("Empty9").value = "";
        document.getElementById("Empty10").value = "";
        document.getElementById("Empty11").value = "";
        document.getElementById("Empty12").value = "";
        document.getElementById("Empty13").value = "";
        document.getElementById("Empty14").value = "";
        document.getElementById("Empty15").value = "";
        document.getElementById("Empty16").value = "";
        document.getElementById("Empty17").value = "";
        document.getElementById("Empty18").value = "";
    }
}