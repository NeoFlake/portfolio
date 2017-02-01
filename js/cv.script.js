$().ready(function(){

  $("#buttonScriptZone").click(function(){
    if($("h4").text() === "Télécharger mon CV") {
      $("#buttonScriptZone").attr("download", "SCHMIDT-Jonathan");
    }
    $("h4").text("Télécharger mon CV");
  });

});
