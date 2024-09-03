
const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function(){
        return this.width * this.length;

    },
};

var boundGetArea = roomDimensions.getArea;
console.log(boundGetArea());

var boundGet = boundGetArea.bind(roomDimensions);
console.log(boundGet());
