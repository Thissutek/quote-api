# quote-api
This project is a Express.js web API to store that serves different quotes about computers, coding and technology

This project utilizes Express.js web API and uses 
- app.get
- app.put
- app.post
- app.delete

As practice using a backend server to retrive and post data.

Challenges I would like to implement for this project
- Add a PUT route for updating quotes in the data. THis might require adding some sort of unique ID for each quote in the array in data.js
- Add a DELETE route for deleting quotes from the data array. As with PUT, this might require adding IDs to the data array and using req.params. for both of these ideas, you'll be able to interact via Postman
- Add other data to the array, such as the year of each quote, and try to display it on the front-end
- Add another resource to your API in addition to quotes, such as biographical blurbs(you'll need tp find your own data for this new resource) Use Express Routers to keep your code simple and seperated into different files for each route
