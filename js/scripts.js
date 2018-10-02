// A $( document ).ready() block.
$(document).ready(function( ) {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#f2f2f2', '#160F29', 'whitesmoke', '#F05D5E', '#000', '#f2f2f2', '#160F29', 'whitesmoke', '#F05D5E' ],
        anchors: ['s1','s2','s3','s4','s5','s6','s7','s8','s9'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['home', 'section1', 'section2', 'section3', 'section4' ,'section5', 'section6', 'quiz', 'sources']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 6,
        touchSensitivity: 7,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,

		//events
		onLeave: function (index, nextIndex, direction){},
		afterLoad: function (anchorLink, index){},
		afterRender: function(){},
        
	});
    console.log("ready!"); 
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
        "Wernicke's Area",
        'Brocas Area'
      ],
      'correctIndex': 3,
      'correctResponse': 'That is right! Great job.',
      'incorrectResponse': 'Wrong :-( Try again and look at the 2nd slide.'
    },
      {
        'q': "Broca's area handles semantics and syntax processing in the brain.",
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 1,
        'correctResponse': 'That is right! Great job.',
        'incorrectResponse': 'Wrong :-('
      },
      {
        'q': 'What is not a benefit of learning a new language?',
        'options': [
          'Increased memory ability',
          'Better executive control',
          'Decreased ability for controlling attention'
            
        ],
        'correctIndex': 3,
        'correctResponse': 'That is right! Great job.',
        'incorrectResponse': 'Wrong :-('
      },
      {
        'q': 'Learning a new language actually builds new neural pathways in the brain.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 1,
        'correctResponse': 'That is right! What language would you want to learn? ',
        'incorrectResponse': 'Not quite.'
      }
  ]
    
});



/*toggle between text*/
   var shown = 1;
   $("#changeText").click(function() {
       if(shown == 1) {
          $("#text1").css("display", "none");
          $("#text2").css("display", "block");
          shown = 2;
       } else {
          $("#text2").css("display", "none");
          $("#text1").css("display", "block");
          shown = 1;
       }
   });


/* typer taken from here https://codepen.io/gschier/pen/jkivt */
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};



/*words carousel
var words = ['你好！你好嗎？', 'Tere! Kuidas sul läheb?', 'مرحبا! كيف حالك؟!','Salut! Comment allez-vous?'];
var i = 0;
var text = "This text changes";
function _getChangedText() {
        i = (i + 1) % words.length;
        return words[i];
}
function _changeText() {
  var txt = _getChangedText();

    var d = document.getElementById("changer")
    d.className = "fadeOut";
    setTimeout(function(){
     d.className = "";
    document.getElementById("changer").innerHTML = txt;
}, 100000);
}
setInterval("_changeText()", 1800); 
*/

/*afading in and out */
