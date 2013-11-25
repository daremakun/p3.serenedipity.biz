// When the document loads, initialize the button.
$(
	function(){
	var jButton = $( "button" );
 
	// First, hide all the list items.
$( "li" ).hide();
 
	jButton.data(
	"config",
{
	Index: 0,
	Collection: $( "li" )
}
);
	jButton.click(
	function( objEvent ){
	var jThis = $( this );
 
	var objConfig = jThis.data( "config" );

	if (objConfig.Index < objConfig.Collection.length){
 
	$( objConfig.Collection[ objConfig.Index++ ] ).slideDown(); 
}
 
	objEvent.preventDefault();
	return( false );
});
});

$('#accordion ul').hide();
$('#accordion li').click(function () {
   $(this).parent().toggleClass('selected');
   $(this).parent().children('ul').toggle('fast');
   $(this).parent().siblings().children('ul').hide('fast');
   $(this).parent().siblings().removeClass('selected');
});
$('#accordion .selected').click(function () {
   $(this).parent().children('ul').toggle('fast');
   $(this).parent().toggleClass('selected');
});
