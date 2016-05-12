/**
 * Created by Dragos on 3/20/2016.
 */

(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .config(configFunction);
    
    configFunction.$inject = ['$stateProvider'];

    function configFunction($stateProvider) {
        console.log('Loading dashboard view');
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'src/views/angular-iterate.html',
                transclude: true, 
                controller: 'DashboardController',
                controllerAs: 'model',
                data: {
                    pageTitle: 'Dashboard'
                }
            });
    }

})();