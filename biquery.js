!function(){function e(e){return"["+e+"]"}var n={version:"0.1.0",column:function(n,r){return e(n)+" AS "+r},count:function(n,r){return"COUNT("+("*"==n?n:e(n))+") AS "+r},average:function(n,r){return"AVG(CONVERT(NUMBER,"+e(n)+")) AS "+r},sum:function(n,r){return"SUM(CONVERT(NUMBER,"+e(n)+")) AS "+r},abssum:function(n,r){return"ABS(SUM(CONVERT(NUMBER,"+e(n)+"))) AS "+r},selectWithSeries:function(e,n){var r=n.reduce(function(e,n){return e?e+", "+n.expression:n.expression},""),t="SELECT "+r+" FROM ?";return console.log(t),alasql(t,[e])},selectWithSeriesAndCategory:function(n,r,t){var u=t.reduce(function(e,n){return e?e+", "+n.expression:n.expression},"");u=r.reduce(function(e,n){return e?e+", "+n.expression:n.expression},u);var i=t.reduce(function(n,r,t){return r.aggregate?n?n+", "+r.alias:" GROUP BY "+r.alias:n?n+", "+e(r.name):" GROUP BY "+e(r.name)},"");i=t.reduce(function(e,n,r){return n.aggregate?0!=r?e+", "+n.alias:e+" ORDER BY "+n.alias:0!=r?e+", "+n.alias:e+" ORDER BY "+n.alias},i);var o="SELECT "+u+" FROM ?"+i;return console.log(o),alasql(o,[n])}};"function"==typeof define&&define.amd?(this.biquery=n,define(n)):"object"==typeof module&&module.exports?module.exports=n:this.biquery=n}();