/**
 * interview task functions will be here
 *
 * Created August 26th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez
 */

/**
 * will return true if item is in array - will also compare objects if needed
 * @param {Array} arr each item of the array can contain string, number or object
 * @param {number | string | Object} item - item can be string, number or object
 * @returns {boolean} - returns true if item is in array
 */
function isInArray(arr, item){

}

/**
 * will count the number of sum series
 * example: expect(numSeries([1,2,3,6,9,10,12,14])).toEqual(4)
 * @param {Array<number>} arr - array of numbers
 * @returns {number}
 */
function numSeries(arr){

}

/**
 * this function needs to implement the bucket tool in paint
 * given a pixel matrix, where each pixel can be true (colored black) or false (not colored)
 * you get a pixel and need to color the shape this pixel is in.
 * @param {*[]} arr - array of arrays the discribe a two dimensional matrix with boolean values
 * @param {number} x - row number
 * @param {number} y - row number
 * @returns {*[]} - new two dimentional matrix with boolean values describing a colored matrix
 */
function bucket(arr, pixelNum){

}

/**
 * returns true if the square intersects
 * square top, left, bottom
 * squares intersect if happens one of the following:
 * 1 - square1 is completely inside square2
 * 2 - square2 is completely inside square1
 * 3 - at least one of the lines of one of the square touch or cross the other square
 * @param {Square} square1
 * @param {Sqaure} square2
 * @returns {boolean}
 */
function isIntersect(square1, square2){
  return true;
}


/******************************
 * don't touch this part
 ******************************/


var Square = function Square(top, left, bottom, right){
  var _top = top;
  var _left = left;
  var _bottom = bottom;
  var _right = right;

  this.getTop = function getTop(){
    return _top;
  };

  this.getLeft = function getLeft(){
    return _left;
  };

  this.getBottom = function getBottom(){
    return _bottom;
  }

  this.getRight = function getRight(){
    return _right;
  }
};

var exports = module.exports = {};
exports.isInArray = isInArray;
exports.numSeries = numSeries;
exports.bucket = bucket;
exports.Square = Square;
exports.isIntersect = isIntersect;
