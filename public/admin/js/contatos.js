$(function(){

  carregaContatos(function(contatos){
    var _html = '';

    if(contatos.length > 0){
      for(var contato in contatos){
        contato = contatos[contato]
        _html += '<div class="list-group-item list-group-item-action flex-column align-items-start">';
        _html += '  <div class="d-flex w-100 justify-content-between">';
        _html += '    <h5 class="mb-1">'+ contato.nome +'</h5>';
        _html += '    <small>'+ contato.data +'</small>';
        _html += '  </div>';
        _html += '  <p class="mb-1">'+ contato.mensagem +'</p>';
        _html += '  <small>'+ contato.email +'</small>';
        _html += '</div>';
      }
    } else {
      _html += '<div class="list-group-item">Nenhum contato cadastrado</div>'
    }

    $('#listaContatos').html(_html);
  });

});
