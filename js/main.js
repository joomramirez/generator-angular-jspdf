function lineEditor($scope) {

	$scope.showtooltip = false;
	$scope.value = 'Click aqui para editar!';

	$scope.hideTooltip = function() {
		$scope.showtooltip = false;
	}

	$scope.toggleTooltip = function(e) {
		e.stopPropagation();
		$scope.value = 'Escreva alguma coisa aqui..';
		$scope.showtooltip = !$scope.showtooltip;
	}
}

function printPDF() {

	var doc = new jsPDF();
	var elementHandler = {
		'#oi' : function(element, renderer) {
			return true;
		}
	};

	var source = window.document.getElementsByTagName("body")[0];

	doc.fromHTML($('#content').get(0), 10, 10, {
		'width' : 180
	});

	doc.output("dataurlnewwindow")	
}

var Show = {
	getFromPDF : function() {
		$('#btn-pdf').click(function() {
			printPDF();
		});
	}
}

$(function() {
	Show.getFromPDF();
});
