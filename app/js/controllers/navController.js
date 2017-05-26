(function() {
    'use strict';

    angular
        .module('portfolio')
        .controller('navController', function() {


            // Functions for Hamburger Menu and navBarHidden jQuery
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
