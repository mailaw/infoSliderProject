// A $( document ).ready() block.
$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#f2f2f2','#160F29','whitesmoke', '#F05D5E', '#000','#f2f2f2','#160F29','whitesmoke', '#F05D5E' ],
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
            'tooltips': ['home','section1', 'section2', 'section3', 'section4','section5','section6','quiz','sources']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 9,
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
      'q': 'What part of the brain is used for comprehension of language?',
      'options': [
        'Prefrontal Cortex',
        'Hippocampus',
        'Wernickers Area',
        'Brocas Area'
      ],
      'correctIndex': 3,
      'correctResponse': 'That is right! Great job.',
      'incorrectResponse': 'Wrong :-( Try again and look at the 2nd slide.'
    },
      {
        'q': 'A smaple question?',
        'options': [
          'Answer 1',
          'Answer 2'
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

