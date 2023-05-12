var jsonReq = "ccp=2";
jsonReq = jsonReq + "&reg_instance=S9xTZKbh9gvdcWlcWRn4RuP_";
jsonReq = jsonReq + "&submission_request=true";
jsonReq = jsonReq + "&helper=";
jsonReq = jsonReq + "&reg_impression_id=21af29fb-353f-4fa5-bf41-0251c312d389";
jsonReq = jsonReq + "&ns=1";
jsonReq = jsonReq + "&zero_header_af_client=";
jsonReq = jsonReq + "&app_id=";
jsonReq = jsonReq + "&logger_id=1902456b-535c-4a22-b887-7506daca3bc9";
jsonReq = jsonReq + "&field_names[0]=firstname";
jsonReq = jsonReq + "&firstname=Widyasmoro";
jsonReq = jsonReq + "&lastname=Nindy";
jsonReq = jsonReq + "&field_names[1]=birthday_wrapper";
jsonReq = jsonReq + "&birthday_day=1";
jsonReq = jsonReq + "&birthday_month=8";
jsonReq = jsonReq + "&birthday_year=2001";
jsonReq = jsonReq + "&age_step_input=";
jsonReq = jsonReq + "&did_use_age=false";
jsonReq = jsonReq + "&field_names[2]=reg_email__";
jsonReq = jsonReq + "&reg_email__=gonape7591@syinxun.com";
jsonReq = jsonReq + "&field_names[3]=sex";
jsonReq = jsonReq + "&sex=1";
jsonReq = jsonReq + "&preferred_pronoun=";
jsonReq = jsonReq + "&custom_gender=";
jsonReq = jsonReq + "&field_names[4]=reg_passwd__";
jsonReq = jsonReq + "&reg_passwd__=Siwalan15";
jsonReq = jsonReq + "&name_suggest_elig=false";
jsonReq = jsonReq + "&was_shown_name_suggestions=false";
jsonReq = jsonReq + "&did_use_suggested_name=false";
jsonReq = jsonReq + "&use_custom_gender=false";
jsonReq = jsonReq + "&guid=";
jsonReq = jsonReq + "&pre_form_step=";
jsonReq = jsonReq + "&encpass=#PWD_BROWSER:5:1683218303:AcBQACgMqP433h2Eaj9yvAsib2rbP5CM2jSo0JGIBJnZcNhkaqcJRGh921C4EiOHT3Rjmbqr05cwTmwbV4mtxxf90UXEuDEhhPUQ9Wt6KbYcHc767mmp1Fe6MNDMmPPUBF6Qr9rNGW18HA/MUw==";
jsonReq = jsonReq + "&submit=Daftar";
jsonReq = jsonReq + "&fb_dtsg=NAcNhlu3s8ehK1fgUag_3F6HAJSoDmSDQoHMnlA5_Z7boejIsCtHwOw:0:0";
jsonReq = jsonReq + "&jazoest=24831";
jsonReq = jsonReq + "&lsd=AVpHlF9hFng";
jsonReq = jsonReq + "&__dyn=1Z3pawlEnxe14z-l0BBBgS5UdE4a2i5U4e0C86u7E39x60zU3ex60Vo1a852q1ew65xmq0FE6S1QzU1vohw73wwyo36wqE6K0L82Xw64w8W0iW220jG3qaw4kwbS1Lw9C0z836w";
jsonReq = jsonReq + "&__csr=";
jsonReq = jsonReq + "&__req=u";
jsonReq = jsonReq + "&__a=AYlVjauhJWTaAA5FKxEDgW5-jY-LXkOns4uOrsnG74h1fGbdtE7tIvC5OMg6qGeVBTfIrMiLwdRpOTqR7l38oSoHpKOMJc10RI-A8ZTcepZaeQ";
jsonReq = jsonReq + "&__user=0";

fetch("https://m.facebook.com/reg/submit/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgzMjE3NTY3LCJjYWxsc2l0ZV9pZCI6OTA3OTI0NDAyOTQ4MDU4fQ%3D%3D&multi_step_form=1&skip_suma=0&shouldForceMTouch=1&locale2=id_ID", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-asbd-id": "198387",
    "x-fb-lsd": "AVpHlF9hFng",
    "x-requested-with": "XMLHttpRequest",
    "x-response-format": "JSONStream"
  },
  "referrer": "https://m.facebook.com/r.php?locale=id_ID&soft=hjk",
  "referrerPolicy": "origin-when-cross-origin",
  "body": jsonReq,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(async (response) => {
    try {
        const r = await response.text();
        res = JSON.parse(r.replace("for (;;);", ""));
        console.log(res);
    } catch (err) {
        console.log(err);
    }
    });