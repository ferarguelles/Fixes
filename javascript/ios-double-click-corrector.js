/* iOS Double Click Corrector
 * 
 * Problem:  iOS needs touble tap to fire links when elements have :hover defined.
 * Solution: Add the following script 
 */

/* Example: */

$('ul.sub-nav li')
    .click(function (e) {
        e.stopPropagation();
    })
    .on('click touchend', function(e) {
        e.stopPropagation();
        window.location = $(this).children('a').attr('href');
    });