var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');


/* Input APIKEY Sendgrid */
var options = {
  auth: {
    api_key: process.env.SENDGRID_API_KEY
  }
};


exports.sendMail = function(req, res) {

  var emailTo = '';
  var emailFrom = '';
  var body = '<body>' +
              '<div id="contact-email">' +
              '<div> <h1> Proyecto Angular - NodeJS </h1> <h4>Subject: ' + req.body.data.subject +
              '</h4></div>' +
              '<section>' +
              'Name:<p>' + req.body.data.name + '</p>' +
              'Email: <p>' + req.body.data.email + '</p>' +
              'Message:<p>' + req.body.data.message + '</p></section>' +
              '</div>' +
            '</body>';

  req.body.to = 'shoppingpocketseo@gmail.com';

 const msg_admin = {
  to: req.body.to,
  from: req.body.data.email,
  subject: req.body.data.subject,
  text: req.body.data.message,
  html: '<div id="contact-email">' +
  '<div> <h1> ShoppingPocket E-Commerce</h1>' +
  '<h4>Subject: ' + req.body.data.subject +
  '</h4></div>' +
  '<section>' +
  'Name:<p>' + req.body.data.name + '</p>' +
  'Email: <p>' + req.body.data.email + '</p>' +
  'Message:<p>' + req.body.data.message + '</p></section>' +
  '</div>'
};

const msg_user = {
  to: req.body.data.email,
  from: 'support@shoppingpocket.tk',
  subject: req.body.data.subject,
  text: req.body.data.message,
  html: '<div id="contact-email">' +
  '<div> <h1> ShoppingPocket E-Commerce</h1>' +
  '</h4></div>' +
  '<section>' +
  '<p>Hola '+req.body.data.name+' ,muchas gracias por contactar con nosotros. Nuestro departamento de '+
  req.body.data.subject+' está revisando tu consulta. Te contestaremos con la mayor brevedad posible. Un saludo</p></section>' +
  '</div>'
};


  var mailer = nodemailer.createTransport(sgTransport(options));
  mailer.sendMail(msg_user);
  mailer.sendMail(msg_admin, function(error, info) {
    if (error) {
      res.status('401').json({
        err: info
      });
    } else {
      res.status('200').json({
        success: true
      });
    }
  });
  
};


exports.sendMailCheckout = function(discount,req, res) {

  let userInformation = req.body.data.infoUser;
  let cartContent = req.body.data.cart;
  let totalCart = req.body.data.totalCart;
  let date = new Date();
  let items_cart='';
  let discountcontent='';

  if(discount!=null){
    discountcontent+='<p></p>'+
    '<p>En esta compra se ha aplicado un descuento de: -'+(Math.round((req.body.data.totalNoDiscount-req.body.data.totalCart)*100)/100)+' €</p>'+
    '<p></p>'+
    '<p><b><u>Se ha generado un Bono descuento para su próxima compra:</u> ' + discount + ' </b></p>' +
    '<p></p>';
  }

  cartContent.forEach(element => {
    items_cart+=('<tr><td>'+element.EAN+'</td><td>'+element.prod_name+'</td><td>'+element.description+'</td><td>'+element.uds+'</td><td>'+element.prize+' €</td></tr>');
  });

  const msg_pedido = {
    to: userInformation.clientMail,
    from: 'almacen@shoppingpocket.tk',
    subject: 'Detalle de Pedido',
    html: '<div id="contact-email">' +
    '<div> <h1>Pedido ShoppingPocket</h1>' +
    '<h4>Subject: Detalle de Pedido</h4></div>' +
    '<section>' +
    '<p>Nombre de Cliente:' + userInformation.clientName +', '+  userInformation.clientLastname + '</p>' +
    '<p>Email de Cliente: ' + userInformation.clientMail + '</p>' +
    '<p>Teléfono de Contacto: ' + userInformation.clientPhone + '</p>' +
    '<p>Dirección de Envío: ' + userInformation.clientAdress + userInformation.clientAdressNumber +', '+ 
    userInformation.clientCP +', '+ userInformation.clientAdressCity+', '+userInformation.clientAdressLocate+'</p>' +
    '<p>Fecha de Pedido: ' + date + '</p>' +
    '<p>Total Importe Pedido: ' + totalCart + ' €</p>' +
    discountcontent+
    '<table border="2" style="{text-align: center;}">'+ 
    '<tr><th>EAN</th><th>Producto</th><th>Descripción</th><th>Unidades</th><th>Precio Unitario</th></tr>'+
      items_cart +
    '</table>'+
    '</section></div>'
  };

  const msg_pedido_admin = {
    to: 'shoppingpocketseo@gmail.com',
    from: userInformation.clientMail,
    subject: 'Detalle de Pedido',
    html: '<div id="contact-email">' +
    '<div> <h1>Pedido ShoppingPocket</h1>' +
    '<h4>Subject: Detalle de Pedido</h4></div>' +
    '<section>' +
    '<p>Nombre de Cliente: ' + userInformation.clientName +', '+  userInformation.clientLastname + '</p>' +
    '<p>Email de Cliente: ' + userInformation.clientMail + '</p>' +
    '<p>Teléfono de Contacto: ' + userInformation.clientPhone + '</p>' +
    '<p>Dirección de Envío: ' + userInformation.clientAdress + userInformation.clientAdressNumber +', '+ 
    userInformation.clientCP +', '+ userInformation.clientAdressCity+', '+userInformation.clientAdressLocate+'</p>' +
    '<p>Fecha de Pedido: ' + date + '</p>' +
    '<p>Total Importe Pedido: ' + totalCart + ' €</p>' +
    '<table border="2" style="{text-align: center;}">'+ 
    '<tr><th>EAN</th><th>Producto</th><th>Descripción</th><th>Unidades</th><th>Precio Unitario</th></tr>'+
      items_cart +
    '</table>'+
    '</section></div>'
  };


  var mailer = nodemailer.createTransport(sgTransport(options));
  mailer.sendMail(msg_pedido);
  mailer.sendMail(msg_pedido_admin);
  /* (not resolved yet) */
  /*, function(error, info) {
     if (error) {
      res.status('401').json({
        err: info
      });
    } else {
      res.status('200').json({
        success: true
      });
    }
  });
 */
};


exports.sendMailActivation = function(user,cb) {

  const msg_token = {
    to: user.email,
    from: 'auto@shoppingpocket.tk',
    subject: 'Activación de Cuenta',
    html: '<div id="contact-email">' +
    '<div> <h1>Activación de cuenta ShoppingPocket</h1>' +
    '<section>' +
    'Para activar su cuenta, haga click en el siguiente enlace: '+'<a href="'+user.origin+'/#/activation/'+user.token+'_'+user.email+'"><em><b>Active su cuenta</b></em></a>'+
    '</section></div>'
  };

  var mailer = nodemailer.createTransport(sgTransport(options));
  mailer.sendMail(msg_token, function(error, info) {
    if(error){
      cb(error,false);
    }else{
      cb(error,true);
    }
  });
}


exports.sendMailRecover = function(user,cb) {

  const msg_tokenrecover = {
    to: user.email,
    from: 'recover@shoppingpocket.tk',
    subject: 'Recuperar contraseña',
    html: '<div id="contact-email">' +
    '<div> <h1>Recuperar contraseña de cuenta ShoppingPocket</h1>' +
    '<section>' +
    'Hemos recibido una petición para cambair su contaseña. Para cambiarla haga click en el siguiente enlace: '+'<a href="'+user.origin+'/#/changepassword/'+user.token_recover+'/'+user.email+'"><em><b>Recuperar contraseña</b></em></a>'+
    '<p>Si no ha solicitado este cambio, simplemente ignore este mensaje.</p>'+    
    '</section></div>'
  };

  var mailer = nodemailer.createTransport(sgTransport(options));
  mailer.sendMail(msg_tokenrecover, function(error, info) {
    if(error){
      cb(error,false);
    }else{
      cb(error,true);
    }
  });
}

