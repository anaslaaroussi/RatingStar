var fillColor = "orange";

function renderSvg(id, starSize, filled) {
    var fill = filled ? fillColor : "none";
    return "<?xml version=\"1.0\" encoding= \"utf-8\"?>" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\"     height=\"" + starSize + "\" viewBox=\"0 0 51 48\" " + "class=\"star\"" + "id=star" + id + ">" +
        "<title>Five Pointed Star</title>" +
        " <path fill=" + fill + " stroke=\"#000\" d=\"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z\"/>" +
        " </svg>"
}

function initStarFill(rating) {

    var s = document.querySelectorAll(".star");
    s.forEach(function (st) {

        st.childNodes[2].style.fill = "none";


    })
}


function returnStar(count, starSize, rating) {
    var r = count > rating ? rating : null;
    var content = "";
    var fill = false;
    for (var i = 1; i <= count; i++) {
        if (i <= r) {
            fill = true
        } else {
            fill = false;
        }

        content += renderSvg(i, starSize, fill);

    }
    initStarFill(r);

    var target = document.getElementById("r--s");
    target.innerHTML = content;
    var stars = document.querySelectorAll(".star");
    stars.forEach(function (star) {
        star.addEventListener("click", function () {

            initStarFill(null);
            var starId = this.id.split("")[4];
            for (var i = 1; i <= starId; i++) {
                var t = document.querySelector("#star" + i);
                t.childNodes[2].style.fill = fillColor;
            }
        });
    })

}