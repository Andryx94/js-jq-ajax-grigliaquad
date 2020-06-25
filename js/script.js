$(document).ready(
  function() {
    //funzione generazione 36 box
    for (var i = 0; i < 36; i++){
      var copiaTemplate = $(".template").html();
      $(".block").append(copiaTemplate);
    };

    //avvio funzione al click su box specifica
    $(".box").on("click", function() {
      var selected = $(this);

      //avvio chiamata ajax su API Boolean
      $.ajax(
        {
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method: "GET",
          success: function (data, stato) {
            selected.children().html(data.response);

            if (data.response <= 5) {
              selected.addClass("yellow");
            }
            else {
              selected.addClass("green");
            }
          },
          error: function (richiesta, stato, errori) {
            alert("E' avvenuto un errore. " + errore);
          }
        }
      );
    });
  }
);
