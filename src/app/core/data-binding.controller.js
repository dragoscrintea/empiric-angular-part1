(function() {
    
    angular
        .module('app.core')
        .controller("DataBindingController", DataBindingController)
        
    DataBindingController.$inject = ['$scope'];
    
    function DataBindingController($scope) {
        
        var vm = this;
        
        vm.name = 'Dragos';
        
        $scope.namedScope = 'Dragos in scope';
        
        $scope.$watch('namedScope', function() {
            console.log('Named scope is: ' + $scope.namedScope);
        });
        
    }
    
})();