<!--

function MM_openBrWindow(theURL,winName,features)
{
    window.open(theURL,winName,features);
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

// afcampana.php y adseleccion.php

function abrirventana(url,nombreCamp,idMensaje,ext,winName)
{
   
   theURL=url+nombreCamp+"/mensaje"+idMensaje+"/"+nombreCamp+"."+ext;
   window.open(theURL,winName,"menubar=no,toolbar=no,directories=no,scrollbars=yes");
  
}

// addatos.php

function reloadPage(MakeUrl,formu, i_interno, i_externo)
{
   month=formu.s_month[formu.s_month.selectedIndex].value;
   year=formu.s_year[formu.s_year.selectedIndex].value;
   
   s_url=MakeUrl+'?s_month='+month+'&s_year='+year+'&i_interno='+i_interno+'&i_externo='+i_externo;
   location.replace(s_url);
   

}


// afarea2.php

function submitForm(formu,s_url)
{
   
   if(formu.name=="formuA")
   {
      formuA.submit();
   }
   
   if(formu.name=="formuB")
   {
      formuB.submit();
   }
}


// adseleccion.php y addatos.php

function adSeleccion(s_url)
{
   // variable que controla si estaba presente o no la variable i_statsPerDay en la URL que se pasa como
   // parametro.
   estado=0;
   
   // separo la url por varibles.
   arrayOfStrings=s_url.split("&");
   
   for (var i=0; i < arrayOfStrings.length; i++) 
   {      
      
      if (arrayOfStrings[i]=="i_statsPerDay=")
      {
         if(document.formu2.i_statsPerDay.checked==1)
         {
           arrayOfStrings[i]="i_statsPerDay=1";
         }
         else 
         {  
           arrayOfStrings[i]="i_statsPerDay=0";
         }
         
         estado=1;
      }
   
   }
   
   // si no encontramos la cadena i_statsPerDay, concatenamos a la url la variable.
   if (estado==0)
   {
      if(document.formu2.i_statsPerDay.checked==1) 
      {
         s_url=s_url+"&i_statsPerDay=1";
      }   
      
      else
      {
        s_url=s_url+"&i_statsPerDay=0";   
      }
      
      
   }
   
   else
   {
      for (var i=0; i < arrayOfStrings.length; i++) 
      { 
         s_url=arrayOfStrings[i] + "&";
         document.write(s_url);
      }
   
   }
   
   location.replace(s_url);
   
   
}

// Formulario de comprobacion de los campos de la zona de Contacto de Usuarios

function checkFormContact(formu) {


   if (!formu.s_name.value)
   {
      alert ("Por favor, introduzca su Nombre.")
      return false;
   }

   // Siendo anunciante tiene un campo más llamado s_company que también se comprobara
   if (formu.s_usertype.value=="anunciantes" && !formu.s_company.value)
   {
      alert ("Por favor, introduzca el nombre de su empresa.");
      return false;
   }
   
   // Siendo afiliado tiene un campo más llamado s_nameweb que también se comprobara
   if (formu.s_usertype.value=="afiliados" && !formu.s_urlcompany.value)
   {
      alert ("Por favor, introduzca el nombre de su web.");
      return false;
   }
   
   if (!formu.s_email.value)
   {
      alert ("Por favor, introduzca su E-Mail.")
      return false;
   }

   if (formu.s_email.value.indexOf("@",1)==-1)
   {
      alert ("Por favor, introduzca una direcci\xf3n E-Mail correcta.")
      return false;
   }
   
   if (formu.s_email.value.indexOf(".",1)==-1)
   {
      alert ("Por favor, introduzca una direcci\xf3n E-Mail correcta.")
      return false;
   }

   if (!formu.s_question.value)
   {
      alert ("Por favor, introduzca pregunta o duda.")
      return false;
   }

   if (formu.is_conditions && !formu.is_conditions.checked)
   {
      alert ("Por favor, ha de aceptar las condiciones legales.")
      return false;
   }


   
   return true;

}


// Formulario de comprobacion de los campos de la zona de Contacto de Anunciantes

function checkFormContactAnun(formu) {

   if (!formu.s_name.value)
   {
      alert ("Por favor, introduzca su Nombre.")
      return false;
   }

   if (!formu.s_email.value)
   {
      alert ("Por favor, introduzca su E-Mail.")
      return false;
   }

   if (formu.s_email.value.indexOf("@",1)==-1)
   {
      alert ("Por favor, introduzca una direcci\xf3n E-Mail correcta.")
      return false;
   }
   
   if (formu.s_email.value.indexOf(".",1)==-1)
   {
      alert ("Por favor, introduzca una direcci\xf3n E-Mail correcta.")
      return false;
   }


   if (!formu.s_question.value)
   {
      alert ("Por favor, introduzca pregunta o duda.")
      return false;
   }
      

   return true;

}

// Cambia la provincia cuando cambiamos los paises
function reemplazarGuion(cadena)

{

  var re, r, result;



  re = /_/i;

  r = cadena.replace(re," ");

  re = /Espana/i;

  result = r.replace(re,"España");

  return(result);



}



function reemplazarEspacio(cadena)

{

  var re, r;



  re = /\s/i;

  r = cadena.replace(re,"_");

  re = /España/i;

  result = r.replace(re,"Espana");

  return(result);


}


function pais(){

	var p2;
	p=document.formu.i_country[document.formu.i_country.selectedIndex].value;
	p2 = reemplazarGuion(document.formu.i_country[document.formu.i_country.selectedIndex].value);
	document.formu.i_country[document.formu.i_country.selectedIndex].value = p2;
	
	
   // Esto se ha añadido para que si se vuelve a seleccionar el pais no de un error de js en la provincia.
	var pais_0=new Array("0");
	var paisstnames_0=new Array("Seleccione Pais...");

	var pais_1=new Array("","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18")

	var paisstnames_1=new Array("","Andalucía","Aragón","Asturias","Islas Baleares","Islas Canarias","Cantabria","Castilla y León","Castilla-La Mancha","Cataluña","Extramadura","Galicia","La Rioja","Madrid","Murcia","Navarra","País Vasco","Valencia","resto")

	var pais_2=new Array("","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42")

	var paisstnames_2=new Array("","Aveiro","Azores","Baixo Alentejo","Beira Alta","Beja","Braga","Bragança","Castelo Branco","Coimbra","Douro","Estremadura","Faro (Algarve)","Guarda","Leira","Lisboa","Madeira","Oeiras","Portalegre","Porto","Santarem","Setubal","VilaReal","Viseu","resto")

	var pais_3=new Array("","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74")

	var paisstnames_3=new Array("","La Guajira","Cesar","Magdalena","Atlántico","Bolivar","Norte de Santander","Sucre","Providencia y S. Andres","Cordoba","Antioquia","Santander","Arauca","Boyaca","Casanare","Cundinamarca","Caldas","Risaralda","Choco","Valle del Cauca","Tolima","Meta","Vichada","Guania","Guaviare","Huila","Cauca","Nariño","Putumayo","Caqueta","Vaupes","Amazona","resto")

	var pais_4=new Array("","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")

	var paisstnames_4=new Array("","Capital Federal","Buenos Aires","Catamarca","Chaco","Chubut","Cordoba","Corrientes","Entre Rios","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquen","Patagonia","Rio Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucumán","resto")

	var pais_5=new Array("","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137")

	var paisstnames_5=new Array("","Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espirito Santo","Goias","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Paraíba","Pará","Pernambuco","Piaui","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondonia","Roraima","Santa Catarina","Sergipe","São Paulo","Tocantins","resto")

	var pais_6=new Array("","138","139","140","141","142","143","144","145","146","147","148","149","150","151")

	var paisstnames_6=new Array("","Antofagasta","Asién G. C. Ibáñez","Atacama","Biobio","Coquimbo","La Araucania","L. G. Bernardo O'Higgins","Los Lagos","Magallanes y  la A.","Maule","Santiago","Tarapacá","Valparaiso/Rapa Nui","resto")

	var pais_7=new Array("","101","102","103","104","105","106","107","108","109","110")

	var paisstnames_7=new Array("","Chuquisaca","La Paz","Cochabamba","Oruro","Potosí","Tarija","Santa Cruz","Beni","Pando","resto")

	var pais_8=new Array("","152","153","154","155","156")

	var paisstnames_8=new Array("","Ciudad de la Habana","La Habana","Matanzas","Santiago de Cuba","resto")

	var pais_9=new Array("","157","158")

	var paisstnames_9=new Array("","Santo Domingo","resto")

	var pais_10=new Array("","159","160","161","162","163","164","165","166","167","168","169","170")

	var paisstnames_10=new Array("","Azuay","Chimborazo","Esmeraldas","Galapagos","Guayas","Imbabura","Loja","Manabi","Napo","Pichincha","Tungurahua","resto")

	var pais_11=new Array("","171","172","173","174","175","176")

	var paisstnames_11=new Array("","Antigua Guatemala","Guatemala","Huehuetenango","Jalapa","Sololá","Resto")

	var pais_12=new Array("","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200","201","202","203","204","205","206","207","208","209")

	var paisstnames_12=new Array("","Distrito Federal","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Coahuila","Colima","Aguascalientes","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","Mexico","Michoacan de Ocampo","Morelos","Nayarit","Nuevo Leon","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz-Llave","Yucatan","Zacatecas","resto")

	var pais_13=new Array("","210","211","212","213","214","215","216","217","218","219","220","221","222","223","224","225","226","227","228","229","230")

	var paisstnames_13=new Array("","Montevideo","Interior","Artigas","Canelones","Cerro Largo","Colonia","Durazno","Flores","Florida","Lavalleja","Maldonado","Paysandú","Río Negro","Rivera","Rocha","Salto","San José","Soriano","Tacuarembó","Treinta y Tres","resto")

	var pais_14=new Array("","231","232","233","234","235")

	var paisstnames_14=new Array("","Boquete","Colon","Paitilla","Ciudad de Panamá","resto")

	var pais_15=new Array("","236","237","238","239","240","241")

	var paisstnames_15=new Array("","Estelí","Granada","Jinotepe","León","Managua","resto")

	var pais_16=new Array("","242","243","244","245","246","247")

	var paisstnames_16=new Array("","El Progreso","La Ceiba","San Pedro Sula","Tegucigalpa","Tela","resto")

	var pais_17=new Array("248","249","250","251")

	var paisstnames_17=new Array("","Colonia Escalón","San Salvador","Soyapango","resto")

	var pais_18=new Array("","252","253")

	var paisstnames_18=new Array("","Asunción","resto")

	var pais_19=new Array("","257","258","259","260","261","262","254","255","256")

	var paisstnames_19=new Array("","Chimbote","Callao","Lima","Cuzco","Arequipa","resto","Piura","Chiclayo","Trujillo")

	var pais_20=new Array("","263","264","265","266","267","268")

	var paisstnames_20=new Array("","San Juan","Carolina","Bayamon","Caguas","Mayagüez","resto")

	var pais_21=new Array("","269","270","271","272","273","274","275","276","277","278","279","280","281","282","283","284","285","286","287","288","289","290","291","292","293","294","295","296","297","298","299","300","301","302","303","304","305","306","307","308","309","310","311","312","313","314","315","316","317","318","319","351")

	var paisstnames_21=new Array("","Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachussetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","Washington D.C.","West Virginia","Wisconsin","Wyoming","resto")

	var pais_22=new Array("","320","321","322","323","324","325","326","327","328","329","330","331","332","333","334","335","336","337","338","339","340","341","342","352")

	var paisstnames_22=new Array("","Distrito Federal","Amazonas","Anzoategui","Apure","Arague","Barinas","Bolivar","Carabobo","Cojedes","Delta Amacuro","Falcon","Guarico","Lara","Merida","Miranda","Monagas","Nueva Esparta","Portuguesa","Sucre","Tachira","Trujillo","Yaracuy","Zulia","resto")

	var pais_23=new Array("","343","344","345","346","347","348","349","350")

	var paisstnames_23=new Array("","San Jose","Alajuela","Cartago","Guanacaste","Heredia","Limon","Puntarenas","resto")

	var pais_24=new Array("")

	var paisstnames_24=new Array("")

	var pais_25=new Array("")

	var paisstnames_25=new Array("")

	var pais_196=new Array("")

	var paisstnames_196=new Array("")

	var pais_26=new Array("")

	var paisstnames_26=new Array("")

	var pais_27=new Array("")

	var paisstnames_27=new Array("")

	var pais_28=new Array("")

	var paisstnames_28=new Array("")

	var pais_29=new Array("")

	var paisstnames_29=new Array("")

	var pais_30=new Array("")

	var paisstnames_30=new Array("")

	var pais_31=new Array("")

	var paisstnames_31=new Array("")

	var pais_32=new Array("")

	var paisstnames_32=new Array("")

	var pais_33=new Array("")

	var paisstnames_33=new Array("")

	var pais_34=new Array("")

	var paisstnames_34=new Array("")

	var pais_35=new Array("")

	var paisstnames_35=new Array("")

	var pais_36=new Array("")

	var paisstnames_36=new Array("")

	var pais_37=new Array("")

	var paisstnames_37=new Array("")

	var pais_38=new Array("")

	var paisstnames_38=new Array("")

	var pais_39=new Array("")

	var paisstnames_39=new Array("")

	var pais_40=new Array("")

	var paisstnames_40=new Array("")

	var pais_41=new Array("")

	var paisstnames_41=new Array("")

	var pais_42=new Array("")

	var paisstnames_42=new Array("")

	var pais_43=new Array("")

	var paisstnames_43=new Array("")

	var pais_44=new Array("")

	var paisstnames_44=new Array("")

	var pais_45=new Array("")

	var paisstnames_45=new Array("")

	var pais_46=new Array("")

	var paisstnames_46=new Array("")

	var pais_47=new Array("")

	var paisstnames_47=new Array("")

	var pais_48=new Array("")

	var paisstnames_48=new Array("")

	var pais_49=new Array("")

	var paisstnames_49=new Array("")

	var pais_50=new Array("")

	var paisstnames_50=new Array("")

	var pais_51=new Array("")

	var paisstnames_51=new Array("")

	var pais_52=new Array("")

	var paisstnames_52=new Array("")

	var pais_53=new Array("")

	var paisstnames_53=new Array("")

	var pais_54=new Array("")

	var paisstnames_54=new Array("")

	var pais_55=new Array("")

	var paisstnames_55=new Array("")

	var pais_56=new Array("")

	var paisstnames_56=new Array("")

	var pais_57=new Array("")

	var paisstnames_57=new Array("")

	var pais_58=new Array("")

	var paisstnames_58=new Array("")

	var pais_59=new Array("")

	var paisstnames_59=new Array("")

	var pais_60=new Array("")

	var paisstnames_60=new Array("")

	var pais_61=new Array("")

	var paisstnames_61=new Array("")

	var pais_62=new Array("")

	var paisstnames_62=new Array("")

	var pais_63=new Array("")

	var paisstnames_63=new Array("")

	var pais_64=new Array("")

	var paisstnames_64=new Array("")

	var pais_65=new Array("")

	var paisstnames_65=new Array("")

	var pais_66=new Array("")

	var paisstnames_66=new Array("")

	var pais_67=new Array("")

	var paisstnames_67=new Array("")

	var pais_68=new Array("")

	var paisstnames_68=new Array("")

	var pais_69=new Array("")

	var paisstnames_69=new Array("")

	var pais_70=new Array("")

	var paisstnames_70=new Array("")

	var pais_71=new Array("")

	var paisstnames_71=new Array("")

	var pais_72=new Array("")

	var paisstnames_72=new Array("")

	var pais_73=new Array("")

	var paisstnames_73=new Array("")

	var pais_74=new Array("")

	var paisstnames_74=new Array("")

	var pais_75=new Array("")

	var paisstnames_75=new Array("")

	var pais_76=new Array("")

	var paisstnames_76=new Array("")

	var pais_77=new Array("")

	var paisstnames_77=new Array("")

	var pais_78=new Array("")

	var paisstnames_78=new Array("")

	var pais_79=new Array("")

	var paisstnames_79=new Array("")

	var pais_80=new Array("")

	var paisstnames_80=new Array("")

	var pais_81=new Array("")

	var paisstnames_81=new Array("")

	var pais_82=new Array("")

	var paisstnames_82=new Array("")

	var pais_83=new Array("")

	var paisstnames_83=new Array("")

	var pais_84=new Array("")

	var paisstnames_84=new Array("")

	var pais_85=new Array("")

	var paisstnames_85=new Array("")

	var pais_86=new Array("")

	var paisstnames_86=new Array("")

	var pais_87=new Array("")

	var paisstnames_87=new Array("")

	var pais_88=new Array("")

	var paisstnames_88=new Array("")

	var pais_89=new Array("")

	var paisstnames_89=new Array("")

	var pais_90=new Array("")

	var paisstnames_90=new Array("")

	var pais_91=new Array("")

	var paisstnames_91=new Array("")

	var pais_92=new Array("")

	var paisstnames_92=new Array("")

	var pais_93=new Array("")

	var paisstnames_93=new Array("")

	var pais_94=new Array("")

	var paisstnames_94=new Array("")

	var pais_95=new Array("")

	var paisstnames_95=new Array("")

	var pais_96=new Array("")

	var paisstnames_96=new Array("")

	var pais_97=new Array("")

	var paisstnames_97=new Array("")

	var pais_98=new Array("")

	var paisstnames_98=new Array("")

	var pais_99=new Array("")

	var paisstnames_99=new Array("")

	var pais_100=new Array("")

	var paisstnames_100=new Array("")

	var pais_101=new Array("")

	var paisstnames_101=new Array("")

	var pais_102=new Array("")

	var paisstnames_102=new Array("")

	var pais_103=new Array("")

	var paisstnames_103=new Array("")

	var pais_104=new Array("")

	var paisstnames_104=new Array("")

	var pais_105=new Array("")

	var paisstnames_105=new Array("")

	var pais_106=new Array("")

	var paisstnames_106=new Array("")

	var pais_107=new Array("")

	var paisstnames_107=new Array("")

	var pais_108=new Array("")

	var paisstnames_108=new Array("")

	var pais_109=new Array("")

	var paisstnames_109=new Array("")

	var pais_110=new Array("")

	var paisstnames_110=new Array("")

	var pais_111=new Array("")

	var paisstnames_111=new Array("")

	var pais_112=new Array("")

	var paisstnames_112=new Array("")

	var pais_113=new Array("")

	var paisstnames_113=new Array("")

	var pais_114=new Array("")

	var paisstnames_114=new Array("")

	var pais_115=new Array("")

	var paisstnames_115=new Array("")

	var pais_116=new Array("")

	var paisstnames_116=new Array("")

	var pais_117=new Array("")

	var paisstnames_117=new Array("")

	var pais_118=new Array("")

	var paisstnames_118=new Array("")

	var pais_119=new Array("")

	var paisstnames_119=new Array("")

	var pais_120=new Array("")

	var paisstnames_120=new Array("")

	var pais_121=new Array("")

	var paisstnames_121=new Array("")

	var pais_122=new Array("")

	var paisstnames_122=new Array("")

	var pais_123=new Array("")

	var paisstnames_123=new Array("")

	var pais_124=new Array("")

	var paisstnames_124=new Array("")

	var pais_125=new Array("")

	var paisstnames_125=new Array("")

	var pais_126=new Array("")

	var paisstnames_126=new Array("")

	var pais_127=new Array("")

	var paisstnames_127=new Array("")

	var pais_128=new Array("")

	var paisstnames_128=new Array("")

	var pais_129=new Array("")

	var paisstnames_129=new Array("")

	var pais_130=new Array("")

	var paisstnames_130=new Array("")

	var pais_131=new Array("")

	var paisstnames_131=new Array("")

	var pais_132=new Array("")

	var paisstnames_132=new Array("")

	var pais_133=new Array("")

	var paisstnames_133=new Array("")

	var pais_134=new Array("")

	var paisstnames_134=new Array("")

	var pais_135=new Array("")

	var paisstnames_135=new Array("")

	var pais_136=new Array("")

	var paisstnames_136=new Array("")

	var pais_137=new Array("")

	var paisstnames_137=new Array("")

	var pais_138=new Array("")

	var paisstnames_138=new Array("")

	var pais_139=new Array("")

	var paisstnames_139=new Array("")

	var pais_140=new Array("")

	var paisstnames_140=new Array("")

	var pais_141=new Array("")

	var paisstnames_141=new Array("")

	var pais_142=new Array("")

	var paisstnames_142=new Array("")

	var pais_143=new Array("")

	var paisstnames_143=new Array("")

	var pais_144=new Array("")

	var paisstnames_144=new Array("")

	var pais_145=new Array("")

	var paisstnames_145=new Array("")

	var pais_146=new Array("")

	var paisstnames_146=new Array("")

	var pais_147=new Array("")

	var paisstnames_147=new Array("")

	var pais_148=new Array("")

	var paisstnames_148=new Array("")

	var pais_149=new Array("")

	var paisstnames_149=new Array("")

	var pais_150=new Array("")

	var paisstnames_150=new Array("")

	var pais_151=new Array("")

	var paisstnames_151=new Array("")

	var pais_152=new Array("")

	var paisstnames_152=new Array("")

	var pais_153=new Array("")

	var paisstnames_153=new Array("")

	var pais_154=new Array("")

	var paisstnames_154=new Array("")

	var pais_155=new Array("")

	var paisstnames_155=new Array("")

	var pais_156=new Array("")

	var paisstnames_156=new Array("")

	var pais_157=new Array("")

	var paisstnames_157=new Array("")

	var pais_158=new Array("")

	var paisstnames_158=new Array("")

	var pais_159=new Array("")

	var paisstnames_159=new Array("")

	var pais_160=new Array("")

	var paisstnames_160=new Array("")

	var pais_161=new Array("")

	var paisstnames_161=new Array("")

	var pais_162=new Array("")

	var paisstnames_162=new Array("")

	var pais_163=new Array("")

	var paisstnames_163=new Array("")

	var pais_164=new Array("")

	var paisstnames_164=new Array("")

	var pais_165=new Array("")

	var paisstnames_165=new Array("")

	var pais_166=new Array("")

	var paisstnames_166=new Array("")

	var pais_167=new Array("")

	var paisstnames_167=new Array("")

	var pais_168=new Array("")

	var paisstnames_168=new Array("")

	var pais_169=new Array("")

	var paisstnames_169=new Array("")

	var pais_170=new Array("")

	var paisstnames_170=new Array("")

	var pais_171=new Array("")

	var paisstnames_171=new Array("")

	var pais_172=new Array("")

	var paisstnames_172=new Array("")

	var pais_173=new Array("")

	var paisstnames_173=new Array("")

	var pais_174=new Array("")

	var paisstnames_174=new Array("")

	var pais_175=new Array("")

	var paisstnames_175=new Array("")

	var pais_176=new Array("")

	var paisstnames_176=new Array("")

	var pais_177=new Array("")

	var paisstnames_177=new Array("")

	var pais_178=new Array("")

	var paisstnames_178=new Array("")

	var pais_179=new Array("")

	var paisstnames_179=new Array("")

	var pais_180=new Array("")

	var paisstnames_180=new Array("")

	var pais_181=new Array("")

	var paisstnames_181=new Array("")

	var pais_182=new Array("")

	var paisstnames_182=new Array("")

	var pais_183=new Array("")

	var paisstnames_183=new Array("")

	var pais_184=new Array("")

	var paisstnames_184=new Array("")

	var pais_185=new Array("")

	var paisstnames_185=new Array("")

	var pais_186=new Array("")

	var paisstnames_186=new Array("")

	var pais_187=new Array("")

	var paisstnames_187=new Array("")

	var pais_188=new Array("")

	var paisstnames_188=new Array("")

	var pais_189=new Array("")

	var paisstnames_189=new Array("")

	var pais_190=new Array("")

	var paisstnames_190=new Array("")

	var pais_191=new Array("")

	var paisstnames_191=new Array("")

	var pais_192=new Array("")

	var paisstnames_192=new Array("")

	var pais_193=new Array("")

	var paisstnames_193=new Array("")

	var pais_194=new Array("")

	var paisstnames_194=new Array("")

	var pais_195=new Array("")

	var paisstnames_195=new Array("")

	var pais_197=new Array("")

	var paisstnames_197=new Array("")

	var pais_198=new Array("")

	var paisstnames_198=new Array("")

	var pais_199=new Array("")

	var paisstnames_199=new Array("")

	var pais_200=new Array("")

	var paisstnames_200=new Array("")

	var pais_201=new Array("")

	var paisstnames_201=new Array("")

	var pais_202=new Array("")

	var paisstnames_202=new Array("")

	var pais_203=new Array("")

	var paisstnames_203=new Array("")

	var pais_204=new Array("")

	var paisstnames_204=new Array("")

	var pais_205=new Array("")

	var paisstnames_205=new Array("")

	var pais_206=new Array("")

	var paisstnames_206=new Array("")

	var pais_207=new Array("")

	var paisstnames_207=new Array("")

	var pais_208=new Array("")

	var paisstnames_208=new Array("")

	var pais_209=new Array("")

	var paisstnames_209=new Array("")

	var pais_210=new Array("")

	var paisstnames_210=new Array("")

	var pais_211=new Array("")

	var paisstnames_211=new Array("")

	var pais_212=new Array("")

	var paisstnames_212=new Array("")

	var pais_213=new Array("")

	var paisstnames_213=new Array("")

	var pais_214=new Array("")

	var paisstnames_214=new Array("")

	var pais_215=new Array("")

	var paisstnames_215=new Array("")

	var pais_216=new Array("")

	var paisstnames_216=new Array("")

	var pais_217=new Array("")

	var paisstnames_217=new Array("")

	var pais_218=new Array("")

	var paisstnames_218=new Array("")

	var pais_219=new Array("")

	var paisstnames_219=new Array("")

	var pais_220=new Array("")

	var paisstnames_220=new Array("")

	var pais_221=new Array("")

	var paisstnames_221=new Array("")

	var pais_222=new Array("")

	var paisstnames_222=new Array("")

	var pais_223=new Array("")

	var paisstnames_223=new Array("")

	var pais_224=new Array("")

	var paisstnames_224=new Array("")

	var pais_225=new Array("")

	var paisstnames_225=new Array("")

	var pais_226=new Array("")

	var paisstnames_226=new Array("")

	var pais_227=new Array("")

	var paisstnames_227=new Array("")

	var pais_228=new Array("")

	var paisstnames_228=new Array("")

	var pais_229=new Array("")

	var paisstnames_229=new Array("")

	var pais_230=new Array("")

	var paisstnames_230=new Array("")

	var pais_231=new Array("")

	var paisstnames_231=new Array("")

	var pais_232=new Array("")

	var paisstnames_232=new Array("")

	var pais_233=new Array("")

	var paisstnames_233=new Array("")

	var pais_234=new Array("")

	var paisstnames_234=new Array("")

	var pais_235=new Array("")

	var paisstnames_235=new Array("")

	var pais_236=new Array("")

	var paisstnames_236=new Array("")

	var pais_237=new Array("")

	var paisstnames_237=new Array("")

	var pais_238=new Array("")

	var paisstnames_238=new Array("")

	var pais_239=new Array("")

	var paisstnames_239=new Array("")

	var pais_240=new Array("")

	var paisstnames_240=new Array("")

	var pais_241=new Array("")

	var paisstnames_241=new Array("")

	var pais_242=new Array("")

	var paisstnames_242=new Array("")

	var pais_243=new Array("")

	var paisstnames_243=new Array("")

	var pais_244=new Array("")

	var paisstnames_244=new Array("")

	var pais_245=new Array("")

	var paisstnames_245=new Array("")

	var pais_246=new Array("")

	var paisstnames_246=new Array("")

	var pais_247=new Array("")

	var paisstnames_247=new Array("")

	var pais_248=new Array("")

	var paisstnames_248=new Array("")

	var pais_249=new Array("")

	var paisstnames_249=new Array("")

	var pais_250=new Array("")

	var paisstnames_250=new Array("")

	var pais_251=new Array("")

	var paisstnames_251=new Array("")

	var pais_252=new Array("")

	var paisstnames_252=new Array("")

	var pais_253=new Array("")

	var paisstnames_253=new Array("")

	var pais_254=new Array("")

	var paisstnames_254=new Array("")

	var pais_255=new Array("")

	var paisstnames_255=new Array("")

	var pais_256=new Array("")

	var paisstnames_256=new Array("")

	seleccion=eval("pais_"+p);
	seleccionNames=eval("paisstnames_"+p); 
	cuantos_add=seleccion.length;
	document.formu.i_state.length=cuantos_add;

	for(i=0;i<cuantos_add;i++)
	{
	document.formu.i_state.options[i].value=seleccion[i];
	document.formu.i_state.options[i].text=seleccionNames[i];

	if (seleccion[i]=="1") 
	{ 
	   document.formu.i_state.options[i].selected = true;  
	   
	}

        }
        

}


// Esta funcion es una modificacion de pais(). 
// Se ha cambiado porque sino no selecciona la provincia que hay insertada en la BD, mostrandose
// este campo como vacio.
function pais2(i_state_selected){

	var p2;
	p=document.formu.i_country[document.formu.i_country.selectedIndex].value;
	p2 = reemplazarGuion(document.formu.i_country[document.formu.i_country.selectedIndex].value);
	document.formu.i_country[document.formu.i_country.selectedIndex].value = p2;
	
	
   // Esto se ha añadido para que si se vuelve a seleccionar el pais no de un error de js en la provincia.
	var pais_0=new Array("0");
	var paisstnames_0=new Array("Seleccione Pais...");

	var pais_1=new Array("","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18")

	var paisstnames_1=new Array("","Andalucía","Aragón","Asturias","Islas Baleares","Islas Canarias","Cantabria","Castilla y León","Castilla-La Mancha","Cataluña","Extramadura","Galicia","La Rioja","Madrid","Murcia","Navarra","País Vasco","Valencia","resto")

	var pais_2=new Array("","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42")

	var paisstnames_2=new Array("","Aveiro","Azores","Baixo Alentejo","Beira Alta","Beja","Braga","Bragança","Castelo Branco","Coimbra","Douro","Estremadura","Faro (Algarve)","Guarda","Leira","Lisboa","Madeira","Oeiras","Portalegre","Porto","Santarem","Setubal","VilaReal","Viseu","resto")

	var pais_3=new Array("","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74")

	var paisstnames_3=new Array("","La Guajira","Cesar","Magdalena","Atlántico","Bolivar","Norte de Santander","Sucre","Providencia y S. Andres","Cordoba","Antioquia","Santander","Arauca","Boyaca","Casanare","Cundinamarca","Caldas","Risaralda","Choco","Valle del Cauca","Tolima","Meta","Vichada","Guania","Guaviare","Huila","Cauca","Nariño","Putumayo","Caqueta","Vaupes","Amazona","resto")

	var pais_4=new Array("","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")

	var paisstnames_4=new Array("","Capital Federal","Buenos Aires","Catamarca","Chaco","Chubut","Cordoba","Corrientes","Entre Rios","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquen","Patagonia","Rio Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucumán","resto")

	var pais_5=new Array("","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137")

	var paisstnames_5=new Array("","Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espirito Santo","Goias","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Paraíba","Pará","Pernambuco","Piaui","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondonia","Roraima","Santa Catarina","Sergipe","São Paulo","Tocantins","resto")

	var pais_6=new Array("","138","139","140","141","142","143","144","145","146","147","148","149","150","151")

	var paisstnames_6=new Array("","Antofagasta","Asién G. C. Ibáñez","Atacama","Biobio","Coquimbo","La Araucania","L. G. Bernardo O'Higgins","Los Lagos","Magallanes y  la A.","Maule","Santiago","Tarapacá","Valparaiso/Rapa Nui","resto")

	var pais_7=new Array("","101","102","103","104","105","106","107","108","109","110")

	var paisstnames_7=new Array("","Chuquisaca","La Paz","Cochabamba","Oruro","Potosí","Tarija","Santa Cruz","Beni","Pando","resto")

	var pais_8=new Array("","152","153","154","155","156")

	var paisstnames_8=new Array("","Ciudad de la Habana","La Habana","Matanzas","Santiago de Cuba","resto")

	var pais_9=new Array("","157","158")

	var paisstnames_9=new Array("","Santo Domingo","resto")

	var pais_10=new Array("","159","160","161","162","163","164","165","166","167","168","169","170")

	var paisstnames_10=new Array("","Azuay","Chimborazo","Esmeraldas","Galapagos","Guayas","Imbabura","Loja","Manabi","Napo","Pichincha","Tungurahua","resto")

	var pais_11=new Array("","171","172","173","174","175","176")

	var paisstnames_11=new Array("","Antigua Guatemala","Guatemala","Huehuetenango","Jalapa","Sololá","Resto")

	var pais_12=new Array("","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200","201","202","203","204","205","206","207","208","209")

	var paisstnames_12=new Array("","Distrito Federal","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Coahuila","Colima","Aguascalientes","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","Mexico","Michoacan de Ocampo","Morelos","Nayarit","Nuevo Leon","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz-Llave","Yucatan","Zacatecas","resto")

	var pais_13=new Array("","210","211","212","213","214","215","216","217","218","219","220","221","222","223","224","225","226","227","228","229","230")

	var paisstnames_13=new Array("","Montevideo","Interior","Artigas","Canelones","Cerro Largo","Colonia","Durazno","Flores","Florida","Lavalleja","Maldonado","Paysandú","Río Negro","Rivera","Rocha","Salto","San José","Soriano","Tacuarembó","Treinta y Tres","resto")

	var pais_14=new Array("","231","232","233","234","235")

	var paisstnames_14=new Array("","Boquete","Colon","Paitilla","Ciudad de Panamá","resto")

	var pais_15=new Array("","236","237","238","239","240","241")

	var paisstnames_15=new Array("","Estelí","Granada","Jinotepe","León","Managua","resto")

	var pais_16=new Array("","242","243","244","245","246","247")

	var paisstnames_16=new Array("","El Progreso","La Ceiba","San Pedro Sula","Tegucigalpa","Tela","resto")

	var pais_17=new Array("","248","249","250","251")

	var paisstnames_17=new Array("","Colonia Escalón","San Salvador","Soyapango","resto")

	var pais_18=new Array("","252","253")

	var paisstnames_18=new Array("","Asunción","resto")

	var pais_19=new Array("","257","258","259","260","261","262","254","255","256")

	var paisstnames_19=new Array("","Chimbote","Callao","Lima","Cuzco","Arequipa","resto","Piura","Chiclayo","Trujillo")

	var pais_20=new Array("","263","264","265","266","267","268")

	var paisstnames_20=new Array("","San Juan","Carolina","Bayamon","Caguas","Mayagüez","resto")

	var pais_21=new Array("","269","270","271","272","273","274","275","276","277","278","279","280","281","282","283","284","285","286","287","288","289","290","291","292","293","294","295","296","297","298","299","300","301","302","303","304","305","306","307","308","309","310","311","312","313","314","315","316","317","318","319","351")

	var paisstnames_21=new Array("","Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachussetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","Washington D.C.","West Virginia","Wisconsin","Wyoming","resto")

	var pais_22=new Array("","320","321","322","323","324","325","326","327","328","329","330","331","332","333","334","335","336","337","338","339","340","341","342","352")

	var paisstnames_22=new Array("","Distrito Federal","Amazonas","Anzoategui","Apure","Arague","Barinas","Bolivar","Carabobo","Cojedes","Delta Amacuro","Falcon","Guarico","Lara","Merida","Miranda","Monagas","Nueva Esparta","Portuguesa","Sucre","Tachira","Trujillo","Yaracuy","Zulia","resto")

	var pais_23=new Array("","343","344","345","346","347","348","349","350")

	var paisstnames_23=new Array("","San Jose","Alajuela","Cartago","Guanacaste","Heredia","Limon","Puntarenas","resto")

	var pais_24=new Array("")

	var paisstnames_24=new Array("")

	var pais_25=new Array("")

	var paisstnames_25=new Array("")

	var pais_196=new Array("")

	var paisstnames_196=new Array("")

	var pais_26=new Array("")

	var paisstnames_26=new Array("")

	var pais_27=new Array("")

	var paisstnames_27=new Array("")

	var pais_28=new Array("")

	var paisstnames_28=new Array("")

	var pais_29=new Array("")

	var paisstnames_29=new Array("")

	var pais_30=new Array("")

	var paisstnames_30=new Array("")

	var pais_31=new Array("")

	var paisstnames_31=new Array("")

	var pais_32=new Array("")

	var paisstnames_32=new Array("")

	var pais_33=new Array("")

	var paisstnames_33=new Array("")

	var pais_34=new Array("")

	var paisstnames_34=new Array("")

	var pais_35=new Array("")

	var paisstnames_35=new Array("")

	var pais_36=new Array("")

	var paisstnames_36=new Array("")

	var pais_37=new Array("")

	var paisstnames_37=new Array("")

	var pais_38=new Array("")

	var paisstnames_38=new Array("")

	var pais_39=new Array("")

	var paisstnames_39=new Array("")

	var pais_40=new Array("")

	var paisstnames_40=new Array("")

	var pais_41=new Array("")

	var paisstnames_41=new Array("")

	var pais_42=new Array("")

	var paisstnames_42=new Array("")

	var pais_43=new Array("")

	var paisstnames_43=new Array("")

	var pais_44=new Array("")

	var paisstnames_44=new Array("")

	var pais_45=new Array("")

	var paisstnames_45=new Array("")

	var pais_46=new Array("")

	var paisstnames_46=new Array("")

	var pais_47=new Array("")

	var paisstnames_47=new Array("")

	var pais_48=new Array("")

	var paisstnames_48=new Array("")

	var pais_49=new Array("")

	var paisstnames_49=new Array("")

	var pais_50=new Array("")

	var paisstnames_50=new Array("")

	var pais_51=new Array("")

	var paisstnames_51=new Array("")

	var pais_52=new Array("")

	var paisstnames_52=new Array("")

	var pais_53=new Array("")

	var paisstnames_53=new Array("")

	var pais_54=new Array("")

	var paisstnames_54=new Array("")

	var pais_55=new Array("")

	var paisstnames_55=new Array("")

	var pais_56=new Array("")

	var paisstnames_56=new Array("")

	var pais_57=new Array("")

	var paisstnames_57=new Array("")

	var pais_58=new Array("")

	var paisstnames_58=new Array("")

	var pais_59=new Array("")

	var paisstnames_59=new Array("")

	var pais_60=new Array("")

	var paisstnames_60=new Array("")

	var pais_61=new Array("")

	var paisstnames_61=new Array("")

	var pais_62=new Array("")

	var paisstnames_62=new Array("")

	var pais_63=new Array("")

	var paisstnames_63=new Array("")

	var pais_64=new Array("")

	var paisstnames_64=new Array("")

	var pais_65=new Array("")

	var paisstnames_65=new Array("")

	var pais_66=new Array("")

	var paisstnames_66=new Array("")

	var pais_67=new Array("")

	var paisstnames_67=new Array("")

	var pais_68=new Array("")

	var paisstnames_68=new Array("")

	var pais_69=new Array("")

	var paisstnames_69=new Array("")

	var pais_70=new Array("")

	var paisstnames_70=new Array("")

	var pais_71=new Array("")

	var paisstnames_71=new Array("")

	var pais_72=new Array("")

	var paisstnames_72=new Array("")

	var pais_73=new Array("")

	var paisstnames_73=new Array("")

	var pais_74=new Array("")

	var paisstnames_74=new Array("")

	var pais_75=new Array("")

	var paisstnames_75=new Array("")

	var pais_76=new Array("")

	var paisstnames_76=new Array("")

	var pais_77=new Array("")

	var paisstnames_77=new Array("")

	var pais_78=new Array("")

	var paisstnames_78=new Array("")

	var pais_79=new Array("")

	var paisstnames_79=new Array("")

	var pais_80=new Array("")

	var paisstnames_80=new Array("")

	var pais_81=new Array("")

	var paisstnames_81=new Array("")

	var pais_82=new Array("")

	var paisstnames_82=new Array("")

	var pais_83=new Array("")

	var paisstnames_83=new Array("")

	var pais_84=new Array("")

	var paisstnames_84=new Array("")

	var pais_85=new Array("")

	var paisstnames_85=new Array("")

	var pais_86=new Array("")

	var paisstnames_86=new Array("")

	var pais_87=new Array("")

	var paisstnames_87=new Array("")

	var pais_88=new Array("")

	var paisstnames_88=new Array("")

	var pais_89=new Array("")

	var paisstnames_89=new Array("")

	var pais_90=new Array("")

	var paisstnames_90=new Array("")

	var pais_91=new Array("")

	var paisstnames_91=new Array("")

	var pais_92=new Array("")

	var paisstnames_92=new Array("")

	var pais_93=new Array("")

	var paisstnames_93=new Array("")

	var pais_94=new Array("")

	var paisstnames_94=new Array("")

	var pais_95=new Array("")

	var paisstnames_95=new Array("")

	var pais_96=new Array("")

	var paisstnames_96=new Array("")

	var pais_97=new Array("")

	var paisstnames_97=new Array("")

	var pais_98=new Array("")

	var paisstnames_98=new Array("")

	var pais_99=new Array("")

	var paisstnames_99=new Array("")

	var pais_100=new Array("")

	var paisstnames_100=new Array("")

	var pais_101=new Array("")

	var paisstnames_101=new Array("")

	var pais_102=new Array("")

	var paisstnames_102=new Array("")

	var pais_103=new Array("")

	var paisstnames_103=new Array("")

	var pais_104=new Array("")

	var paisstnames_104=new Array("")

	var pais_105=new Array("")

	var paisstnames_105=new Array("")

	var pais_106=new Array("")

	var paisstnames_106=new Array("")

	var pais_107=new Array("")

	var paisstnames_107=new Array("")

	var pais_108=new Array("")

	var paisstnames_108=new Array("")

	var pais_109=new Array("")

	var paisstnames_109=new Array("")

	var pais_110=new Array("")

	var paisstnames_110=new Array("")

	var pais_111=new Array("")

	var paisstnames_111=new Array("")

	var pais_112=new Array("")

	var paisstnames_112=new Array("")

	var pais_113=new Array("")

	var paisstnames_113=new Array("")

	var pais_114=new Array("")

	var paisstnames_114=new Array("")

	var pais_115=new Array("")

	var paisstnames_115=new Array("")

	var pais_116=new Array("")

	var paisstnames_116=new Array("")

	var pais_117=new Array("")

	var paisstnames_117=new Array("")

	var pais_118=new Array("")

	var paisstnames_118=new Array("")

	var pais_119=new Array("")

	var paisstnames_119=new Array("")

	var pais_120=new Array("")

	var paisstnames_120=new Array("")

	var pais_121=new Array("")

	var paisstnames_121=new Array("")

	var pais_122=new Array("")

	var paisstnames_122=new Array("")

	var pais_123=new Array("")

	var paisstnames_123=new Array("")

	var pais_124=new Array("")

	var paisstnames_124=new Array("")

	var pais_125=new Array("")

	var paisstnames_125=new Array("")

	var pais_126=new Array("")

	var paisstnames_126=new Array("")

	var pais_127=new Array("")

	var paisstnames_127=new Array("")

	var pais_128=new Array("")

	var paisstnames_128=new Array("")

	var pais_129=new Array("")

	var paisstnames_129=new Array("")

	var pais_130=new Array("")

	var paisstnames_130=new Array("")

	var pais_131=new Array("")

	var paisstnames_131=new Array("")

	var pais_132=new Array("")

	var paisstnames_132=new Array("")

	var pais_133=new Array("")

	var paisstnames_133=new Array("")

	var pais_134=new Array("")

	var paisstnames_134=new Array("")

	var pais_135=new Array("")

	var paisstnames_135=new Array("")

	var pais_136=new Array("")

	var paisstnames_136=new Array("")

	var pais_137=new Array("")

	var paisstnames_137=new Array("")

	var pais_138=new Array("")

	var paisstnames_138=new Array("")

	var pais_139=new Array("")

	var paisstnames_139=new Array("")

	var pais_140=new Array("")

	var paisstnames_140=new Array("")

	var pais_141=new Array("")

	var paisstnames_141=new Array("")

	var pais_142=new Array("")

	var paisstnames_142=new Array("")

	var pais_143=new Array("")

	var paisstnames_143=new Array("")

	var pais_144=new Array("")

	var paisstnames_144=new Array("")

	var pais_145=new Array("")

	var paisstnames_145=new Array("")

	var pais_146=new Array("")

	var paisstnames_146=new Array("")

	var pais_147=new Array("")

	var paisstnames_147=new Array("")

	var pais_148=new Array("")

	var paisstnames_148=new Array("")

	var pais_149=new Array("")

	var paisstnames_149=new Array("")

	var pais_150=new Array("")

	var paisstnames_150=new Array("")

	var pais_151=new Array("")

	var paisstnames_151=new Array("")

	var pais_152=new Array("")

	var paisstnames_152=new Array("")

	var pais_153=new Array("")

	var paisstnames_153=new Array("")

	var pais_154=new Array("")

	var paisstnames_154=new Array("")

	var pais_155=new Array("")

	var paisstnames_155=new Array("")

	var pais_156=new Array("")

	var paisstnames_156=new Array("")

	var pais_157=new Array("")

	var paisstnames_157=new Array("")

	var pais_158=new Array("")

	var paisstnames_158=new Array("")

	var pais_159=new Array("")

	var paisstnames_159=new Array("")

	var pais_160=new Array("")

	var paisstnames_160=new Array("")

	var pais_161=new Array("")

	var paisstnames_161=new Array("")

	var pais_162=new Array("")

	var paisstnames_162=new Array("")

	var pais_163=new Array("")

	var paisstnames_163=new Array("")

	var pais_164=new Array("")

	var paisstnames_164=new Array("")

	var pais_165=new Array("")

	var paisstnames_165=new Array("")

	var pais_166=new Array("")

	var paisstnames_166=new Array("")

	var pais_167=new Array("")

	var paisstnames_167=new Array("")

	var pais_168=new Array("")

	var paisstnames_168=new Array("")

	var pais_169=new Array("")

	var paisstnames_169=new Array("")

	var pais_170=new Array("")

	var paisstnames_170=new Array("")

	var pais_171=new Array("")

	var paisstnames_171=new Array("")

	var pais_172=new Array("")

	var paisstnames_172=new Array("")

	var pais_173=new Array("")

	var paisstnames_173=new Array("")

	var pais_174=new Array("")

	var paisstnames_174=new Array("")

	var pais_175=new Array("")

	var paisstnames_175=new Array("")

	var pais_176=new Array("")

	var paisstnames_176=new Array("")

	var pais_177=new Array("")

	var paisstnames_177=new Array("")

	var pais_178=new Array("")

	var paisstnames_178=new Array("")

	var pais_179=new Array("")

	var paisstnames_179=new Array("")

	var pais_180=new Array("")

	var paisstnames_180=new Array("")

	var pais_181=new Array("")

	var paisstnames_181=new Array("")

	var pais_182=new Array("")

	var paisstnames_182=new Array("")

	var pais_183=new Array("")

	var paisstnames_183=new Array("")

	var pais_184=new Array("")

	var paisstnames_184=new Array("")

	var pais_185=new Array("")

	var paisstnames_185=new Array("")

	var pais_186=new Array("")

	var paisstnames_186=new Array("")

	var pais_187=new Array("")

	var paisstnames_187=new Array("")

	var pais_188=new Array("")

	var paisstnames_188=new Array("")

	var pais_189=new Array("")

	var paisstnames_189=new Array("")

	var pais_190=new Array("")

	var paisstnames_190=new Array("")

	var pais_191=new Array("")

	var paisstnames_191=new Array("")

	var pais_192=new Array("")

	var paisstnames_192=new Array("")

	var pais_193=new Array("")

	var paisstnames_193=new Array("")

	var pais_194=new Array("")

	var paisstnames_194=new Array("")

	var pais_195=new Array("")

	var paisstnames_195=new Array("")

	var pais_197=new Array("")

	var paisstnames_197=new Array("")

	var pais_198=new Array("")

	var paisstnames_198=new Array("")

	var pais_199=new Array("")

	var paisstnames_199=new Array("")

	var pais_200=new Array("")

	var paisstnames_200=new Array("")

	var pais_201=new Array("")

	var paisstnames_201=new Array("")

	var pais_202=new Array("")

	var paisstnames_202=new Array("")

	var pais_203=new Array("")

	var paisstnames_203=new Array("")

	var pais_204=new Array("")

	var paisstnames_204=new Array("")

	var pais_205=new Array("")

	var paisstnames_205=new Array("")

	var pais_206=new Array("")

	var paisstnames_206=new Array("")

	var pais_207=new Array("")

	var paisstnames_207=new Array("")

	var pais_208=new Array("")

	var paisstnames_208=new Array("")

	var pais_209=new Array("")

	var paisstnames_209=new Array("")

	var pais_210=new Array("")

	var paisstnames_210=new Array("")

	var pais_211=new Array("")

	var paisstnames_211=new Array("")

	var pais_212=new Array("")

	var paisstnames_212=new Array("")

	var pais_213=new Array("")

	var paisstnames_213=new Array("")

	var pais_214=new Array("")

	var paisstnames_214=new Array("")

	var pais_215=new Array("")

	var paisstnames_215=new Array("")

	var pais_216=new Array("")

	var paisstnames_216=new Array("")

	var pais_217=new Array("")

	var paisstnames_217=new Array("")

	var pais_218=new Array("")

	var paisstnames_218=new Array("")

	var pais_219=new Array("")

	var paisstnames_219=new Array("")

	var pais_220=new Array("")

	var paisstnames_220=new Array("")

	var pais_221=new Array("")

	var paisstnames_221=new Array("")

	var pais_222=new Array("")

	var paisstnames_222=new Array("")

	var pais_223=new Array("")

	var paisstnames_223=new Array("")

	var pais_224=new Array("")

	var paisstnames_224=new Array("")

	var pais_225=new Array("")

	var paisstnames_225=new Array("")

	var pais_226=new Array("")

	var paisstnames_226=new Array("")

	var pais_227=new Array("")

	var paisstnames_227=new Array("")

	var pais_228=new Array("")

	var paisstnames_228=new Array("")

	var pais_229=new Array("")

	var paisstnames_229=new Array("")

	var pais_230=new Array("")

	var paisstnames_230=new Array("")

	var pais_231=new Array("")

	var paisstnames_231=new Array("")

	var pais_232=new Array("")

	var paisstnames_232=new Array("")

	var pais_233=new Array("")

	var paisstnames_233=new Array("")

	var pais_234=new Array("")

	var paisstnames_234=new Array("")

	var pais_235=new Array("")

	var paisstnames_235=new Array("")

	var pais_236=new Array("")

	var paisstnames_236=new Array("")

	var pais_237=new Array("")

	var paisstnames_237=new Array("")

	var pais_238=new Array("")

	var paisstnames_238=new Array("")

	var pais_239=new Array("")

	var paisstnames_239=new Array("")

	var pais_240=new Array("")

	var paisstnames_240=new Array("")

	var pais_241=new Array("")

	var paisstnames_241=new Array("")

	var pais_242=new Array("")

	var paisstnames_242=new Array("")

	var pais_243=new Array("")

	var paisstnames_243=new Array("")

	var pais_244=new Array("")

	var paisstnames_244=new Array("")

	var pais_245=new Array("")

	var paisstnames_245=new Array("")

	var pais_246=new Array("")

	var paisstnames_246=new Array("")

	var pais_247=new Array("")

	var paisstnames_247=new Array("")

	var pais_248=new Array("")

	var paisstnames_248=new Array("")

	var pais_249=new Array("")

	var paisstnames_249=new Array("")

	var pais_250=new Array("")

	var paisstnames_250=new Array("")

	var pais_251=new Array("")

	var paisstnames_251=new Array("")

	var pais_252=new Array("")

	var paisstnames_252=new Array("")

	var pais_253=new Array("")

	var paisstnames_253=new Array("")

	var pais_254=new Array("")

	var paisstnames_254=new Array("")

	var pais_255=new Array("")

	var paisstnames_255=new Array("")

	var pais_256=new Array("")

	var paisstnames_256=new Array("")

	seleccion=eval("pais_"+p);
	seleccionNames=eval("paisstnames_"+p); 
	cuantos_add=seleccion.length;
	document.formu.i_state.length=cuantos_add;

// Empieza en uno porque si comienza en cero no selecciona la provincia que hay en la BD sino 
// la anterior.
	for(i=0;i<cuantos_add;i++)
	{
	document.formu.i_state.options[i].value=seleccion[i];
	document.formu.i_state.options[i].text=seleccionNames[i];
        
        if (seleccion[i]==i_state_selected) 
	{ 
	   document.formu.i_state.options[i].selected = true;
	   //alert(i+ 'seleccion' + seleccion[i] + 'parametro pasado' +i_state_selected)
  
	}
	
       
     }
     
     
        

}

function chequeo(formu) 
{

	if(!formu.s_email.value)
	{ 
		alert ("Por favor, introduzca su E-Mail.")
		return false;
	}

	if(formu.s_email.value.indexOf("@",1)==-1)
	{ 
		alert ("Por favor, introduzca una dirección E-Mail correcta.")
		return false;
	}

	if(formu.s_email.value.indexOf(".",1)==-1)
	{ 
	  alert ("Por favor, introduzca una dirección E-Mail correcta.")
	  return false;
	}

	if(document.formu.i_birthyear.options[document.formu.i_birthyear.selectedIndex].value == "cero")
	{ 
	  alert ("Por favor, debe rellenar el campo Fecha de nacimiento.")
	  return false;
	}


	/*if(document.formu.i_state.options[document.formu.i_state.selectedIndex].value == "cero")
	{ 
	  alert ("Por favor, debe rellenar el campo Provincia.")
	  return false;
	}*/
	
	if(document.formu.i_country.options[document.formu.i_country.selectedIndex].value == "0")
	{ 
	  alert ("Por favor, debe rellenar el campo País.")
	  return false;
	}	

	if(document.formu.i_state.options[document.formu.i_state.selectedIndex].value == "")
	{ 
	  alert ("Por favor, debe rellenar el campo Provincia.")
	  return false;
	}	
	

	if(!formu.i_zipcode.value)
	{ 
	  alert ("Por favor, introduzca su Código Postal (ZipCode).")
	  return false;
	}

	if(document.formu.i_industry.options[document.formu.i_industry.selectedIndex].value == "cero")
	{ 
	  alert ("Por favor, debe rellenar el campo Sector.")
	  return false;
	}

	if(document.formu.i_profession.options[document.formu.i_profession.selectedIndex].value == "cero")
	{ 
	  alert ("Por favor, debe rellenar el campo Ocupacion.")
	  return false;
	}

	if(document.formu.i_education.options[document.formu.i_education.selectedIndex].value == "cero")
	{ 
	  alert ("Por favor, debe rellenar el campo Estudios.")
	  return false;
	}

	return true;

}


// catsubcatZone.php

function verifyCompatibleBrowser() 
{
    this.ver=navigator.appVersion
    this.dom=document.getElementById?1:0
    this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom)?1:0;
    this.ie4=(document.all && !this.dom)?1:0;
    this.ns4=(this.dom && parseInt(this.ver) >= 4) ?1:0;

    this.ns4=(document.layers && !this.dom)?1:0;
    this.bw=(this.ie5 || this.ie4 || this.ns4 || this.ns5);
    return this;
}

function vacioArray(size) 
{
	   this.length = size
	   for(i=1; i<=size;i ++)
	     this[i]= new item();
	    return this;
}

function item(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18,v19,v20,v21,v22,v23,v24,v25,v26,v27,v28,v29) 
{
  j=1; total=0
  while(j<item.length){
   if (eval("v"+j)==null) total++
   this[j] = eval("v"+j);
   j++;
  }
  this.length = j-total;
}

bw=new verifyCompatibleBrowser();
subcatarray = new vacioArray(29)

function searchparent(scid) {
   jct=1;
   parentid=-1;
   found=0;
   while ((jct<=29)&&(!found)) {
     jsc=1;
     while ((jsc<=19)&&(!found)) {
	 //alert('['+jct+','+jsc+'] --> ['+subcatarray[jct][jsc]+']');
         if (subcatarray[jct][jsc]==scid) {
	     parentid=jct;
	     found = 1;
         }
	 jsc++;
     }
     jct++;
   }

return parentid;
}

function Esta_Checkeado_Ingresos_Familiares()
  {
   if ((document.formu.c205.checked == 1) || (document.formu.c206.checked == 1) ||
      (document.formu.c207.checked == 1) || (document.formu.c208.checked == 1) ||
      (document.formu.c209.checked == 1) || (document.formu.c210.checked == 1) ||
      (document.formu.c211.checked == 1) )
      return true;
   else
      return false;
  }

function Esta_Checkeado_Compras_Catalogo()
  {
   if ((document.formu.c231.checked == 1) || (document.formu.c232.checked == 1) ||
      (document.formu.c233.checked == 1))
      return true;
   else
      return false;
  }
  
function Esta_Checkeado_Compras_Internet()
  {
   if ((document.formu.c235.checked == 1) || (document.formu.c236.checked == 1) ||
      (document.formu.c237.checked == 1))
      return true;
   else
      return false;
  }
  
function Esta_Checkeado_Hogar()
  {
   if ((document.formu.c224.checked == 1) || (document.formu.c225.checked == 1) ||
      (document.formu.c226.checked == 1) || (document.formu.c227.checked == 1) ||
      (document.formu.c228.checked == 1) || (document.formu.c229.checked == 1) )
      return true;
   else
      return false;
  }

function chequeoForm(formu) 
  {
   if (!Esta_Checkeado_Ingresos_Familiares()) 
     {
      alert ("Por favor, seleccione al menos 1 opcion del grupo Ingresos Familiares.");
      return false;
     }
   
   /*if (!Esta_Checkeado_Compras_Catalogo()) 
     {
      alert ("Por favor, seleccione al menos 1 opcion del grupo Compras por Catalogo.");
      return false;
     }

   if (!Esta_Checkeado_Compras_Internet()) 
     {
      alert ("Por favor, seleccione al menos 1 opcion del grupo Compras por Internet.");
      return false;
     }
*/
   if (!Esta_Checkeado_Hogar()) 
     {
      alert ("Por favor, seleccione al menos 1 opcion del grupo Hogar.");
      return false;
     }
   
   
   return true;
  }


  

function checkear_CategoriasFijas(formname,catid,subcatid)
  {
   if (catid == 204)//Ingresos familiares
     {
      eval("document.forms[\""+formname+"\"].c205.checked=0");
      eval("document.forms[\""+formname+"\"].c206.checked=0");
      eval("document.forms[\""+formname+"\"].c207.checked=0");
      eval("document.forms[\""+formname+"\"].c208.checked=0");
      eval("document.forms[\""+formname+"\"].c209.checked=0");
      eval("document.forms[\""+formname+"\"].c210.checked=0");
      eval("document.forms[\""+formname+"\"].c211.checked=0");      
     } 
   else
     {
      if (catid == 212)//Hijos al cargo
        {
         eval("document.forms[\""+formname+"\"].c213.checked=0");
         eval("document.forms[\""+formname+"\"].c214.checked=0");
         eval("document.forms[\""+formname+"\"].c215.checked=0");
         eval("document.forms[\""+formname+"\"].c216.checked=0");         
        }
      else
        {
         if (catid == 223)//Propiedad del hogar
     	   {
            eval("document.forms[\""+formname+"\"].c224.checked=0");
            eval("document.forms[\""+formname+"\"].c225.checked=0");
            eval("document.forms[\""+formname+"\"].c226.checked=0");
            eval("document.forms[\""+formname+"\"].c227.checked=0");
            eval("document.forms[\""+formname+"\"].c228.checked=0");
            eval("document.forms[\""+formname+"\"].c229.checked=0");
           }
         else
           {
            if (catid == 230)//Compras por Catalogo
	      {
	       eval("document.forms[\""+formname+"\"].c231.checked=0");
	       eval("document.forms[\""+formname+"\"].c232.checked=0");
	       eval("document.forms[\""+formname+"\"].c233.checked=0");
	      } 
	    else
	      {
	       if (catid == 234)//Compras por Internet
	        {
	         eval("document.forms[\""+formname+"\"].c235.checked=0");
	         eval("document.forms[\""+formname+"\"].c236.checked=0");
	         eval("document.forms[\""+formname+"\"].c237.checked=0");
	        } 	       
	     }
	   }  
        }
     }
   
   
   eval("document.forms[\""+formname+"\"].c"+subcatid+".checked=1");      
       
  }


function uncheckparent(formname,scid) {

parentid = searchparent(scid);

if (parentid>0) {
    
 eval("document.forms[\""+formname+"\"].c"+parentid+".checked=0")
}

}


function checkuncheck_maincateg(formname,catid){
 if (bw.ns4) {
    if ( eval("document.forms[\""+formname+"\"].c"+catid+".checked") ){ activa="on" }else{ activa="off" }
 }else{
 if ( eval("document.forms[\""+formname+"\"].c"+catid+".checked") ){ activa="on" }else{ activa="off" }
 }

 array_numelements=subcatarray[catid].length;
 if (activa=="on") {
   j=1;
   while (j<array_numelements-1) {
	eval("document.forms[\""+formname+"\"].c"+subcatarray[catid][j]+".checked=\"on\"");
	j++;
   }
 }


 else{
  j=1;
  while(j<array_numelements-1){
    eval("document.forms[\""+formname+"\"].c"+subcatarray[catid][j]+".checked=0")
    j++;
  }
 }
 return true;
}



function lanzaviral() 
{
   //url="http://www.viralcontrol.com/viral/dvdnov03/recomienda.php";
   
   //var algo = "?Fname="+document.formu.s_fname.value+"&email="+document.formu.s_email.value+"&Affiliate="+document.formu.i_idaff.value;
   //s_url=url+algo;
   //window.open(s_url,'','width=630,height=490,scrollbars=yes');
   return true;
}

// Fin de catsubcatZone.php


// registroZone.php
function addcateg() {
document.formu.categcount.value++;
}

function removecateg() {
document.formu.categcount.value--;
}

function enviarFormulario()

{

  var x;

  x = MM_findObj("formu")

  x.submit();

}

function MM_openBrWindow(theURL,winName,features)
{
    window.open(theURL,winName,features);
}


function chequeo2(formu) {

        if (document.formu.categcount.value<1) {

          alert ("Por favor, seleccione al menos 1 categoria.")
	  return false;

	}


        if (!formu.i_country.value)

        {

          alert ("Por favor, introduzca su Pais.")

          return false;

        }

        if (!formu.i_state.value)

        {

          alert ("Por favor, introduzca su Provincia.")

          return false;

        }

        if (document.formu.i_state.options[document.formu.i_state.selectedIndex].value == "cero")

        {

          alert ("Por favor, debe rellenar el campo Provincia.")

          return false;

        }


        if (!formu.s_email.value)

        {

          alert ("Por favor, introduzca su E-Mail.")

          return false;

        }



        if (formu.s_email.value.indexOf("@",1)==-1)

        {

          alert ("Por favor, introduzca una direcci\xf3n E-Mail correcta.")

          return false;

        }


        if (formu.s_email.value.indexOf(".",1)==-1)

        {

          alert ("Por favor, introduzca una direcci\xf3n E-Mail correcta.")

          return false;

        }


        if (!formu.i_zipcode.value)

        {

          alert ("Por favor, introduzca su Codigo Postal.")

          return false;

        }
        

        
	if (!formu.i_birthyear.value)

        {

          alert ("Por favor, introduzca su Fecha de Nacimiento.")

          return false;

        }

return true;

}



function es_dni(dni){
   var forma_dni = /^\d{8}[a-zA-Z]$/
   var letras = new Array ("T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E");
   		 
   var numero = dni.substring(0,8);
   var letra  = dni.substring(8);
   
   if(!forma_dni.test(dni)){
      return false;
   }
   return (letra == letras[numero%23]);
}


function es_cif(cif){
   var forma_cif = /^[a-zA-Z]\d{8}$/
      
   if(!forma_cif.test(cif)){
      return false;
   }
   return true;
}

function es_cp(cp){
   var forma_cp = /^\d{5}$/
   var prefijo = cp.substring(0,2);
   
   if(!forma_cp.test(cp)){
      return false;
   }
   
 
   return true;
}


function chequeoAffiliate(formu) {


        if (!formu.i_country.value)

        {

          alert ("Por favor, introduzca su Pais.")

          return false;

        }

        if (!formu.i_state.value)

        {

          alert ("Por favor, introduzca su Provincia.")

          return false;

        }
        

               
        if (document.formu.i_state.options[document.formu.i_state.selectedIndex].value == "0")

        {

          alert ("Por favor, debe rellenar el campo Provincia.")

          return false;

        }


	//Si es España, comprobamos el cifnif y el código postal...
        if (formu.i_country.options[formu.i_country.selectedIndex].value == "1")

        {

		if (!formu.code.value)

		{

		  alert ("Por favor, introduzca su Codigo Postal.")

		  return false;

		}
		else
		{
		
		  if(!es_cp(formu.code.value))
		  {
		  	alert("El código postal debe tener 5 dígitos");
		  	return false;
		  
		  }
		
		
		}
		

		if (!formu.cif.value)

		{

		  alert ("Por favor, introduzca su NIF o CIF.")

		  return false;

		}
		else
		
		{
		
			if(!es_dni(formu.cif.value) && !es_cif(formu.cif.value) )
			{
			  alert("NIF o CIF no válido (Asegúrese de introducir 8 dígitos y una letra mayúscula)");
			  return false;			
			  
			}
	
		}

        }


        if (!formu.email_Man.value)

        {

          alert ("Por favor, introduzca su E-Mail.")

          return false;

        }



        if (formu.email_Man.value.indexOf("@",1)==-1)

        {

          alert ("Por favor, introduzca una direcci\xf3n E-Mail correcta.")

          return false;

        }


        if (formu.email_Man.value.indexOf(".",1)==-1)

        {

          alert ("Por favor, introduzca una direcci\xf3n E-Mail correcta.")

          return false;

        }



        if (!formu.nameWeb.value)

        {

          alert ("Por favor, introduzca el nombre de la Web.")

          return false;

        }
 if (!formu.url.value || formu.url.value=="http://")

        {

          alert ("Por favor, introduzca la url de la web.")

          return false;

        }
        
        if (!formu.pagesView.value)

        {

          alert ("Por favor, introduzca su número de páginas vistas.")

          return false;

        }
	else
	{		
	  if(!es_numero(formu.pagesView.value))
	  {
	  	alert("El número de páginas vistas debe ser un número");
	  	return false;
	  
	  }		
	}  
	
        if (!formu.name_Man.value)

        {

          alert ("Por favor, introduzca su nombre.")

          return false;

        }
        
        if (!formu.name_Man2.value)

        {

          alert ("Por favor, introduzca su primer apellido.")

          return false;

        }     
        
        if (!formu.name_Man3.value)

        {

          alert ("Por favor, introduzca su segundo apellido.")

          return false;

        }    
        
        if (!formu.phone_Man.value)

        {

          alert ("Por favor, introduzca su teléfono.")

          return false;

        }    
        
        if (!formu.checkbox.checked)

        {

          alert ("Es necesario que marque la casilla de aceptación del contrato.")

          return false;

        }          
        
      
return true;

}

function es_numero(pv){
   var forma_pv = /^\d+$/   
   
   if(!forma_pv.test(pv)){
      return false;
   } 
   return true;
}

function chequeoAffiliateNuke(formu){
   
   var status = chequeoAffiliate(formu);
     
   if(status==false) { 
      return false; 
   }
   
   if(formu.i_version.options[formu.i_version.selectedIndex].value == "0")
   {
      alert("Debe seleccionar la versión de PHP-Nuke de su web.");
      return false;
   }
   
   return status;

}

// fin de registroZone.php