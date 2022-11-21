$(document).ready(function(){

  "use strict";

  let pages = ["home","Start-Picking"];

 
  // Set Params
  const addParams = (paramsName, ParamsValue) => {
    window.history.pushState("object or string", "Title", "?"+ paramsName + "=" + ParamsValue);
  }
  addParams("page", "home", "Start-Picking");


  // GetPage Content
  const getPageData = (page) => {
    $(".content-panel__pageDisplay").load(page + ".html");

    if(pages.includes(page) === false) {
      $('.content-panel__addpage ul').append('<li class="btn-group px-5"><button href="'+ page +'.html" type="button" class="waves-effect waves-light btn btn-primary-light pageLink">'+ page +'</button><button type="button" class="waves-effect waves-light btn btn-primary-light pageLink-close">x</button></li>');
      
      pages.push(page);
    }
  }
  getPageData("home","Start-Picking");



  // changeable Tab
  $(document).on('click', '.pageLink', function(e) {
    e.preventDefault();
    // e.stopPropagation();

    let linkHref = $(this).attr("href");
    let linkHrefFind = linkHref.lastIndexOf('.html')
    let linkHrefText = linkHref.slice(0, linkHrefFind);

      // add Params
      addParams("page", linkHrefText);

      // Data Page data
      getPageData(linkHrefText); 
  });

  $(document).on('click', '.pageLink-close', function(e) {
    e.preventDefault();
    
    let linkHref = $(this).parent('li').find('.pageLink').attr("href");
    let linkHrefFind = linkHref.lastIndexOf('.html')
    let linkHrefText = linkHref.slice(0, linkHrefFind);
    console.log(linkHrefText);
    
    if(pages.length > 1) {
      const indexNumber = pages.indexOf(linkHrefText);
      console.log(indexNumber);
      pages.splice(indexNumber, 1);
      $(this).parent('li').remove();

      if(indexNumber > 0) {
        let setpageIndex = indexNumber - 1;
        console.log(pages[setpageIndex]);

        // add Params
        addParams("page", pages[setpageIndex]);

        // Data Page data
        getPageData(pages[setpageIndex]);
      } 

    }
    
    console.log(pages);
  });

  
});