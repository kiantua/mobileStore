(function() {
  'use strict';

  angular
    .module('client')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($scope, $http, $stateParams, DetailsModel) {
    //console.log("Details ctrl init");

    var DtCntr = this;


    DetailsModel.getPhoneItem($stateParams.phoneId)
      .then(function (response) {
        DtCntr.phoneItem = response;
        DtCntr.mainImageUrl = response.images[0];
      });

    DetailsModel.getComments($stateParams.phoneId)
      .then(function (res) {
        DtCntr.comments = res;
      });

    DtCntr.addComment = function () {
      DetailsModel.postComment({
          item_id: $stateParams.phoneId,
          text: DtCntr.textarea,
          author: DtCntr.inputAuthor,
          item_rating: 1
        })
        .then(function (resp) {
          DtCntr.comments.push(resp);
        });
      DtCntr.textarea = null;
      DtCntr.inputAuthor = null;

    };

    DtCntr.showImage = function (imageUrl) {
      DtCntr.mainImageUrl = imageUrl;
    }



  }


})();
