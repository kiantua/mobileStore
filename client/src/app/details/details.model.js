/**
 * Created by Anton on 05.04.2016.
 */
(function () {
  'use strict';

  angular
    .module('client')
    .service('DetailsModel', DetailsModel);

  function  DetailsModel($http) {
    console.log('DetailsModel enabled!');

    this.getPhoneItem = function (id) {
      return $http({
        method: 'GET',
        url: 'http://localhost:4001/api/v1/phones/'+id
      }).then(function (response) {
        return response.data;
      }, function (reject) {
        console.log(reject);
      });
    };

    this.getComments = function (id) {
      return $http({
        method: 'GET',
        url: 'http://localhost:4001/api/v1/comments/'+id
      }).then(function (resp) {
        return resp.data;
      }, function (reject) {
        console.log(reject);
      });
    };

    this.postComment = function (bodyData) {
      return $http({
        method: 'POST',
        url: 'http://localhost:4001/api/v1/comments/',
        data:  bodyData
      }).then(function (res) {
        return res.data;
      }, function (reject) {
        console.log(reject);
      });
    };


  }


})();
