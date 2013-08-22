function decimal(b,a){var c=Math.pow(10,a);return Math.round(b*c)/c}function MAX(){if(arguments.length==0){return}var a=arguments[0];for(var b=0;b<arguments.length;b++){a=Math.max(a,arguments[b])}return parseFloat(a)}function MIN(){if(arguments.length==0){return}var a=arguments[0];for(var b=0;b<arguments.length;b++){a=Math.min(a,arguments[b])}return parseFloat(a)}function ABS(a){if(a==""){a=0}return Math.abs(parseFloat(a))}function AVG(){if(arguments.length==0){return}var b=0;for(var a=0;a<arguments.length;a++){b+=parseFloat(arguments[a])}return parseFloat(b/arguments.length)}function init_parseComputational(){var inputCals=$("input[pluginType=CALCULATE_COMPONENT]");var inputs=$("input[pluginType=TEXT]");for(var j=0;j<inputCals.length;j++){var cal_id=$(inputCals[j]).attr("id");var computational=$(inputCals[j]).attr("computational");var arr=new Array();for(var i=0;i<inputs.length;i++){var re=new RegExp("([(+*/^,-]*)"+$(inputs[i]).attr("id")+"([)+*/^,-]*)","g");var initCom=computational;computational=computational.replace(re,"$1$('#"+$(inputs[i]).attr("id")+"').attr('value')$2");if(computational!=initCom){arr.push($(inputs[i]).attr("id"))}}$(inputCals[j]).attr("value",decimal(eval(computational),parseInt($(inputCals[j]).attr("prec"))));if(isNaN($(inputCals[j]).attr("value"))){$(inputCals[j]).attr("value","")}}}function parseComputational(computational,id){var inputs=$("input[pluginType=TEXT]");for(var i=0;i<inputs.length;i++){var re=new RegExp("([(+*/^,-]*)"+$(inputs[i]).attr("id")+"([)+*/^,-]*)","g");var initCom=computational;computational=computational.replace(re,"$1parseFloat($('#"+$(inputs[i]).attr("id")+"').attr('value'))$2")}$("#"+id).attr("value",decimal(eval(computational),parseInt($("#"+id).attr("prec"))));if(isNaN($("#"+id).attr("value"))){$("#"+id).attr("value","")}}function parse(){init_parseComputational()}function selectChange(parentValue,child,cur_val){var childArray=child.split(",");for(var i=0;i<childArray.length;i++){if(childArray[i]!=""){var arr=eval("arr_"+childArray[i]);var optionStr=arr[childArray[i]][parentValue];if(optionStr){var optionArr=optionStr.split(",");$("#"+childArray[i]).find("option").remove();for(var j=0;j<optionArr.length;j++){if(optionArr[j]!=""){var objOption=document.createElement("OPTION");objOption.text=optionArr[j];objOption.value=optionArr[j]+"|"+parentValue;document.getElementById(childArray[i]).options.add(objOption);if(typeof cur_val!="undefined"&&cur_val==optionArr[j]){$("#"+childArray[i]).attr("value",cur_val+"|"+parentValue)}}}}}}}function initSelect(selstr,parentObj){var selArray=selstr.split(",");for(var i=0;i<selArray.length;i++){if(selArray[i]!=""){var arr=eval("arr_"+selArray[i]);arr[selArray[i]]=new Array();var cur_val;var temp="#"+selArray[i];var options=$(temp).children();for(var j=0;j<options.length;j++){var str=$(options[j]).attr("value");if(typeof str!="undefined"&&str.indexOf("|")>=0){$(options[j]).attr("value",str.substring(0,str.indexOf("|")));$(options[j]).attr("text",str.substring(0,str.indexOf("|")));var father=str.substring(str.indexOf("|")+1,str.length);var optionValue=str.substring(0,str.indexOf("|"));if($("#"+selArray[i]).get(0).selectedIndex==j){cur_val=optionValue}if(typeof arr[selArray[i]][father]=="undefined"){arr[selArray[i]][father]=""}arr[selArray[i]][father]+=optionValue+","}}selectChange($("#"+parentObj).attr("value"),selArray[i],cur_val)}}}function ajaxGetData(referenceControlId,formId,dataControl,dataField,controlId){if(controlsExistFun(referenceControlId)&&controlsExistFun(dataControl)){$.ajax({type:"POST",url:webRoot+"/get-data.htm",data:"referenceControlValue="+$("#"+referenceControlId).attr("value")+"&formId="+formId+"&formControlId="+controlId,success:function(text,textStatus){if(text!=""){var json=eval("("+text+")");$.each(json,function(key,value){var arr=dataField.split(",");var dcArr=dataControl.split(",");for(var i=0;i<arr.length;i++){if(arr[i]!=""){if("dt_"+arr[i]==key.toLowerCase()){if(value==null){value=""}$("#"+dcArr[i]).attr("value",value)}else{if(arr[i]==key){$("#"+dcArr[i]).attr("value",value)}}}}})}else{var arr=dataField.split(",");var dcArr=dataControl.split(",");for(var i=0;i<arr.length;i++){if(arr[i]!=""){$("#"+dcArr[i]).attr("value","")}}}},error:function(XMLHttpRequest,textStatus){alert(textStatus)}})}}function addUsers(treeType,multiple,value,resultId,hiddenResultId,inputType){if(resultId!=""){inputType=="textArea"?$("#"+resultId).html(""):$("#"+resultId).attr("value","")}var type="";if(treeType=="COMPANY"||treeType.substring(0,treeType.indexOf("_"))=="MAN"){type="user"}else{if(treeType.substring(0,treeType.indexOf("_"))=="DEPARTMENT"){type="department"}else{if(treeType.substring(0,treeType.indexOf("_"))=="GROUP"){type="workGroup"}}}var arr=eval(value);if(multiple=="true"){for(var i=0;i<arr.length;i++){if(type=="user"&&(arr[i].type=="user"||arr[i].type=="allDepartment"||arr[i].type=="company")){if(arr[i].type=="user"){if(resultId!=""){inputType=="textArea"?$("#"+resultId).html($("#"+resultId).html()+arr[i].name+","):$("#"+resultId).attr("value",$("#"+resultId).attr("value")+arr[i].name+",")}$("#"+hiddenResultId).attr("value",$("#"+hiddenResultId).attr("value")+arr[i].loginName+",")}else{if(arr[i].type=="allDepartment"||arr[i].type=="company"){if(resultId!=""){inputType=="textArea"?$("#"+resultId).html("\u6240\u6709\u4eba\u5458,"):$("#"+resultId).attr("value","\u6240\u6709\u4eba\u5458,")}$("#"+hiddenResultId).attr("value","all_user,");break}}}else{if(type=="department"&&(arr[i].type=="department"||arr[i].type=="allDepartment"||arr[i].type=="company")){if(arr[i].type=="department"){if(resultId!=""){inputType=="textArea"?$("#"+resultId).html($("#"+resultId).html()+arr[i].name+","):$("#"+resultId).attr("value",$("#"+resultId).attr("value")+arr[i].name+",")}$("#"+hiddenResultId).attr("value",$("#"+hiddenResultId).attr("value")+arr[i].id+",")}else{if(arr[i].type=="allDepartment"||arr[i].type=="company"){inputType=="textArea"?$("#"+resultId).html("\u6240\u6709\u90e8\u95e8,"):$("#"+resultId).attr("value","\u6240\u6709\u90e8\u95e8,");$("#"+hiddenResultId).attr("value","all_department,");break}}}else{if(type=="workGroup"&&(arr[i].type=="workGroup"||arr[i].type=="allWorkGroup"||arr[i].type=="company")){if(arr[i].type=="workGroup"){if(resultId!=""){inputType=="textArea"?$("#"+resultId).html($("#"+resultId).html()+arr[i].name+","):$("#"+resultId).attr("value",$("#"+resultId).attr("value")+arr[i].name+",")}$("#"+hiddenResultId).attr("value",$("#"+hiddenResultId).attr("value")+arr[i].id+",")}else{if(arr[i].type=="allWorkGroup"||arr[i].type=="company"){if(resultId!=""){inputType=="textArea"?$("#"+resultId).html("\u6240\u6709\u5de5\u4f5c\u7ec4,"):$("#"+resultId).attr("value","\u6240\u6709\u5de5\u4f5c\u7ec4,")}$("#"+hiddenResultId).attr("value","all_workGroup,");break}}}}}}if(inputType=="textArea"){if(resultId!=""&&$("#"+resultId).html()!=""){$("#"+resultId).html($("#"+resultId).html().substring(0,$("#"+resultId).html().length-1))}}else{if(resultId!=""&&$("#"+resultId).attr("value")!=""&&$("#"+resultId).attr("value")!=null){$("#"+resultId).attr("value",$("#"+resultId).attr("value").substring(0,$("#"+resultId).attr("value").length-1))}}if($("#"+hiddenResultId).attr("value")!=""&&$("#"+hiddenResultId).attr("value")!=null){$("#"+hiddenResultId).attr("value",$("#"+hiddenResultId).attr("value").substring(0,$("#"+hiddenResultId).attr("value").length-1))}}else{if(multiple=="false"){if(resultId!=""){if(inputType=="textArea"){$("#"+resultId).html(arr[0].name)}else{$("#"+resultId).attr("value",arr[0].name)}}if(type=="user"&&arr[0].type=="user"){$("#"+hiddenResultId).attr("value",arr[0].loginName)}else{if(type=="department"&&arr[0].type=="department"){$("#"+hiddenResultId).attr("value",arr[0].id)}else{if(type=="workGroup"&&arr[0].type=="workGroup"){$("#"+hiddenResultId).attr("value",arr[0].id)}}}}}}function initListControl(f){var h=$("input[pluginType=LIST_CONTROL]");for(var d=0;d<h.length;d++){if($(h[d]).attr("data_source")==f){$(h[d]).css("display","none");var g="tb_"+$(h[d]).attr("id");var c=$(h[d]).attr("lv_sum");var e=$(h[d]).attr("lv_cal");var a=$("#"+g+" tbody tr");for(var b=0;b<a.length;b++){addCalEvent(g,c,b,e)}}}}function parseListControl(c){var d=$("input[pluginType=LIST_CONTROL]");for(var f=0;f<d.length;f++){$(d[f]).css("display","none");var o="<input type=hidden name='dataSrc_"+$(d[f]).attr("id")+"' id='dataSrc_"+$(d[f]).attr("id")+"' value='"+$(d[f]).attr("data_source")+"'>";$(d[f]).after(o);var h=$(d[f]).attr("lv_title");var l=$(d[f]).attr("lv_size");var m=$(d[f]).attr("lv_sum");var b=$(d[f]).attr("lv_cal");var g=$(d[f]).attr("lv_field");var a=$(d[f]).attr("id");var p="";p="<table class='Table changeTR' id='tb_"+a+"'><thead><tr>";var k=h.split(",");var n=l.split(",");for(var e=0;e<k.length;e++){if(k[e]!=""){p+="<th style='width:"+n[e]+"px;'>";p+=k[e]+"</th>"}}p+="<th style='width:100px;'>\u64cd\u4f5c</th></tr></thead><tbody></tbody></table>";if(c=="true"){p+='<input type=button value="\u65b0\u589e"  onclick="listControlAddRow(\'tb_'+a+"','"+m+"','"+g+"','"+b+"','"+c+"');\">"}$("#dataSrc_"+$(d[f]).attr("id")).after(p)}}function listControlAddRow(c,m,k,d,e){var l=k.split(",");$("\"tr[id^='listControl_tr_']\"");var h=$("\"tr[id^='listControl_tr_']\"").length>0?$("\"tr[id^='listControl_tr_']\"").length:0;var f=d.split(",");var o="<tr id='listControl_tr_"+c+"_"+h+"'>";for(var j=0;j<l.length;j++){if(l[j]!=""){var b=c.substring(c.indexOf("_")+1,c.length);o+="<td>";var p=l[j].substring(l[j].indexOf(":")+1,l[j].length);var n="listControl_"+c+"_"+h+"_"+(j+1);if(p=="DATE"||p=="TIME"){if(f[j]=="0"){if(p=="DATE"){o+="<input style='width:95%;' name='listControl_"+b+"_"+l[j]+"' onfocus='WdatePicker({dateFmt:\"yyyy-MM-dd\",el:"+n+"})' id='"+n+"' readonly"}else{o+="<input style='width:95%;' name='listControl_"+b+"_"+l[j]+"' onfocus='WdatePicker({dateFmt:\"yyyy-MM-dd HH:mm\",el:"+n+"})' id='"+n+"' readonly"}}else{o+="<input style='width:95%;' name='listControl_"+b+"_"+l[j]+"' id='listControl_"+c+"_"+h+"_"+(j+1)+"' readonly"}}else{o+="<input style='width:95%;' name='listControl_"+b+"_"+l[j]+"' id='listControl_"+c+"_"+h+"_"+(j+1)+"'";if(f[j]!="0"){o+=" readonly"}}o+="></input></td>"}}o+="<td>";if(e=="true"){o+='<a href="#" onclick="listControlDelRow(this,\''+c+"','"+m+"')\">\u5220\u9664</a>"}o+="</td></tr>";$("#"+c).append(o);var g=$("tr[id=listControlSum_"+c+"]");if(g.length==0||(g.length>0&&$(g[0]).attr("id")!=("listControlSum_"+c))){if(isNeedSum(m)){listControlAddSumRow(c,m)}}if(g.length>0&&$(g[0]).attr("id")==("listControlSum_"+c)){var a=$("#"+c+" tbody tr");$(g[0]).insertAfter($(a[a.length-1]))}if($("#"+c+" tbody tr").length>0){addCalEvent(c,m,h,d)}}function addCalEvent(a,h,d,b){var c=b.split(",");var g=$("#"+a+" tbody tr");var f;if(isNeedSum(h)){f=$(g[g.length-2]).find("input")}else{f=$(g[g.length-1]).find("input")}for(var e=0;e<f.length;e++){if($(f[e]).attr("readonly")){var j=getLCComponentInputs(a,c[e],$(f[e]).attr("id"),d);parseLCComputational(j[0],j[1],$(f[e]).attr("id"),h,"#listControlSum_"+a+"_td_","listControl_"+a+"_",a)}}}function isNeedSum(a){var c=a.split(",");for(var b=0;b<c.length;b++){if(c[b]!=""){if(c[b]=="1"){return true}}}return false}function getLCComponentInputs(b,a,c,d){var h=$("\"input[id^='listControl_"+b+"_"+d+"']\"");var f=a;var l=new Array();var g=new Array();for(var e=1;e<50;e++){if(e>h.length){break}else{if(!$(h[e-1]).attr("readonly")){var k=new RegExp("([(+*/^,-]*)[[]+"+e+"[]]+([)+*/^,-]*)","g");var j=$(h[e-1]).attr("id");a=a.replace(k,"$1(isNaN(parseInt($('#"+j+"').attr('value')))?0:parseInt($('#"+j+"').attr('value')))$2");if(a!=f){g.push($(h[e-1]))}}}}l.push(g);l.push(a);return l}function parseLCComputational(componentInputs,computational,id,lv_sum,preSumId,preInputCeil,tb_id){for(var i=0;i<componentInputs.length;i++){$(componentInputs[i]).change(function(){$("#"+id).attr("value",eval(computational));var lv_sums=lv_sum.split(",");for(var j=0;j<lv_sums.length;j++){if(lv_sums[j]!=""||lv_sums[j]!="0"){if(lv_sums[j]=="1"){var sum=0;var trs=$("#"+tb_id+" tbody tr");for(var n=0;n<trs.length-1;n++){var inputCeil=isNaN(parseInt($("#"+preInputCeil+n+"_"+(j+1)).attr("value")))?0:parseInt($("#"+preInputCeil+n+"_"+(j+1)).attr("value"));$(this).attr("value");sum+=inputCeil}$(preSumId+(j+1)).attr("value",sum)}}}})}}function listControlAddSumRow(f,a){var c=a.split(",");var d="<tr id='listControlSum_"+f+"'>";for(var b=0;b<c.length;b++){if(c[b]!=""){d+="<td><input style='width:95%;' readonly ";var e=f.substring(f.indexOf("_")+1,f.length);if(c[b]=="1"){d+="id='listControlSum_"+f+"_td_"+(b+1)+"' name='listControlSum_"+e+"_"+(b+1)+"' value='0'"}d+="></input></td>"}}d+="<td></td></tr>";$("#"+f).append(d)}function listControlDelRow(c,d,a){var b=$("#"+d+" tbody tr");if(isNeedSum(a)&&b.length<=2){$($("tr[id=listControlSum_"+d+"]")[0]).remove()}$(c).parent().parent().remove()}function controlsExistFun(d){var a=d.split(",");var c=true;for(var b=0;b<a.length;b++){if(a[b]!=""){if($("#"+a[b]).size()<=0||$("input[id='"+a[b]+"']").length<=0){alert("id\u4e3a"+a[b]+"\u7684\u5355\u884c\u6587\u672c\u63a7\u4ef6\u5b58\u5728,\u8bf7\u5728\u8868\u5355\u7f16\u8f91\u754c\u9762\u589e\u52a0\u8be5\u63a7\u4ef6.");c=false;return}}}return c}function dataSelectionClick(a,c,b){if(controlsExistFun(b)){$.colorbox({href:a,iframe:true,width:800,height:600,overlayClose:false,title:c})}};
