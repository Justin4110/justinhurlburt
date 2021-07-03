/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);

var quotes = [
    {text: "Be yourself, everyone else is already taken.",
    authors: "Oscar Wilde"        
},
    {text: "Be the change that you wish to see in the world.",
    authors: "Mahatma Gandhi"
},
    {text: "I have not failed. I\'ve just found 10000 ways that don\'t work.",
    authors: "Thomas A. Edison"
},
    {text: "It is never too late to be what you might have been.",
    authors: "George Eliot"
},
    {text: "Life isn\'t about finding yourself. Life is about creating yourself.",
    authors: "George Bernard Shaw"
},
    {text: "Do what you can, with what you have, where you are.",
    authors: "Theodore Roosevelt"
},
    {text: "Do what you feel in your heart to be right - for you\'ll be criticized anyway.",
    authors: "Eleanor Roosevelt"
},
    {text: "Peace begins with a smile.",
    authors: "Mother Teresa"
},
    {text: "Whatever you are, be a good one.",
    authors: "Abraham Lincoln"
},
    {text: "May you live every day of your life.",
    authors: "Jonathan Swift"
},
    {text: "Always do what you are afraid to do.",
    authors: "Ralph Waldo Emerson"
},
    {text: "The mind is its own place, and in itself can make heaven of hell, a hell of heaven...",
    authors: "John Milton"
},
    {text: "The way to get started is to quit talking and begin doing.",
    authors: "Walt Disney"
},
    {text: "It is during our darkest moments that we must focus to see the light.",
    authors: "Aristotle"
},
    {text: "Never let the fear of striking out keep you from playing the game.",
    authors: "Babe Ruth"
},
    {text: "Life is either a daring adventure or nothing at all.",
    authors: "Helen Keller"
},
    {text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    authors: "Amelia Earhart"
},
	{text: "Get two birds stoned at once.",
	authors: "Ricky"
},
	{text: "Everything has beauty, but not everyone can see.",
	authors: "Confucius"
}
]

function newQuote() {
    var index = Math.floor(Math.random() * quotes.length);
    document.getElementById("text").innerHTML = quotes[index].text + "  -" + quotes[index].authors;    
}
newQuote()
$("#new-quote").click(getQuote);
