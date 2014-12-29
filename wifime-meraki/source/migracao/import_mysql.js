var mongoose = require("Mongoose");

//connect to MongoDB database
var db = mongoose.connect('mongodb://127.0.0.1:27017/teste');

var userSchema= new mongoose.Schema({
 local : { 
     user : String, // Nome de usuário
     email : String, // E-mail 
     password : String, // Hash da senha
     doc : String, // CPF ou Passaporte
     name : String, // Nome 
     lastname : String, // Sobrenome
     gender : String, // Sexo
     birthday : String // Nascimento
   }, 
   facebook : { 
     id : String, // ID do usuário no facebook 
     token : String, // Token de acesso
     email : String, // E-mail usado no facebook
     name : String // Nome
   }, 
});

var User = db.model('User', userSchema);

var user = new User({
    user: 'caca',
    email: 'carlosp@pucsp.br',
    password: 'teste234',
    doc: 'rrrr',
    name: 'Carlos Eduardo',
    lastname: 'Paes',
    gender: 'Male',
    birthday: '08061972'
});


       

//connect to MySql database
 var mysql = require('mysql');
 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : 'caca1972',
      database : 'radius',
    }
);
 
connection.connect();
 
var queryString = 'SELECT * FROM users';

// import data from MySql to MongoDB
 
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
 
    for (var i in rows) {
        console.log('Post Titles: ', rows[i].first_name);
    }
});
 
connection.end();


