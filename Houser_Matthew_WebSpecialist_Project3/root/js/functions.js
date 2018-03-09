$(document).ready(function(){

var dataBit = 'maplab';
var dataUrl;

$('nav li').click(function (){ 
     dataBit = $(this).attr('class');
	 dataSet();
	 $('.inner iframe').attr('src', dataUrl);
	 $('.sidebar p').fadeTo(500, 0);
	 $('.sidebar h2').fadeTo(500, 0).promise().done(function() {
	 
	 if(dataBit == 'maplab') { $('.sidebar p').replaceWith('<p>The Palomar MapLab is a fully responsive desktop device friendly map to all the Palomar campuses.It uses Google Maps for both text directions and an optional map.</p>'); $('.sidebar h2').replaceWith('<h2>Palomar MapLab</h2>'); }
	 if(dataBit == 'pizza') { $('.sidebar p').replaceWith('<p>The Palomar MapLab is a fully responsive desktop device friendly map to all the Palomar campuses.It uses Google Maps for both text directions and an optional map.</p>'); $('.sidebar h2').replaceWith('<h2>Gourmet Pizza</h2>'); }
	 if(dataBit == 'todo') { $('.sidebar p').replaceWith('<p>The Palomar MapLab is a fully responsive desktop device friendly map to all the Palomar campuses.It uses Google Maps for both text directions and an optional map.</p>'); $('.sidebar h2').replaceWith('<h2>ToDo!</h2>'); }
	 if(dataBit == 'whereuat') { $('.sidebar p').replaceWith('<p>The Palomar MapLab is a fully responsive desktop device friendly map to all the Palomar campuses.It uses Google Maps for both text directions and an optional map.</p>'); $('.sidebar h2').replaceWith('<h2>whereUat</h2>'); }
	 if(dataBit == 'memories') { $('.sidebar p').replaceWith('<p>The Palomar MapLab is a fully responsive desktop device friendly map to all the Palomar campuses.It uses Google Maps for both text directions and an optional map.</p>'); $('.sidebar h2').replaceWith('<h2>Memories</h2>'); }
	 
	 $('.sidebar p').fadeTo(500, 100);
	 $('.sidebar h2').fadeTo(500, 100);
	 });
	 
	 
	 

});


function dataSet(){

if(dataBit == 'maplab') { dataUrl = 'http://www.thedesignlabproject.com/projies/Houser_Matt_MapLab/Houser_Matt_MapLab.html' }
if(dataBit == 'pizza') { dataUrl = 'http://www.thedesignlabproject.com/projies/Houser_Matthew_Midterm/Houser_Matthew_Midterm.html' }
if(dataBit == 'todo') { dataUrl = 'http://www.thedesignlabproject.com/projies/Houser_Matthew_LocalStorage/Houser_Matthew_LocalStorage.html' }
if(dataBit == 'whereuat') { dataUrl = 'http://www.thedesignlabproject.com/projies/Houser_Matt_Project/Houser_Matt_Project.html' }
if(dataBit == 'memories') { dataUrl = 'http://www.thedesignlabproject.com/projies/Houser_Matthew_Final/Houser_Matthew_Final.html' }

}
$('.visit').on('click', function(){
dataSet();
window.open(dataUrl, '_blank');
});

$('.rotate').on('click', function(){
dataSet();


if( $('#main div:nth-child(2)').hasClass('vertical') == true) {
$('.vertical .inner').fadeTo(500, 0);
$('.vertical').animate({ marginLeft: '10%' }, 500);
$('.vertical').animate({  borderSpacing: -90 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');
$('.vertical').fadeTo(500, 0).promise().done(function(){

$('.vertical .inner').remove();
      $('.vertical').css('-webkit-transform','rotate(0deg)'); 
	  $('.vertical').css('-moz-transform','rotate(0deg)');
      $('.vertical').css('transform','rotate(0deg)');
$('.vertical').css('margin-left', '');	  
$('.vertical').removeClass().attr('class', 'horizontal');
$('.horizontal').append('<div class="inner"><iframe src="' + dataUrl + '" /></div>');
$('.horizontal').fadeTo(500, 100);
});
}


if( $('#main div:nth-child(2)').hasClass('horizontal') == true) {
$('.horizontal .inner').fadeTo(500, 0);
$('.horizontal').animate({ marginLeft: '0' }, 500);
$('.horizontal').animate({  borderSpacing: -90 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');
$('.horizontal').fadeTo(500, 0).promise().done(function(){

$('.horizontal .inner').remove();
      $('.horizontal').css('-webkit-transform','rotate(0deg)'); 
	  $('.horizontal').css('-moz-transform','rotate(0deg)');
      $('.horizontal').css('transform','rotate(0deg)');
$('.horizontal').css('margin-left', '');	  
$('.horizontal').removeClass().attr('class', 'vertical');
$('.vertical').append('<div class="inner"><iframe src="' + dataUrl + '" /></div>');
$('.vertical').fadeTo(500, 100);
});
}

 
});

});