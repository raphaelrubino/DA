var setupSlider = ( function(){

	var construct = function(){
		$( "div#slider" ).slider({
			orientation: "horizontal",
			min: 0,
			max: 100,
			value: 0,
			slide: function( event, ui ){
				manageSlide( ui );
			},
		});
		setSelectedValue( '0' );
	};

	var manageSlide = function( ui ){
		setSelectedValue( ui.value );
	};

	var setSelectedValue = function( value ){
		$( "span#selected-value" ).text( value );
	};

	return{
		construct: construct,
	};

})();

$( document ).ready( function(){
	setupSlider.construct();
});
