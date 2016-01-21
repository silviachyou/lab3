'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("hey yay!");
		$(".jumbotron p").toggleClass("active");
	});

	$('#submitBtn').click(modifyProject);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$('a.thumbnail').mouseenter(projectHover);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
	e.preventDefault();

	var containingProject = $(this).closest(".project");
    //containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
    	$(description).slideToggle()
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
    var image = $(this).find('.img');
   // $(image).css('opacity', 0.6);

	$(image).toggleClass('opacity');
}

function projectHover(e){
	e.preventDefault();

}


function modifyProject(e){
	e.preventDefault();
	var whichProject = $('#project').val();
	var width = $('#width').val()
	var description = $('#description').val();
	$(whichProject).animate({
      width: width
	});
	console.log($(whichProject + ' .project-description').length)
	$(whichProject + ' .project-description').text(description);

}