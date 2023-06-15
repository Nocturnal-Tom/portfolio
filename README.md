# Portfolio

Here you can find all the project files for my personal portfolio.
This README will contain links to specific sections of my code if you want to quickly jump to a specific feature that demonstrates
my own abilities with Javascript/Typesctipt and Angular.

## Canvas
The background of my portfolio is a canvas with a 2d context. If you'd like to see how I implemented the animation you can go [here](src/app/background).
To do this I had to create some utilities that you can find [here](src/util/2d/).

## Navigation
I like things being handled automatically, and my navigation bar is a goog example of this. Since I didn't want to have
to re-type every single link name and it's url every time (since this would be a pain to maintain if any changes were made)
I have a simple little system in place to automate the generation of links by using the RouterModule.
I extend the Route interface with my own [RouteInfo](src/app/routing-info.ts) interface. The file also contains some utilities.
You can find the navigation bar implementation [here](src/app/navbar/).