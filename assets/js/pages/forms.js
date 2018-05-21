//------------- forms.js -------------//
$(document).ready(function() {

	//------------- Check all Checkboxes -------------//
	$('#checkAllExample').checkAll({
		masterCheckbox: '.check-all',
		otherCheckboxes: '.check'
	});
	//------------- Date time picker -------------//
	//年月日
	$(".datetime-picker2").datetimepicker({
		format: "yyyy MM dd",
		autoclose: true,
		todayBtn: true,
		pickerPosition: "bottom-left",
		minView:2
	});

});
