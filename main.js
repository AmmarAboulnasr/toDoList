'use strict';

$(document).ready(init);

function init() {
	$("#enterButton").click(buttonClicked);
}


function buttonClicked(event) {
	var description = $("#toDoField").val();
	var date = $("#dateField").val();

	if(!($("#toDoField").val() === "")) {
		console.log("passed");
		var $row = $("<tr>");
		$row.addClass("toDoItem");
		var $cellStatus = $("<td>");
		$cellStatus.append($("<input>").attr("type", "checkbox"));
		var $cellDescription = $("<td>")
		$cellDescription.text(description);
		var $cellDate = $("<td>");
		$cellDate.text(date);
		$row.append([$cellStatus, $cellDescription, $cellDate]);
		$("#table").append($row);
	}
}

