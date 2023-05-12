javascript: void((function() {
    body = document.body;
    div = document.createElement('div');
    div.id = 'informasi';
    div.style.padding = '10px';
    div.style.borderRadius = '2px';
    div.style.width = '350px';
    div.style.position = 'fixed';
    div.style.zIndex = '9999';
    div.style.top = '7%';
    div.style.left = '5%';
    div.style.fontSize = '12px';
    div.style.fontWeight = '600';
    div.style.boxShadow = '0 0 5px #000';
    div.style.backgroundColor = 'rgb(255,105,180)';
    div.innerHTML = "<center>Grab konco v.1.0 -By ArezDev<button onclick=\'arezdev.tutup()\' style=\'background:red;color:#fff;padding:5px 10px;float:right;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap\'>X</button></center>";
	div.innerHTML += "<br/>	<br/> <div style=\'margin-top:10px\' id=\'divsatu\'>";
    div.innerHTML += "<input placeholder=\'Loading accessToken...!\' id=\'accessTok\' style=\'width:343px;height:20px;border-radius:2px;resize:none;\'></input>";
	div.innerHTML += "<div style=\'margin-top:10px\' id=\'divsatu\'>";
    div.innerHTML += "<textarea placeholder=\'Input uid...\' id=\'keyku\' style=\'width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;\'></textarea>";
    div.innerHTML += "<div style=\'margin-top:10px\'>";
	div.innerHTML += "Grab opo? <select id='genderOpt' style='background-color: pink;width:75px;margin-left:10px;margin-top:3px;display:inline-block;border-radius: 3px;'><option value='male'>LANANG</option><option value='female'>WEDOK</option><option value='all'>LANANG WEDOK</option></select>";
    div.innerHTML += "<select id='countrycode' style='background-color: pink;width:90px;margin-left:10px;margin-top:3px;display:inline-block;border-radius: 3px;'><option value='all'>ALL Country</option><option value='AF'>Afghanistan</option><option value='AX'>Aland Islands</option><option value='AL'>Albania</option><option value='DZ'>Algeria</option><option value='AS'>American Samoa</option><option value='AD'>Andorra</option><option value='AO'>Angola</option><option value='AI'>Anguilla</option><option value='AQ'>Antarctica</option><option value='AG'>Antigua And Barbuda</option><option value='AR'>Argentina</option><option value='AM'>Armenia</option><option value='AW'>Aruba</option><option value='AU'>Australia</option><option value='AT'>Austria</option><option value='AZ'>Azerbaijan</option><option value='BS'>Bahamas</option><option value='BH'>Bahrain</option><option value='BD'>Bangladesh</option><option value='BB'>Barbados</option><option value='BY'>Belarus</option><option value='BE'>Belgium</option><option value='BZ'>Belize</option><option value='BJ'>Benin</option><option value='BM'>Bermuda</option><option value='BT'>Bhutan</option><option value='BO'>Bolivia</option><option value='BA'>Bosnia And Herzegovina</option><option value='BW'>Botswana</option><option value='BV'>Bouvet Island</option><option value='BR'>Brazil</option><option value='IO'>British Indian Ocean Territory</option><option value='BN'>Brunei Darussalam</option><option value='BG'>Bulgaria</option><option value='BF'>Burkina Faso</option><option value='BI'>Burundi</option><option value='KH'>Cambodia</option><option value='CM'>Cameroon</option><option value='CA'>Canada</option><option value='CV'>Cape Verde</option><option value='KY'>Cayman Islands</option><option value='CF'>Central African Republic</option><option value='TD'>Chad</option><option value='CL'>Chile</option><option value='CN'>China</option><option value='CX'>Christmas Island</option><option value='CC'>Cocos (Keeling) Islands</option><option value='CO'>Colombia</option><option value='KM'>Comoros</option><option value='CG'>Congo</option><option value='CD'>Congo, Democratic Republic</option><option value='CK'>Cook Islands</option><option value='CR'>Costa Rica</option><option value='CI'>Cote DIvoire</option><option value='HR'>Croatia</option><option value='CU'>Cuba</option><option value='CY'>Cyprus</option><option value='CZ'>Czech Republic</option><option value='DK'>Denmark</option><option value='DJ'>Djibouti</option><option value='DM'>Dominica</option><option value='DO'>Dominican Republic</option><option value='EC'>Ecuador</option><option value='EG'>Egypt</option><option value='SV'>El Salvador</option><option value='GQ'>Equatorial Guinea</option><option value='ER'>Eritrea</option><option value='EE'>Estonia</option><option value='ET'>Ethiopia</option><option value='FK'>Falkland Islands (Malvinas)</option><option value='FO'>Faroe Islands</option><option value='FJ'>Fiji</option><option value='FI'>Finland</option><option value='FR'>France</option><option value='GF'>French Guiana</option><option value='PF'>French Polynesia</option><option value='TF'>French Southern Territories</option><option value='GA'>Gabon</option><option value='GM'>Gambia</option><option value='GE'>Georgia</option><option value='DE'>Germany</option><option value='GH'>Ghana</option><option value='GI'>Gibraltar</option><option value='GR'>Greece</option><option value='GL'>Greenland</option><option value='GD'>Grenada</option><option value='GP'>Guadeloupe</option><option value='GU'>Guam</option><option value='GT'>Guatemala</option><option value='GG'>Guernsey</option><option value='GN'>Guinea</option><option value='GW'>Guinea-Bissau</option><option value='GY'>Guyana</option><option value='HT'>Haiti</option><option value='HM'>Heard Island &amp; Mcdonald Islands</option><option value='VA'>Holy See (Vatican City State)</option><option value='HN'>Honduras</option><option value='HK'>Hong Kong</option><option value='HU'>Hungary</option><option value='IS'>Iceland</option><option value='IN'>India</option><option value='ID'>Indonesia</option><option value='IR'>Iran, Islamic Republic Of</option><option value='IQ'>Iraq</option><option value='IE'>Ireland</option><option value='IM'>Isle Of Man</option><option value='IL'>Israel</option><option value='IT'>Italy</option><option value='JM'>Jamaica</option><option value='JP'>Japan</option><option value='JE'>Jersey</option><option value='JO'>Jordan</option><option value='KZ'>Kazakhstan</option><option value='KE'>Kenya</option><option value='KI'>Kiribati</option><option value='KR'>Korea</option><option value='KW'>Kuwait</option><option value='KG'>Kyrgyzstan</option><option value='LA'>Lao Peoples Democratic Republic</option><option value='LV'>Latvia</option><option value='LB'>Lebanon</option><option value='LS'>Lesotho</option><option value='LR'>Liberia</option><option value='LY'>Libyan Arab Jamahiriya</option><option value='LI'>Liechtenstein</option><option value='LT'>Lithuania</option><option value='LU'>Luxembourg</option><option value='MO'>Macao</option><option value='MK'>Macedonia</option><option value='MG'>Madagascar</option><option value='MW'>Malawi</option><option value='MY'>Malaysia</option><option value='MV'>Maldives</option><option value='ML'>Mali</option><option value='MT'>Malta</option><option value='MH'>Marshall Islands</option><option value='MQ'>Martinique</option><option value='MR'>Mauritania</option><option value='MU'>Mauritius</option><option value='YT'>Mayotte</option><option value='MX'>Mexico</option><option value='FM'>Micronesia, Federated States Of</option><option value='MD'>Moldova</option><option value='MC'>Monaco</option><option value='MN'>Mongolia</option><option value='ME'>Montenegro</option><option value='MS'>Montserrat</option><option value='MA'>Morocco</option><option value='MZ'>Mozambique</option><option value='MM'>Myanmar</option><option value='NA'>Namibia</option><option value='NR'>Nauru</option><option value='NP'>Nepal</option><option value='NL'>Netherlands</option><option value='AN'>Netherlands Antilles</option><option value='NC'>New Caledonia</option><option value='NZ'>New Zealand</option><option value='NI'>Nicaragua</option><option value='NE'>Niger</option><option value='NG'>Nigeria</option><option value='NU'>Niue</option><option value='NF'>Norfolk Island</option><option value='MP'>Northern Mariana Islands</option><option value='NO'>Norway</option><option value='OM'>Oman</option><option value='PK'>Pakistan</option><option value='PW'>Palau</option><option value='PS'>Palestinian Territory, Occupied</option><option value='PA'>Panama</option><option value='PG'>Papua New Guinea</option><option value='PY'>Paraguay</option><option value='PE'>Peru</option><option value='PH'>Philippines</option><option value='PN'>Pitcairn</option><option value='PL'>Poland</option><option value='PT'>Portugal</option><option value='PR'>Puerto Rico</option><option value='QA'>Qatar</option><option value='RE'>Reunion</option><option value='RO'>Romania</option><option value='RU'>Russian Federation</option><option value='RW'>Rwanda</option><option value='BL'>Saint Barthelemy</option><option value='SH'>Saint Helena</option><option value='KN'>Saint Kitts And Nevis</option><option value='LC'>Saint Lucia</option><option value='MF'>Saint Martin</option><option value='PM'>Saint Pierre And Miquelon</option><option value='VC'>Saint Vincent And Grenadines</option><option value='WS'>Samoa</option><option value='SM'>San Marino</option><option value='ST'>Sao Tome And Principe</option><option value='SA'>Saudi Arabia</option><option value='SN'>Senegal</option><option value='RS'>Serbia</option><option value='SC'>Seychelles</option><option value='SL'>Sierra Leone</option><option value='SG'>Singapore</option><option value='SK'>Slovakia</option><option value='SI'>Slovenia</option><option value='SB'>Solomon Islands</option><option value='SO'>Somalia</option><option value='ZA'>South Africa</option><option value='GS'>South Georgia And Sandwich Isl.</option><option value='ES'>Spain</option><option value='LK'>Sri Lanka</option><option value='SD'>Sudan</option><option value='SR'>Suriname</option><option value='SJ'>Svalbard And Jan Mayen</option><option value='SZ'>Swaziland</option><option value='SE'>Sweden</option><option value='CH'>Switzerland</option><option value='SY'>Syrian Arab Republic</option><option value='TW'>Taiwan</option><option value='TJ'>Tajikistan</option><option value='TZ'>Tanzania</option><option value='TH'>Thailand</option><option value='TL'>Timor-Leste</option><option value='TG'>Togo</option><option value='TK'>Tokelau</option><option value='TO'>Tonga</option><option value='TT'>Trinidad And Tobago</option><option value='TN'>Tunisia</option><option value='TR'>Turkey</option><option value='TM'>Turkmenistan</option><option value='TC'>Turks And Caicos Islands</option><option value='TV'>Tuvalu</option><option value='UG'>Uganda</option><option value='UA'>Ukraine</option><option value='AE'>United Arab Emirates</option><option value='GB'>United Kingdom</option><option value='US'>United States</option><option value='UM'>United States Outlying Islands</option><option value='UY'>Uruguay</option><option value='UZ'>Uzbekistan</option><option value='VU'>Vanuatu</option><option value='VE'>Venezuela</option><option value='VN'>Viet Nam</option><option value='VG'>Virgin Islands, British</option><option value='VI'>Virgin Islands, U.S.</option><option value='WF'>Wallis And Futuna</option><option value='EH'>Western Sahara</option><option value='YE'>Yemen</option><option value='ZM'>Zambia</option><option value='ZW'>Zimbabwe</option></select></div>  Delay? <input type='number' class='inputtext' placeholder='Delay' id='delayGrab' value='1' style='background-color: pink;width: 25px;text-align:center;border-radius: 3px;'>";
    div.innerHTML += "<div style=\'margin-top:10px\'>";
	div.innerHTML += "<button onclick=\'arezdev.ngeGrab(true, 0)\' id=\'startP\' style=\'background:pink;color:#0033cc;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:4px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap\'>Grab!</button>  <button onclick=\'arezdev.hapus()\' id=\'clear\' style=\'background:red;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:4px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap\'>Clear!</button>";
	div.innerHTML += "</div>";	
	div.innerHTML += "<div style=\'margin-top:10px\'>";
	div.innerHTML += "<span id=\'total\' style=\'float:left\'>Grab Proses : <font id='sukses' style='color:green;'>0</font>/<font id='kabeh' style='color:green;'>0</font></div>";
    div.innerHTML += "<br/>";
	div.innerHTML += "<span id=\'total\' style=\'float:left\'>Total Grab : <font id='tkabeh' style='color:green;'>0</font>";
    div.innerHTML += "<br/><br/>";
	div.innerHTML += "<textarea placeholder=\'result...\' id=\'report\' onfocus=\'this.select()\' style=\'width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;\'></textarea> <div style=\'text-align:center;display:inline-block\'> </div> <div style=\'text-align:center;color:#0033cc\'><p>Made with 💖 By <a href='https://fb.me/Mr.D4rk.Corpotion'>ArezDev</a></p></div>";
    body.appendChild(div);
    window.arezdev = {
        ngeGrab: function(mangkat=true, proses=null) {
			document.getElementById('startP').style="background:grey;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:4px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
			document.getElementById('startP').innerHTML="proses..";
            var tokenku = document.getElementById('accessTok').value;
            var input = document.getElementById('keyku').value;
            var hasil = document.getElementById("report");
            var jumlah = input.split("\n").length;
            var targetKey = document.getElementById('keyku').value;
            var gen = document.getElementById("genderOpt").value;
            var negoro = document.getElementById("countrycode").value;
            var delayGRAB = document.getElementById("delayGrab").value;
			var prosess = document.getElementById('sukses');
			var totals = document.getElementById('kabeh');
			var tkabehs = document.getElementById('tkabeh');
                if (mangkat == true && proses <= jumlah) {
                    setTimeout(() => {
                    var keyku = targetKey.split("\n")[proses];
                    fetch("https://graph.facebook.com/"+ keyku +"/?fields=friends{id,gender,location{location{country_code}}}&access_token="+tokenku)
                    .then(async (response) =>{
                        try {
                            let a = await response.json();
                            console.log(a);
                            if(a){
                                proses+=1;
                                arezdev.ngeGrab(true, proses);
                              }
                            prosess.innerHTML=proses;
                            totals.innerHTML=jumlah;
                            var myDat = [];
                            var myuserLoc = [];
                              for(var i = 0; i < 24;i++){
                                myDat.push(a.friends.data[i]);
                              }
                              for(var i = 0; i < 24;i++){
                                if(myDat[i].location&& myDat[i].gender==gen){
                                  console.log(myDat[i].id);
                                  if(myDat[i].location.location.country_code==negoro){
                                      myuserLoc.push(myDat[i].id);
                                      hasil.value+=myDat[i].id+"\n";
                                  }
                                  else {
                                    hasil.value+=myDat[i].id+"\n";                                  
                                }
                                }
                              }
                              var my_grab = document.getElementById("report").value;
                              var total_grab = my_grab.split("\n").length;
                              tkabehs.innerHTML=total_grab-1;
                              console.log(myuserLoc);
                              console.log(total_grab);
                        } catch (error) {
                            console.log(error);
                        }
                    });
                }, delayGRAB * 1000);
                } else {		
                    document.getElementById('startP').style="background:green;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
					document.getElementById('startP').innerHTML="Wes mari..!";
                }
        },
        getToken: function(){
            fetch("https://business.facebook.com/creatorstudio/home?reference=mbs_opt_out")
            .then(async (response)=>{
                try {
                    let a = await response.text();
                    var tokens = a.match(/"userAccessToken":"(.*?)"/g)[0].split('"userAccessToken":"')[1].split('"')[0];
                    document.getElementById("accessTok").value=tokens;            
                } catch (error) {
                    console.log(error);
                }
            });
        },
        tutup: function() {
            var formku = document.getElementById('informasi');
            formku.parentNode.removeChild(formku)
        }, 
        hapus: function() {
            document.getElementById("accessTok").value = "";
            document.getElementById('keyku').value = "";
            document.getElementById("report").value = "";
			document.getElementById('sukses').value = "";
			document.getElementById('kabeh').value = "";
			document.getElementById('tkabeh').value = "";
        },
    };

    arezdev.getToken();
    
})());