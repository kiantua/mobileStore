(function() {
  'use strict';

  angular
    .module('client')
    .directive('navbar', Directive);


  /** @ngInject */
  function Directive($http) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.view.html',
      controller: NavbarController
    }
  }

  function NavbarController ($scope, $state, $stateParams) {
    console.log('Navbar init');

    //var navCntr = this;

    $scope.sortOptions = [
      {option: "Цена по убыванию", value: "-price"},
      {option: "Цена по возрастанию",  value: "+price"},
      {option: "По алфавиту с конца", value: "-name"},
      {option: "По алфавиту с начала",  value: "+name"}
    ];

    $scope.sorting = function (sort) {
      $scope.sortBy = sort;
    }

    $scope.showSorting = function () {
      var result;
      if ($state.current.url === "/") {
        return result = true;
      }
      else {
        return result = false;
      }
      return result;
    }


  }
})();
