'use strict';

$(document).ready(init);

function init() {
	$("#enterButton").click(buttonClicked);
	$("#table").on("change", "input", checkBoxClicked);
}

function checkBoxClicked(event) {
	if(event.target.checked) {
		$(event.target).closest("tr").css({"text-decoration":"line-through","color":"green"});
	} else {
		$(event.target).closest("tr").css({"text-decoration":"","color":""});
	}
}

function buttonClicked(event) {
	var description = $("#toDoField").val();
	var date = $("#dateField").val();

	if(!($("#toDoField").val() === "")) {
		console.log("passed");
		var $row = $("<tr>");
		$row.addClass("toDoItem");
		var $cellStatus = $("<td>");
		var $checkBox = $("<input>").attr("type", "checkbox");
		$checkBox.addClass("chkBx");
		$cellStatus.append($checkBox);
		var $cellDescription = $("<td>")
		$cellDescription.text(description);
		var $cellDate = $("<td>");
		$cellDate.text(date);
		$row.append([$cellStatus, $cellDescription, $cellDate]);
		$("#table").append($row);
	}
}

