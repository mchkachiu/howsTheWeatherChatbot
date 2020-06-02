/**
 * Responds to a MESSAGE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
function onMessage(event) {
  var name = "";

  if (event.space.type == "DM") {
    name = "You";
  } else {
    name = event.user.displayName;
  }
  
  var message = event.message.text;
  
  var emos = checkEmo(message);
  var happy = emos[0];
  var sad = emos[1];
  
  var output = "";
  if (happy) { 
    output += " The sun shines here.";
  }
  if (sad) {
    output += " Rain showers expected.";
  }
  if (!happy && !sad) { output = "And how do you feel today?" }
  
  output += 'Debug: ' + emos[2];
  
  return { "text": output.trim() };
}

/**
 * Responds to an ADDED_TO_SPACE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
function onAddToSpace(event) {
  var message = "";

  if (event.space.type == "DM") {
    message = "Hello, " + event.user.displayName + "!";
  } else {
    message = "Sunny days ahead " + event.space.displayName;
  }

  if (event.message) {
    // Bot added through @mention.
    message = message + " and you said: \"" + event.message.text + "\"";
  }

  return { "text": message };
}

/**
 * Responds to a REMOVED_FROM_SPACE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
function onRemoveFromSpace(event) {
  console.info("Bot removed from ", event.space.name);
}

