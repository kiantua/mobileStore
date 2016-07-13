/**
 * Created by Anton on 11.04.2016.
 */
(function() {
  'use strict';

  angular
    .module('client')
    .directive('comments', Directive);

  /** @ngInject */
  function Directive() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/comments/comments.view.html',
      scope: {
        comment: "="
      },
      controller: controller
    }
  }


  function controller () {
    //console.log('Comments init');


  }


})();
