$(function() {


	var user_entry = $("input[type='text']");
	user_entry.val('');

	function prependItem() {
		if (user_entry.val().length === 0 ) {
		      // do nothing or disable the 'Add Item' button
		      alert('doh!');
	    } else {
	      $('.shopping-list').prepend('\
	        <li>\
	        <span class="shopping-item">' + user_entry.val() + '</span>\
	        <div class="shopping-item-controls">\
	          <button class="shopping-item-toggle">\
	            <span class="button-label">check</span>\
	          </button>\
	          <button class="shopping-item-delete">\
	            <span class="button-label">delete</span>\
	          </button>\
	        </div>\
	      </li>');
	    }

	    user_entry.val('');
	    return false;
	};

	// add item by entering text and clicking "Add Item" button
	$('form').submit(function() {
		// test:
		console.log('you\'ve entered '+user_entry.val() + ' then clicked \'Add Item\'');
	    // function to add new item at top of list
	    prependItem();
		// cancel default submit() action
		event.preventDefault();
	});
    

	// add item by entering text and hitting "Return" (key code 13)
	$('#shopping-list-entry').keydown(function(){
        if ( event.which == 13 ) {
			// test:
			console.log('you\'ve entered '+user_entry.val() + ' then pressed Return');
		    // function to add new item at top of list
		    prependItem();
			// cancel default submit() action
			event.preventDefault();
    	}
    });


	// TODO: check and uncheck items on the list by clicking the "Check" button

	/* 	
		pseudocode: 
		1. traverse DOM up from .shopping-item-toggle to the <span> with class .shopping-item 
		2. use the toggleClass() function to apply/remove .shopping-item__checked class to that <span>
		3. bonus: implement a toggle state tracker and change button label text (".button-label" span) to conditionally display "check" to "uncheck"
	*/

	// DOESN'T WORK:

	$( '.shopping-item-toggle' ).on( 'click', function(event) {
		// $( this )
		// 	.closest( 'li' )
		// 		.css('display', 'none');
		//$( "shopping-item-toggle" ).closest(".button-label").text('hi');

		$( event.target ).closest('.shopping-item' ).css( 'background-color', 'yellow' );
//		$( event.target ).closest('span', '.shopping-item' ).toggleClass( 'shopping-item__checked' )
//		$( event.target ).closest('span').css( 'background-color', 'yellow' );

		// test:
		// alert('hi');
	});


	// permanently remove items from the list

	/* 	
		TODO: 
		make this work for user-added items -- possibly using live() (http://api.jquery.com/live/)?
	*/


	$('.shopping-item-delete').click(function(event) {
	 	$( this )
	 		.closest( 'li' )
	 			.remove();
	 });

	// DOESN'T WORK:

	// $('.shopping-item-delete').live('click', function(event) {
	// 	 $( this )
	// 	 	.closest( 'li' )
	// 	 		.remove();
	// });




});


/*
REQUIREMENTS:

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