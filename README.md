## Pictsy

Pictsy is a React Redux photo browsing application that uses to the imgur API to retrieve collections of images based on the user input. When a user inputs a keyword and selects an optional filter (NSFW vs SFW), the application his the imgur API and returns 60 images. 

<a href="https://www.youtube.com/watch?v=p2hChfVNOGc&feature=youtu.be
" target="_blank"><img src="https://www.youtube.com/embed/p2hChfVNOGc" 
alt="Pictsy Demo Video" width="240" height="180" border="10" /></a>

A user can click on the image to enlarge it, add comments and view more data. Comments on an image are not saved to the imgur API, nor are they posted to a back end database; they live solely in the Redux application state. Comments have their own reducer, however, so as long as the browsing is seamless the comments will be saved. The data ("ups" and "views") displayed on the image modal and used for sorting is pulled from the imgur API and is based on user history from their site. Recent searches are also saved, so that a user can easily access them again.

To download, fork and clone this repository. Be sure to run 'yarn install' in your terminal to ensure all dependencies have been properly installed before running the application. Once you have done so, run 'yarn start' to start browsing!

# Front End Dependencies for Pictsy
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-modal": "^3.1.8",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.0.17",
    "redux": "^3.7.2",
    "redux-devtools-extension": "^2.13.2",
    "redux-thunk": "^2.2.0"
    
    
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).



