(function(g){var window=this;'use strict';var Vvb=function(a,b){a.jb("onAutonavCoundownStarted",b)},j6=function(a,b,c){g.Uv(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.fh(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.pS&&(b.lengthText?(e=b.lengthText||null,f=b.tx||null):b.lengthSeconds&&(e=g.WF(b.lengthSeconds),f=g.WF(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.QVa(d).type;var l=b instanceof g.pS?b.isLivePlayback:null,m=b instanceof g.pS?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],t=[];n&&r.push(n);p&&(r.push(p),t.push(p));q&&t.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.jJ("Regarder $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.bl(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:t.join(" \u2022 "),autoplayAlternativeHeader:b.gt};b instanceof g.oS&&(c.playlist_length=b.playlistLength);a.update(c)},k6=function(a){var b=a.U(),c=b.D;
g.W.call(this,{I:"a",S:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",Ka:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},V:[{I:"div",X:{"aria-label":"{{timestamp}}"},Ka:["ytp-autonav-timestamp"],xa:"{{duration}}"},{I:"div",Ka:["ytp-autonav-live-stamp"],xa:"En direct"},
{I:"div",Ka:["ytp-autonav-upcoming-stamp"],xa:"\u00c0 venir"},{I:"div",S:"ytp-autonav-list-overlay",V:[{I:"div",S:"ytp-autonav-mix-text",xa:"Mix"},{I:"div",S:"ytp-autonav-mix-icon"}]}]},{I:"div",Ka:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],xa:"{{title}}"},{I:"div",Ka:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],xa:"{{author}}"},{I:"div",Ka:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],xa:"{{views_and_publish_time}}"}]});this.J=
a;this.suggestion=null;this.j=c;this.listen("click",this.onClick);this.listen("keypress",this.onKeyPress)},l6=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{I:"div",S:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.K=b;this.cancelCommand=this.G=void 0;this.C=0;this.container=new g.W({I:"div",S:"ytp-autonav-endscreen-countdown-container"});g.N(this,this.container);this.container.Ja(this.element);b=a.U();var d=b.D;this.J=a;this.suggestion=null;this.onVideoDataChange("newdata",this.J.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);this.j=new g.W({I:"div",S:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}",
"data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-header"},{I:"div",S:"ytp-autonav-endscreen-upnext-alternative-header",xa:"{{autoplayAlternativeHeader}}"},{I:"a",S:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.Y:""},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-thumbnail",X:{style:"{{background}}"},V:[{I:"div",X:{"aria-label":"{{timestamp}}"},Ka:["ytp-autonav-timestamp"],
xa:"{{duration}}"},{I:"div",Ka:["ytp-autonav-live-stamp"],xa:"En direct"},{I:"div",Ka:["ytp-autonav-upcoming-stamp"],xa:"\u00c0 venir"}]},{I:"div",S:"ytp-autonav-endscreen-video-info",V:[{I:"div",S:"ytp-autonav-endscreen-premium-badge"},{I:"div",S:"ytp-autonav-endscreen-upnext-title",xa:"{{title}}"},{I:"div",S:"ytp-autonav-endscreen-upnext-author",xa:"{{author}}"},{I:"div",S:"ytp-autonav-view-and-date",xa:"{{views_and_publish_time}}"},{I:"div",S:"ytp-autonav-author-and-view",xa:"{{author_and_views}}"}]}]}]});
g.N(this,this.j);this.j.Ja(this.container.element);d||this.T(this.j.Fa("ytp-autonav-endscreen-link-container"),"click",this.HU);this.J.createClientVe(this.container.element,this,115127);this.J.createClientVe(this.j.Fa("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({I:"div",S:"ytp-autonav-overlay"});g.N(this,this.overlay);this.overlay.Ja(this.container.element);this.B=new g.W({I:"div",S:"ytp-autonav-endscreen-button-container"});g.N(this,this.B);this.B.Ja(this.container.element);
this.cancelButton=new g.W({I:"button",Ka:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"Annuler la lecture automatique"},xa:"Annuler"});g.N(this,this.cancelButton);this.cancelButton.Ja(this.B.element);this.cancelButton.listen("click",this.R4,this);this.J.createClientVe(this.cancelButton.element,this,115129);this.playButton=new g.W({I:"a",Ka:["ytp-autonav-endscreen-upnext-button",
"ytp-autonav-endscreen-upnext-play-button",b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"Lire la vid\u00e9o suivante"},xa:"Regarder"});g.N(this,this.playButton);this.playButton.Ja(this.B.element);this.playButton.listen("click",this.HU,this);this.J.L("web_player_autonav_next_button_renderer")?(this.J.createServerVe(this.playButton.element,this.playButton,!0),(b=this.J.getVideoData())&&Wvb(this,b)):this.J.createClientVe(this.playButton.element,
this,115130);this.D=new g.Iv(function(){Xvb(c)},500);
g.N(this,this.D);this.GU();this.T(a,"autonavvisibility",this.GU);this.J.L("web_autonav_color_transition")&&(this.T(a,"autonavchange",this.Q4),this.T(a,"onAutonavCoundownStarted",this.oaa))},m6=function(a){var b=a.J.Rn(!0,a.J.isFullscreen());
g.Uv(a.container.element,"ytp-autonav-endscreen-small-mode",a.Pg(b));g.Uv(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.hM);g.Uv(a.J.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.J.Gf());g.Uv(a.J.getRootNode(),"countdown-running",a.jl());g.Uv(a.container.element,"ytp-player-content",a.J.Gf());g.Is(a.overlay.element,{width:b.width+"px"});if(!a.jl()){a.J.Gf()?Yvb(a,Math.round(Zvb(a)/1E3)):Yvb(a);b=!!a.suggestion&&!!a.suggestion.gt;var c=a.J.Gf()||!b;
g.Uv(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.Uv(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.aF(a.B,a.J.Gf());g.Uv(a.element,"ytp-enable-w2w-color-transitions",$vb(a))}},Xvb=function(a){var b=Zvb(a),c=Math,d=c.min;
var e=a.C?Date.now()-a.C:0;c=d.call(c,e,b);Yvb(a,Math.ceil((b-c)/1E3));500>=b-c&&a.jl()?a.select(!0):a.jl()&&a.D.start()},Zvb=function(a){if(a.J.isFullscreen()){var b;
a=null==(b=a.J.getVideoData())?void 0:b.UC;return-1===a||void 0===a?8E3:a}return 0<=a.J.Lt()?a.J.Lt():g.xI(a.J.U().experiments,"autoplay_time")||1E4},Wvb=function(a,b){a.J.L("web_player_autonav_next_button_renderer");
b=b.Bda;a.G=null==b?void 0:b.navigationEndpoint;b=null==b?void 0:b.trackingParams;a.playButton&&b&&a.J.setTrackingParams(a.playButton.element,b)},$vb=function(a){var b;
return!(null==(b=a.J.getVideoData())||!b.watchToWatchTransitionRenderer)},Yvb=function(a,b){b=void 0===b?-1:b;
a=a.j.Fa("ytp-autonav-endscreen-upnext-header");g.Cf(a);if(0<=b){b=String(b);var c="Prochaine vid\u00e9o dans $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Prochaine vid\u00e9o dans $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.zf("Prochaine vid\u00e9o dans $SECONDS".slice(0,d)));var e=g.yf("span");g.Ov(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Kf(e,b);a.appendChild(e);a.appendChild(g.zf("Prochaine vid\u00e9o dans $SECONDS".slice(d+c.length)));return}}g.Kf(a,"\u00c0 suivre")},
n6=function(a,b){g.W.call(this,{I:"div",
Ka:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},o6=function(a){g.W.call(this,{I:"div",
Ka:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},V:[{I:"div",S:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{I:"span",S:"ytp-upnext-top",V:[{I:"span",S:"ytp-upnext-header",xa:"\u00c0 suivre"},{I:"span",S:"ytp-upnext-title",xa:"{{title}}"},{I:"span",S:"ytp-upnext-author",xa:"{{author}}"}]},{I:"a",S:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"Lire la vid\u00e9o suivante"},V:[{I:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},V:[{I:"circle",S:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",S:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",S:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",S:"ytp-upnext-bottom",V:[{I:"span",S:"ytp-upnext-cancel"},{I:"span",S:"ytp-upnext-paused",
xa:"La lecture automatique est d\u00e9sactiv\u00e9e"}]}]});this.api=a;this.cancelButton=null;this.G=this.Fa("ytp-svg-autoplay-ring");this.C=this.notification=this.j=this.suggestion=null;this.D=new g.Iv(this.JI,5E3,this);this.B=0;var b=this.Fa("ytp-upnext-cancel");this.cancelButton=new g.W({I:"button",Ka:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"Annuler la lecture automatique"},xa:"Annuler"});g.N(this,this.cancelButton);this.cancelButton.listen("click",this.S4,this);this.cancelButton.Ja(b);
this.cancelButton&&this.api.createClientVe(this.cancelButton.element,this,115129);g.N(this,this.D);this.api.createClientVe(this.element,this,18788);b=this.Fa("ytp-upnext-autoplay-icon");this.T(b,"click",this.T4);this.api.createClientVe(b,this,115130);this.IU();this.T(a,"autonavvisibility",this.IU);this.T(a,"mdxnowautoplaying",this.aba);this.T(a,"mdxautoplaycanceled",this.bba);g.Uv(this.element,"ytp-upnext-mobile",this.api.U().B)},awb=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.UC;return-1===a||void 0===a?8E3:a}return 0<=a.api.Lt()?a.api.Lt():g.xI(a.api.U().experiments,"autoplay_time")||1E4},bwb=function(a,b){b=awb(a,b);
var c=Math,d=c.min;var e=(0,g.wC)()-a.B;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.G.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.jl()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.jl()&&a.j.start()},p6=function(a){n6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.W({I:"div",S:"ytp-suggestion-panel",V:[{I:"div",Ka:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],xa:"Plus de vid\u00e9os"}]});this.N=new g.W({I:"div",S:"ytp-suggestions-container"});this.videos=[];this.C=null;this.G=this.K=!1;this.B=new l6(this.player);g.N(this,this.B);this.B.Ja(this.element);a.getVideoData().Sf?this.j=this.B:(this.j=new o6(a),g.UT(this.player,this.j.element,4),g.N(this,this.j));this.overlay=new g.W({I:"div",
S:"ytp-autonav-overlay-cancelled-state"});g.N(this,this.overlay);this.overlay.Ja(this.element);this.D=new g.YJ(this);g.N(this,this.D);g.N(this,this.table);this.table.Ja(this.element);this.table.show();g.N(this,this.N);this.N.Ja(this.table.element);this.hide()},q6=function(a){var b=a.Gf();
b!==a.G&&(a.G=b,a.player.publish("autonavvisibility"),a.G?(a.B!==a.j&&a.B.hide(),a.table.hide()):(a.B!==a.j&&a.B.show(),a.table.show()))},r6=function(a,b){g.W.call(this,{I:"button",
Ka:["ytp-watch-on-youtube-button","ytp-button"],xa:"{{content}}"});this.J=a;this.buttonType=this.buttonType=b;this.G1();2===this.buttonType&&g.Qv(this.element,"ytp-continue-watching-button");this.listen("click",this.onClick);this.listen("videodatachange",this.G1);g.aF(this,!0)},s6=function(a,b){n6.call(this,a,"embeds-lite-endscreen");
this.J=a;this.Oe=b;this.J.createClientVe(this.element,this,156943);this.watchButton=new r6(a,2);g.N(this,this.watchButton);this.watchButton.Ja(this.element);this.hide()},cwb=function(a){n6.call(this,a,"subscribecard-endscreen");
this.j=new g.W({I:"div",S:"ytp-subscribe-card",V:[{I:"img",S:"ytp-author-image",X:{src:"{{profilePicture}}"}},{I:"div",S:"ytp-subscribe-card-right",V:[{I:"div",S:"ytp-author-name",xa:"{{author}}"},{I:"div",S:"html5-subscribe-button-container"}]}]});g.N(this,this.j);this.j.Ja(this.element);var b=a.getVideoData();this.subscribeButton=new g.cW("S'abonner",null,"Se d\u00e9sabonner",null,!0,!1,b.Il,b.subscribed,"trailer-endscreen",null,a,!1);g.N(this,this.subscribeButton);this.subscribeButton.Ja(this.j.Fa("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Ta);this.Ta();this.hide()},t6=function(a){var b=a.U(),c=g.WJ||g.AR?{style:"will-change: opacity"}:void 0,d=b.D,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.W.call(this,{I:"a",Ka:e,X:{href:"{{url}}",target:d?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},V:[{I:"div",S:"ytp-videowall-still-image",X:{style:"{{background}}"}},{I:"span",S:"ytp-videowall-still-info",X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-info-bg",V:[{I:"span",S:"ytp-videowall-still-info-content",X:c,V:[{I:"span",S:"ytp-videowall-still-info-title",xa:"{{title}}"},
{I:"span",S:"ytp-videowall-still-info-author",xa:"{{author_and_views}}"},{I:"span",S:"ytp-videowall-still-info-live",xa:"En direct"},{I:"span",S:"ytp-videowall-still-info-duration",xa:"{{duration}}"}]}]}]},{I:"span",Ka:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-icon"},"Playlist",{I:"span",S:"ytp-videowall-still-listlabel-length",V:[" (",{I:"span",xa:"{{playlist_length}}"},")"]}]},{I:"span",Ka:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",S:"ytp-videowall-still-listlabel-length",xa:" (50+)"}]}]});this.suggestion=null;this.B=d;this.api=a;this.j=new g.YJ(this);g.N(this,this.j);this.listen("click",this.onClick);this.listen("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.createServerVe(this.element,this);this.onVideoDataChange()},u6=function(a){n6.call(this,a,"videowall-endscreen");
var b=this;this.J=a;this.C=0;this.stills=[];this.D=this.videoData=null;this.G=this.N=!1;this.Y=null;this.B=new g.YJ(this);g.N(this,this.B);this.K=new g.Iv(function(){g.Qv(b.element,"ytp-show-tiles")},0);
g.N(this,this.K);var c=new g.W({I:"button",Ka:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"Pr\u00e9c\u00e9dente"},V:[g.gF()]});g.N(this,c);c.Ja(this.element);c.listen("click",this.X4,this);this.table=new g.YE({I:"div",S:"ytp-endscreen-content"});g.N(this,this.table);this.table.Ja(this.element);c=new g.W({I:"button",Ka:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"Suivante"},V:[g.hF()]});g.N(this,c);c.Ja(this.element);c.listen("click",this.W4,this);a.getVideoData().Sf?this.j=new l6(a,
!0):this.j=new o6(a);g.N(this,this.j);g.UT(this.player,this.j.element,4);a.createClientVe(this.element,this,158789);this.hide()},v6=function(a){return g.VT(a.player)&&a.SD()&&!a.D},w6=function(a){var b=a.Gf();
b!==a.N&&(a.N=b,a.player.publish("autonavvisibility"))},x6=function(a){n6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new r6(a,1);g.N(this,this.watchButton);this.watchButton.Ja(this.element);g.akb(a)&&(this.j=new g.j2(a),g.N(this,this.j),this.B=new g.W({I:"div",Ka:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],X:{tabIndex:"-1"},V:[this.j]}),g.N(this,this.B),this.j.Ja(this.B.element),this.B.Ja(this.element));a.createClientVe(this.element,this,156914);this.hide()},gwb=function(a){g.tV.call(this,a);
var b=this;this.endScreen=null;this.B=this.j=this.C=this.D=!1;this.listeners=new g.YJ(this);g.N(this,this.listeners);var c=a.U(),d=a.getVideoData();d=d&&0!==d.limitedPlaybackDurationInSeconds;g.tB(g.JR(c))&&d&&!g.RT(a)?(this.B=!0,this.endScreen=new s6(a,g.IT(a))):a.bd()?this.endScreen=new x6(a):dwb(a)?(this.D=!0,ewb(this),this.j?this.endScreen=new p6(a):this.endScreen=new u6(a)):c.Ig?this.endScreen=new cwb(a):this.endScreen=new n6(a);g.N(this,this.endScreen);g.UT(a,this.endScreen.element,4);fwb(this);
this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.dJ("endscreen"),function(e){b.onCueRangeEnter(e)});
this.listeners.T(a,g.eJ("endscreen"),function(e){b.onCueRangeExit(e)})},ewb=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Pl&&a.C===b.Sf)return!1;a.j=b.Pl;a.C=b.Sf;return!0},dwb=function(a){a=a.U();
return a.zd&&!a.Ig},fwb=function(a){a.player.nf("endscreen");
var b=a.player.getVideoData();b=new g.cJ(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.cJ(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.hf([b,c])};
g.NT.prototype.Lt=g.fa(15,function(){return this.app.Lt()});
g.I0.prototype.Lt=g.fa(14,function(){return this.getVideoData().bX});
g.JT.prototype.Cs=g.fa(13,function(a){this.Di().Cs(a)});
g.rW.prototype.Cs=g.fa(12,function(a){this.j!==a&&(this.j=a,this.Ta())});
g.yX.prototype.Cs=g.fa(11,function(a){this.overflowButton&&this.overflowButton.Cs(a)});
g.JT.prototype.Ds=g.fa(10,function(a){this.Di().Ds(a)});
g.wW.prototype.Ds=g.fa(9,function(a){this.j!==a&&(this.j=a,this.Ta())});
g.yX.prototype.Ds=g.fa(8,function(a){this.shareButton&&this.shareButton.Ds(a)});
g.JT.prototype.eC=g.fa(7,function(a){this.Di().eC(a)});
g.WV.prototype.eC=g.fa(6,function(a){this.bS!==a&&(this.bS=a,this.Nq())});
g.JT.prototype.dC=g.fa(5,function(a){this.Di().dC(a)});
g.yX.prototype.dC=g.fa(4,function(a){this.aS!==a&&(this.aS=a,this.Mq())});g.y(k6,g.W);k6.prototype.select=function(){this.J.Zo(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.pE||void 0)&&this.J.logClick(this.element)};
k6.prototype.onClick=function(a){g.lU(a,this.J,this.j,this.suggestion.sessionData||void 0)&&this.select()};
k6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};g.y(l6,g.W);g.k=l6.prototype;g.k.PH=function(a){this.suggestion!==a&&(this.suggestion=a,j6(this.j,a),this.playButton.updateValue("url",this.suggestion.bl()),m6(this))};
g.k.jl=function(){return 0<this.C};
g.k.mC=function(){this.jl()||(this.C=Date.now(),Xvb(this),Vvb(this.J,Zvb(this)),g.Uv(this.J.getRootNode(),"countdown-running",this.jl()))};
g.k.Wx=function(){this.Hq();Xvb(this);var a=this.j.Fa("ytp-autonav-endscreen-upnext-header");a&&g.Kf(a,"\u00c0 suivre")};
g.k.Hq=function(){this.jl()&&(this.D.stop(),this.C=0)};
g.k.select=function(a){this.J.nextVideo(!1,void 0===a?!1:a);this.Hq()};
g.k.HU=function(a){g.lU(a,this.J)&&(a.currentTarget===this.playButton.element?this.J.logClick(this.playButton.element):a.currentTarget===this.j.Fa("ytp-autonav-endscreen-link-container")&&(a=this.j.Fa("ytp-autonav-endscreen-link-container"),this.J.logVisibility(a,!0),this.J.logClick(a)),this.J.L("web_player_autonav_next_button_renderer")&&this.G?(this.J.jb("innertubeCommand",this.G),this.Hq()):this.select())};
g.k.R4=function(){this.J.logClick(this.cancelButton.element);g.PT(this.J,!0);this.cancelCommand&&this.J.jb("innertubeCommand",this.cancelCommand)};
g.k.onVideoDataChange=function(a,b){this.J.L("web_player_autonav_next_button_renderer")&&Wvb(this,b);var c;this.cancelCommand=null==(c=b.ida)?void 0:c.command};
g.k.oaa=function(a){if($vb(this)){var b=this.J.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.dG(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.dG(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.dG(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.dG(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.dG(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.dG(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.Uv(this.element,"ytp-w2w-animate",!0)}};
g.k.Q4=function(a){this.J.L("web_autonav_color_transition")&&2!==a&&g.Uv(this.element,"ytp-w2w-animate",!1)};
g.k.GU=function(){var a=this.J.Gf();this.K&&this.Gb!==a&&g.aF(this,a);m6(this);this.J.logVisibility(this.container.element,a);this.J.logVisibility(this.cancelButton.element,a);this.J.logVisibility(this.j.Fa("ytp-autonav-endscreen-link-container"),a);this.J.logVisibility(this.playButton.element,a)};
g.k.Pg=function(a){return 400>a.width||459>a.height};g.y(n6,g.W);g.k=n6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.SD=function(){return!1};
g.k.Gf=function(){return!1};
g.k.tZ=function(){return!1};g.y(o6,g.W);g.k=o6.prototype;g.k.JI=function(){this.notification&&(this.D.stop(),this.Pc(this.C),this.C=null,this.notification.close(),this.notification=null)};
g.k.PH=function(a){this.suggestion=a;j6(this,a,"hqdefault.jpg")};
g.k.IU=function(){g.aF(this,this.api.Gf());this.api.logVisibility(this.element,this.api.Gf());this.api.logVisibility(this.Fa("ytp-upnext-autoplay-icon"),this.api.Gf());this.cancelButton&&this.api.logVisibility(this.cancelButton.element,this.api.Gf())};
g.k.lba=function(){window.focus();this.JI()};
g.k.mC=function(a){var b=this;this.jl()||(g.GD("a11y-announce","\u00c0 suivre "+this.suggestion.title),this.B=(0,g.wC)(),this.j=new g.Iv(function(){bwb(b,a)},25),bwb(this,a),Vvb(this.api,awb(this,a)));
g.Sv(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.W.prototype.hide.call(this)};
g.k.jl=function(){return!!this.j};
g.k.Wx=function(){this.Hq();this.B=(0,g.wC)();bwb(this);g.Qv(this.element,"ytp-upnext-autoplay-paused")};
g.k.Hq=function(){this.jl()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.U().L("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.JI(),this.notification=new Notification("\u00c0 suivre",{body:this.suggestion.title,icon:this.suggestion.fh()}),this.C=this.T(this.notification,"click",this.lba),this.D.start())}this.Hq();this.api.nextVideo(!1,a)};
g.k.T4=function(a){!g.Jf(this.cancelButton.element,a.target)&&g.lU(a,this.api)&&(this.api.Gf()&&this.api.logClick(this.Fa("ytp-upnext-autoplay-icon")),this.select())};
g.k.S4=function(){this.api.Gf()&&this.cancelButton&&this.api.logClick(this.cancelButton.element);g.PT(this.api,!0)};
g.k.aba=function(a){this.api.getPresentingPlayerType();this.show();this.mC(a)};
g.k.bba=function(){this.api.getPresentingPlayerType();this.Hq();this.hide()};
g.k.va=function(){this.Hq();this.JI();g.W.prototype.va.call(this)};g.y(p6,n6);g.k=p6.prototype;g.k.create=function(){n6.prototype.create.call(this);this.D.T(this.player,"appresize",this.dD);this.D.T(this.player,"onVideoAreaChange",this.dD);this.D.T(this.player,"videodatachange",this.onVideoDataChange);this.D.T(this.player,"autonavchange",this.JU);this.D.T(this.player,"onAutonavCancelled",this.U4);this.onVideoDataChange()};
g.k.show=function(){n6.prototype.show.call(this);(this.K||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.PT(this.player,!1);g.VT(this.player)&&this.SD()&&!this.C?(q6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.mC():3===this.videoData.autonavState&&this.j.Wx()):(g.PT(this.player,!0),q6(this));this.dD()};
g.k.hide=function(){n6.prototype.hide.call(this);this.j.Wx();q6(this)};
g.k.dD=function(){var a=this.player.Rn(!0,this.player.isFullscreen());q6(this);m6(this.B);g.Uv(this.element,"ytp-autonav-cancelled-small-mode",this.Pg(a));g.Uv(this.element,"ytp-autonav-cancelled-tiny-mode",this.mK(a));g.Uv(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Is(this.overlay.element,{width:a.width+"px"});if(!this.G)for(a=0;a<this.videos.length;a++)g.Uv(this.videos[a].element,"ytp-suggestion-card-with-margin",1===a%2)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.L("web_player_autonav_empty_suggestions_fix")){var b=g.QS(this.videoData);b&&(this.j.PH(b),this.j!==this.B&&this.B.PH(b))}if(a&&a.length)for(b=0;b<hwb.length;++b){var c=hwb[b];if(a&&a[c]){this.videos[b]=new k6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,j6(d,c));g.N(this,this.videos[b]);this.videos[b].Ja(this.N.element)}}this.dD()}};
g.k.JU=function(a){1===a?(this.K=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Hq(),this.Gb&&this.dD()):(this.K=!0,this.Gf()&&(2===a?this.j.mC():3===a&&this.j.Wx()))};
g.k.U4=function(a){a?this.JU(1):(this.C=null,this.K=!1)};
g.k.SD=function(){return 1!==this.videoData.autonavState};
g.k.Pg=function(a){return(910>a.width||459>a.height)&&!this.mK(a)&&!(400>=a.width||360>=a.height)};
g.k.mK=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Gf=function(){return this.Gb&&g.VT(this.player)&&this.SD()&&!this.C};
var hwb=[1,3,2,4];g.y(r6,g.W);g.k=r6.prototype;g.k.G1=function(){switch(this.buttonType){case 1:var a="Regarder \u00e0 nouveau sur YouTube";var b=156915;break;case 2:a="Continuer \u00e0 regarder sur YouTube";b=156942;break;default:a="Continuer \u00e0 regarder sur YouTube",b=156942}this.update({content:a});this.J.hasVe(this.element)&&this.J.destroyVe(this.element);this.J.createClientVe(this.element,this,b)};
g.k.onClick=function(a){this.J.L("web_player_log_click_before_generating_ve_conversion_params")&&this.J.logClick(this.element);g.mU(this.getVideoUrl(),this.J,a);this.J.L("web_player_log_click_before_generating_ve_conversion_params")||this.J.logClick(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.J.getVideoUrl(a,!1,!1,!0);var b=this.J.U();if(g.BR(b)){var c={};g.BR(b)&&g.CT(this.J,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.XO(c,b);a=g.to(a,c)}return a};
g.k.logVisibility=function(){this.J.logVisibility(this.element,this.Gb&&this.Z)};
g.k.show=function(){g.W.prototype.show.call(this);this.logVisibility()};
g.k.hide=function(){g.W.prototype.hide.call(this);this.logVisibility()};
g.k.Lc=function(a){g.W.prototype.Lc.call(this,a);this.logVisibility()};g.y(s6,n6);s6.prototype.show=function(){3!==this.player.getPlayerState()&&(n6.prototype.show.call(this),this.Oe.dC(!0),this.Oe.Ds(!0),this.J.U().ge||this.Oe.Cs(!0),this.J.logVisibility(this.element,!0),this.watchButton.Lc(!0))};
s6.prototype.hide=function(){n6.prototype.hide.call(this);this.Oe.dC(!1);this.Oe.Ds(!1);this.Oe.Cs(!1);this.J.logVisibility(this.element,!1);this.watchButton.Lc(!1)};g.y(cwb,n6);cwb.prototype.Ta=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Il;var b=this.subscribeButton;a.subscribed?b.j():b.B()};g.y(t6,g.W);t6.prototype.select=function(){this.api.Zo(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.pE||void 0)&&this.api.logClick(this.element)};
t6.prototype.onClick=function(a){if(g.BR(this.api.U())&&this.api.L("web_player_log_click_before_generating_ve_conversion_params")){this.api.logClick(this.element);var b=this.suggestion.bl(),c={};g.pYa(this.api,c,"emb_rel_end");b=g.to(b,c);g.mU(b,this.api,a)}else g.lU(a,this.api,this.B,this.suggestion.sessionData||void 0)&&this.select()};
t6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};
t6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.U();this.B=a.If?!1:b.D};g.y(u6,n6);g.k=u6.prototype;g.k.create=function(){n6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Tq();this.B.T(this.player,"appresize",this.Tq);this.B.T(this.player,"onVideoAreaChange",this.Tq);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.B.T(this.player,"autonavchange",this.UM);this.B.T(this.player,"onAutonavCancelled",this.V4);a=this.videoData.autonavState;a!==this.Y&&this.UM(a);this.B.T(this.element,"transitionend",this.yca)};
g.k.destroy=function(){g.MB(this.B);g.wb(this.stills);this.stills=[];n6.prototype.destroy.call(this);g.Sv(this.element,"ytp-show-tiles");this.K.stop();this.Y=this.videoData.autonavState};
g.k.SD=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.Gb;n6.prototype.show.call(this);g.Sv(this.element,"ytp-show-tiles");this.player.U().B?g.Kv(this.K):this.K.start();(this.G||this.D&&this.D!==this.videoData.clientPlaybackNonce)&&g.PT(this.player,!1);v6(this)?(w6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.mC():3===this.videoData.autonavState&&this.j.Wx()):(g.PT(this.player,!0),w6(this));a!==this.Gb&&this.player.logVisibility(this.element,!0)};
g.k.hide=function(){var a=this.Gb;n6.prototype.hide.call(this);this.j.Wx();w6(this);a!==this.Gb&&this.player.logVisibility(this.element,!1)};
g.k.yca=function(a){a.target===this.element&&this.Tq()};
g.k.Tq=function(){var a,b,c,d;var e=(null==(a=this.videoData)?0:null==(b=a.suggestions)?0:b.length)?null==(c=this.videoData)?void 0:c.suggestions:[null==(d=this.videoData)?void 0:g.QS(d)];if(e.length){g.Qv(this.element,"ytp-endscreen-paginate");var f=this.J.Rn(!0,this.J.isFullscreen());if(a=g.IT(this.J))a=a.Fh()?48:32,f.width-=2*a;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;0<p&&(a<l||b<m);){var q=a/2,r=b/2,t=a<=l-2&&p>=r*n,v=b<=m-2&&p>=q*n;if((q+1)/r*d/h>h/(q/(r+1)*d)&&v)p-=q*n,b+=2;else if(t)p-=r*n,a+=2;else if(v)p-=q*n,b+=2;else break}d=!1;p>=3*n&&6>=c*n-p&&(4<=b||4<=a)&&(d=!0);n=96*a;p=54*b;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.Ts(f,n,p);g.Is(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.PH(g.QS(this.videoData));this.j instanceof
l6&&m6(this.j);g.Uv(this.element,"ytp-endscreen-takeover",v6(this));w6(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,t=0,d&&l>=a-2&&m>=b-2?t=1:0===m%2&&0===l%2&&(2>m&&2>l?0===m&&0===l&&(t=2):t=2),q=g.Ae(q+this.C,c),0!==t){r=this.stills[h];r||(r=new t6(this.player),this.stills[h]=r,f.appendChild(r.element));v=Math.floor(p*m/b);var w=Math.floor(n*l/a),A=Math.floor(p*(m+t)/b)-v-4,C=Math.floor(n*(l+t)/a)-w-4;g.Ps(r.element,w,v);g.Ts(r.element,C,A);g.Is(r.element,"transitionDelay",
(m+l)/20+"s");g.Uv(r.element,"ytp-videowall-still-mini",1===t);g.Uv(r.element,"ytp-videowall-still-large",2<t);t=Math.max(C,A);g.Uv(r.element,"ytp-videowall-still-round-large",256<=t);g.Uv(r.element,"ytp-videowall-still-round-medium",96<t&&256>t);g.Uv(r.element,"ytp-videowall-still-round-small",96>=t);q=e[q];r.suggestion!==q&&(r.suggestion=q,t=r.api.U(),v=g.Pv(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",j6(r,q,v),g.BR(t)&&!r.api.L("web_player_log_click_before_generating_ve_conversion_params")&&
(t=q.bl(),v={},g.CT(r.api,"addEmbedsConversionTrackingParams",[v]),t=g.to(t,g.XO(v,"emb_rel_end")),r.updateValue("url",t)),(q=(q=q.sessionData)&&q.itct)&&r.api.setTrackingParams(r.element,q));h++}f.ariaBusy="false";g.Uv(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.Ef(a.element),g.vb(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData(1);this.videoData!==a&&(null!=a&&g.QS(a)?(this.C=0,this.videoData=a,this.Tq()):this.player.ma("missg",{vid:(null==a?void 0:a.videoId)||"",cpn:(null==a?void 0:a.clientPlaybackNonce)||""}))};
g.k.W4=function(){this.C+=this.stills.length;this.Tq()};
g.k.X4=function(){this.C-=this.stills.length;this.Tq()};
g.k.tZ=function(){return this.j.jl()};
g.k.UM=function(a){1===a?(this.G=!1,this.D=this.videoData.clientPlaybackNonce,this.j.Hq(),this.Gb&&this.Tq()):(this.G=!0,this.Gb&&v6(this)&&(2===a?this.j.mC():3===a&&this.j.Wx()))};
g.k.V4=function(a){if(a){for(a=0;a<this.stills.length;a++)this.J.logVisibility(this.stills[a].element,!0);this.UM(1)}else this.D=null,this.G=!1;this.Tq()};
g.k.Gf=function(){return this.Gb&&v6(this)};g.y(x6,n6);x6.prototype.show=function(){if(3!==this.player.getPlayerState()){n6.prototype.show.call(this);var a=this.B;if(a){var b=0<this.j.suggestionData.length;g.Uv(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.IT(this.player))||c.eC(!0);this.player.logVisibility(this.element,!0);this.watchButton.Lc(!0)}};
x6.prototype.hide=function(){n6.prototype.hide.call(this);var a;null==(a=g.IT(this.player))||a.eC(!1);this.player.logVisibility(this.element,!1);this.watchButton.Lc(!1)};g.y(gwb,g.tV);g.k=gwb.prototype;g.k.Xu=function(){var a=this.player.getVideoData(),b=a.mutedAutoplay;if((this.player.bd()||this.B)&&!b)return!0;var c;var d=!!((null==a?0:g.QS(a))||(null==a?0:null==(c=a.suggestions)?0:c.length));d=!dwb(this.player)||d;a=a.Gj;c=this.player.BE();return d&&!a&&!c&&!b};
g.k.Gf=function(){return this.endScreen.Gf()};
g.k.X9=function(){return this.Gf()?this.endScreen.tZ():!1};
g.k.va=function(){this.player.nf("endscreen");g.tV.prototype.va.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.yb().Fe.get("heartbeat"),d=g.QS(a);!d||b.videoId!==d.videoId||a.OV?(this.player.Zo(b.videoId,void 0,void 0,!0,!0,b),c&&c.wK("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.tV.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.tV.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Xu()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){fwb(this);this.D&&ewb(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new p6(this.player):this.endScreen=new u6(this.player),g.N(this,this.endScreen),g.UT(this.player,this.endScreen.element,4))};g.sV("endscreen",gwb);})(_yt_player);
