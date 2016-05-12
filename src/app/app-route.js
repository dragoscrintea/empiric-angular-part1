(function() {
    'use strict';
    
    angular
        .module('appRouter',
        [
            "ui.router",
            "app.dashboard"
        ])
        .config(configFunction);
        
    
    configFunction.$inject = ['$urlRouterProvider'];

    function configFunction($urlRouterProvider) {
        console.log('Initiating Dashboard');
        // Set default state
        $urlRouterProvider.otherwise("dashboard");
    }
    
})();
