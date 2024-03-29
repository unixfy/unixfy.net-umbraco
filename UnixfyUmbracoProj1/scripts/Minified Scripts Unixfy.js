$(document).ready(function () {
    ! function () {
        if ("requestAnimationFrame" in window) {
            var n = [];
            if ($("[data-bs-parallax-bg]").each(function () {
                var e = $(this),
                    t = $("<div>");
                t.css({
                    backgroundImage: e.css("background-image"),
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    position: "absolute",
                    height: "200%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    zIndex: -100
                }), t.appendTo(e), n.push(t[0]), e.css({
                    position: "relative",
                    background: "transparent",
                    overflow: "hidden"
                })
            }), n.length) {
                var e, t = [];
                $(window).on("scroll resize", o), o()
            }
        }

        function o() {
            t.length = 0;
            for (var o = 0; o < n.length; o++) {
                var a = n[o].parentNode.getBoundingClientRect();
                a.bottom > 0 && a.top < window.innerHeight && t.push({
                    rect: a,
                    node: n[o]
                })
            }
            cancelAnimationFrame(e), t.length && (e = requestAnimationFrame(i))
        }

        function i() {
            for (var n = 0; n < t.length; n++) {
                var e = t[n].rect,
                    o = t[n].node,
                    i = Math.max(e.bottom, 0) / (window.innerHeight + e.height);
                o.style.transform = "translate3d(0, " + -50 * i + "%, 0)"
            }
        }
    }()
});