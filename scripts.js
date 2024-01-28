const year = 2050; /*removed semi colons and replaced it  with an  equal sign*/
const status = 'parent'; /*changed status to parent & I removed the semi colon and replaced it with an equal sign*/
const count = 0;


if (year = 2050){                             /*changed date to year*/
   console.log("January", 'New Year’s Day')              /*closed off the parenthesis*/
	console.log("March", 'Human Rights Day')
	let date = 'April'     /*I added the let before date before it has not being declared and avoided using const because I am yet to change it value again*/
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count = count + 4}      /*I removed the let before the count to avoid redclaring count or renaming it altogether since it was initially declared*/

	if (status = "parent"){                            /* NB NB Status is deprecated, how do I work around that*/
	  console.log('June', 'Youth Day')
		count = count + 1;}
                                                    /*I am struggling to figure out when exactly I am supposed to close off the curly brackets, I am aware thatthey hold block of codes to run by a function, but with this challenge im struggling to find the the close off*/

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	 let date = 'December' 
	console.log(date, 'Day of Reconciliation')
	count = count + 3;

	if (status = "parent"){
	  console.log(date, 'Christmas Day')
	count = count + 1;
  

	console.log(date, 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)