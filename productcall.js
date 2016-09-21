/**
 * Created by Victor on 9/14/2016.
 */
var unirest = require('unirest');
var jsonfile = require('jsonfile')

unirest.get("https://api.producthunt.com/v1/posts/?days_ago/")
    .header("Accept", "application/json")
    .header("Content-Type", "application/json")
    .header("Authorization", "Bearer c0d3bbcb0080f6f8c5359001465b70f89cead98b8cbf300176ab690c06e2f468")
    .header("Host", "api.producthunt.com")
    .end(function (result) {
        //result.status and result.headers
        //console.log(result.headers);
        jsonfile.writeFile('product.json', result.body);
        //console.log(result.body.posts[0]);
        console.log(result.body);
        //console.log(result.body.posts.category_id[0]);

       /* for(var i = 0; i<result.body.name.length; i++){
            console.log(result.body.name[i]);
        }*/
    });

