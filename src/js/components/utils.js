var utils = {
    degreeConv: function degreeConv (value) {
        if (value === 0) {
            return 'N';
        } else if (value > 0 && value < 90) {
            return 'NE';
        } else if (value === 90) {
            return 'E';
        } else if (value > 90 && value < 180) {
            return 'SE'
        } else if (value === 180) {
            return 'S';
        } else if (value > 180 && value < 270) {
            return 'SW';
        } else if (value === 270) {
            return 'W';
        } else if (value > 270 && (value <= 359)) {
            return 'NW';
        }
    },
    toF: function (kelvin) {
        var result = 0;     
        result = kelvin * 9/5 - 459.67;     
        return result.toFixed(); 
    }
};