var portfolioSite = angular.module('portfolioSite', ['ui.router']);
portfolioSite.config(function($stateProvider) {


$stateProvider.state('home', {
  url: "",
  templateUrl: "partials/home.html"
});

$stateProvider.state('aboutme', {
  url:"/aboutme",
  templateUrl: "partials/aboutme.html"
});

$stateProvider.state('projects', {
  url:"/projects",
  templateUrl: "partials/projects.html"
});

$stateProvider.state('photos', {
  url:"/photos",
  templateUrl: "partials/photos.html"
});

});
