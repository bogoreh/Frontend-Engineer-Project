$(document).ready(function () {
    function e(a) {
        return "." === a ? 0 : isNaN(parseFloat(a)) ? 0 : parseFloat(a)
    }

    function f(a) {
        if (d) switch (d) {
            case "x":
                c *= a;
                break;
            case "+":
                c += a;
                break;
            case "-":
                c -= a;
                break;
            case "/":
                c /= a
        } else c = e($(".result h2").text());
        a = 0 !== c ? Math.floor(Math.log(Math.abs(c)) / Math.log(10)) : 0;
        a = Math.pow(10, 10 - a);
        a = Math.round(c * a) / a;
        9999999999 >= a && -9999999999 <= a ? $(".result h2").text(a) : ($(".result h2").text("err"), c = void 0);
        b = []
    }
    var b = [],
        d, c;
    $(".btn").click(function () {
        switch ($(this).text()) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                10 >
                    b.length && (b.push($(this).text()), $(".result h2").text(b.join("")));
                break;
            case ".":
                -1 === b.indexOf(".") && 10 > b.length && (b.push($(this).text()), $(".result h2").text(b.join("")));
                break;
            case "AC":
                b = [];
                d = c = void 0;
                $(".result h2").text("0");
                break;
            case "CE":
                b.pop();
                var a = b.length ? b.join("") : "0";
                $(".result h2").text(a);
                break;
            case "x":
                f(e(b.join("")));
                d = "x";
                break;
            case "+":
                f(e(b.join("")));
                d = "+";
                break;
            case "-":
                f(e(b.join("")));
                d = "-";
                break;
            case "/":
                f(e(b.join("")));
                d = "/";
                break;
            case "%":
                c && (a = 0 < b.length ? c * e(b.join("")) /
                    100 : 0, f(a), d = void 0);
                break;
            case "=":
                f(e(b.join(""))), d = void 0
        }
    })
});
//https://www.youtube.com/watch?v=XMDCb0QCHuI
//https://www.youtube.com/watch?v=Ukg_U3CnJWI
//https://www.youtube.com/watch?v=_cLvpJY2deo
//https://www.youtube.com/watch?v=6khaEHAQXvA