class Lich {
    constructor(x, y, index) {
        this.x = x
        this.y = y
        this.index = index
    }
    addnewGrasses() {
        if (grassArr.length == 0) {
            for (var i in grassDirections) {
                var x = grassDirections[i][0]
                var y = grassDirections[i][1]
                var gr = new Grass(x, y, 1)
                grassArr.push(gr)
            }
        }
    }
    addnewGrassEater() {
        if (grassEaterArr.length == 0 && grassArr.length > 40) {
            var count = 0;
            for (var i in grassDirections) {
                var x = grassDirections[i][0]
                var y = grassDirections[i][1]
                var gr = new GrassEater(x, y, 2)
                count++
                grassEaterArr.push(gr)
                if (count >= 4) {
                    break;
                }

            }
        }
    }
    addnewGishatic() {
        if (gishaticArr.length == 0) {
            for (var i in gishatichDirections) {
                var x = gishatichDirections[i][0]
                var y = gishatichDirections[i][1]
                var gish = new Gishatic(x, y, 3)
                gishaticArr.push(gish)
            }
        }
    }
}