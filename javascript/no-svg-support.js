/* SVG to PNG replace
 * 
 * Problem:  Browser doesn't support svg 
 * Solution: Add the following script to detect svg's and replace them with png's
 * Requires: Modernizr
 */

if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
}

/* Example: */

$(function() {
    if(!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }
});