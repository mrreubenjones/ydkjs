YDKJS: Scope & Closures.

Chapter 3: Function vs Block Scope
---

Quick notes:
- Functions can act to hide unnecessary variables from global scopes

'''javascript
var a = 2;

(function foo(){ // <-- insert this

	var a = 3;
		console.log( a ); // 3

		})(); // <-- and this

		console.log( a ); // 2

'''

