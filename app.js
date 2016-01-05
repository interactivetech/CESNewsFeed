/**
 * Created by andrewmendez1 on 1/4/16.
 */
/*
Founder and Wizard - Andrew Mendez aka DRIZZY 1/4/16
* */
var app = angular.module('CESNewsFeedApp',[]);

app.controller('CESNewsFeedController',['$http',function($http){

    var controller=this;
     controller.cnetFeed=[];
     controller.theVergeFeed=[];
     controller.techCrunchFeed=[];

    //function call to get cnet CES feed

    //members:
    //{headline:{href:"",text:""}
    // image: {alt: "", src: "", text: ""}
    //index: 4
    //time: ["32", "minutes ago"] }

    $http.get("https://www.kimonolabs.com/api/2ca32rtk?apikey=VbyVUPWXKsBMlIZXCWoQFHfzEZ0vsTlx").then(function(data){
        //console.log(data.data);
        //console.log("success");
        //console.log(data.data.results.collection1);
        controller.cnetFeed=data.data.results.collection1;
        //console.log(controller.cnetFeed)


    },function(err){

        if(err){
            //console.log("err");

            console.log(err);
        }

    });


    //function call to get  TechCrunch feed

    //members:
    //content: "Intel has made yet another hardware...
    //headline: {href: "", text: ""}
    //images: {alt: "", src: "", text: ""}
    //index: 1
    //time: "3 hours ago"
    //url: "http://techcrunch.com/events/ces-2016/"

    $http.get("https://www.kimonolabs.com/api/78lz1csi?apikey=VbyVUPWXKsBMlIZXCWoQFHfzEZ0vsTlx").then(function(data){
        //console.log(data.data);
        //console.log("success");
        //console.log(data.data.results.collection1);
        controller.techCrunchFeed=data.data.results.collection1;
        //console.log(controller.techCrunchFeed);


    },function(err){

        if(err){
            console.log("err");

            console.log(err);
        }

    });


    //function call to get The Verge feed

    //members:
   // headline: {href: "", text: ""}
    //image2: {data-original: "", text: ""}
    //index: 1
    //time: "January 4, 2016 12:01 am"
    //url: "http://www.theverge.com/ces"

    $http.get("https://www.kimonolabs.com/api/65bsmh6u?apikey=VbyVUPWXKsBMlIZXCWoQFHfzEZ0vsTlx").then(function(data){
        //console.log(data.data);
        //console.log("success");
        //console.log(data.data.results.collection1);
        controller.theVergeFeed=data.data.results.collection1;
        //console.log(controller.theVergeFeed[0].image2['data-original']);

        console.log(controller.theVergeFeed);


    },function(err){

        if(err){
            console.log("err");

            console.log(err);
        }

    });

}]);

