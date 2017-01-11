
  ((app)=>{
    'use strict'
    app.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider.state('app.wine', {
            url: '/wine',
            template: '<wine></wine>'
        })
    }])




})(angular.module('app.wine',[]))
