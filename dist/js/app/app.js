!new function(e,n,t,o){function c(){t.runMode(l.getValue(),i,$("#output-panel")[0])}var i="text/html",u=$('select[data-provide="select2"]'),l=t.fromTextArea($("#code-panel")[0],{lineNumbers:!0,mode:"text/html",keyMap:"sublime",theme:"monokai"});l.on("change",c),c(),new o("#btn-copy"),u.change(function(){i=$(this).val(),l.setOption("mode",i),c(),setTimeout(function(){l.focus(),l.execCommand("goDocEnd")},15)}),u.select2({width:"7em"}),$(n).bind("keyup","Alt+l",function(){u.select2("open")}).bind("keyup","Alt+c",function(){$("#btn-copy").click()}).bind("keyup","Alt+i",function(){setTimeout(function(){l.focus()},15)}),l.on("keyup",function(e,n){if(n.altKey)switch(n.keyCode){case 76:u.select2("open");break;case 67:$("#btn-copy").click()}}),!function(){setTimeout(function(){l.focus(),l.execCommand("goDocEnd")},30)}()}(window,document,CodeMirror,Clipboard);