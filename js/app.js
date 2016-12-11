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
            articleImage: "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97300&w=400&h=300",
            author: "Ishan Saxena",
            industry: "Web Development",
            title: "Lorem Ipsum",
            profilePic: "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100"
        },
        {
            articleImage: "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97300&w=400&h=300",
            author: "Rajat Patwa",
            industry: "Machine Learning",
            title: "Lorem Ipsum",
            profilePic: "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100"
        },
        {
            articleImage: "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97300&w=400&h=300",
            author: "Lalit Kishor Singh",
            industry: "Artificial Intelligence",
            title: "Lorem Ipsum",
            profilePic: "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100"
        },
        {
            articleImage: "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97300&w=400&h=300",
            author: "Abhimanyu Singh",
            industry: "Computer Science",
            title: "Lorem Ipsum",
            profilePic: "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100"
        },
        {
            articleImage: "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97300&w=400&h=300",
            author: "Gopal Singh",
            industry: "Game Development",
            title: "Lorem Ipsum",
            profilePic: "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100"
        },
        {
            articleImage: "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97300&w=400&h=300",
            author: "Naman Kumar",
            industry: "Big Data",
            title: "Lorem Ipsum",
            profilePic: "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100"
        },
        {
            articleImage: "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97300&w=400&h=300",
            author: "Omprakash",
            industry: "Java Developer",
            title: "Lorem Ipsum",
            profilePic: "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100"
        },
        {
            articleImage: "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97300&w=400&h=300",
            author: "John Doe",
            industry: "Researcher Black Holes",
            title: "Lorem Ipsum",
            profilePic: "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100"
        },
        {
            articleImage: "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97300&w=400&h=300",
            author: "Michio Kaku",
            industry: "Astronomy",
            title: "Lorem Ipsum",
            profilePic: "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100"
        },
        {
            articleImage: "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97300&w=400&h=300",
            author: "Udit Gangwani",
            industry: "Prolanceer",
            title: "Lorem Ipsum",
            profilePic: "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100"
        },
        {
            articleImage: "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97300&w=400&h=300",
            author: "Manoj Kumar",
            industry: "Web Developer",
            title: "Lorem Ipsum",
            profilePic: "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100"
        },
        {
            articleImage: "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97300&w=400&h=300",
            author: "Atul Sharma",
            industry: "Web Developer",
            title: "Lorem Ipsum",
            profilePic: "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100"
        }
    ]};

    return o;
}]);
