(function() {
  'use strict';

  angular.module('lemonThornPress')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'js/templates/books.html'
      })
      .state('bio', {
        url: '/bio',
        templateUrl: 'js/templates/bio.html'
      })
      .state('media', {
        url: '/media',
        templateUrl: 'js/templates/media.html'
      })
  }
}());
