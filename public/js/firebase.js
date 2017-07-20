var config = {
  apiKey: "AIzaSyCwHH6PTa-ixD_c2smaiRT5oWvTjnwawk4",
  authDomain: "ezeqlabs-d0129.firebaseapp.com",
  databaseURL: "https://ezeqlabs-d0129.firebaseio.com",
  projectId: "ezeqlabs-d0129",
  storageBucket: "",
  messagingSenderId: "788712698661"
};

firebase.initializeApp(config);

/* ********************************************************
***** CADASTRO DE CONTATOS
******************************************************** */

function criaContato(nome, email, mensagem){
  var db = firebase.database();
  var ref = db.ref("contatos");

  ref.push({
    "nome": nome,
    "email": email,
    "mensagem": mensagem,
    "data": dataAtual()
  });
}

function dataAtual(){
  var data = new Date();
  var dia = data.getDate();
  var mes = data.getMonth();
  var ano = data.getFullYear();
  return dia + "/" + mesCorreto(mes) + "/" + ano;
}

function mesCorreto(mes){
  var _mes = mes + 1;

  if( _mes < 10 ){
    return "0" + _mes;
  }

  return _mes;
}
