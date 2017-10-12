// A $( document ).ready() block.
$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#f2f2f2', 'white', '#7BAABE', 'whitesmoke', '#000'],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4','section5','section6','section7','section8','section9']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 8,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
        
	});
    console.log( "ready!" );
    setPage();
});

function setPage(){
    //console.log("setPage()");
    //$("#intro").hide();
 
    //$('a[title]').qtip();
} 

$('#arrow').click(function () {
    $.fn.pagepiling.moveSectionDown();
});

$('#quiz').quiz({
  questions: [
    {
      'q': 'A sample question?',
      'options': [
        'Answer 1',
        'Answer 2',
        'Answer 3',
        'Answer 4'
      ],
      'correctIndex': 1,
      'correctResponse': 'Custom correct response.',
      'incorrectResponse': 'Custom incorrect response.'
    }
  ]
    
});


/* loop through text. http://jsfiddle.net/jfriend00/n4mKw/ */
(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();