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

In order to see results, you have to enter a value for "by" to sort the results, it can be either: sort by "name", or sort by "id".

- sorted by name: https://mdlive-challenge.herokuapp.com/apps?by=name
- sorted by id: https://mdlive-challenge.herokuapp.com/apps?by=id

 
