/**
 * jasmine tests for the interview.js file
 * run:
 * jasmine-node spec/
 *
 * Created August 26th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez
 */

var Interview = require('../interview.js');
describe('testing the interview.js file', function(){
  it('test isInArray', function(){
    expect(Interview.isInArray([1,5,8,9,10], 5)).toEqual(true);
    expect(Interview.isInArray([1,5,8,9,10], '5')).toEqual(false);
    expect(Interview.isInArray([1,'5',8,9,10], '5')).toEqual(true);
    expect(Interview.isInArray(['1','5','8','9','10'], 5)).toEqual(false);
    expect(Interview.isInArray(['1','5','8','9','10'], '5')).toEqual(true);
    expect(Interview.isInArray(['1','5','8','9','10'], {'hello': 'world'})).toEqual(false);
    expect(Interview.isInArray(['1','5',{'hello': 'world2'},'9','10'], {'hello': 'world'})).toEqual(false);
    expect(Interview.isInArray(['1','5',{'hello2': 'world'},'9','10'], {'hello': 'world'})).toEqual(false);
    expect(Interview.isInArray(['1','5',{'hello': 'world'},'9','10'], {'hello': 'world'})).toEqual(true);
    expect(Interview.isInArray(['1','5',{'hello': 'world'},'9','10'], {'hello': 'world', 'foo': 'bar'})).toEqual(false);
    expect(Interview.isInArray(['1','5',{'hello': 'world', 'foo': 'bar'},'9','10'], {'hello': 'world'})).toEqual(false);
    expect(Interview.isInArray([{'hello': 'world2'}, {'hello': 'world3'} ,{'hello': 'world', 'foo': 'bar'},'9','10'], {'hello': 'world'})).toEqual(false);
    expect(Interview.isInArray([{'hello': 'world2'}, {'hello': 'world3'} ,{'hello': 'world', 'foo': 'bar'},{'hello': 'world'},'10'], {'hello': 'world'})).toEqual(true);
  });

  it('test numSeries', function(){
    expect(Interview.numSeries([1,2,3,6,9,10,12,14])).toEqual(4);
    expect(Interview.numSeries([-1,-3,-5,0,5,7,10,14])).toEqual(5);
    expect(Interview.numSeries([1,1,1,1,1,1])).toEqual(1);
  });

  it('test bucket', function(){
    expect(Interview.bucket(
      [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
      ], 7)).toEqual(
        [
          [true, true, true, true, true],
          [true, true, true, true, true],
          [true, true, true, true, true],
          [true, true, true, true, true],
          [true, true, true, true, true]
        ]
    );

    expect(Interview.bucket(
      [
        [false, false, true, false, false],
        [false, true, false, true, false],
        [false, false, true, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
      ], 1)).toEqual(
        [
          [true, true, true, true, true],
          [true, true, false, true, true],
          [true, true, true, true, true],
          [true, true, true, true, true],
          [true, true, true, true, true]
        ]
    );

    expect(Interview.bucket(
      [
        [false, false, true, false, false],
        [false, true, false, true, false],
        [false, false, true, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
      ], 7)).toEqual(
        [
          [false, false, true, false, false],
        [false, true, true, true, false],
        [false, false, true, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
        ]
    );
  });

  it('test isIntersect', function(){
    var square1 = new Interview.Square(10,1,3,4);
    var square2 = new Interview.Square(7,6,4,10);
    expect(Interview.isIntersect(square1, square2)).toEqual(false);
    var square3 = new Interview.Square(5,3,2,6);
    expect(Interview.isIntersect(square1, square3)).toEqual(true);
    var square4 = new Interview.Square(3,4,1,6);
    expect(Interview.isIntersect(square1, square4)).toEqual(true);
  })
});
