let app = angular.module("myApp", ["ngRoute"]);

app.controller("mainController", ['$scope', 'imageFactory', '$location', function($scope, imageFactory, $location) {
    $scope.array = imageFactory.array;
    let query = $location.hash();
    if(query) {
        $scope.search = query;
    }

    $scope.changeSearchParam = function(newStr) {
        $scope.search = newStr;
    }
}]);

app.directive("bgImg", function() {
    return function(scope, element, attrs) {
        let url = attrs.bgImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-position' : '50% 0'
        });
    };
});

app.factory("imageFactory", [function() {
    let o = {array: [
        {
            articleImage: "./pl.svg",
            author: "Ishan Saxena",
            industry: "Web Development",
            title: "Lorem Ipsum",
            profilePic: "./user.png"
        },
        {
            articleImage: "./pl.svg",
            author: "Rajat Patwa",
            industry: "Machine Learning",
            title: "Lorem Ipsum",
            profilePic: "./user.png"
        },
        {
            articleImage: "./pl.svg",
            author: "Lalit Kishor Singh",
            industry: "Artificial Intelligence",
            title: "Lorem Ipsum",
            profilePic: "./user.png"
        },
        {
            articleImage: "./pl.svg",
            author: "Abhimanyu Singh",
            industry: "Computer Science",
            title: "Lorem Ipsum",
            profilePic: "./user.png"
        },
        {
            articleImage: "./pl.svg",
            author: "Gopal Singh",
            industry: "Game Development",
            title: "Lorem Ipsum",
            profilePic: "./user.png"
        },
        {
            articleImage: "./pl.svg",
            author: "Naman Kumar",
            industry: "Big Data",
            title: "Lorem Ipsum",
            profilePic: "./user.png"
        },
        {
            articleImage: "./pl.svg",
            author: "Omprakash",
            industry: "Java Developer",
            title: "Lorem Ipsum",
            profilePic: "./user.png"
        },
        {
            articleImage: "./pl.svg",
            author: "John Doe",
            industry: "Researcher Black Holes",
            title: "Lorem Ipsum",
            profilePic: "./user.png"
        },
        {
            articleImage: "./pl.svg",
            author: "Michio Kaku",
            industry: "Astronomy",
            title: "Lorem Ipsum",
            profilePic: "./user.png"
        },
        {
            articleImage: "./pl.svg",
            author: "Udit Gangwani",
            industry: "Prolanceer",
            title: "Lorem Ipsum",
            profilePic: "./user.png"
        },
        {
            articleImage: "./pl.svg",
            author: "Manoj Kumar",
            industry: "Web Developer",
            title: "Lorem Ipsum",
            profilePic: "./user.png"
        },
        {
            articleImage: "./pl.svg",
            author: "Atul Sharma",
            industry: "Web Developer",
            title: "Lorem Ipsum",
            profilePic: "./user.png"
        }
    ]};

    return o;
}]);
