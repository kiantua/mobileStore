/**
 * Created by Anton on 03.04.2016.
 */
(function () {
  'use strict';

  angular
    .module('client')
    .service('MainModel', MainModel);

  function MainModel($http) {
    console.log('Service enabled!');


    this.getAllItems = function () {
      return $http({
        method: 'GET',
        url: 'http://localhost:4001/api/v1/phones'
      }).then(function (response) {
        return response.data;
      }, function (reject) {
        console.log(reject);
      });
    };


  }


})();
