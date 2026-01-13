/* css Zen Garden default style v1.02 */
/* css released under Creative Commons License - http://creativecommons.org/licenses/by-nc-sa/1.0/  */

/* This file based on 'Tranquille' by Dave Shea */
/* You may use this file as a foundation for any new work, but you may find it easier to start from scratch. */
/* Not all elements are defined in this file, so you'll most likely want to refer to the xhtml as well. */

/* Your images should be linked as if the CSS file sits in the same folder as the images. ie. no paths. */


/* basic elements */
function Last_Modified() {
    document.write("Last Modified on ")
    document.write(document.lastModified)
}

function getQuote() {
    // Create the arrays
    quotes = new Array(4);
    sources = new Array(4);
    // Initialiize the arrays with quotes
    quotes[0] = "when I was a baby of 14, my father was so " +
        "ignorant... but when I got to be 21, I was astonisshed " +
        " at how much he had learned in 7 years.";
    sources[0] = "Mask Twain";
    quotes[1] = "Everybody is ignoreant. Only on different " +
        "subjects.";
    sources[1] = "Will rodgers";
    quotes[2] = "They say such nice things about people at " +
        "their funurals that it makes me sad that I'm going to " +
        "miss mine by just a few days.";
    sources[2] = "Garrison Keilor";
    quotes[3] = "What's another word for thesaurus?";
    sources[3] = "Steven Wright";
    // Get a random indes into the arrays
    // quotes[4] = " 생각이나 행동이 지나친 것은 행복을 침식한다";
    // sources[4] = " 법정";

   
    i = Math.floor(Math.random() * quotes.length);

    // write out the quote as HTML
    document.write("<dl style='background-color; lightpink'>\n");
    document.write("<dt>" + "\"<em>" + quotes[i] + "</em>\"\n");
    document.write("<dd>" + "- " + sources[i] + "\n");
    document.write("<dl>\n");
}

$(document).ready(function () {
    $('#Thesis1').hide();
    $('#chapterClickMe1').click(function () {
        $('#Thesis1').toggle('', function () {
        });
    });
});

 $(document).ready(function () {
     $('#Thesis2').hide();
     $('#chapterClickMe2').click(function () {
         $('#Thesis2').toggle('slow', function () {
         });
     });
 });

  $(document).ready(function () {
      $('#Thesis3').hide();
      $('#chapterClickMe3').click(function () {
          $('#Thesis3').toggle('slow', function () {
          });
      });
  });


  $(document).ready(function () {
      $('#Thesis4').hide();
      $('#chapterClickMe4').click(function () {
          $('#Thesis4').toggle('slow', function () {
          });
      });
  });

  $(document).ready(function () {
      $('#Thesis5').hide();
      $('#chapterClickMe5').click(function () {
          $('#Thesis5').toggle('slow', function () {
          });
      });
  });

  $(document).ready(function () {
      $('#Thesis6').hide();
      $('#chapterClickMe6').click(function () {
          $('#Thesis6').toggle('slow', function () {
          });
      });
  });

  $(document).ready(function () {
      $('#Thesis7').hide();
      $('#chapterClickMe7').click(function () {
          $('#Thesis7').toggle('slow', function () {
          });
      });
  });

  $(document).ready(function () {
      $('#Thesis8').hide();
      $('#chapterClickMe8').click(function () {
          $('#Thesis8').toggle('slow', function () {
          });
      });
  });

      $(document).ready(function () {
          $('#Thesis9').hide();
          $('#chapterClickMe9').click(function () {
              $('#Thesis9').toggle('slow', function () {
              });
          });
      });

          $(document).ready(function () {
              $('#Thesis10').hide();
              $('#chapterClickMe10').click(function () {
                  $('#Thesis10').toggle('slow', function () {
                  });
              });
          });
