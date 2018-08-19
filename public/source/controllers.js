app.controller('mainController', ['$scope', '$location', 'Promos', 'Services', 'NgMap', function($scope, $location, Promos, Services, NgMap) {

    $scope.name = "D&D Pharmacy";
    $scope.token = "vbej9u2k"
    
    $scope.promos = {
        title: "Promotions",
        slogan: "Your health comes first!",
        content:
            [
                Promos.promo1,
                Promos.promo2
            ]
    };
    
    $scope.services = {
        title: "Services",
        slogan: "Rest assured and enjoy your improved quality of life",
        content:
            [
                Services.service1,
                Services.service2,
                Services.service3,
                Services.service4
            ]
    };
    
    $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB8zR2oNiLn-EzjtMc4IvlIO4YOUER1Mf8";

    /*
        Handle nav inkbar
     */
    $scope.currentPage = getPage();
    function getPage() {
        $scope.location = $location.path();

        if ($scope.location == '/') {
            return 'home';
        } else if ($scope.location == '/services') {
            return 'services';
        } else if ($scope.location == '/contact') {
            return 'contact';
        }
    }

}]);
