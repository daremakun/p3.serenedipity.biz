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

$('div#letters').click(function(e)
    {
        $('.letters > div').hide();
        $('div#letters input[type="button"]').each(function(index)
        {
            if($(this).is(':clicked'))
            {
                $('.letters > div:eq(' + index + ')').show();
            }
        });
    });
});



