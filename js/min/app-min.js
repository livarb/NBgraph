function parseXml(e){$(e).find("entry").each(function(){$(".feed").append($(this).attr("title")+"<br />")})}function viewxml(e){console.log(e);var n=$.xml2json(e);console.log(n),$.each(n.feed,function(e,o){console.log(n.feed[e].entry)})}$(document).foundation(),$.ajax({type:"GET",url:"proxy.php",dataType:"xml",success:viewxml});