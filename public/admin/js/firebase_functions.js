function fazLogin(email, senha, callback){
  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(function(){
      callback(firebase.auth().currentUser);
    })
    .catch(function(error) {
      callback(error)
    });
}
