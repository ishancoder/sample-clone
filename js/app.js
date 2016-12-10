let app = angular.module("myApp", []);

app.controller("mainController", ['$scope', 'imageFactory', function($scope,imageFactory) {
    $scope.array = imageFactory.array;
}]);

app.directive("bgImg", function() {
    return function(scope, element, attrs) {
        let url = attrs.bgImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});

app.factory("imageFactory", [function() {
    let o = {array: [
        {
            articleImage: "./pl.svg",
            author: "Ishan Saxena",
            industry: "Web Development",
            title: "Lorem Ipsum"
        },
        {
            articleImage: "./pl.svg",
            author: "Rajat Patwa",
            industry: "Machine Learning",
            title: "Lorem Ipsum"
        },
        {
            articleImage: "./pl.svg",
            author: "Lalit Kishor Singh",
            industry: "Artificial Intelligence",
            title: "Lorem Ipsum"
        },
        {
            articleImage: "./pl.svg",
            author: "Abhimanyu Singh",
            industry: "Computer Science",
            title: "Lorem Ipsum"
        },
        {
            articleImage: "./pl.svg",
            author: "Gopal Singh",
            industry: "Game Development",
            title: "Lorem Ipsum"
        },
        {
            articleImage: "./pl.svg",
            author: "Naman Kumar",
            industry: "Big Data",
            title: "Lorem Ipsum"
        },
        {
            articleImage: "./pl.svg",
            author: "Omprakash",
            industry: "Java Developer",
            title: "Lorem Ipsum"
        },
        {
            articleImage: "./pl.svg",
            author: "John Doe",
            industry: "Researcher Black Holes",
            title: "Lorem Ipsum"
        },
        {
            articleImage: "./pl.svg",
            author: "Michio Kaku",
            industry: "Astronomer",
            title: "Lorem Ipsum"
        },
        {
            articleImage: "./pl.svg",
            author: "Udit Gangwani",
            industry: "Prolanceer",
            title: "Lorem Ipsum"
        },
    ]};

    return o;
}]);
