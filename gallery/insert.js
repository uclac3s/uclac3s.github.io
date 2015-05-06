//$(document).ready(function(){
// javascript placed here to mimic html insertion
// var photo_lst = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];

// ===== Change it to reflect the max photo index =====
var maxIndex = 10;

// ===== Don't change anything below =====
for (var i=0; i<=maxIndex; i++) {
	var fname = 'gallery/' + i +'.jpg';
	$('<div class="item"><a href="' + fname + '" title="" data-lightbox-gallery="gallery1" data-lightbox-hidpi=""><img src="' +
		fname + '" class="img-responsive " alt="img"></a></div>').insertBefore(".photo-anchor");
}
$(".photo-anchor").remove();
//});
