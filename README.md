routeBoxerClone
===============
#Find places along a route that match a certain category
This is a prototype to be used in combination with a larger app

#Try it out

*Open up your terminal 

*cd into the folder that you want the clone to go in

*Type 'git clone https://github.com/Talamantez/
routeBoxerClone.git'

*This will create a folder called routeBoxerClone in whichever directory you are in along with all containing files

*cd into routeBoxerClone

*Type 'python -m SimpleHTTPServer' and press enter. This will open up a simple server on port 8000. If this gives you an error, just type python and press enter. 

If that gives you an error, you may need to install Python: https://www.python.org/download/
*Next, open up a browser and go to 127.0/0/1:8000.routeBoxer.html

*A map should load. Now open up your development tools console. On google chrome, usually you can press 'F12'. 

If you need help with the chrome console, check out the documentation here: https://developer.chrome.com/devtools/docs/console

*Once in the console, we can start to look for places along the way between a start and end point

*First, use the getDirections function. It takes 3 arguments: a string for starting point, a string for end point, a decimal number for distance in miles from the route to include in the search.

For example, to search between Seattle and Vancouver, type 'getDirections('Seattle, WA','Vancouver,BC', 10)' and press enter.

Now the map should zoom to the route you've specified. The start- and end-points should have markers labelled A and B, respectively.

The routeBoxer will have boxed out an approximate 10 buffer along the route.

*Next, we want to get places within the bounds of each route box that has been generated.

To do this, we need to get the raw ne and sw bounds with 'getRawBounds()', then convert them into google bounds with 'getGoogleBounds()', and finally, 'getPlacesFromBounds()' to find places within the route boxes. 

You can next all the functions into a single command like so:

type 'getPlacesFromBounds(getGoogleBounds(getRawBounds()))'

Press enter.

You will now see markers pop up on the map that include type 'food'.

In the console, you will see the place names and a few other details print out.


//TO DO
*add details to the flags