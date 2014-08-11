/* Add hover image on mouseover
 * 
 * Problem:  Add hover image without CSS
 * Solution: Add the following script 
 */

/* Example: */

$(function() {
    $('img[class^="video-preview"]')
        .mouseover(function() {
            var extension = $(this).attr('src').substr( ($(this).attr('src').lastIndexOf('.') + 1) );
            var src = $(this).attr('src').match(/[^\.]+/) + '_hover.' + extension;
            $(this).attr('src', src);
        })
        .mouseout(function() {
            var src = $(this).attr('src').replace('_hover', '');
            $(this).attr('src', src);
        });
});