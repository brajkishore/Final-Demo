  $(function() {
      // $(document).tooltip({
          // content: function () {
              // return $(this).prop('title');
	// },
		  // tooltipClass: "random-styling"
      // });
	
// $('.nav a').click(function(){
    // $(".navbar-toggle").click();
// }); 	
// $('.collapse').click('li', function() {
    // $('.navbar-collapse').collapse('hide');
// });
    // $("#bs-example-navbar-collapse-1 li a").click(function(event) {
        // // check if window is small enough so dropdown is created
    // $(".nav-collapse").removeClass("in").addClass("collapse");
    // });
    // $(".navbar li a").click(function(event) {
        // // check if window is small enough so dropdown is created
        // $("#navbar-toggle").is(":visible")
            // $("#navbar-collapse").toggle();
    // });    

//Collapse list on click
$('.nav li a').on('click',function(){
	if($(this).attr('id')==="special") return true;
    $('.navbar-collapse.in').collapse('hide');
}) 

//Keep tooltip open when mouseover
// $( "[title]" ).bind( "mouseleave", function( event ) {
	// event.stopImmediatePropagation();
// 	
	// var fixed = setTimeout('$("[title]").tooltip("close")', 1000);
// 	
	// $(".ui-tooltip").hover(
	    // function(){clearTimeout (fixed);},
	    // function(){$("[title]").tooltip("close");}
		// );
// })
// 
// .tooltip({
	  // content: function () {
	      // return $(this).prop('title');
		// },
	  // tooltipClass: "random-styling"
// });

var showPopover = function () {
    $(this).popover('show');
}
, hidePopover = function () {
   // $(this).popover('hide');
}; 



////////////////////
    var refs = {};
    
    $(".reference").each(function(index){
    	refs[index] = $(this).html();	
    });
    
    $(".refOther").each(function(index) {
    	//console.log($( this ).text());
    	var ind = parseInt($(this).text())-1;
    	if(!refs[ind]) return true;
    	$(this).html("<a>["+$(this).html()+"]</a><span style='display:none'>"+refs[ind]+"</span>");
    	
    	// $(this).attr('data-original-title',refs[ind]);
  		// $(this).html("<a href='#' title='<h6>"+ refs[ind] +"</h6>'>["+$(this).html()+"]</a>");
	});
	
	


$('body').on('click', '.popover a', function() {
  //$('sup').popover('hide');
});

	
$('sup').popover({
	'html' : true,
	'trigger': 'manual',
	'placement': 'top', 
	'content': function(){
		if(!$(this).find('span').html()) return "";
		return $(this).find('span').html()+"<div class='footer'><a href='#references_opt'>See all references >></a></div>";
	}
})
.click(showPopover);


var figPopup=function(e){
	$('.cFigure').each(function () {       
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
 });
};

var supPopup=function(e){
	$('sup').each(function () {       
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
 });
};


$('body').on('click', function (e) {
	
       
    $('sup').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
      
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) 
        {
        	//alert("closing ref popover");        	  
          $(this).popover('hide');
        // $(this).prevAll('*:first').popover('hide');
        }
    });
    
    $('.cFigure').each(function () { 
    
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        	//alert("closing image popover");
           $(this).popover('hide');
           //$(this).prevAll('.popover').popover('hide');           
       }
       else
       {
       //	alert("fsnfdgkmdkgf");
       }
      
 });
  
 
 $('.cTable').each(function () {       
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
 });
 
 $('.cList').each(function () {       
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
 });
});



// $( "sup" ).click(function(event){
	// alert("op");
	    // $(this).tooltip('open');
// }); 
// 
	// $(".preview").click(function(){
// 		
		// $( "#dialog" ).html("<img src='hd/"+$(this).attr('src')+"'/>");
	    // setTimeout(function(){
		    // $( "#dialog" ).dialog({
				// width:'auto',
		    	// modal: true,
		        // close: function(event, ui) { $('#wrap').show(); },
		        // open: function(event, ui) { $('.ui-widget-overlay').bind('click', function(){ $("#dialog").dialog('close'); }); }    	
		    // });
		    // $(".ui-dialog-titlebar").hide();
		// }, 100);    
	// });
var hiddenFigs=[];
var hiddenTables=[];
var hiddenLists=[];

 $('.hiddenImages span').each(function(){
 	
 	
 	var idx=parseInt($(this).attr('id').toString().trim().split("-")[1]);
 	if($(this).attr('id').toString().match('^metaFig'))
				{								
					hiddenFigs.push({'id':'Fig'+idx,'val':$(this).html()});
				//	alert($(this).attr('id')+":::"+$(this).html());    		
				}
		else if($(this).attr('id').toString().match('^metaTable'))
		{
			//alert($(this).attr('id')+":::"+$(this).html());
			hiddenTables.push({'id':'Table'+idx,'val':$(this).html()});
		}  
		else if($(this).attr('id').toString().match('^metaList'))
		{
			//alert($(this).attr('id')+":::"+$(this).html());
			hiddenLists.push({'id':'List'+idx,'val':$(this).html()});
		} 		
 	
 	
 });
 
 
 $("a[name^='Fig']").each(function(){
 	
 	var name=$(this).attr('name');
 	  //alert($(this).html());
	 
	 for(var i=0;i<hiddenFigs.length;i++)
				  {
					
					  if(name.toString().match(hiddenFigs[i].id))
					  {
						  
						 $(this).attr('href',hiddenFigs[i].val);
						  $(this).html("<img src='"+hiddenFigs[i].val+"' alt='' class='preview' />");
						  		//alert($(this).attr('title'));
						  						  
						  }			
					}
					
 });
 
$("a[name^='List']").each(function(){
 	
 	var name=$(this).attr('name');
 	  //alert($(this).html());
	 
	 for(var i=0;i<hiddenLists.length;i++)
				  {
					
					  if(name.toString().match(hiddenLists[i].id))
					  {
						  
						 $(this).attr('href',hiddenLists[i].val);
						  $(this).html("<img src='"+hiddenLists[i].val+"' alt='' class='preview' />");
						  						  
						  }			
					}
					
 });


$("a[name^='Table']").each(function(){
 	
 	var name=$(this).attr('name');
 	  //alert($(this).html());
	 
	 for(var i=0;i<hiddenTables.length;i++)
				  {
					
					  if(name.toString().match(hiddenTables[i].id))
					  {
						  
						 $(this).attr('href',hiddenTables[i].val);
						  $(this).html("<img src='"+hiddenTables[i].val+"' alt='' class='preview' />");
						  						  
						  }			
					}
					
 });

 
    
/////////////// map all images for popups

  var figures =[];
  var tables =[];
  var listings =[];
  

$(".image a").each(function(index){
    	    	 		    	    	 		
 		if($(this).attr('name').toString().match('^Fig'))
				{			
			//	alert($(this).attr('title'));		
					figures.push({'name':$(this).attr('name'),'href':$(this).attr('href'),'title':$(this).attr('title'),'img':$(this).html()});    		
				}
		else if($(this).attr('name').toString().match('^Table')){
			tables.push({'name':$(this).attr('name'),'href':$(this).attr('href'),'title':$(this).attr('title'),'img':$(this).html()});
		}  
		else if($(this).attr('name').toString().match('^List')){
			listings.push({'name':$(this).attr('name'),'href':$(this).attr('href'),'title':$(this).attr('title'),'img':$(this).html()});
		} 		
    });
    
    
	$(".cFigure").each(function(index) {    	
		
		/*
		
				//if($(this).attr('id')!='undefined' && $(ths).attr('id')!=false)
				//{
					//alert($(this).attr('id').toString().trim().split("-"));
					var idx=parseInt($(this).attr('id').toString().trim().split("-")[1])-1;
					//alert("<a>"+$(this).html()+"</a> <span style='display:none'>"+idx+"</span>");
					$(this).html("<a>"+$(this).html()+"</a><span style='display:none'>"+figures[idx].img+"</span>");
				//}
					*/
					
					var idx=parseInt($(this).attr('id').toString().trim().split("-")[1])-1;
			//alert("<a>"+$(this).html()+"</a> <span style='display:none'>"+idx+"</span>");
			$(this).html("<a>"+$(this).html()+"</a> <span style='display:none'>"+idx+"</span>");
			//$(this).html("<a>"+$(this).html()+"</a> <span style='display:none'><a name='"+figures[idx].name+"' href='"+figures[idx].href+
				//	"' title='"+figures[idx].title+"' data-gallery>"+figures[idx].img+"</a>"
			//+"</span>");
		
		        	 
	});
	
	
	$(".cTable").each(function(index) {    	
		
		
		//if($(this).attr('id')!='undefined' && $(ths).attr('id')!=false)
		//{
			//alert($(this).attr('id').toString().trim().split("-"));
			var idx=parseInt($(this).attr('id').toString().trim().split("-")[1])-1;
			//alert("<a>"+$(this).html()+"</a> <span style='display:none'>"+idx+"</span>");
			$(this).html("<a>"+$(this).html()+"</a> <span style='display:none'>"+idx+"</span>");
		//}
			
		        	 
	});
	
	
	$(".cList").each(function(index) {    	
		
		
		//if($(this).attr('id')!='undefined' && $(ths).attr('id')!=false)
		//{
			//alert($(this).attr('id').toString().trim().split("-"));
			var idx=parseInt($(this).attr('id').toString().trim().split("-")[1])-1;
			//alert("<a>"+$(this).html()+"</a> <span style='display:none'>"+idx+"</span>");
			$(this).html("<a>"+$(this).html()+"</a> <span style='display:none'>"+idx+"</span>");
		//}
					        	
	});
    
    	
$('.cFigure').popover({	
	'html' : true,	
	'trigger':'manual',
		'placement': 'auto top',				
		'title':function(){			
							if(!$(this).find('span').html()) return "";
							return figures[$(this).find('span').html()].title;
						} ,
				
		'content': function(){
			
			//alert($(this).html());			
			if(!$(this).find('span').html()) return "";
			
			return "<a name='"+figures[$(this).find('span').html()].name+"' href='"+figures[$(this).find('span').html()].href+
								"' title='"+figures[$(this).find('span').html()].title+"' data-gallery>"+figures[$(this).find('span').html()].img+"</a>";
					
			//return $(this).find('span').html();
			//return $(this).find('span').attr('style','').html();					
		//return "<a href='#Fig1'>"+$(this).find('span').html()+"</a>";	 
		}
	
})
.click(showPopover);

$('.cTable').popover({	
	'html' : true,	
	'trigger':'manual',
		'placement': 'bottom',
		'title':function(){			
			if(!$(this).find('span').html()) return "";
			return tables[$(this).find('span').html()].title;
		} ,
		'content': function(){			
			if(!$(this).find('span').html()) return "";
			return "<a name='"+tables[$(this).find('span').html()].name+"' href='"+tables[$(this).find('span').html()].href+
					"' title='"+tables[$(this).find('span').html()].title+"' data-gallery>"+tables[$(this).find('span').html()].img+"</a>";			 
		}
	
}).click(showPopover);

$('.cList').popover({	
	'html' : true,	
	'trigger':'manual',
		'placement': 'bottom',
		'title':function(){			
			if(!$(this).find('span').html()) return "";
			return listings[$(this).find('span').html()].title;
		} ,
		'content': function(){			
			if(!$(this).find('span').html()) return "";
			return "<a name='"+listings[$(this).find('span').html()].name+"' href='"+listings[$(this).find('span').html()].href+
					"' title='"+listings[$(this).find('span').html()].title+"' data-gallery>"+listings[$(this).find('span').html()].img+"</a>";			 
		}
	
}).click(showPopover);

    
    if($(window).width() > 1199)
        $('.utils').tooltip({	
          'placement': 'top'
        });
    else{
        $('.utils').tooltip({	
          'placement': 'right'
        });        
    	}
    	
   
    
    	
  });