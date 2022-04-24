# Submission to the QR_Project challenge

This project was created using React, Redux and Axios.
## Reactive design
The design of the website is reactive, if you resize the browser to a phone's aspect ratio it will change the design to a more ergonomic one for phones.

## login
Can be found at '/login'.

The login page is fully functional, you may successfully login using the following credentials :

email :  karn.yong@mecallapi.com
password : mecallapi

The response of the server is logged to the console, the user's data is also saved in a store using Redux, which makes the data accessible from other components.

Once logged in, the profile picture of that account will be displayed.

## register
Can be found at '/register'.

The register page is present but not functional as the given API does not provide register endpoints.

## 404 pages
Any other URL will display a 404 page that allows you to go back to the login page.