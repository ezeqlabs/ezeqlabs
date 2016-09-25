$(function(){
  emailjs.init("user_AOUh8L3hN5TQVp9ZO4eWs");

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  $('#entreContato').click(function(){
    $('.modal').fadeIn(250);
  });

  $('.close').click(function(){
    $('#campoNome').val('');
    $('#campoEmail').val('');
    $('#campoMensagem').val('');
    $('.modal').fadeOut(250);
  });

  $('#btForm').click(function(){
    if( $('#campoNome').val() != '' ){

      if( $('#campoEmail').val() != '' ){

        if( isEmail($('#campoEmail').val()) ){

          if( $('#campoMensagem').val() != '' ){

            emailjs.send("gmail", "template_padrao", { "nome": $('#campoNome').val(), "email": $('#campoEmail').val(), "mensagem": $('#campoMensagem').val() }).then(function(response) {
             alert('Email enviado! Em breve retornaremos seu contato.');
             $('#campoNome').val('');
             $('#campoEmail').val('');
             $('#campoMensagem').val('');
             $('.modal').fadeOut(250);
            }, function(err) {
             alert('Erro ao enviar email. Tente novamente mais tarde.');
            });

          }else{
            alert('Por favor, deixe uma mensagem');
            $('#campoMensagem').focus();
          }

        }else{
          alert('Por favor, insira um email válido');
          $('#campoEmail').focus();
        }

      }else{
        alert('Por favor, preencha seu email');
        $('#campoEmail').focus();
      }

    }else{
      alert('Por favor, preencha seu nome');
      $('#campoNome').focus();
    }
  });
});
