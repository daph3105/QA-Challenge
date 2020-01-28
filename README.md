# QA-Challenge

## Description ##
API that returns a list of Apps each with an id and a name.
The API can be paginated by passing the following parameters:
- by = (name or id)
- start = (name or id)
- end = (name or id)
- max = (number of apps per page, default is 50)
- order = (asc or desc)


API endpoint:
https://mdlive-challenge.herokuapp.com/apps returns an empty array as the field "by" is required.

In order to see results, you have to enter a value for "by", it can either be: sort by "name", or sort by "id".

- sorted by name: https://mdlive-challenge.herokuapp.com/apps?by=name
- sorted by id: https://mdlive-challenge.herokuapp.com/apps?by=id

Some valid examples of valid ranges:
- https://mdlive-challenge.herokuapp.com/apps?by=id&start=1
- https://mdlive-challenge.herokuapp.com/apps?by=id&start=1&end=5
- https://mdlive-challenge.herokuapp.com/apps?by=id&start=5
- https://mdlive-challenge.herokuapp.com/apps?by=id&start=1&max=5
- https://mdlive-challenge.herokuapp.com/apps?by=id&start=1&order=desc
- https://mdlive-challenge.herokuapp.com/apps?by=id&start=5&end=10&max=10&order=asc
- https://mdlive-challenge.herokuapp.com/apps?by=name&start=my-app-001&end=my-app-050&max=10&order=asc


 The API was built using Node.js (with Express.js).</br>
 The entire application is contained within the server.js file.</br>
 The seed data to populate the app is in the seed.js file.
 
 ## Approach ##
I assigned the values related to the queries (req.query) to 5 different variables to receive the ranges: by, start, end, order, and max. </br> 
- let by = req.query.by
- let start = req.query.start||0 --> 0 being the default value
- let end = req.query.end 
- let max = req.query.max||50  --> 50 being the default value
- let order = req.query.order||"ASC"  --> ASC being the default value

Sort by name is done alphabetically, sort by id numerically.

Start and End can only be the name of the app, and it searches only valid app names such as my-app-001, or existing app IDs.<br/> 
If the name of the app or the app id entered under start or end are invalid, it will return an empty array.<br/>
I've commented the source code for further understanding.

