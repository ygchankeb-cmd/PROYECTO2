function bodyLoad() {
    let btn = document.getElementById("btn");

    if (btn) {
        btn.style.fontSize = "15px";
        btn.style.backgroundColor = "black";
        btn.style.color = "red";
        btn.style.padding = "10px";
        btn.style.borderRadius = "10px";
        btn.style.border = "2px solid red";
    }
}

function changeTheme() {
    let body = document.getElementById("body");
    let heading = document.getElementById("nameheading");
    let link = document.getElementById("anchorTag");

    if (body) {
        body.style.background = "#111";
        body.style.color = "#0f0";
    }

    if (heading) {
        heading.style.color = "#00ff00";
    }

    if (link) {
        link.style.color = "#00ff00";
    }
}


  function changeImageOver() {
    document.getElementById("cartoon_img").src =
    "https://raw.githubusercontent.com/ShravantiHable/C49-C51/main/myCartoon1.png";
}

function changeImageLeave() {
    document.getElementById("cartoon_img").src =
    "https://raw.githubusercontent.com/ShravantiHable/C49-C51/main/myCartoon.png";
}