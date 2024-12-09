// ******** Status Bar Javascript Magic by Likno 1.0 **********
function spect_start() {clearInterval(spect.sttm);spect_init();if (arguments.length>0) spect_init2(arguments[0]);spect.sttm=setInterval ("doEffect('spect')",10);}
function spect_stop() {clearInterval(spect.sttm);window.status="";}

spect_init();
function spect_init() {spect={stel:0,stft:"",stec:1,stcel:1,stce:-1,stcl:-1,stls:-1,stcs:0,sttg:0,stea:["S P E C T R U M - Portal Brasileiro de Cultura Obscura",0,16,1]};}
function spect_init2 (en) {spect.stea=[spect.stea[(en-1)*4],spect.stea[(en-1)*4+1],spect.stea[(en-1)*4+2],spect.stea[(en-1)*4+3]];spect.stec=1;spect.stel=0;}
function doEffect(es) {var s=eval(es);if (s.stce==s.stec) {if (s.stcel==s.stel) {clearInterval(s.sttm);window.status=s.stft;return;} else {if (s.stel>0) s.stcel++;s.stce=-1;s.stcl=s.stls;}}if (s.stcl==s.stls) {s.stce++;s.sttx=s.stea[s.stce*4];s.sttp=s.stea[s.stce*4+1];s.stsd=s.stea[s.stce*4+2];s.stls=s.stea[s.stce*4+3];s.stcl=0;s.stsp=1;s.sttg=0;}if (21-s.stsd-s.sttg==0) {var stres=eval("stEffect"+s.sttp+"(s.sttx,s.stsp++,es);");s.sttg=0;if (stres!="") window.status=stres;else {s.stcl++;s.stsp=1;}}s.sttg++;}
function stEffect0(text,step){if (step>text.length) return "";else return text.substring(0,step);}
spect_start();