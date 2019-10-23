"use strict";
var Geometry;
(function (Geometry) {
    let Areas;
    (function (Areas) {
        const PI = 3.14;
        Areas.circuference = (lightning) => PI * Math.pow(lightning, 2);
    })(Areas = Geometry.Areas || (Geometry.Areas = {}));
})(Geometry || (Geometry = {}));
