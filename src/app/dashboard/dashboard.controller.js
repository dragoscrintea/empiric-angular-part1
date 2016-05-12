(function() {
    'use strict';
    
    angular
        .module("app.dashboard")
        .controller("DashboardController", DashboardController);

    DashboardController.$inject = ['movieService', '$scope', '$http'];
    
    
    function DashboardController(movieService, $scope, $http) {
        var model = this;
        
        model.movies = [];
        
        movieService.fetchMovies($http).then(function(data){
            model.movies = data;
        });
        
        model.upRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating += 1
            }
        };

        model.downRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        };
        
    }
    
})();
