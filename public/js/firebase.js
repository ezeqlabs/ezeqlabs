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
  var data = new Date();
  var dia = data.getDate();
  var mes = data.getMonth();
  var ano = data.getFullYear();
  var dataAtual = ano+"-"+(mes+1)+"-"+dia;
  var timeStamp = data.getTime()

  ref.push({
    "nome": nome,
    "email": email,
    "mensagem": mensagem,
    "data": dataAtual
  });
}
