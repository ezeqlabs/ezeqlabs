function fazLogin(email, senha, callback){
  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(function(){
      callback(firebase.auth().currentUser);
    })
    .catch(function(error) {
      callback(error)
    });
}

function carregaContatos(callback){
  firebase.database().ref('contatos/').once('value').then(function(snapshot) {
    var contatos = [];
    var objeto = snapshot.val()

    for(var key in objeto){
      var contato = {
        nome: objeto[key]["nome"],
        email: objeto[key]["email"],
        mensagem: objeto[key]["mensagem"],
        data: objeto[key]["data"]
      }
      contatos.push(contato)
    }
    callback(contatos);
  });
}
