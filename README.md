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

In order to see results, you have to enter a value for "by", it can be either: sort by "name", or sort by "id".

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


 
