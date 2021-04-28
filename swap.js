// Pass By Value :
	
	let v1 = 15;
	let v2 = 25;
	console.log(`Before Swapping : v1 = ${v1} v2 = ${v2}`);
	let temp = v2;
	v2 = v1;
	v1 = temp;
	console.log(`After Swapping : v1 =${v1} v2 = ${v2}`);	




// Pass By Reference :

	let obj1 = { a: 15 }
     let obj2 = { a: 25 }
	console.log(`Before Swapping : Obj1 = ${obj1.a} Obj2 = ${obj2.a}`);
	let tmp1 = obj1;
	obj1 = null;
     let tmp2 = obj2;
	obj2 = null;
     obj1 = tmp2;
     obj2 = tmp1;
	console.log(`After Swapping Obj1 = ${obj1.a} Obj2 = ${obj2.a}`);
