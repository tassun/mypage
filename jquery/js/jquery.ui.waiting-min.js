$.fn.startWaiting=function(a){$.fn.startWaiting.defaults={width:25,height:25,styles:"",before:null,};var b=$.extend({},$.fn.startWaiting.defaults,a);return this.each(function(){var c=$(this);var d=$('<img class="fs-waiting-image-loader" src="../img/loading.gif" width="'+b.width+'px" height="'+b.height+'px;"></img>');if(b.before&&b.before!=""){d.insertBefore($(b.before))}else{var e=c.children();if(e.length>0){var f=e.eq(0);d.insertBefore(f)}else{c.append(d)}}})};$.fn.stopWaiting=function(a){return this.each(function(){$(this).find("img.fs-waiting-image-loader").remove()})};