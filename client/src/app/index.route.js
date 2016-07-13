(function() {
  'use strict';

  angular
    .module('client')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('details', {
        url: '/details/:phoneId',
        templateUrl: 'app/details/details.view.html',
        controller: 'DetailsController',
        controllerAs: 'details'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.view.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state('bucket', {
        url: '/about',
        templateUrl: 'app/services/bucket.view.html',
        controller: 'BucketController',
        controllerAs: 'bucket'
      })
    ;


    $urlRouterProvider.otherwise('/');
  }

})();
