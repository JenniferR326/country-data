# Country Information Viewer

The "Country Information Viewer" is a simple web application that allows users to fetch and display information about a specific country. It uses the REST Countries API to retrieve data such as the country's name, population, primary language, and currency.

# Features

The application provides a user interface with a button to request country data.
Upon clicking the "Get Country Data" button, the application fetches information about a specified country and displays it on the web page.
The displayed information includes the country's flag, name, current population, primary language, and currency.

# Prerequisites

A modern web browser that supports JavaScript.
An internet connection to access the REST Countries API.

# Technical Details

The application is built using HTML, CSS, and JavaScript.
It uses the XMLHttpRequest object to make a GET request to the REST Countries API.
The API response is processed and displayed on the web page.
The application includes error handling in case the country is not found.

# Customization

You can modify the code to style the application differently or add additional features.
The application is currently set to retrieve data for the United States ("usa"). You can change this default country by modifying the getCountryData function.

# Acknowledgments

This application was created as a simple project to demonstrate making API requests and displaying data on a web page. Feel free to use, modify, and learn from the code as needed
