var contatos = (function(){
  var c = {};

  c.todosContatos = function(){
    carregaContatos(function(contatos){
      var listaContatos = [];
      for(var contato in contatos){
        contato = contatos[contato]
        listaContatos.push(contato);
      }
      return listaContatos;
    });

  }

  return c;
}());
