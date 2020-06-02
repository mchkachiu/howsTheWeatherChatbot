function checkEmo(msg) {
  var message = msg.toLowerCase();
  var sad = false;
  var happy = false;
  if (message.search("happy") > -1) happy = true;
  if (message.search("fine") > -1) happy = true;
  if (message.search("good") > -1) happy = true;
  if (message.search("bright") > -1) happy = true;
  
    if (message.search("sad") > -1) sad = true;
    if (message.search("bad") > -1) sad = true;
    if (message.search("down") > -1) sad = true;
    if (message.search("angry") > -1) sad = true;
  var debug = message.search("angry");
  return [happy, sad, debug];
}
