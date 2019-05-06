function renderSvg(id, starSize) {
    return "<?xml version=\"1.0\" encoding= \"utf-8\"?>" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\"  height=\"" + starSize + "\" viewBox=\"0 0 51 48\" " + "class=\"star\"" + "id=star" + id + ">" +
        "<title>Five Pointed Star</title>" +
        " <path fill=\"none\" stroke=\"#000\" d=\"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z\"/>" +
        " </svg>"
}

function initStarFill() {
    var s = document.querySelectorAll(".star");
    s.forEach(function (st) {
        st.childNodes[2].style.fill = null;
    })
}


function returnStar(count, starSize) {
    var content = "";
    for (var i = 1; i <= count; i++) {
        content += renderSvg(i, starSize)
    }
    var target = document.getElementById("r--s");
    target.innerHTML = content;
    var stars = document.querySelectorAll(".star");

    stars.forEach(function (star) {
        star.addEventListener("click", function () {
            initStarFill();
            var starId = this.id.split("")[4];
            for (var i = 1; i <= starId; i++) {
                var t = document.querySelector("#star" + i);
                t.childNodes[2].style.fill = "orange";
            }
        });
    })

}