(function(E,k,R){var F={transition:"elastic",speed:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,inline:false,html:false,iframe:false,fastIframe:true,photo:false,href:false,title:false,rel:false,opacity:0.75,preloading:true,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:false,returnFocus:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,overlayClose:true,escKey:true,arrowKey:true},v="colorbox",O="cbox",Q=O+"_open",e=O+"_load",P=O+"_complete",s=O+"_cleanup",W=O+"_closed",i=O+"_purge",t=E.browser.msie&&!E.support.opacity,Z=t&&E.browser.version<7,V=O+"_IE6",M,aa,ab,d,C,o,b,L,c,U,I,j,h,n,r,S,q,N,x,y,X={},ac,l,g,a,u,D,m,A,T,H=false,G,p=O+"Element";function K(af,ad){var ae=k.createElement("div");if(af){ae.id=O+af}ae.style.cssText=ad||false;return E(ae)}function J(ad,ae){ae=ae==="x"?U.width():U.height();return(typeof ad==="string")?Math.round((/%/.test(ad)?(ae/100)*parseInt(ad,10):parseInt(ad,10))):ad}function z(ad){return X.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(ad)}function Y(ae){for(var ad in ae){if(E.isFunction(ae[ad])&&ad.substring(0,2)!=="on"){ae[ad]=ae[ad].call(u)}}ae.rel=ae.rel||u.rel||"nofollow";ae.href=E.trim(ae.href||E(u).attr("href"));ae.title=ae.title||u.title}function B(ad,ae){if(ae){ae.call(u)}E.event.trigger(ad)}function w(){var ae,ag=O+"Slideshow_",ah="click."+O,ai,af,ad;if(X.slideshow&&c[1]){ai=function(){S.text(X.slideshowStop).unbind(ah).bind(P,function(){if(D<c.length-1||X.loop){ae=setTimeout(G.next,X.slideshowSpeed)}}).bind(e,function(){clearTimeout(ae)}).one(ah+" "+s,af);aa.removeClass(ag+"off").addClass(ag+"on");ae=setTimeout(G.next,X.slideshowSpeed)};af=function(){clearTimeout(ae);S.text(X.slideshowStart).unbind([P,e,s,ah].join(" ")).one(ah,ai);aa.removeClass(ag+"on").addClass(ag+"off")};if(X.slideshowAuto){ai()}else{af()}}}function f(ad){if(!H){u=ad;Y(E.extend(X,E.data(u,v)));c=E(u);D=0;if(X.rel!=="nofollow"){c=E("."+p).filter(function(){var af=E.data(this,v).rel||this.rel;return(af===X.rel)});D=c.index(u);if(D===-1){c=c.add(u);D=c.length-1}}if(!A){A=T=true;aa.show();if(X.returnFocus){try{u.blur();E(u).one(W,function(){try{this.focus()}catch(af){}})}catch(ae){}}M.css({opacity:+X.opacity,cursor:X.overlayClose?"pointer":"auto"}).show();X.w=J(X.initialWidth,"x");X.h=J(X.initialHeight,"y");G.position(0);if(Z){U.bind("resize."+V+" scroll."+V,function(){M.css({width:U.width(),height:U.height(),top:U.scrollTop(),left:U.scrollLeft()})}).trigger("resize."+V)}B(Q,X.onOpen);y.add(n).hide();x.html(X.close).show()}G.load(true)}}G=E.fn[v]=E[v]=function(ad,ag){var ae=this,af;if(!ae[0]&&ae.selector){return ae}ad=ad||{};if(ag){ad.onComplete=ag}if(!ae[0]||ae.selector===undefined){ae=E("<a/>");ad.open=true}ae.each(function(){E.data(this,v,E.extend({},E.data(this,v)||F,ad));E(this).addClass(p)});af=ad.open;if(E.isFunction(af)){af=af.call(ae)}if(af){f(ae[0])}return ae};G.init=function(){U=E(R);aa=K().attr({id:v,"class":t?O+(Z?"IE6":"IE"):""});M=K("Overlay",Z?"position:absolute":"").hide();ab=K("Wrapper");d=K("Content").append(I=K("LoadedContent","width:0; height:0; overflow:hidden"),h=K("LoadingOverlay").add(K("LoadingGraphic")),n=K("Title"),r=K("Current"),q=K("Next"),N=K("Previous"),S=K("Slideshow").bind(Q,w),x=K("Close"));ab.append(K().append(K("TopLeft"),C=K("TopCenter"),K("TopRight")),K(false,"clear:left").append(o=K("MiddleLeft"),d,b=K("MiddleRight")),K(false,"clear:left").append(K("BottomLeft"),L=K("BottomCenter"),K("BottomRight"))).children().children().css({"float":"left"});j=K(false,"position:absolute; width:9999px; visibility:hidden; display:none");E("body").prepend(M,aa.append(ab,j));d.children().hover(function(){E(this).addClass("hover")},function(){E(this).removeClass("hover")}).addClass("hover");ac=C.height()+L.height()+d.outerHeight(true)-d.height();l=o.width()+b.width()+d.outerWidth(true)-d.width();g=I.outerHeight(true);a=I.outerWidth(true);aa.css({"padding-bottom":ac,"padding-right":l}).hide();q.click(function(){G.next()});N.click(function(){G.prev()});x.click(function(){G.close()});y=q.add(N).add(r).add(S);d.children().removeClass("hover");E("."+p).live("click",function(ad){if(!((ad.button!==0&&typeof ad.button!=="undefined")||ad.ctrlKey||ad.shiftKey||ad.altKey)){ad.preventDefault();f(this)}});M.click(function(){if(X.overlayClose){G.close()}});E(k).bind("keydown."+O,function(ae){var ad=ae.keyCode;if(A&&X.escKey&&ad===27){ae.preventDefault();G.close()}if(A&&X.arrowKey&&c[1]){if(ad===37){ae.preventDefault();N.click()}else{if(ad===39){ae.preventDefault();q.click()}}}})};G.remove=function(){aa.add(M).remove();E("."+p).die("click").removeData(v).removeClass(p)};G.position=function(ah,ae){var ag,af=Math.max(k.documentElement.clientHeight-X.h-g-ac,0)/2+U.scrollTop(),ad=Math.max(U.width()-X.w-a-l,0)/2+U.scrollLeft();ag=(aa.width()===X.w+a&&aa.height()===X.h+g)?0:ah;ab[0].style.width=ab[0].style.height="9999px";function ai(aj){C[0].style.width=L[0].style.width=d[0].style.width=aj.style.width;h[0].style.height=h[1].style.height=d[0].style.height=o[0].style.height=b[0].style.height=aj.style.height}aa.dequeue().animate({width:X.w+a,height:X.h+g,top:af,left:ad},{duration:ag,complete:function(){ai(this);T=false;ab[0].style.width=(X.w+a+l)+"px";ab[0].style.height=(X.h+g+ac)+"px";if(ae){ae()}},step:function(){ai(this)}})};G.resize=function(ad){if(A){ad=ad||{};if(ad.width){X.w=J(ad.width,"x")-a-l}if(ad.innerWidth){X.w=J(ad.innerWidth,"x")}I.css({width:X.w});if(ad.height){X.h=J(ad.height,"y")-g-ac}if(ad.innerHeight){X.h=J(ad.innerHeight,"y")}if(!ad.innerHeight&&!ad.height){var ae=I.wrapInner("<div style='overflow:auto'></div>").children();X.h=ae.height();ae.replaceWith(ae.children())}I.css({height:X.h});G.position(X.transition==="none"?0:X.speed)}};G.prep=function(af){if(!A){return}var ag=X.transition==="none"?0:X.speed;U.unbind("resize."+O);I.remove();I=K("LoadedContent").html(af);function ad(){X.w=X.w||I.width();X.w=X.mw&&X.mw<X.w?X.mw:X.w;return X.w}function ah(){X.h=X.h||I.height();X.h=X.mh&&X.mh<X.h?X.mh:X.h;return X.h}I.hide().appendTo(j.show()).css({width:ad(),overflow:X.scrolling?"auto":"hidden"}).css({height:ah()}).prependTo(d);j.hide();E(m).css({"float":"none"});if(Z){E("select").not(aa.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(s,function(){this.style.visibility="inherit"})}function ae(ai){G.position(ai,function(){var ao,ap,am,al,an=c.length,ak,aj;if(!A){return}aj=function(){h.hide();B(P,X.onComplete)};if(t){if(m){I.fadeIn(100)}}n.html(X.title).add(I).show();if(an>1){if(typeof X.current==="string"){r.html(X.current.replace(/\{current\}/,D+1).replace(/\{total\}/,an)).show()}q[(X.loop||D<an-1)?"show":"hide"]().html(X.next);N[(X.loop||D)?"show":"hide"]().html(X.previous);ao=D?c[D-1]:c[an-1];am=D<an-1?c[D+1]:c[0];if(X.slideshow){S.show()}if(X.preloading){al=E.data(am,v).href||am.href;ap=E.data(ao,v).href||ao.href;al=E.isFunction(al)?al.call(am):al;ap=E.isFunction(ap)?ap.call(ao):ap;if(z(al)){E("<img/>")[0].src=al}if(z(ap)){E("<img/>")[0].src=ap}}}else{y.hide()}if(X.iframe){ak=E("<iframe/>").addClass(O+"Iframe")[0];if(X.fastIframe){aj()}else{E(ak).load(aj)}ak.name=O+(+new Date());ak.src=X.href;if(!X.scrolling){ak.scrolling="no"}if(t){ak.frameBorder=0;ak.allowTransparency="true"}E(ak).appendTo(I).one(i,function(){ak.src="//about:blank"})}else{aj()}if(X.transition==="fade"){aa.fadeTo(ag,1,function(){aa[0].style.filter=""})}else{aa[0].style.filter=""}U.bind("resize."+O,function(){G.position(0)})})}if(X.transition==="fade"){aa.fadeTo(ag,0,function(){ae(0)})}else{ae(ag)}};G.load=function(af){var ae,ag,ad=G.prep;T=true;m=false;u=c[D];if(!af){Y(E.extend(X,E.data(u,v)))}B(i);B(e,X.onLoad);X.h=X.height?J(X.height,"y")-g-ac:X.innerHeight&&J(X.innerHeight,"y");X.w=X.width?J(X.width,"x")-a-l:X.innerWidth&&J(X.innerWidth,"x");X.mw=X.w;X.mh=X.h;if(X.maxWidth){X.mw=J(X.maxWidth,"x")-a-l;X.mw=X.w&&X.w<X.mw?X.w:X.mw}if(X.maxHeight){X.mh=J(X.maxHeight,"y")-g-ac;X.mh=X.h&&X.h<X.mh?X.h:X.mh}ae=X.href;h.show();if(X.inline){K().hide().insertBefore(E(ae)[0]).one(i,function(){E(this).replaceWith(I.children())});ad(E(ae))}else{if(X.iframe){ad(" ")}else{if(X.html){ad(X.html)}else{if(z(ae)){E(m=new Image()).addClass(O+"Photo").error(function(){X.title=false;ad(K("Error").text("This image could not be loaded"))}).load(function(){var ah;m.onload=null;if(X.scalePhotos){ag=function(){m.height-=m.height*ah;m.width-=m.width*ah};if(X.mw&&m.width>X.mw){ah=(m.width-X.mw)/m.width;ag()}if(X.mh&&m.height>X.mh){ah=(m.height-X.mh)/m.height;ag()}}if(X.h){m.style.marginTop=Math.max(X.h-m.height,0)/2+"px"}if(c[1]&&(D<c.length-1||X.loop)){m.style.cursor="pointer";m.onclick=function(){G.next()}}if(t){m.style.msInterpolationMode="bicubic"}setTimeout(function(){ad(m)},1)});setTimeout(function(){m.src=ae},1)}else{if(ae){j.load(ae,function(ai,ah,aj){ad(ah==="error"?K("Error").text("Request unsuccessful: "+aj.statusText):E(this).contents())})}}}}}};G.next=function(){if(!T&&c[1]&&(D<c.length-1||X.loop)){D=D<c.length-1?D+1:0;G.load()}};G.prev=function(){if(!T&&c[1]&&(D||X.loop)){D=D?D-1:c.length-1;G.load()}};G.close=function(){if(A&&!H){H=true;A=false;B(s,X.onCleanup);U.unbind("."+O+" ."+V);M.fadeTo(200,0);aa.stop().fadeTo(300,0,function(){aa.add(M).css({opacity:1,cursor:"auto"}).hide();B(i);I.remove();setTimeout(function(){H=false;B(W,X.onClosed)},1)})}};G.element=function(){return E(u)};G.settings=F;E(G.init)}(jQuery,document,this));function init_colorbox(a,f,b,i,j,h){if(typeof(a)=="undefined"){alert("\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdurl")}else{var d=true;if(typeof(j)!="undefined"&&j!=""){j=j}var g=$(window).width();var c=$(window).height();var e="";if(typeof(b)=="undefined"||b==""){if(g>800){g=800}else{g=g-100}}else{g=b}if(typeof(i)=="undefined"||i==""){if(c>580){c=580}else{c=c-100}}else{c=i}if(typeof(f)!="undefined"){e=f}if(a.indexOf("#")>=0){$.colorbox({href:a,inline:true,innerWidth:g,innerHeight:c,overlayClose:false,onClosed:function(){if(typeof(h)=="function"){h()}},title:e})}else{$.colorbox({href:a,iframe:d,innerWidth:g,innerHeight:c,overlayClose:false,onClosed:function(){if(typeof(h)=="function"){h()}},title:e})}}};
