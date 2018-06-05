app.directive('Promos', function(){
    return {
        restrict: 'E',
        scope: {
            promo: '='
        },
        templateUrl: 'source/directives/promos.html'
    } 
});