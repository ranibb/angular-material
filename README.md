# A Starting point for a data table implementation:
*	HTTP server setup: The server is going to allow us to build an example for the data table that really fetches pages of data from the backend using the HTTP client.
*	The back end that we are running also has a pagination service for the lessons of a given course.
*	how the view layer is implemented:
    *	No longer passing the data directly to the view. Instead we are defining a couple of observables for the beginner courses and advanced courses and these two observables are being passed down to the view using the async pipe.
    *	A course component where the course member variable is being taken from the router snapshot. This is a very commonly used pattern to provide all the data that the screen needs via the router before the screen is even displayed to the user.
*	how the service layer at the level of the client side is calling the backend
    *	These two observables are being derived from the courses observable that is being obtained from the Courses service (a backend service that exposes an observable based API). So findAllCourses is returning an observable of Course array, meaning that the values emitted by this observable are an array of courses and the data emitted is coming from the backend and is getting fetched via the HTP client.
*	A quick look at the backend:
    *	REST API server built with express
    *	The data is only accessible by the server.
    *	The Courses API is defined at the level of server and is going to be handled by this express route. This is simply going to send a JSON payload with the list of courses.
    *	The Course by Id API
    *	The Search lessons API:
        *	Search for a list of lessons that belongs to a given course.
        *	Paginate that data.

**To do:**
The skeleton of course components already has the Course data. We need to add a data table that is going to paginate through the lessons of this course: This is going to include server-side pagination, filtering, sorting, and client-side filtering as well.