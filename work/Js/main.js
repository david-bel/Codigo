
$(document).ready(function(){
//slider

$(".skip_0").click(function() {
    $('html,body').animate({scrollTop: $(".contain").offset().top}, "very_fast");
});

$(".skip_1").click(function() {
    $('html,body').animate({scrollTop: $(".content2").offset().top}, "very_fast");
});

$(".skip_2").click(function() {
    $('html,body').animate({scrollTop: $(".content3").offset().top}, "very_fast");
});

$(".skip_3").click(function() {
    $('html,body').animate({scrollTop: $(".content4").offset().top}, "very_fast");
});

$(".skip_4").click(function() {
    $('html,body').animate({scrollTop: $(".section5").offset().top}, "very_fast");
});

$(".skip_orange").click(function() {
    $('html,body').animate({scrollTop: $(".content2").offset().top}, "very_fast");
});

$(".skip_white").click(function() {
    $('html,body').animate({scrollTop: $(".content3").offset().top}, "very_fast");
});

//Scroll header

$(window).scroll(function(){
	if ($(window).scrollTop()>150 ) {
		$("header").css({"background-color":"white"}),
		$(".titulo,li").css({"color":"black"})
	}
	else($("header").css({"background-color":"transparent"}),
		$(".titulo,li").css({"color":"#909090"}))
	if ($(window).scrollTop()>$(".content2").offset().top-100 && $(window).scrollTop()<$(".content3").offset().top-100) {
		$(".skip_1").css({"color":"#f4623a"})
	}
	if ($(window).scrollTop()>$(".content3").offset().top-100 && $(window).scrollTop()<$(".content4").offset().top-100) {
		$(".skip_2").css({"color":"#f4623a"})
	}
	if ($(window).scrollTop()>$(".content4").offset().top-100 && $(window).scrollTop()<$(".section5").offset().top-100) {
		$(".skip_3").css({"color":"#f4623a"})
	}
	if ($(window).scrollTop()>$(".section5").offset().top-100) {
		$(".skip_4").css({"color":"#f4623a"})
	}
});

//hamb


$(".hamb_button").click(function(){
$("ul").slideToggle("fast","linear");
});

//locksScroll

var Nos = $(window).scrollTop();

$("section.content4 div").click(function(){
$(window).scroll(function() {
    $(window).scrollTop(Nos);
});

})

//modal-slider
$(".close").click(function () {
	$(".black_box").css({"display":"none"})
	$(".g-1").css({"display":"none"})
	$(".g-2").css({"display":"none"})
	$(".g-3").css({"display":"none"})
	$(".g-4").css({"display":"none"})
	$(".g-5").css({"display":"none"})
	$(".g-6").css({"display":"none"})
	$(window).off('scroll');

});
$(".image1").click(function () {
	$(".black_box").show()
	$(".g-1").css({"display":"block"})
	
})
$(".image2").click(function () {
	$(".black_box").show()
	$(".g-2").css({"display":"block"})
})
$(".image3").click(function () {
	$(".black_box").show()
	$(".g-3").css({"display":"block"})
})
$(".image4").click(function () {
	$(".black_box").show()
	$(".g-4").css({"display":"block"})
})
$(".image5").click(function () {
	$(".black_box").show()
	$(".g-5").css({"display":"block"})
})
$(".image6").click(function () {
	$(".black_box").show()
	$(".g-6").css({"display":"block"})
});

//slider

$("section.content4 div").click(function(){
	var count=$(this).index()+1;
	p_items=count;

})


var n_items=$("div div.caja_central").length;
var p_items=1;

$(".item").click(nextSlider);
$("#sig").click(nextSlider);
$("#prev").click(prevSlider);

function nextSlider(){
	if(p_items>=n_items) {
		p_items=1;
		
	}
	else{p_items++}
	console.log(p_items)
	$("div.caja_central").hide();
	$('div.center_box div:nth-child('+ p_items +')').fadeIn();
}

function prevSlider(){
	if(p_items<=1) {p_items=n_items}
		else{p_items--;}
		
	
	
	console.log(p_items)
	$("div.caja_central").hide();
	$('div.center_box div:nth-child('+ p_items +')').fadeIn();
}



















});