$(".top").find("li").on("mouseenter",function(){
	var index = $(this).index();
	$(".sale").eq(index).animate({"bottom":"0"},1000)
})

$(".top").find("li").on("mouseleave",function(){
	var index = $(this).index();
	$(".sale").eq(index).animate({"bottom":"-95"},2000)
})

$(".bottom_left").find("li").on("mouseenter",function(){
	var index = $(this).index();
	$(".sale").eq(index).animate({"bottom":"0"},1000)
})
$(".bottom_left").find("li").on("mouseleave",function(){
	var index = $(this).index();
	$(".sale").eq(index).animate({"bottom":"-95"},2000)
})

$(".box").find("li").on("mouseenter",function(){
//	var index = $(this).index();
	$(this).css({"bottom":"2"})
})
