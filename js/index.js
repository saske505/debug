'use strict';

let debugIS = (function() {

    let left = document.getElementsByClassName('left'),
        rigth = document.getElementsByClassName('right');

    let init = function() {
        return "this is a test";
    }
    
    return {    
        init : init
    }

})();

debugIS.init()