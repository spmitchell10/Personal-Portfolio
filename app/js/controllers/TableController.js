(function() {
    'use strict';

    angular
        .module('portfolio')
        .controller('TableController', function() {

        	const vm = this;

        	(() => {
                $('.hamburgerMenu').on('click', function() {
                    $('.hiddenMenu').toggleClass('navMenuHidden');
                })
            })();

            (() => {
                $('.hamburgerMenu').on('click', function() {
                    $('.bar').toggleClass('animate');
                })
            })();

        	
			
        })
     
})();