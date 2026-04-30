function start_active () {
    document.getElementById("start").style.display = "none";
    document.getElementById("active").style.display = "block";
    console.log("Opgaver aktiv");
}

function stop_active () {
    document.getElementById("start").style.display = "flex";
    document.getElementById("active").style.display = "none";
    console.log("Opgaver Stoppet");
}