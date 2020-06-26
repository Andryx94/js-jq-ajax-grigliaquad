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
      if (!selected.hasClass("click")){
        $.ajax(
          {
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            method: "GET",
            success: function (data) {
              selected.children().html(data.response);

              if (data.response <= 5) {
                selected.addClass("yellow click");
              }
              else {
                selected.addClass("green click");
              }
            },
            error: function (richiesta, stato, errore) {
              alert("E' avvenuto un errore. " + errore);
            }
          }
        );
      }
    });
  }
);
