/**
 * Created by Victor on 9/17/2016.
 */
var jsonfile = require('jsonfile');
var loadJsonFile= require('load-json-file');
var fs = require('fs');


fs.readFile('product.json', 'utf8', function (err, data) {
    if (err) {
        throw err
    }
    var jsonData = JSON.parse(data);

    var random = Math.floor(Math.random() * jsonData.posts.length) + 1;
    var name = jsonData.posts[random].name;
    console.log(name);
    console.log(jsonData.posts[random].tagline);
    console.log(jsonData.posts[random].discussion_url);
    for (var n = 0; n < jsonData.posts[random].topics.length; n++) {
        console.log(jsonData.posts[random].topics[n].name);
    }
    console.log(jsonData.posts[random].thumbnail.image_url);
});

/*
for (var i =0; i < jsonData.posts.length; i++){
    console.log(jsonData.posts[i].name);
    console.log(jsonData.posts[i].tagline);
    console.log(jsonData.posts[i].discussion_url);
    for (var n = 0; n < jsonData.posts[i].topics.length; n++){
        console.log(jsonData.posts[i].topics[n].name);
    }
    console.log(jsonData.posts[i].thumbnail.image_url);

}});

//var file = 'product.json';
//jsonfile.readFile(file, function(err, obj){
 //   obj.posts.category_id[1]});

 */


