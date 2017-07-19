$(function(){
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
      var nome = $('#campoNome').val();

      if( $('#campoEmail').val() != '' ){

        if( isEmail($('#campoEmail').val()) ){
          var email = $('#campoEmail').val();

          if( $('#campoMensagem').val() != '' ){
            var mensagem = $('#campoMensagem').val();

            criaContato(nome, email, mensagem)
            alert('Contato enviado com sucesso! Em breve retornaremos seu contato.');
            $('#campoNome').val('');
            $('#campoEmail').val('');
            $('#campoMensagem').val('');
            $('.modal').fadeOut(250);

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
