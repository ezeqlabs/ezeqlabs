$(function(){
  // FAZ LOGIN NO ADMIN
  $('#loginAdmin').submit(function(e){
    e.preventDefault();

    var email = $('#campoEmailLogin').val();
    var senha = $('#campoSenhaLogin').val();

    fazLogin(email, senha, function(response){
      if( response.message == undefined ){
        window.location.pathname = (window.location.pathname + '/dashboard/').replace('//', '/') ;
      }else{
        $('#erroLogin').show();
      }
    });
  });

});
