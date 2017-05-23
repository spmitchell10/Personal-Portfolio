(function() {
    'use strict';

    angular
        .module('portfolio', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {



            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        'content': {
                            templateUrl: '../partials/home.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },
                        'nav': {
                            templateUrl: '../partials/nav.html',
                            controller: 'navController',
                            controllerAs: 'vm',
                        }

                    }
                }),

            $stateProvider
                .state('marvel', {
                    url: '/marvelsite',
                    views: {
                        'content': {
                            templateUrl: '../partials/marvel.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },
                        'nav': {
                            templateUrl: '../partials/nav.html',
                            controller: 'navController',
                            controllerAs: 'vm',
                        }

                    }
                })

        })

})();
