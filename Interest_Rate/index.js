(function() {

var usd = document.getElementById('usd');
var month = document.getElementById('month');
var interest = document.getElementById('interest');
var percentage = document.getElementById('percentage');
var submit = document.getElementById('submit');
var output = document.getElementById('output');



submit.addEventListener('click', view);


function view(){
usd = Number(usd.value);
month = Number(month.value);
interest = Number(interest.value);

	if(percentage.selectedIndex == 0){
		simpleRate();
 	}

 	if(percentage.selectedIndex == 1){
 		compoundRate();
 	}

 	submit.addEventListener('click', view);
};

function simpleRate(){
	var result = usd*month*interest/100;
	output.innerHTML += result;

submit.removeEventListener('click', view);
submit.addEventListener('click', view)

};

function compoundRate(){
	var interestRate = interest;

	//var result = usd*month*(1+interest);
	
		var i;
		var sum;
		var money = usd;

		for (i=1; i<=month; i++){
		 
		 sum = money*(1+interestRate/100);
		 money = sum;
		 
		
		}

		 output.innerHTML += Math.round(sum) - usd;
		
		submit.removeEventListener('click', view);
		
};



})();