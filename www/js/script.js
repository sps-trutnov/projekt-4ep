$( document ).ready(function() {
    $('#prihlasitButton').click(function() {
        prihlasit();
	});
    
	$(window).on('keydown', function(e) {
		if (e.which == 13) {
			prihlasit();
            return false;
		}
    });

    function prihlasit() {
        var jmeno = $('#jmeno').val();
        var heslo = $('#heslo').val();

        $.ajax({
            type: 'POST',
            dataType: 'text',
            url: './php/funkce.php',
            data: {jmeno : jmeno, heslo : heslo, action: "login"}, 
            success: function (data) {
                if(data != "true") {
                    $( "#errorBox" ).text("Špatný vstup debílku" + data);
                }
                else window.location.href = "menu.html";
                
            },
            error: function(data){
                console.log("Chyba v matrixu: " + data);
            }          
        });
    }

    function getAllBooks(){
        $.ajax({
            type: 'POST',
            dataType: 'text',
            url: './php/funkce.php',
            data: {action: "allBooks"}, 
            success: function (data) {
                console.log("Income:" + data + JSON.parse(data));                
            },
            error: function(data){
                console.log("Chyba v matrixu: " + data);
            }          
        });
    }
});
