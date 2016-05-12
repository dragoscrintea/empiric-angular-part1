(function() {
    'use strict';
    
    angular
        .module("appRouter")
        .service("movieService", movieService)
    
    movieService.$inject = ['$http']
    
    function movieService($http) {
        
        this.fetchMovies = function($http) {
            return $http.get('https://empiric-angular-part1-quantcruncher.c9users.io/movies.json')
                .then(function (response) {
                    return response.data;
                });
        };
        
        this.sayHello = function() {
            console.log("Hello");
        }

    }
    
})();