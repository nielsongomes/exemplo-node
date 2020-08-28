  var http = require('http')

 //Criaremos o nosso primero Servidor
http.createServer(function(req, res){
    res.write('Ceunsp AnDes -Servidor Node')
    res.end();//fim da resposta}  
}).listen(5000);

//o servidor ficará ouvindo na porta 5000   