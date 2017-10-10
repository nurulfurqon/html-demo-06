console.log("%cWelcome to Sheetup", "color: #8293ff; font-size: x-large; font-family:tahoma; font-weight:bold");

// Animacao menu scroll to
	$('.goto').on('click', function(){
    var to = $(this).attr('href'); // $(this) is the clicked link. We store its href.
    $('html, body').animate({ scrollTop: ($(to).offset().top)-0}, 700);
    $('section').removeClass("active");
    $('section' + to).addClass("active");
    $('.goto').removeClass("active");
    $(this).addClass("active");
    return false;
	});

// Long form
$(window).scroll(function() {
    var y = $(this).scrollTop(); // Pos
    var r = 10; // Rate
    $('.background-home').css('background-position', 'right ' + parseInt(y/r) + 'px'); // Switch x polarity to reverse direction
});
