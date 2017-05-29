(function() {
    'use strict';

    angular
        .module('portfolio')
        .controller('TableController', function($scope, $location) {

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


            $scope.isActive = function(route) {
                return route === $location.path();
            }






        })

})();
