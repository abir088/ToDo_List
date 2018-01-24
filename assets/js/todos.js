//check of specific Todos by clicking
$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
});
// another way-- long way
//if li is gray turn it black else turn it gray
// if($(this).css("color") === "rgb(128, 128, 128)"){
// 	//turn black
// 	$(this).css({
// 		color:"black",
// 		textDecoration: "none"
// 	});
// } 
// else{
// $(this).css({
// 	color:"grey",
// 	textDecoration: "line-through"
// });
// }

//click on X to delete Todo

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});//to remove the entire array
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}

});

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle()
});
