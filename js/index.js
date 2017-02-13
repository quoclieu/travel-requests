//Angular
//
var app = angular.module('app', []);

app.controller('costCtrl', function($scope) {
	$scope.air = 0;
	$scope.accom = 0;
	$scope.taxi = 0;
	$scope.meals = 0;
	$scope.extra = 0;
});


//JS

//Displays fields depending if the user is requesting on behalf
//of someone or not

function limitDate(date){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //Jan is 0
	var yyyy = today.getFullYear();
	if(dd<10){
		dd='0'+dd;
	}
	if(mm<10){
		mm='0'+mm
	}
	today = yyyy+'-'+mm+'-'+dd;
	document.getElementById(date).valueAsDate = new Date();
	document.getElementById(date).setAttribute('min',today);
}

function ifBehalf() {
	if(document.getElementById('behalfYes').checked) {
		document.getElementById('search').style.display='block';
		document.getElementById('idTable').style.display='none';
		document.getElementById('confirm').style.display='block';
	} 
	else {
		document.getElementById('search').style.display='none';
		document.getElementById('idTable').style.display='block';
		document.getElementById('confirm').style.display='block';
	}
}

//Displays the rest of the fields after confirmation of the requestor
function confirm() {
	if(document.getElementById('confirmYes').checked) {
		document.getElementById('travelDetails').style.display='block';
	}
	else {
		document.getElementById('travelDetails').style.display='none';
	}
}