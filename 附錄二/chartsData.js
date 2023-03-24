var xy = [
    ['北區', 300, '#CD0000'],
    ['中區', 240, '#006000'],
    ['南區', 100, '#FF8C00'],
    ['東區', 80, '#68228B'],
    ['其它', 180, '#FF83FA'],
    ['外島', 100, '#003D79']];

var len = xy.length;
var total = 0;
for (var key in xy) {
    total += xy[key][1];
}
