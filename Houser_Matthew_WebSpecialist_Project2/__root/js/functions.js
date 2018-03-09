//call display settings for all display fixes
$(window).resize(updateHeight);
$(window).resize(bubble);
$(window).resize(accHeight);
$(window).resize(levels);
$(window).resize(setSpanLabels);
$(window).load(function(){ updateHeight(); accHeight(); levels(); setSpanLabels(); });
var high;

//make slide containers height of screen
function updateHeight(){
	high = $(window).height();  
    $('.main').css('height', high);
	$('.ui-dialog').outerHeight(high);
}

//display settings for .fieldset categories
function bubble() {
if ( $('.ui-dialog-titlebar-close').height() > 35 ) {
 $('.mainDialogue:nth-child(2) li').each(function() { var top = (($('.fieldset').height() - $(this).outerHeight()) / 2); $(this).css('top', top); });
 
 }
 else {
 $('.mainDialogue:nth-child(2) li').css('top', '0');
 }
 }

//initialize swiper containers 
$(function(){
	
	swiper_x_1 = new Swiper('.swiper_x_1', {
		moveStartThreshold: 7
		
	});
	
	swiper_y_1 = new Swiper('.swiper_y_1', {
		
		
		mode:'vertical',
		moveStartThreshold: 5
	});
	
	$('.arrowRight').click(function() {
		swiper_x_1.swipeNext();
    });
	$('#arrowDown').click(function() {
		swiper_y_1.swipeNext();
    });
	$('#arrowUp').click(function() {
		swiper_y_1.swipePrev();
    });	
	$('#arrowLeft').click(function() {
		swiper_x_1.swipePrev();
    });	
});

//#framing content dialog 
  $(function() {
    $('#framing').dialog({
      autoOpen: false,
    });
 
    $('.row2 .four:nth-child(1)').click(function() {
      $('#framing').dialog('open').promise().done(function() { 
		$('.ui-dialog').css({ 'width': '90%', 'position': 'fixed', 'top': '0', 'left': '0'}); 
		updateHeight();
		bubble();
		});
    });
  });
  
//#teams content dialog 
    $(function() {
    $('#teams').dialog({
      autoOpen: false,
    });
	
    $('.row2 .four:nth-child(2)').click(function() {
      $('#teams').dialog('open').promise().done(function() { 
		$('.ui-dialog').css({ 'width': '90%', 'position': 'fixed', 'top': '0', 'left': '0'}); 
		updateHeight();
		bubble();		
		});
    });
  });

//create challengers accordion 
  $(function() {
    $('#challengers').accordion({ collapsible: true, header: 'h2:not(.ignore)', activate: accHeight });
  });

  
//accordion display fix for content height 
function accHeight() {
var containWidth = $('.challenger').width();  
var innerWidth = $('.challenger section.fifty:visible').width();
var setHeight = 0;

$('.challenger').children('.fifty:visible').each(function(){ 

if (innerWidth / containWidth > 0.6) { setHeight = setHeight + $(this).height(); } 

if (innerWidth / containWidth < 0.6) { 
	if($('.challenger section.fifty:visible:first').height() >= $('.challenger section.fifty:visible:last').height()) { setHeight = $('.challenger section.fifty:visible:first').height(); }
	if($('.challenger section.fifty:visible:first').height() < $('.challenger section.fifty:visible:last').height()) { setHeight = $('.challenger section.fifty:visible:last').height(); }
} 

});
$('.challenger').css('height', (setHeight + 30));


}

//make visible h2 below accordion last accordion heading (which is invisible) click to open last entry
$('#challengers .scrollInner > h2.ignore').on('click', function(){ $('#challengers .scrollInner > h2:nth-of-type(4)').click(); });

//click function links for examples
$('.challenger img').on('click', function(){ var goToMe = $(this).attr('data-url'); window.open(goToMe, '_blank'); });

//setup display for levels animation
function levels(){
var bigHigh = $('.results:first').height();  
var smallHigh = $('.results > h3').height(); 
var levelsHigh = bigHigh - smallHigh; 
$('.levels').css('height', levelsHigh);
}

//add score text to results
$('.level').each(function(){ var myScore = $(this).attr('data-score'); $(this).append('<p>' + (myScore * 2) + '%</p>'); });

//callbacks for results animation
$(document).ready(function(){
swiper_x_1.addCallback('SlideNext', function(){
	animateResults();
	swiper_y_1.swipeTo(0);
});
swiper_x_1.addCallback('SlidePrev', function(){
	resetResults();
});
});  

//animate results
function animateResults() {
$('.level').each(function(){ var myScore = $(this).attr('data-score'); $(this).animate({ height: myScore + '%' }, 2000 ); });
}

//reset results
function resetResults() {
$('.level').each(function(){ $(this).stop(); });
$('.level').each(function(){ $(this).css('height', '2%'); });
}

//text labels for results
function setSpanLabels() {
$('.level span').each(function(){ var myTop = ($(this).width() / -2) - 15; $(this).css('top', myTop); });
$('.level span').each(function(){ var myLeft = (($(this).parent().width() - $(this).height()) / 2) - ($(this).width() / 3); $(this).css('left', myLeft); });
}

//final tally dialogue
    $(function() {
    $('#tally').dialog({
      autoOpen: false,
    });
	
    $('#final').click(function() {
      $('#tally').dialog('open').promise().done(function() { 
		$('.ui-dialog').css({ 'width': '90%', 'position': 'fixed', 'top': '0', 'left': '0'}); 
		updateHeight();		
		});
    });
  });