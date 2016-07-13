/**
 * Created by Anton on 29.03.2016.
 */
(function() {
  'use strict';

  angular
    .module('client')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($http) {
    console.log("About ctrl init")
  }
})();
