function Changebackground() {
    document.body.style.background =
    document.body.style.background === "lightblue" ? "white" : "lightblue";
}
document.getElementById("button").onclick = Changebackground