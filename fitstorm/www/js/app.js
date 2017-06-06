/**
 * Created by Seth on 6/5/2017.
 */
angular.module('myApp', ['ui.router']).config(function($urlRouterProvider, $stateProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "../home.html",
            controller: "mainCtrl"
        })

});