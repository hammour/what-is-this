/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
	console.log('This is...', this);
	console.log('a = ', a);
	console.log('b = ', b);
};

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis
	}
};

var inAFunction = function(a, b) {
	this.name = 'Sally';
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

// Instructions:
// You are a scientist who has just discovered a *mysterious* new element
// in your lab. Since creativity isn't your strong suit, you name the element
// `this`. Your job is to figure out the properties of this new element as
// well as how it interacts with its environment. Run through each of the
// examples in whatIsThis.js, one by one (commenting out the previous example
// and uncomment the current example as necessary). In the comments section
// below each example fill in what `this` is referencing inside of the
// whatIsThis function. Why? If it throws an error, why is it throwing an
// error?

// You can open index.html in your browser and view your console to get
// started.

// * Problem 1
// whatIsThis('hello', 'world');
// * "this" is ...
// * because ...




// * Problem 2
// window.whatIsThis('hello', 'world');
// * "this" is ... a method for the the function window
// * because ... it was called after a function window and got Parentheses




// * Problem 3
 //inAnObject.test1('face', 'book');
// * "this" is ...an object that have two objects one of them is a function that takes two values in.
// * because ... because it runs the function 'whatIsThis' when the object was called by the key 'test1'




// * Problem 4
//inAnObject.anotherObject.test1('twitter', 'book');
// * "this" is ... this is gives an error.
// * because ...because another anotherObject has no key called test1 




// * Problem 5
 //inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is ... a functions that is an object inside the object anotherObject and anotherObject is an Object of inAnObject.
// * because ... it runs test2 is a key for the function whatIsThis; 




// * Problem 6
 //whatIsThis.call();
// * "this" is ... this a function that calls the keys of the function whatIsThis as if it is a constructor.
// * because ... it returns undefined for the whatIsThis function. 




// * Problem 7
// whatIsThis.call(trickyTricky);
// * "this" is ... trickyTricky is an object that have been called by the console.log function and output it's all values and keys.
// * because ... a and b undefined because their values not been passed into using the method.




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is ... trickyTricky is an object that have been called by the console.log function and output it's all values and keys.
// * because ...a and b valued are passed in this time unlike before.




// * Problem 9
// whatIsThis.call(confusing);
// * "this" is ... is an object that have been called by the console.log function and output it's all values and keys.
// * because ... a and b undefined because their values not been passed into using the method.




// * Problem 10
//whatIsThis.call(confusing, 'hello');
// * "this" is ... is an object that have been called by the console.log function and output it's all values and keys.
// * because ... 'hello' passed to a, b still undifined.




// * Problem 11
//whatIsThis.apply(trickyTricky);
// * "this" is ... object and no arguements passed in to apply whatIsThis.
// * because ... the function whatISThis is returning undefined to it's values a and b 




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is ... object with the values passed in to the functoin whatIsThis. 
// * because ... it returning the values as specified above in an array.




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
// * "this" is ... an error as soon it tries to insert the values without putting them in an array.
// * because ... it can't identify which value to apply. 




// * Problem 14
// inAFunction('what will', 'happen?');
// * "this" is ... object that have a function whatIsThis as one of it's objects
// * because ... it runs the function whatISThis using the values passed in to it.




// * Problem 15
 //inAFunction.test3('A', 'B');
// * "this" is ... an error 
// * because ... test3 is not a method




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is ... Object 
// * because ... constructed from the function inAFunction();




// * Problem 17
//  var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
// * "this" is ... Object that constructed from the function inAFunction();
// * because ... inAFunction() turned into a constructor; 




// * Problem 18
 //inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is ... object trickyTricky 
// * because ... trickyTricky passed to test1 by .call()




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is ... Object confusing
// * because ... passed to test2 by apply() function and applying both ['foo', 'bar'] to it.