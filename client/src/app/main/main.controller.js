(function() {
    'use strict';

    angular
      .module('client')
      .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $http, MainModel, $stateParams) {
      var vm = this;

      vm.phones = [];
      //vm.sort = 1;
      //vm.updateList = updateList;
      //updateList();

      MainModel.getAllItems()
        .then(function (response) {
          vm.phones = response;
        });





      //function updateList () {
      //  vm.list = vm.list.sort(function(a, b){
      //
      //  });
      //}
    }

  })();
