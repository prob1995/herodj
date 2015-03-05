//Use JQeury to do 'add list' function

$(document).ready(function(){
    $("#add-button").click(function(){
        var toAdd = $("input[name=order-item]").val();
        $(".list").append('<input type:text class="item" name="item" value='+ toAdd +'>');
	});
    $(document).on("click",".item", function(){
        $(this).remove();
	});
//    $("#submit-button").click(function(){
//	$.post("post",$(".list").serialize(),"json");
//	});

});