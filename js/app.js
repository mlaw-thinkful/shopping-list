/*
	ASSIGNMENT REQUIREMENTS:

	1. enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
	2. check and uncheck items on the list by clicking the "Check" button
	3. permanently remove items from the list
	4. You must use a CDN-hosted version of jQuery
	5. Put your application code in a file called app.js and link to it in index.html
	6. Be sure to put both script elements at the bottom of the <body> element.
	7. Do not alter index.html or main.css other than adding the links to the external JavaScript. Write JavaScript code that works with the existing HTML and CSS to implement the required features.

	Hint: you may find it helpful to read up on and use the following jQuery methods: 
	submit()
	preventDefault()
	toggleClass()
	closest()
*/

$(function() {

	/* 
		Inspiration for this first section is via this example: https://bcuz.github.io/shopping-list/
		I'm pretty sure I couldn't have gotten through the exercise without modeling my code after theirs,
		so I'm going to explain it step-by-step just to be sure I understand what's going on:

		- first I created global variable user_entry to hold whatever the user has input
		- initialized the value of this var with empty string ''
		- lines 37-43 are my enhancement: disable "Add Item" button until there's actually something to add
		- prependItem() inserts new markup at the top of the list for each new item 
		- finally, reset user_entry, disable "Add item" button, and return 'false' to prevent button from submitting the form
		  -- another way to prevent the button from submitting the form is to specify its type as type="button" (http://w3c.github.io/html-reference/button.html)
	*/

	
		// add item by entering text and clicking "Add Item" button
	$('form').submit(function(event) {
		// cancels default submit() action
		event.preventDefault();
		var user_entry = $("input[type='text']").val();
		prependItem(user_entry);
		$("input[type='text']").val('');
		 
	});

	// check and uncheck items on the list by clicking the "Check" button
	$('.shopping-list').on('click', 'button.shopping-item-toggle', (function(event) {
		$( this ).closest('li').children('.shopping-item').toggleClass( 'shopping-item__checked' );
	}));

	// permanently remove items from the list
	$('.shopping-list').on('click', 'button.shopping-item-delete', (function(event) {
	 	$( this ).closest( 'li' ).remove();
	}));

});

function prependItem(entry) {
	$('.shopping-list').prepend('\
		<li>\
		<span class="shopping-item">' + entry + '</span>\
		<div class="shopping-item-controls">\
		  <button class="shopping-item-toggle">\
		    <span class="button-label">check</span>\
		  </button>\
		  <button class="shopping-item-delete">\
		    <span class="button-label">delete</span>\
		  </button>\
		</div>\
		</li>'
	);
};


