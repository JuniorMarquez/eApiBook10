var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');
var smtpPassword = require('aws-smtp-credentials');

module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
      port: 465,
  host: '',
  secure: true,
  auth: {
    user:'',
    pass: '',
  },
  debug: true
  
  });

  const mailOptions = {

    from: '"andesproadventures.com"<info@andesproadventures.com>',
    to: formulario.email,
    subject: formulario.asunto,
    html: `

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<style type="text/css">img { max-width: 600px;  -ms-interpolation-mode: bicubic;}
    .ReadMsgBody { width: 100%; }
    .ExternalClass {width:100%;}
    .backgroundTable {margin:0 auto; padding:0; width:100%;!important;}
    body, .body {
      width: 100%;
      height: 100%;
      direction: rtl;
    }
    .force-full-width {
      width: 100% !important;
    }
  </style>
  <style media="only screen and (max-width: 599px)" type="text/css">@media only screen and (max-width:599px) {
        table.w320 {
          width: 320px !important;
        }
      }
  </style>

<style type="text/css">

      body{width: 100%; background-color: #353232; margin:0; padding:0; -webkit-font-smoothing: antialiased;mso-margin-top-alt:0px; mso-margin-bottom-alt:0px; mso-padding-alt: 0px 0px 0px 0px;}
        
        p,h1,h2,h3,h4{margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;}
        
        span.preheader{display: none; font-size: 1px;}
        
        html{width: 100%;}
        
        table{font-size: 12px;border: 0;}
    
    .menu-space{padding-right:25px;}
    
    a,a:hover { text-decoration:none; color:#FFF;}


    @media only screen and (max-width:640px)

{
  body {width:auto!important;}
  table [class=main] {width:85% !important;}
  table [class=full] {width:100% !important; margin:0px auto;}
  table [class=two-left-inner] {width:90% !important; margin:0px auto;}
  td[class="two-left"] { display: block; width: 100% !important; }
  table [class=menu-icon] { display:none;}
  img[class="image-full"] { width: 100% !important; }
  table[class=menu-icon] { display:none;}

  }

@media only screen and (max-width:479px)
{
  body {width:auto!important;}
  table [class=main] {width:93% !important;}
  table [class=full] {width:100% !important; margin:0px auto;}
  td[class="two-left"] { display: block; width: 100% !important; }
  table [class=two-left-inner] {width:90% !important; margin:0px auto;}
  table [class=menu-icon] { display:none;}
  img[class="image-full"] { width: 100% !important; }
  table[class=menu-icon] { display:none;}

}

    
    </style>

</head>

<body yahoo="fix" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#353232" style="background:#353232;">
  <tr>
    <td align="center" valign="top">  
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" valign="top"><table width="750" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
          <tr>
            <td height="80" align="center" valign="top" style="font-size:80px; line-height:80px;">&nbsp;</td>
          </tr>
        </table></td>
      </tr>
    </table>   
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" valign="top"><table width="750" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
          <tr>
            <td align="center" valign="top" bgcolor="#ffc107" style="-moz-border-radius: 4px 4px 0px 0px; border-radius: 4px 4px 0px 0px;"><table width="600" border="0" align="center" cellpadding="0" cellspacing="0" class="two-left-inner">
              <tr>
                <td height="25" align="left" valign="top" style="font-size:25px; line-height:25px;">&nbsp;</td>
              </tr>
              <tr>
                <td align="left" valign="top">
                
                <table border="0" align="center" cellpadding="0" cellspacing="0" class="full">
                  <tr>
                    <td align="center" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; font-weight:normal; color:#FFF;" mc:edit="sm-01"><multiline><b>Contacanos :</b> contacto@andesproadventures.com</multiline></td>
                  </tr>
                </table>           
                </td>
              </tr>
              <tr>
                <td height="25" align="left" valign="top" style="font-size:25px; line-height:25px;">&nbsp;</td>
              </tr>
            </table></td>
          </tr>
        </table></td>
      </tr>
    </table>

    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" valign="top"><table width="750" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
          <tr>
            <td align="center" valign="top" bgcolor="#FFFFFF"><table width="600" border="0" align="center" cellpadding="0" cellspacing="0" class="two-left-inner">
              <tr>
              <td height="30" align="left" valign="top" style="font-size:30px; line-height:30px;">&nbsp;</td>
              </tr>
              <tr>
                <td align="left" valign="top">
                
                <table width="75" border="0" align="center" cellpadding="0" cellspacing="0" class="full">

                  <tr>
                    <td align="center" valign="middle"><a href="#"><img editable="true" mc:edit="sm-03" src="https://www.andesproadventures.com/assets/media/book/logo.png" width="125" height="42" alt="" /></a></td>
                  </tr>
                </table></td>
              </tr>
              <tr>
              <td height="30" align="left" valign="top" style="font-size:30px; line-height:30px;">&nbsp;</td>
              </tr>
            </table></td>
          </tr>
        </table></td>
      </tr>
    </table>
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" valign="top"><table width="750" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
          <tr>
            <td align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" class="two-left-inner">

              <tr>
                
                <td width="375" align="center" valign="top" class="two-left"><img editable="true" mc:edit="sm-107" src="https://www.andesproadventures.com/assets/media/book/book1.png" width="375" height="300" alt="" style="display:block;width:100% !important; height:auto !important; " /></td>
                
                <td width="375" align="center" valign="middle" class="two-left"><table width="260" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="right" valign="top">&nbsp;</td>
                  </tr>
                 
                  <tr>
                    <td height="10" align="left" valign="top" style="font-size:10px; line-height:10px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:18px; font-weight:bold; color:#1e1e1f; line-height:30px;" mc:edit="sm-109"><multiline>GRACIAS! por reservar con andesproadventures.com</multiline></td>
                  </tr>
                  <tr>
                    <td height="10" align="left" valign="top" style="font-size:10px; line-height:10px;">&nbsp;</td>
                  </tr>
                
                  <tr>
                    <td height="20" align="right" valign="top">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top"><table width="125" border="0" align="left" cellpadding="0" cellspacing="0">
                     
                    </table></td>
                  </tr>
                  <tr>
                    <td align="right" valign="top">&nbsp;</td>
                  </tr>
                </table></td>
              </tr>
              
              </table></td>
          </tr>
        </table></td>
      </tr>
    </table>
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" valign="top"><table width="750" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
          <tr>
            <td align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" class="two-left-inner">

              <tr>
                
                <td width="375" align="center" valign="top" class="two-left"><img editable="true" mc:edit="sm-107" src="https://www.andesproadventures.com/assets/media/book/book3.png" width="375" height="300" alt="" style="display:block;width:100% !important; height:auto !important; " /></td>
                
                <td width="375" align="center" valign="middle" class="two-left"><table width="260" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="right" valign="top">&nbsp;</td>
                  </tr>
                 
                  <tr>
                    <td height="10" align="left" valign="top" style="font-size:10px; line-height:10px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:18px; font-weight:bold; color:#1e1e1f; line-height:30px;" mc:edit="sm-109"><multiline>Para validar su reserva se requiere la cancelacion del 30%</multiline></td>
                  </tr>
                       <tr>



                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; font-weight:bold; color:#1e1e1f; line-height:30px;" mc:edit="sm-103"><multiline>Cuenta RUT banco del estado:</multiline></td>
                  </tr>
                  <tr>
                     <td height="10" align="left" valign="top" style="font-size:10px; line-height:10px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; font-weight:normal; color:#818080; line-height:24px;" mc:edit="sm-104"><multiline></multiline><strong>Nro. de cuenta:</strong> 26.212.340</td>

                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; font-weight:normal; color:#818080; line-height:24px;" mc:edit="sm-104"><multiline></multiline><strong>Titular:</strong> jhon Hernandez</td>
                    
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; font-weight:normal; color:#818080; line-height:24px;" mc:edit="sm-104"><multiline></multiline><strong>Email:</strong> jhonha.18@gmail.com</td>
                    
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; font-weight:normal; color:#818080; line-height:24px;" mc:edit="sm-104"><multiline></multiline><strong>Contacto telefonico:</strong> +569 58249250</td>
                    
                  </tr>
                 
                
                  <tr>
                    <td height="20" align="right" valign="top">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top"><table width="125" border="0" align="left" cellpadding="0" cellspacing="0">
                     
                    </table></td>
                  </tr>
                  <tr>
                    <td align="right" valign="top">&nbsp;</td>
                  </tr>
                </table></td>
              </tr>
              
              </table></td>
          </tr>
        </table></td>
      </tr>
    </table>
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" valign="top"><table width="750" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
          <tr>
            <td align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" class="two-left-inner">

              <tr>
                
                <td width="375" align="center" valign="top" class="two-left"><img editable="true" mc:edit="sm-107" src="https://www.andesproadventures.com/assets/media/book/book2.png" width="375" height="300" alt="" style="display:block;width:100% !important; height:auto !important; " /></td>
                
                <td width="375" align="center" valign="middle" class="two-left"><table width="260" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="right" valign="top">&nbsp;</td>
                  </tr>
                 
                  <tr>
                    <td height="10" align="left" valign="top" style="font-size:10px; line-height:10px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:18px; font-weight:bold; color:#1e1e1f; line-height:30px;" mc:edit="sm-109"><multiline>Luego de realizar el pago ingresa a andesproadventures.com y valida tu reserva!</multiline></td>
                  </tr>
                
                  <tr>
                  
                  </tr>
                  <tr>
                    <td height="20" align="right" valign="top">&nbsp;</td>
                  </tr>
                    <tr>
                        <td align="center" valign="top"><table width="120" border="0" align="center" cellpadding="0" cellspacing="0">
                          <tr>
                            <td height="40" align="center" valign="middle" bgcolor="yellow" style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#333; font-weight:bold; line-height:12px;  -moz-border-radius: 10px; border-radius: 10px;" mc:edit="sm-52"><multiline><a href="#" style="text-decoration:none; color:black;">Validar reserva</a></multiline></td>
                          </tr>
                        </table></td>
                      </tr> 
                  <tr>
                    <td align="left" valign="top"><table width="125" border="0" align="left" cellpadding="0" cellspacing="0">
                     
                    </table></td>
                  </tr>
                  
                </table></td>
              </tr>
              
              </table></td>
          </tr>
        </table></td>
      </tr>
    </table>
 
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" valign="top"><table width="750" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
          <tr>
            <td align="center" valign="top" style="background:#FFF;"><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="375" align="center" valign="top" class="two-left"><img editable="true" mc:edit="sm-48" src="https://www.andesproadventures.com/assets/media/book/book4.png" width="375" height="300" alt="" style="display:block;width:100% !important; height:auto !important; " /></td>
                <td width="375" align="center" valign="middle" bgcolor="black" class="two-left"><table width="230" border="0" align="center" cellpadding="0" cellspacing="0" class="two-left-inner">
              <tr>
                <td align="left" valign="top"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                <td height="40" align="left" valign="top">&nbsp;</td>
              </tr>
                  
                  
                  <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:25px; font-weight:bold; color:#FFF; line-height:32px;" mc:edit="sm-49"><multiline>Tour: <span style="font-size: 25px;"> Piedras blancas</span></multiline></td>
                  </tr>
                   <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:25px; font-weight:bold; color:#FFF; line-height:32px;" mc:edit="sm-49"><multiline>Nombre: Usuario</multiline></td>
                  </tr>
                   <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:25px; font-weight:bold; color:#FFF; line-height:32px;" mc:edit="sm-49"><multiline>Personas: 2</multiline></td>
                  </tr>
                   <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:25px; font-weight:bold; color:#FFF; line-height:32px;" mc:edit="sm-49"><multiline>Fecha: 2/2/2020</multiline></td>
                  </tr>
                  <tr>
                    <td height="10" align="left" valign="top" style="font-size:10px; line-height:10px;">&nbsp;</td>
                  </tr>
                
                  <tr>
                    <td align="left" valign="top">&nbsp;</td>
                  </tr>
                   <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:24px; font-weight:bold; color:#FFF; line-height:32px;" mc:edit="sm-51"><multiline><b style=" font-size:36px; color:#FFF;">124.00 CLP</b> <b ><span style=" font-size:20px;">monto Total.</span></b></multiline></td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:24px; font-weight:bold; color:#FFF; line-height:32px;" mc:edit="sm-51"><multiline><b style=" font-size:36px; color:yellow;">40.00 CLP</b> <b ><span style=" font-size:20px;">(30%) Requerido.</span></b></multiline></td>
                  </tr>
                 
                  <tr>
                    <td height="20" align="left" valign="top" style=" font-size:20px; line-height:20px;">&nbsp;</td>
                  </tr>
                 
                  <tr>
                    <td height="40" align="left" valign="top">&nbsp;</td>
                  </tr>
                </table></td>
              </tr>
              
            </table></td>
              </tr>
            </table></td>
            </tr></table></td>
      </tr>
    </table>
 
    
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" valign="top"><table width="750" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
          <tr>
            <td align="center" valign="top" bgcolor="#ffc107" style="-moz-border-radius: 0px 0px 20px 20px; border-radius: 0px 0px 20px 20px;"><table width="590" border="0" align="center" cellpadding="0" cellspacing="0" class="two-left-inner">
              <tr>
                <td height="25" align="left" valign="top" style="font-size:25px; line-height:25px;">&nbsp;</td>
              </tr>
              <tr>
                <td align="center" valign="top" style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; font-weight:bold; color:#FFF;" mc:edit="sm-143"><multiline>copyright &copy; 2019 tuw3bsite.com </multiline> <unsubscribe> </unsubscribe></td>
              </tr>
              <tr>
                 <td height="25" align="left" valign="top" style="font-size:25px; line-height:25px;">&nbsp;</td>
              </tr>
            </table></td>
          </tr>
        </table></td>
      </tr>
    </table>
       
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" valign="top"><table width="750" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
          <tr>
            <td height="80" align="center" valign="top" style="font-size:80px; line-height:80px;">&nbsp;</td>
          </tr>
        </table></td>
      </tr>
    </table>

    </td>
  </tr>
</body>
</html>

    `
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}