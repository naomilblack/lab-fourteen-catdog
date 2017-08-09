(function(){
  var app = angular.module("animalApp", ["ngRoute"]); //creates the dogApp module

  app.config(function($routeProvider){
    $routeProvider.when("/cutedog",{
      templateUrl:"views/cutedog.html"
    });

    $routeProvider.when("/cutecat",{
    templateUrl:"views/cutecat.html",
      controller:"catController"
    });

    $routeProvider.otherwise({
      template:"Are you a dog or a cat?"

    });

  });

})();
