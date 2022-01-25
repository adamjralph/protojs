# protojs

## A prototyle expenses tracker

### Using JavaScript, HTML, CSS

This is a learning project. My intent is to comment and document the project as much as possible and to experiment as much as possible with test driven development.

There are two main reasons for this.

* Learn to create an interactive JavaScript app.
* Practice commenting code.
* Learn Markdown and how to create decent documentation.

### Introduction

It is intended that this app have the following features:

* A web user interface using html and css to for input and output
* A form for entering name of the item as a string and the price as integer
* A button to submit the data
* A display of currently entered items and price 
* A calculate button which initiates sun of all prices and displays results

### User Interface

#### Use of Selectors
Ids will be used for for selecting elements with JavaScript (getElementsById).
Classes will be used for styling with CSS.

Class groups inlude:
* input - for styling all input fields
* btn - for styling all buttons 
#### The HTML elements
* h1 for name and purpose of app
    - ID of heading
* Form 
    - ID of expenses-form
    - Class of expenses-form
* The form contains:
    - span 'Item' with a class of item-lable
    - input for 'item' with an id of item-name and a class of item-name 
    - span 'Price' with a class of price-label
    - input for 'price' with an id of item-price and a class of item-price
    - button - 'Enter' with an id of enter and a class of enter-btn
    - table with an id of item-list and a class of item-list
    - thead wraps tr which wraps th with a colspan of 2 and the title 'Expenses'
    - tbody wraps tr which wraps:
        - td 'Item' with id of table-item and a class of table-item
        - td 'Price'with id of table-price and a class of table-price

### Tests
Tests will be numerous and, for the most part unnecesary as this will be an oportunity to learn how to write simple tests.

