$(document).ready(function() {

    // Hide all the articles and section and just show the landing portion
    $("article").hide();
    $("section").hide();
    $("#home-intro").show();
    
    // Control how the slider changes the cubes rotation
    $("input[type=range]").change(function () {
        var degrees = $(this).val();
        var rotateStyle = "rotateX(" + degrees + "deg) rotateY(" + degrees/4 + "deg)";
    
        $(".box ul").css("-webkit-transform", rotateStyle);
      });
    
    // Navigation using jQuery
    $("header a").click(function () {
        var sectionId = $(this).attr("href");
        if (sectionId == "#portfolio") {
        	$(".portfolio-content-list").show();
        	$("section").hide();
        	$(".portfolio-item").hide();
        	$(sectionId).slideDown(600);
        }
        else {
        	if (sectionId == "#blog") {
        		$(".blog-content-list").show();
        		$("section").hide();
        		$(".blog-entry").hide();
        		$(sectionId).slideDown(300);
        	}
        	else {
        		$("section").hide();
        		$(sectionId).slideDown(300);
        	}
        };
    });
    
    $(".box a").click(function () {
        var sectionId = $(this).attr("href");
        if (sectionId == "#portfolio") {
        	$(".portfolio-content-list").show();
        	$("section").hide();
        	$(".portfolio-item").hide();
        	$(sectionId).slideDown(600);
        }
        else {
        	if (sectionId == "#blog") {
        		$(".blog-content-list").show();
        		$("section").hide();
        		$(".blog-entry").hide();
        		$(sectionId).slideDown(300);
        	}
        	else {
        		$("section").hide();
        		$(sectionId).slideDown(300);
        	}
        };
    });
    
    $(".portfolio-content-list a").click(function () {
        var portfolioItem = $(this).attr("href");
     
        $(portfolioItem).show();
        $("section").hide();
        $(".portfolio-content-list").hide();
        $("#portfolio").slideDown(300);
    
    });
    
    $(".blog-content-list a").click(function () {
        var blogEntry = $(this).attr("href");
     
        $("section").hide();
        $(".blog-content-list").hide();
        $(blogEntry).show();
        $("#blog").slideDown(300);
    });
    
    $(".back").click(function (){
    	var destination = $(this).attr("href");
    
    	if (destination == "#portfolio") {
    		$(".portfolio-item").hide();
    		$(".portfolio-content-list").show();
    	}
    	else {
    		$(".blog-entry").hide();
    		$(".blog-content-list").show();
    	}
    		$(destination).slideDown(300);
    });

    // Show the sections from notes page
    // Do I still want to keep this page linked to JS???
    $("section.morning").show();
    $("section.afternoon").show();
    $("section.evening").show();


});

