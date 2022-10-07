/*
   Author:              Tyler Osborne
   Date Created:        2022/09/29
   Date lastmod:        2022/09/29
   Languages:           JS 
   Description: 
                        This is the script for my website.
*/

/*
*********************************************************************
*                          Global Variables                         *         
*********************************************************************
*///Variables available over the whole script

// Current node for moving things     
var currentNode;

/*
*********************************************************************
*                          Functions                                *         
*********************************************************************
*/// Functions to be called    

// Ran when a page is loaded it populates the the page with the correct data
function loadPage()
{
    // Gets current url pathname to determine current page
    var path = window.location.pathname;
    var page = path.split("/").pop();


    // Checks what page has been loaded and 
    // runs the build function for that page.
    
    // homepage.html
    if (page == "homepage.html")
    {
        homepagePage();
    }   
}

/*
*********************************************************************
*                          Page Build Functions                     *         
*********************************************************************
*///Functions that are run when a page is loaded                                  

// Runs when homepage page is loaded
function homepagePage()
{
    
}

/*
*********************************************************************
*                          Launch Section                           *         
*********************************************************************
*///What happens on the launch of the script  

// On launch check which page is the current page
window.addEventListener( "load", loadPage, false );