"use strict";
var Geometry;
(function (Geometry) {
    let Areas;
    (function (Areas) {
        const PI = 3.14;
        Areas.rectangle = (base, height) => base * height;
    })(Areas = Geometry.Areas || (Geometry.Areas = {}));
})(Geometry || (Geometry = {}));
