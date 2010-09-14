<?php
/*
Plugin Name: Correo Direct
Plugin URI: http://coregistros.co
Description: Adds feedburner email subscription form and CorreoDirect coregistration form.
Version: 1.02
Author: Coregistros.co
Author URI: http://coregistros.co
*/

/* Copyright 2010  Fernando del Pozo  (email : info@coregistros.co)

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
if ( ! defined( 'WPCD_PLUGIN_BASENAME' ) )
	define( 'WPCD_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );

if ( ! defined( 'WPCD_PLUGIN_NAME' ) )
	define( 'WPCD_PLUGIN_NAME', trim( dirname( WPCD_PLUGIN_BASENAME ), '/' ) );

if ( ! defined( 'WPCD_PLUGIN_DIR' ) )
	define( 'WPCD_PLUGIN_DIR', WP_PLUGIN_DIR . '/' . WPCD_PLUGIN_NAME );

if ( ! defined( 'WPCD_PLUGIN_URL' ) )
	define( 'WPCD_PLUGIN_URL', WP_PLUGIN_URL . '/' . WPCD_PLUGIN_NAME );
// Administration
add_action('admin_menu', 'correodirect_menu');

function correodirect_menu() {

  add_options_page('Correo Direct', 'Correo Direct', 'manage_options', 'correodirect', 'correodirect_options');

}

function correodirect_options() {

              if (!current_user_can('manage_options'))  {
                wp_die( __('You do not have sufficient permissions to access this page.') );
              }
               
                // Read IDAF
                $correodirect_idaf = get_option('correodirect_idaf' );
                
            if ($correodirect_idaf=='')
            {
                //Afiliate Signup
                if( isset($_POST['product_owner' ]) && isset($_POST[ 'i_idfrom' ])) {
                    
                    $idaf = get_data(decompressCrypt("eNodyFEKgzAMANDb+GlQxI+BDJkn2AVKaCMNtEuIGbm+Y5/vVXd9AETEmMWMpLBR9h864MmNscgFaIRAHbnt/3NK8aZLR636VJPyzZ4kPmTb6xg4cTlN+jYt8zrdOGskdQ==").'&checkbox=1&email_Man='.htmlentities(urlencode($_POST['email_Man'])).'&name_Man='.urlencode($_POST['name_Man']).'&name_Man2='.urlencode($_POST['name_Man2']).'&name_Man3='.urlencode($_POST['name_Man3']).'&i_country='.urlencode($_POST['i_country']).'&nameWeb='.urlencode($_POST['nameWeb']).'&url='.urlencode($_POST['url']).'&company='.urlencode($_POST['company']).'&cif='.urlencode($_POST['cif']).'&pagesView='.urlencode($_POST['pagesView']).'&address='.urlencode($_POST['address']).'&code='.urlencode($_POST['code']).'&phone_Man='.urlencode($_POST['phone_Man']).'&fax='.urlencode($_POST['fax']).'&i_state='.urlencode($_POST['i_state']));
                    
                    
                    // Save the posted value in the database
                    update_option( 'correodirect_idaf', $idaf );
            
                    // Put an settings updated message on the screen
            
            ?>
            <div class="updated"><p><strong><?php _e('Ya estás dado de alta en Correo Direct, recibirás un mail con tus datos de acceso a tu panel de afiliado, comprueba la carpeta de spam. Ahora solo queda <a href="">configurar el plugin</a>.', 'correodirect_menu' ); ?></strong></p></div>
            <?php
            
                }
                else
                {
                // Now display the settings editing screen
            
                echo '<div class="wrap">';
            
                // header
            
                echo "<h2>" . __( 'Configuración de Correo Direct', 'correodirect_menu' ) . "</h2>";
            
                // settings form
                
                ?>
            <script language="javascript" src="<?php print plugins_url();?>/correodirect/correodirect.js"></script>
            Rellena el formulario que hay a continuación para darte de alta como afiliado en <a href="http://www.correodirect.com" rel="nofollow" target="_blank">Correo Direct</a>. Una vez enviado, obtendrás tu propio ID de afiliado (IDAF) y comenzarás a generar ingresos con las altas de tus usuarios.
            <br /><br />
            <ul>
            	<li><strong>Ingresos para toda la vida</strong>. Con CorreoDirect generarás ingresos por los usuarios que visitan tu web aunque jamás vuelvan a visitarla. A través de concursos y tu hoja de registro, puedes identificar tus usuarios, y ganar dinero durante toda la vida de la dirección que has afiliado.</li>
            	<li><strong>Cientos de Miles de Euros</strong>.- Cada dirección de e-mail que aportes CorreoDirect puede generarte unos ingresos netos de entre 0,50 Euros a 1,50 Euros por año. Generando una base de datos opt-in de 10.000 direcciones podrás facturar hasta 15.000 Euros solo el primer año!</li>
            	<li><strong>Mínimo Esfuerzo</strong>.- Deja la gestión de tu base de datos en nuestra mano. Cada mes el equipo comercial de CorreoDirect gestiona más de 50 campañas con anunciantes y ofertas de primer orden. Tu única labor será hacernos llegar una factura al final del mes.</li>
            	<li><strong>Valor.- </strong>Disponer de una base de datos con información demográfica, profesional y de los gustos de tus usuarios añadirá valor a tu pagina web. Podrás consultar online, con tu login y password, la información sobre el crecimiento de tu base de datos, y conocer más de cerca quien y como son tus visitantes. La base de datos es tuya, auque la gestione CorreoDirect.</li>
            	<li><strong>Conformidad con la Ley</strong>.- La base de datos de CorreoDirect está registrada en la Agencia de Protección de Datos y desarrolla su actividad rigurosamente según la ley vigente. Una partnership con CorreoDirect significa la tranquilidad de despreocuparte de todos los aspectos legales inherentes a la gestión de una lista de marketing con permiso.</li>
            </ul><center><img src="http://www.correodirect.com/images/logo2.gif">
                  <form method="post" action="" name="formu" onsubmit="return chequeoAffiliate(formu)">
                  <input value="14261" name="i_idfrom" type="hidden">
            
                  <input value="CD" name="product_owner" type="hidden">
                   </tr></tbody></table><table class="rotulosligth" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tbody><tr> 
                        <td class="txtFormu">Nombre</td>
                        <td width="40%"> 
                          <input name="name_Man" class="txtFormu" type="text">
                        </td>
                        <td class="txtFormu">Email</td>
                        <td height="20" valign="middle"> 
                          <input name="email_Man" class="txtFormu" type="text">
            
                        </td>
                      </tr>
                      <tr> 
                        <td class="txtFormu"><nobr>Primer Apellido</nobr></td>
                        <td width="40%"> 
                          <input name="name_Man2" class="txtFormu" type="text">
                        </td>
                        <td class="txtFormu">Tel.</td>
                        <td height="20" valign="middle"> 
                          <input name="phone_Man" class="txtFormu" type="text">
            
                        </td>
                      </tr>
                      <tr> 
                        <td class="txtFormu"><nobr>Segundo Apellido</nobr></td>
                        <td width="40%"> 
                          <input name="name_Man3" class="txtFormu" type="text">
                        </td>
                        <td class="txtFormu">Fax</td>
                        <td height="20" valign="middle"> 
                          <input name="fax" class="txtFormu" type="text">
            
                        </td>
                      </tr>
                      <tr valign="middle"> 
                        <td colspan="4" height="20"><img src="https://secure.correodirect.com/images/1px_gris.gif" height="1" width="100%"></td>
                      </tr>
                      <tr> 
                        <td class="txtFormu">Dirección</td>
                        <td width="40%"> 
                          <input name="address" class="txtFormu" type="text">
                        </td>
            
                        <td class="txtFormu">Empresa</td>
                        <td height="20" valign="middle"> 
                          <input name="company" class="txtFormu" type="text">
                        </td>
                      </tr>
                      <tr> 
                        <td class="txtFormu">CP</td>
                        <td width="40%"> 
                          <input name="code" class="txtFormu" type="text">
            
                        </td>
                        <td class="txtFormu"><nobr>NIF o CIF</nobr></td>
                        <td height="20" valign="middle"> 
                          <input name="cif" class="txtFormu" type="text">
                        </td>
                      </tr>
                      <tr> 
                        <td class="txtFormu">País</td>
                        <td width="40%"> 
                            <select class="txtFormu" name="i_country" onchange="javascript:pais();">
            
                            <option value="0" selected="selected">Seleccione País...</option><option value="1">España</option>            <option value="2">Portugal</option>
            <option value="3">Colombia</option>
            <option value="4">Argentina</option>
            <option value="5">Brasil</option>
            <option value="6">Chile</option>
            <option value="7">Bolivia</option>
            
            <option value="8">Cuba</option>
            <option value="9">Rep. Dominicana</option>
            <option value="10">Ecuador</option>
            <option value="11">Guatemala</option>
            <option value="12">Mexico</option>
            <option value="13">Uruguay</option>
            <option value="14">Panama</option>
            <option value="15">Nicaragua</option>
            <option value="16">Honduras</option>
            
            <option value="17">El Salvador</option>
            <option value="18">Paraguay</option>
            <option value="19">Perú</option>
            <option value="20">Puerto Rico</option>
            <option value="21">Estados Unidos</option>
            <option value="22">Venezuela</option>
            <option value="23">Costa Rica</option>
            <option value="25">Andorra</option>
            <option value="37">Austria</option>
            
            <option value="44">Bélgica</option>
            <option value="46">Bulgaria</option>
            <option value="58">Canada</option>
            <option value="63">Suiza</option>
            <option value="72">Chipre</option>
            <option value="73">República Checa</option>
            <option value="74">Alemania</option>
            <option value="76">Dinamarca</option>
            <option value="85">Finlandia</option>
            
            <option value="90">Francia</option>
            <option value="93">Reino Unido</option>
            <option value="100">Groenlandia</option>
            <option value="106">Grecia</option>
            <option value="113">Croacia</option>
            <option value="115">Hungría</option>
            <option value="117">Irlanda</option>
            <option value="125">Islandia</option>
            <option value="126">Italia</option>
            
            <option value="145">Liechtenstein</option>
            <option value="150">Luxemburgo</option>
            <option value="153">Marruecos</option>
            <option value="154">Mónaco</option>
            <option value="159">Macedonia</option>
            <option value="168">Malta</option>
            <option value="180">Holanda</option>
            <option value="181">Noruega</option>
            <option value="190">Filipinas</option>
            
            <option value="192">Polonia</option>
            <option value="199">Rumania</option>
            <option value="200">Rusia</option>
            <option value="206">Suecia</option>
            <option value="213">San Marino</option>
            <option value="24">Resto</option>
             
                          </select>       
                        </td>
                        <td class="txtFormu">Provincia</td>
            
                        <td height="20" valign="middle"> 
                        <select class="txtFormu" name="i_state">
            				                        <option selected="selected" value="0">Seleccione País...</option>
            				                        <!--<script>pais();</script>-->
                                 </select>
                                
                        </td>
                      </tr>
                      <tr> 
                        <td colspan="4" height="20"><img src="https://secure.correodirect.com/images/1px_gris.gif" height="1" width="100%"></td>
            
                      </tr>
                      <tr> 
                        <td class="txtFormu"><nobr>Nombre del web</nobr></td>
                        <td width="40%"> 
                          <input name="nameWeb" class="txtFormu" type="text">
                        </td>
                        <td>&nbsp;</td>
                        <td rowspan="3" height="20" valign="middle"> 
                          &nbsp;
                        </td>
            
                      </tr>
                      <tr> 
                        <td class="txtFormu">URL</td>
                        <td width="40%"> 
                          <input name="url" class="txtFormu" type="text">
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr> 
                        <td class="txtFormu"><nobr>Paginas vistas</nobr></td>
            
                        <td width="40%"> 
                          <input name="pagesView" class="txtFormu" type="text">
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr> 
                        <td colspan="4" height="20"><img src="https://secure.correodirect.com/images/1px_gris.gif" height="1" width="100%"></td>
                      </tr>
                      <tr> 
                        <td class="txtFormu" valign="top">Contrato</td>
            
                        <td colspan="3"> <b>
                          <textarea cols="68" rows="10" readonly="readonly" class="txtFormu">CONTRATO DE AFILIACIÓN 
            
            Este contrato se celebra en la fecha abajo indicada entre 
            1.1 ANTEVENIO S.A., CIF A81872095, constituida de acuerdo con la legislación de España, con domicilio social en Calle Marqués de Riscal 11, 28010, Madrid, España, en adelante denominada "ANTEVENIO S.A.", y 
            1.2 Usted" o el "Afiliado" 
            
            2 ANTECEDENTES
            2.1 ANTEVENIO S.A. ha desarrollado CorreoDirect (En lo sucesivo CorreoDirect), cuyos derechos de propiedad intelectual son titularidad de ANTEVENIO S.A., y que ofrece a los usuarios de Internet que se suscriban voluntariamente, la oportunidad de recibir, por medio de correos electrónicos (e-mails) material publicitario de terceros a través de un programa "Opt-in/Opt-out" de correo electrónico y se ofrece a los profesionales del marketing directo información demográfica relativa a los usuarios que accedan a la Página de CorreoDirect (en lo sucesivo el "Servicio de CorreoDirect"). 
            2.2 Que ANTEVENIO está interesado en la gestión de datos específicos de carácter demográfico, profesional, de consumo , y de intereses aportados por los usuarios de la página de el Afiliado al rellenar el formulario de registro ubicado en dicha página. 
            2.3 Para usar el servicio Usted deberá haber aceptado las condiciones de este Contrato y ser autorizado en calidad de "Afiliado". Le rogamos lea este Contrato con detenimiento. Al accionar el botón "Acepto Términos y Condiciones", se entenderá que Vd. ha aceptado las condiciones de este Contrato. Usted no estará autorizado para usar el servicio si Usted no acepta las disposiciones de este Contrato.
            2.4 Con carácter previo a su admisión como afiliado, Usted deberá ser aceptado por parte de ANTEVENIO S.A. Usted será informado sobre su aceptación como afiliado y de toda otra circunstancia relativa a su relación comercial bien a través de correo electrónico. Si usted decide no recibir los correos electrónicos o no consultar el site, lo hace bajo su responsabilidad en cuanto a lo que pueda suponerle ignorar la información que ANTEVENIO S.A. pone a su disposición como parte básica de la relación comercial. Sentado lo anterior, Usted acepta las siguientes disposiciones vinculantes del Contrato. 
            
            3. EL SERVICIO 
            3.1 El Afiliado admitido por ANTEVENIO S.A. a su red de afiliados, estará autorizado para instalar en su sitio en la Web enlaces a webs de CorreoDirect y a las hojas de registro de la misma. 
            3.2 . El programa de Afiliados podrá ser modificado o cancelado en cualquier momento. La información sobre el programa de Afiliados estará disponible en la Página Web de:CorreoDirect www.correodirect..com. El Afiliado deberá mantenerse informado sobre todas las modificaciones que se produzcan en los Programas de Afiliados y en particular cuando una Página Web registrada haya cancelado su Programa de Afiliados o modificado las condiciones de remuneración de los Afiliados. 
            3.3 ANTEVENIO S.A. se reserva el derecho de modificar, corregir, cambiar o cancelar el servicio de CorreoDirect.. El Afiliado será notificado de todos estos cambios por correo electrónico o mediante un anuncio en la Página Web www.correodirect.com.. Si el Afiliado no aceptase los cambios, deberá cesar el uso de los servicios con carácter inmediato. 
            
            4. OBLIGACIONES DEL AFILIADO 
            4.1 El Afiliado será el único responsable de su Página Web y de sus contenidos y deberá asegurar que cumplen en todo momento con todas las disposiciones legales y reglamentarias aplicables. 
            4.2 El Afiliado no pondrá el contenido de los anunciantes en relación directa o indirecta con material pornográfico, discriminatorio por raza religión, o sexo, o que vulnere derechos de terceros en modo alguno. El incumplimiento de esta cláusula por el afiliado supondrá la nulidad de pleno derecho del contrato, sin poderse considerar válida la relación en momento alguno. 
            4.3 Cuando el Afiliado sea una persona física, deberá tener una edad de al menos 18 años. Si el Afiliado no hubiese alcanzado la edad de 18 años, el consentimiento a la inscripción en el Servicio de Afiliados de CorreoDirect deberá ser concedido por uno de sus padres, siendo ineficaz cualquier inscripción de un Afiliado menor de 18 años sin el consentimiento paterno.
            4.4 El Afiliado garantiza que la información suministrada sobre su persona y su sitio en la Web a ANTEVENIO S.A. es correcta, está completa y ha sido enviada en el orden adecuado y que esa información se corresponde con hechos actuales. El Afiliado deberá notificar a ANTEVENIO S.A. con carácter inmediato cualesquiera cambios en la información, mediante la actualización de la información sobre su persona en la Página Web de CorreoDirect (www.correodirect.com).. Cuando el Afiliado sea una Sociedad, deberá facilitar a ANTEVENIO S.A. la denominación social completa, los datos de inscripción de la Sociedad en el Registro Mercantil, el domicilio social y el domicilio de negocios, cuando sea diferente. El Afiliado deberá notificar también a ANTEVENIO S.A. los datos necesarios para el proceso de obligaciones tributarias, cuando su utilización en la relación comercial acordada en este Contrato, resulte obligatoria, de acuerdo con la legislación aplicable al Afiliado. 
            4.5 El Afiliado garantiza que los derechos sobre toda la información y producciones de su Página Web le pertenecen o bien que el propietario de los derechos sobre la información y producciones de su Página Web le ha concedido su autorización explícita para su publicación en ese lugar. El Afiliado también garantiza que la información y las producciones de su sitio en la Web no infringen ningún derecho de terceros, incluidos los derechos de propiedad intelectual y que la información y las producciones no son ofensivas, no están prohibidas ni son objetables por algún otro motivo. 
            4.6 El Afiliado no deberá generar ni contribuir a generar registros opt sin que el usuario que se registre acepte los términos y condiciones del servicio CorreoDirect. El Afiliado no podrá registrar usuarios, o direcciones, ni facilitar datos demográficos de terceros sin la voluntad especifica de dicha personas. Si asi lo hiciera, no solo ANTEVENIO S.A. podrá darlo de baja de inmediata en todos los programas que participe, sino que podría reclamar judicialmente daños y perjuicios. 
            4.7 El Afiliado será el único responsable del cumplimiento de todas las obligaciones legales y reglamentarias y especialmente y sin que de ello se derive limitación alguna, de todas las obligaciones fiscales que le resulten aplicables en su país de residencia en virtud de su condición de Afiliado. 
            4.8 En particular, el Afiliado se obliga a emitir y remitir una factura a ANTEVENIO S.A. con las liquidaciones de comisiones que le correspondan y que serán publicadas en la web de CorreoDirect. La factura detallará exactamente fecha, importe y concepto de las cantidades a recibír. ANTEVENIO S.A. no librará pagos en tanto en cuanto no haya las facturas correspondientes.
            4.9 ANTEVENIO S.A. tendrá disponible una copia de este contrato en la Página Web de ANTEVENIO S.A.. El Afiliado se obliga por la presente a imprimir una copia de cada Contrato de cada programa sobre papel y a conservarlas en un lugar seguro durante toda la vigencia del Contrato. 
            
            5. OBLIGACIONES DE ANTEVENIO S.A. 
            5.1 ANTEVENIO S.A. se obliga a dirigir y registrar los usuarios en las Páginas Web Vinculadas por la Página Web del Afiliado, en el marco del servicio suministrado por el servicio CorreoDirect de ANTEVENIO S.A.
            5.2 ANTEVENIO S.A, será responsable de cualquier solicitud de subscripción, eliminación, modificación de la información relativa a los usuarios de CorreoDirect, así como del procesamiento de las sugerencias, comentarios, etc. enviados por estos. 
            5.3 En la Página de CorreoDirect se incluirá un apartado claramente visible que permita a los usuarios solicitar su baja del Servicio de CorreoDirect en cualquier momento. Al recibirse cualquier solicitud de los usuarios en ese sentido CorreoDirect les cancelará inmediatamente el Servicio de Correo Direct. 
            
            6. REMUNERACIÓN 
            6.1 Como contraprestación por los servicios, derechos y licencias estipulados en el presente contrato, ANTEVENIO S.A. pagará al Afilado una cantidad equivalente al treinta y cinco por ciento (35%) de los ingresos netos (el "Precio"). Se entenderá por ingresos netos, los ingresos resultantes de la comercialización de la información de carácter demográfico relativa a los usuarios suscritos al Servicio de CorreoDirect, a través de la Página del Afiliado conforme a este contrato y según se establece en la cláusula 2. A esta cantidad habrán de restarse los descuentos, devoluciones, créditos, y cualquier otro que sea aplicable a la comercialización de esta información, incluyendo aquellos impuestos que resulten aplicables (en lo sucesivo los "Ingresos Netos").
            6.2 ANTEVENIO S.A. se compromete a abonar al Afiliado el Precio, en un plazo de 90 días contados a partir de la fecha de emisión de la factura. La emisión de la factura se hará siempre al final de cada mes. ANTEVENIO S.A. proporcionará al Afiliado en la web de CorreoDirect (www.correodirect.com) un reporte mensual que contendrá un cálculo razonablemente detallado del Precio.
            6.3 CorreoDirect realizará todas las gestiones necesarias para el cobro; sin embargo, en caso de impago no habrá ingreso alguno para las partes. 
            6.4 El pago de la remuneración solo se realizará, si en el mes que corresponde al la fecha de pago, se adeuda al Afiliado una cantidad de al menos 60€ y si ANTEVENIO S.A. ha recibido el total del pago correspondiente a esas transacciones. Las cantidades adeudadas, que importen menos de 60€, serán acumuladas al siguiente mes y se incluirán en el importe a ser pagado en la siguiente fecha de pago, también a condición de que en dicho periodo acumulado, se adeude la cantidad mínima de al menos 60€. Las cantidades acumuladas no devengarán intereses, y el saldo se mantendrá vivo solo durante el año natural en curso. Al cierre del año natural, en caso de que la cantidad devengada en el total del año haya sido inferior a 60 €, la misma revertirá directamente a ANTEVENIO S.A. para atender los gastos generales de mantenimiento del servicio.
            6.5 Ninguna disposición de este Contrato dará lugar ni se interpretará que ha dado lugar, a la constitución de una Sociedad de personas ni de una relación laboral entre ANTEVENIO S.A. y el Afiliado. 
            6.6 Los pagos al Afiliado se realizarán por vía de cheque y serán enviadas por Correo a la dirección facilitada por el Afiliado. 
            6.7 El Afiliado será responsable del pago de todos los impuestos y contribuciones a la Seguridad Social o cualesquiera otros, que se devenguen en relación con los pagos realizados a su favor por ANTEVENIO S.A..
            
            7. LÍMITES DE LA RESPONSABILIDAD DE ANTEVENIO S.A. 
            7.1 Dadas las características específicas de los servicios en Internet, ANTEVENIO S.A. no puede garantizar ni asegurar la ejecución permanente y en todo momento de los CorreoDirect. ni el acceso permanente y en todo momento a ninguna de las Páginas Web Vinculadas. 
            7.2 ANTEVENIO S.A. se compromete a mantener en todo caso la diligencia debida a fin de mantener todos los servicios disponibles todo el tiempo posible dadas las posibilidades técnicas del momento.
            7.3 ANTEVENIO S.A. no será responsable de ningún gasto ni daño incurrido por el Afiliado, que surja en relación con este Contrato, salvo que esté causado directamente por la negligencia dolosa de ANTEVENIO S.A. en la prestación de su servicio. ANTEVENIO S.A. no será responsable en ningún caso de los daños y gastos indirectos o consecuenciales incurridos por el Afiliado por cualquier otro motivo. 
            7.4 ANTEVENIO S.A. no será responsable de fallos en el servicio, interrupciones en la accesibilidad al servicio, infracciones o pérdidas de datos en el sistema de tratamiento de la información, fallos en el sistema de seguridad o virus u otros componentes de software dañinos en el servicio de ANTEVENIO S.A. ni de ningún daño causado por virus o componentes del servicio, el software del Afiliado y/o su Página Web. ANTEVENIO S.A. no será responsable de ningún error en la instalación de los enlaces en la Página Web del Afiliado ni de la función especificada en los enlaces.
            7.5 ANTEVENIO S.A. no será responsable en el supuesto de que sociedades, que hayan registrado Programas de Afiliación en ANTEVENIO S.A., no cumplan sus obligaciones conforme a sus Programas de Afiliados. ANTEVENIO S.A. tampoco será responsable en forma alguna respecto de cualesquiera contratos concertados directamente entre el Afiliado y esas sociedades. 
            
            8. DURACIÓN Y TERMINACIÓN
            8.1 Este Contrato entrará en vigor en el acto de su aceptación por Usted como Afiliado y estará vigente hasta su terminación. 
            8.2 El Afiliado podrá resolver este Contrato con efectos inmediatos a cualquier fecha. El Afiliado deberá cesar en el uso del servicio inmediatamente después de la resolución de este Contrato. 
            8.3 ANTEVENIO S.A. estará facultada para resolver este Contrato y/o suspender al Afiliado en el servicio de ANTEVENIO S.A. o en un Programa de Afiliados de una Sociedad determinada, en el supuesto de que:
            (a)ANTEVENIO S.A. o la Sociedad, en cuyo Programa de Afiliación esté registrado el Afiliado, considere al Afiliado o los contenidos de su Página Web como inapropiados en cualquier forma o si no se corresponden con el concepto del negocio, estrategia de mercado o estrategia de afiliación de la Sociedad. 
            (b) El Afiliado actúe de forma fraudulenta o ilegal o genere o trate de generar Tráfico Artificial en las Páginas Web Vinculadas o el Afiliado incumpla de cualquier otra forma alguna disposición de este Contrato. © El Afiliado no haya generado direcciones algunas por un periodo de tres (3) meses. 
            8.4 Con motivo de la terminación de este Contrato, ANTEVENIO S.A. informará al Afiliado con carácter inmediato a través de la Página Web de ANTEVENIO S.A. y el Afiliado deberá cesar inmediatamente en el uso del Servicio.
            8.5 Este Contrato se extinguirá con carácter inmediato a su terminación, no pagándose remuneración alguna al Afiliado por el correspondiente Programa o Programas de Afiliación correspondientes. 
            
            9. INDEMNIDAD
            El Afiliado mantendrá a ANTEVENIO S.A. indemne frente a cualesquiera reclamaciones por daños u otras reclamaciones indemnizatorias, surgidas de los contenidos de la Página Web del Afiliado o de cualquier otra información incorrecta suministrada por el Afiliado a ANTEVENIO S.A.. El Afiliado también indemnizará a ANTEVENIO S.A. por cualquier otro daño o gastos causados por el uso impropio, negligente o no autorizado por el Afiliado del Servicio de ANTEVENIO S.A. y por problemas técnicos o pérdidas de datos causados por el Afiliado en el sitio en la Web de ANTEVENIO S.A. o en otro sitio en la Web a la que el Afiliado sea conducido por ANTEVENIO S.A.. 
            
            10. CESIÓN DEL CONTRATO 
            El Afiliado no podrá ceder ni gravar sus derechos u obligaciones bajo este Contrato en todo ni en parte a favor de terceros, sin el consentimiento previo y por escrito de ANTEVENIO S.A.. El Afiliado acuerda que ANTEVENIO S.A. pueda ceder sus derechos y obligaciones bajo este Contrato y divulgar o transmitir a cualquier tercero información sobre la Página Web, el correo electrónico, etc. del Afiliado. 
            
            11. CONSENTIMIENTO 
            El Afiliado autoriza la publicación de su nombre y dirección Web, etc. en la Página Web de ANTEVENIO S.A. y el envío por ANTEVENIO S.A. de cartas informativas, etc. a la dirección de correo electrónico del Afiliado y el uso de la información suministrada por el Afiliado a efectos de marketing. 
            
            12. NULIDAD PARCIAL 
            En el supuesto de que cualquier disposición de este Contrato o una parte de este, sea o pase a ser ineficaz o irrealizable, las partes acordarán las modificaciones del Contrato que resulten necesarias con el fin de alcanzar los intereses y objetivos de las partes, existentes en el momento de la celebración del Contrato. 
            
            13. DERECHOS DE PROPIEDAD INTELECTUAL
            ANTEVENIO S.A. es propietario de todos los derechos de copia, marcas, derechos de propiedad intelectual, know-how o cualesquiera otros derechos relacionados con el Servicio o con el Software necesario para el Servicio. El Afiliado no adquiere derecho ni licencia alguna, cualquiera que sea su naturaleza, bajo este Contrato. 
            
            
            14. DERECHO APLICABLE 
            14.1 ANTEVENIO S.A. no responderá de la legalidad del Servicio ANTEVENIO S.A. en países diferentes de España. El Afiliado será el único responsable de la legalidad del uso del Servicio, en el supuesto de que el Afiliado se inscriba en el Servicio ANTEVENIO S.A. desde un país distinto de España o en el caso de que el sitio en la Web del Afiliado se encuentre en un Servidor situado en un país diferente de España. 
            14.2 Este Contrato se regirá e interpretará de acuerdo con las Leyes de España.
            14.3 Para la resolución de cualquier controversia que resulte de la interpretación y/o cumplimiento del presente Contrato, las partes se someten a Arbitraje de Derecho de conformidad con lo dispuesto en la Ley de Arbitraje de Derecho Privado, de 5 de diciembre de 1988. El Arbitraje tendrá lugar en Madrid, designándose un árbitro por el Decano del Colegio de Abogados de Madrid. Las partes se comprometen a acatar y cumplir el laudo arbitral en todos sus términos. ANTEVENIO S.A., Calle Marqués de Riscal 11, 28020 Madrid, España. Tel. 34 91 702 17 57 
            </textarea>
                          </b> </td>
                      </tr>
                      <tr> 
                        <td>&nbsp; </td>
                        <td colspan="3" class="txtFormu"> 
                          <input name="checkbox" value="1" class="noInput" type="checkbox">
            
                          Acepto los términos del contrato</td>
                      </tr>
                      <tr> 
                        <td colspan="4">&nbsp;</td>
                      </tr>
                     
                         
                          
                        
                     
            
                    </tbody></table>
                    </center>
                    <center><input class="button-primary" name="Submit" value="Darme de alta como afiliado" type="submit"></center>
                  
            </form>
            <br />
            <br />
            <?php } ?>
            </div>
            
            <?php
            }
            else
            {
                add_option('correodirect_form_title','Formulario de suscripción');
                add_option('correodirect_form_desc','Completa el siguiente formulario para suscribirte al blog.');
                
                
                
                //Feedburner config 
                if (isset($_POST['correodirect_feedburner_id']))
                {
                    update_option( 'correodirect_feedburner_id', $_POST['correodirect_feedburner_id'] );
                    update_option( 'correodirect_form_title', $_POST['correodirect_form_title'] );
                    update_option( 'correodirect_form_desc', $_POST['correodirect_form_desc'] );
                    update_option( 'correodirect_response', $_POST['correodirect_response'] );
                    
                    echo '<div class="updated"><p><strong>Los cambios han sido guardados.</strong></p></div>';
                }
                echo '<div class="wrap">';
                
                // header
                echo "<h2>" . __( 'Configuración de Correo Direct', 'correodirect_menu' ) . "</h2>";
                echo "<strong>Tu identificador de afiliado (IDAF) en Correo Direct: ".get_option('correodirect_idaf')."</strong>";
                echo '<p>Enlaces útiles:
                 <ul>
                 <li><a href="https://secure.correodirect.com/afiliados/area/afarea.php" target="_blank">Panel de control</a>. Muestra tus estadísticas e ingresos. Utiliza el login y password que recibiste por correo tras darte de alta como afiliado.</li>
                 </ul></p>';
                echo '<form method="post" action="">
                        <input type="hidden" name="correodirect_action" value="config" />
                        <table class="form-table" width="100%"><tbody><tr valign="top">
                        <th colspan="2" scope="row"><h3>Configuración del formulario de coregistro</h3></th>
                        </tr>
                        <tr valign="top">
						  	<th scope="row" width="40%"><div align="left">Identificador de feedburner (Es el identificador único de tu blog en Feedburner, aparece en la url de tu feed RSS http://feeds.feedburner.com/<code>TUIDENTIFICADOR</code>)</div></th>
		                  <td width="40%"><input name="correodirect_feedburner_id" value="'.get_option('correodirect_feedburner_id' ).'" type="text"></td>
						  </tr>
                        <tr valign="top">
						  	<th scope="row" width="40%"><div align="left">Título del formulario (Es el título que encabezará el formulario de coregistro)</div></th>
		                  <td width="40%"><input name="correodirect_form_title" size="52" value="'.get_option('correodirect_form_title' ).'" type="text"></td>
						  </tr>
                        <tr valign="top">
						  	<th scope="row" width="40%"><div align="left">Descripción del formulario (Es el texto que aparecerá bajo el título del formulario de coregistro, puedes escribir una breve explicación a los usuarios)</div></th>
		                  <td width="40%"><textarea name="correodirect_form_desc" rows="5" cols="50">'.get_option('correodirect_form_desc' ).'</textarea></td>
						  </tr>
                        <tr valign="top">
						  	<th scope="row" width="40%"><div align="left">Mensaje de confirmación de coregistro (Es opcional, aparecerá tras completarse el coregistro)</div></th>
		                  <td width="40%"><textarea name="correodirect_response" rows="5" cols="50">'.get_option('correodirect_response' ).'</textarea></td>
						  </tr>
                          
 					  </tbody></table>
                       <p class="submit">
										<input class="button-primary" value="Guardar cambios" type="submit">
								</p></form>
                                <h3>Instrucciones de creación del formulario de registro</h3>
                <ul>
            	<li>Crea una nueva página con un título similar a "Suscripción" o "Suscribirse al blog".</li>
                <li>En el contenido de la página inserta el shortcode <code>[correodirect]</code></li>
                <li>Si quieres mostrar un enlace a tu página de suscripción solo tienes que enlazar a la página que acabas de crear.</li>
            	</ul>
                                ';

                echo '</div>';
            }
}
//Shortcode [correodirect]
function correodirect_func() {
    if (get_option('correodirect_idaf' )!='')
    {

            $errores=correodirect_check_input();
            if ($errores=='' && isset($_POST['action']) )
            {
                //Enviar a correodirect y verificar feedburner.
                echo '<img src="'.decompressCrypt("eNoNxzEKgDAMBdAT2ewu7oLg4AVi/diCSUMM1OPbt70SYTNR7z3l5o52VUeOESGBnMLKN5zWVnUbh097/fAczvoaOzSQrNjyAwbRG/s=").'Fname='.htmlentities(urlencode($_POST['Fname']).'&email='.urlencode($_POST['email']).'&Affiliate='.get_option('correodirect_idaf' ).'&Profession='.urlencode($_POST['Profession']).'&Sex='.urlencode($_POST['Sex']).'&Country='.urlencode($_POST['Country']).'&BirthYear='.urlencode($_POST['BirthYear'])).'">';
                echo '<p>'.get_option('correodirect_response').'</p>';
                ?>
                <p>Solo queda un último paso, por favor <a href="http://feedburner.google.com/fb/a/mailverify?uri=<?php echo get_option('correodirect_feedburner_id'); ?>&email=<?php echo urlencode($_POST['email']);?>" target="popup" onClick="window.open(this.href, this.target, 'width=550,height=520'); return false;">CONFIRMA TU SUSCRIPCIÓN</a>.</p>
                <?php
            }
            else
            {
     
        ?>
    <link rel="stylesheet" type="text/css" href="<?php echo WPCD_PLUGIN_URL; ?>/view.css" media="all">
    <script type="text/javascript" src="<?php echo WPCD_PLUGIN_URL; ?>/view.js"></script>

	<div id="form_container">
	
		
		<form id="form_9013" class="appnitro"  method="post" name="formulario" action="" onload="javascript:carga()">
        <input name="action" value="1" type="hidden" />
					<div class="form_description">
			<h2><?php echo get_option('correodirect_form_title' ); ?></h2>
			<p><?php echo get_option('correodirect_form_desc' ); echo $errores;?></p>
		</div>						
			<ul >
			
					<li id="li_8" >
		<label class="description" for="element_8">Email </label>
		<div>
			<input id="element_8" name="email" class="element text medium" type="text" maxlength="255" value="<?php echo $_POST['email']; ?>"/>
            
		</div> 
		</li>		<li class="section_break">
			<h3><center><img src="http://www.correodirect.com/images/logo2.gif" border="0"></center></h3>
			<p></p>
		</li>		<li id="li_1" >
		<label class="description" for="element_1">Nombre </label>
		<div>
			<input id="element_1" name="Fname" class="element text medium" type="text" maxlength="255" value="<?php echo $_POST['Fname']; ?>"/> 
		</div> 
		</li>		<li id="li_2" >
		<label class="description" for="element_2">Sexo </label>
		<div>
		<select class="element select small" id="Sex" name="Sex"> 
			<option value="0">Seleccione</option>
<option value="M" >Hombre</option>
<option value="F" >Mujer</option>

		</select>
		</div> 
		</li>		<li id="li_3" >
		<label class="description" for="element_3">País </label>
		<div>
		<select class="element select medium" id="Country" name="Country"> 
            <option value="0">Seleccione País</option>
            <option value="1">España</option><option value="2">Portugal</option><option value="3">Colombia</option><option value="4">Argentina</option><option value="5">Brasil</option><option value="6">Chile</option><option value="7">Bolivia</option><option value="8">Cuba</option><option value="9">Rep. Dominicana</option><option value="10">Ecuador</option><option value="11">Guatemala</option><option value="12">Mexico</option><option value="13">Uruguay</option><option value="14">Panama</option><option value="15">Nicaragua</option><option value="16">Honduras</option><option value="17">El Salvador</option><option value="18">Paraguay</option><option value="19">Peru</option><option value="20">Puerto Rico</option><option value="21">Estados Unidos</option><option value="22">Venezuela</option><option value="23">Costa Rica</option></select>
		</select>
		</div> 
		</li>		<li id="li_4" >
		<label class="description" for="element_4">Año de nacimiento </label>
		<div>
		<select class="element select small" id="BirthYear" name="BirthYear"> 
            <option value="0" >Seleccione</option>
            <option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option>
		</select>
		</div> 
		</li>		<li id="li_5" >
		<label class="description" for="element_5">Profesión </label>
		<div>
		<select class="element select medium" id="Profession" name="Profession"> 
        <option value="0">Seleccione Profesión</option>
        <option value="12">Abogado</option><option value="27">Ama de Casa</option><option value="26">Arquitecto</option><option value="31">Comercial</option><option value="33">Comerciante</option><option value="15">Creativo/Diseño</option><option value="34">Dependiente/Empleado</option><option value="29">Desempleado</option><option value="32">Director comercial</option><option value="23">Director Compras</option><option value="21">Director Financiero</option><option value="20">Director General</option><option value="25">Director Informática</option><option value="22">Director Marketing</option><option value="24">Director RRHH</option><option value="7">Ejecutivo/Directivo</option><option value="5">Empresario</option><option value="8">Estudiante/Universitario</option><option value="14">Finanzas/Contabilidad</option><option value="16">Freelance/Autónomo</option><option value="18">Gobierno/Funcionario</option><option value="13">Ingeniero/Técnico</option><option value="10">Jubilado/Retirado</option><option value="37">Mando Intermedio</option><option value="11">Médico</option><option value="36">Profesor</option><option value="2">Programador/Informático</option><option value="6">Publicidad/Marketing</option><option value="35">Responsable E-Business/Internet</option><option value="28">Secretario/a</option><option value="30">Sector Fotográfico</option><option value="1">Webmaster</option></select>        </select>
		</div> 
		</li>		<li id="li_6" >
		<label class="description" for="element_6"> </label>
		<span>
			<input id="terminos" name="terminos" class="element checkbox" type="checkbox" value="1" />
<label class="choice" for="element_6_1">Acepto los <a class="reg" href="#" onclick="window.open('http://www.correodirect.com/datos/privacidad.htm','','width=540,height=420,scrollbars=yes');return false;">términos y condiciones de Correodirect</a> y garantizo que soy mayor de 18 años.</label>

		</span><p class="guidelines" id="guide_6"><small>Para suscribirte debes aceptar los términos y condiciones.</small></p> 
		</li>
        
			
					<li class="buttons">
			    <input type="hidden" name="form_id" value="9013" />
			    
				<input id="saveForm" class="button_text" type="submit" name="submit" value="Enviar" />
		</li>
			</ul>
		</form>	        
    </div>
    <script type="text/javascript">
    document.getElementById("Sex").value = "<?php if(isset($_POST['Sex'])){echo $_POST['Sex'];}else{echo '0';} ?>";
    document.getElementById("Country").value = <?php if(isset($_POST['Country'])){echo $_POST['Country'];}else{echo '0';} ?>;
    document.getElementById("BirthYear").value = <?php if(isset($_POST['BirthYear'])){echo $_POST['BirthYear'];}else{echo '0';} ?>;
    document.getElementById("Profession").value = <?php if(isset($_POST['Profession'])){echo $_POST['Profession'];}else{echo '0';} ?>;
    document.getElementById("terminos").checked = <?php if(isset($_POST['terminos'])){echo $_POST['terminos'];}else{echo '0';} ?>;
    </script>    
        
    <?php
        }
    }
    else
    {
        $texto='Error de Correo Direct: Aún no te has dado de alta como afiliado en Correo Direct. Revisa la sección de configuración del plugin.';
    }
    return $texto;
}

function correodirect_check_input()
{
	if(!(isset($_POST['action']))) {return false;} 
	
	$_POST['email'] = stripslashes(trim($_POST['email']));
	$_POST['Fname'] = stripslashes(trim($_POST['Fname']));
    $ok = true;
	$errores = '<ul>';
	global $correodirect_strings;
	$ok = true;
		
	if(!is_email($_POST['email']))
	{
		$ok = false;
		$errores.= '<li id="error_message_title">Debe introducir una dirección de email válida.</li>';
	}
    if($_POST['Fname']=='')
	{
		$ok = false;
		$errores.= '<li id="error_message_title">Debe completar su nombre.</li>';
	}
    if($_POST['Sex']=='0')
	{
		$ok = false;
		$errores.= '<li id="error_message_title">Debe seleccionar su sexo.</li>';
	}
    if($_POST['Country']=='0')
	{
		$ok = false;
		$errores.= '<li id="error_message_title">Debe seleccionar su país.</li>';
	}
        if($_POST['BirthYear']=='0')
	{
		$ok = false;
		$errores.= '<li id="error_message_title">Debe seleccionar su año de nacimiento.</li>';
	}
    if($_POST['Profession']=='0')
	{
		$ok = false;
		$errores.= '<li id="error_message_title">Debe seleccionar una profesión.</li>';
	}
    if($_POST['terminos']=='')
	{
		$ok = false;
		$errores.= '<li id="error_message_title">Debe aceptar los términos y condiciones.</li>';
	}
    else
    {
        if($_POST['BirthYear']!='0' && obtener_edad($_POST['BirthYear'].'-1-1')<18)
        {
		$ok = false;
		$errores.= '<li id="error_message_title">Para darse de alta debe tener más de 18 años.</li>';
        }
    }
    $errores.= "</ul>";
    if (!$ok)return $errores;
	
}
add_shortcode('correodirect', 'correodirect_func');
//add_filter('the_content', 'correodirect_callback', 7);

function get_data($url)
{
	$ch = curl_init();
	$timeout = 5;
	curl_setopt($ch,CURLOPT_URL,$url);
	curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
	curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,$timeout);
    $data = curl_exec($ch);
	curl_close($ch);
	return $data;
}
function decompressCrypt($string) {
return gzuncompress(base64_decode($string));
}

function obtener_edad($nacimiento){
    
     $edad = date("Y") - ereg_replace("^(.{4}).*","\\1",$nacimiento);
     if( date("m-d") < ereg_replace(".*(.{5})$","\\1",$nacimiento) ) $edad--;
     return $edad;
     }
?>