/**
 This Lambda function is based on the Lambda function on GitHub tsellersCS AlexaCode index.js https://github.com/tsellersCS/AlexaCode/blob/master/index.js
**/

'use strict';

var takeout = false; //variable that keeps track of whether the user wants to eat-in or takeout
var stepNumber = 0; //variable that keeps track of what question the user is answering
var meat = false; //variable that keeps track of whether the user wants meat
var large  = false; //variable that keeps track of whether the user wants a large or small meal

var handlers = 
{
  'LaunchRequest': function () //If no intent is found this will be invoked
  { 
      this.emit(':tell' , "No intent by that name."); 
  },
  
  'IntroIntent': function () //Intent that is invoked when the user says "Alexa, open Dinner Options and talk to me about dinner"
  { 
    this.response.speak("Hello, would you like to eat-in or takeout?")
      .listen("Would you like to eat in or take out?");
    this.emit(':responseReady');
  },
  
  'EatInIntent': function() //Intent that is invoked if the user responded that they want to eat-in
  {
    takeout = false;
    stepNumber = 1;
      this.response.speak("Would you like to have meat for dinner?")
        .listen("Would you like to have meat for dinner?");
      this.emit(':responseReady');
  },
      
  'TakeoutIntent': function() //Intent that is invoked if the user responded that they want to takeout
  {
    takeout = true;
    stepNumber = 1;
      this.response.speak("Would you like to have meat for dinner?")
        .listen("Would you like to have meat for dinner?");
      this.emit(':responseReady'); 
  },

'YesIntent': function() //Intent that is invoked when the user answers yes to any question
{
  if (stepNumber == 1 && takeout == false) //Corresponds to the question about meat. 
                                          //Runs if the user says that they want to eat-in and want meat.
  {
    meat = true;
    stepNumber = 2;
    this.response.speak("Would you like a large meal or a small meal?")
      .listen("Would you like a large meal or a small meal?");
  }
  else if (stepNumber == 1 && takeout == true) //Corresponds to the question about meat. 
                                              //Runs if the user says that they want to takeout and want meat.
  {
    meat = true;
    stepNumber = 2;
    this.response.speak("Do you want Italian food?")
      .listen("Do you want Italian food?");
  }
  else if (stepNumber == 2 && takeout == true && meat == true) //Corresponds to the question about Italian food. 
                          //Runs if the user says that they want to takeout, want meat, and want Italian food.
  {
    this.response.speak("You should have a calzone for dinner.");
  }
  else if (stepNumber == 2 && takeout == true && meat == false) //Corresponds to the question about Italian food. 
                    //Runs if the user says that they want to takeout, do not want meat, and want Italian food.
  {
    this.response.speak("You should have pizza for dinner.");
  }
  else if (stepNumber == 3 && takeout == false && meat == false && large == true) //Corresponds to the question about cooking time. 
                    //Runs if the user says that they want to eat-in, do not want meat, want a large meal, and want to cook for more than 30 minutes.
  {
    this.response.speak("You should have lasagna for dinner.");
  }
  else if (stepNumber == 3 && takeout == false && meat == false && large == false) //Corresponds to the question about wanting a salad. 
                    //Runs if the user says that they want to eat-in, do not want meat, want a small meal, and want a salad.
  {
    this.response.speak("You should have a salad for dinner.");
  }
  else if (stepNumber == 3 && takeout == false && meat == true && large == true) //Corresponds to the question about cooking time. 
                    //Runs if the user says that they want to eat-in, want meat, want a large meal, and want to cook for more than 30 minutes.
  {
    this.response.speak("You should have steak for dinner.");
  }
  else if (stepNumber == 3 && takeout == false && meat == true && large == false) //Corresponds to the question about wanting a salad. 
                    //Runs if the user says that they want to eat-in, want meat, want a small meal, and want a salad.
  {
    this.response.speak("You should have a salad for dinner.");
  }
  this.emit(':responseReady');
},

'NoIntent': function() //Intent that is invoked when the user answers no to any question
{
  if (stepNumber == 1 && takeout == false) //Corresponds to the question about meat. 
                                          //Runs if the user says that they want to eat-in and do not want meat.
  {
    meat = false;
    stepNumber = 2;
    this.response.speak("Would you like a large meal or a small meal?")
      .listen("Would you like a large meal or a small meal?");
  }
  else if (stepNumber == 1 && takeout == true) //Corresponds to the question about meat. 
                                          //Runs if the user says that they want to takeout and do not want meat.
  {
    meat = false;
    stepNumber = 2;
    this.response.speak("Do you want Italian food?")
      .listen("Do you want Italian food?");
  }
  else if (stepNumber == 2 && takeout == true && meat == false) //Corresponds to the question about Italian food. 
                    //Runs if the user says that they want to takeout, do not want meat, and do not want Italian food.
  {
    this.response.speak("You should have vegetable sushi for dinner.");
  }
  else if (stepNumber == 2 && takeout == true && meat == true) //Corresponds to the question about Italian food. 
                    //Runs if the user says that they want to takeout, want meat, and do not want Italian food.
  {
    this.response.speak("You should have sweet and sour chicken for dinner.");
  }
  else if (stepNumber == 3 && takeout == false && meat == false && large == false) //Corresponds to the question about a salad. 
                    //Runs if the user says that they want to eat-in, do not want meat, want a small meal, and do not want a salad.
  {
    this.response.speak("You should have nachos for dinner.");
  }
  else if (stepNumber == 3 && takeout == false && meat == false && large == true) //Corresponds to the question about cooking time. 
                    //Runs if the user says that they want to eat-in, do not want meat, want a large meal, and do not want to cook for more than 30 minutes..
  {
    this.response.speak("You should have pasta for dinner.");
  }
  else if (stepNumber == 3 && takeout == false && meat == true && large == false) //Corresponds to the question about a salad. 
                    //Runs if the user says that they want to eat-in, want meat, want a small meal, and do not want a salad.
  {
    this.response.speak("You should have a sandwich for dinner.");
  }
  else if (stepNumber == 3 && takeout == false && meat == true && large == true) //Corresponds to the question about cooking time. 
                    //Runs if the user says that they want to eat-in, want meat, want a large meal, and do not want to cook for more than 30 minutes.
  {
    this.response.speak("You should have tacos for dinner.");
  }
  this.emit(':responseReady');
},

'LargeIntent': function() //Intent that is invoked when the user says that they want a large meal
{
  large = true;
  takeout = false;
  stepNumber = 3;
    this.response.speak("Do you want to cook for more than 30 minutes?")
      .listen("Do you want to cook for more than 30 minutes?");
    this.emit(':responseReady'); 
},

'SmallIntent': function() //Intent that is invoked when the user says that they want a small meal
{
  large = false;
  takeout = false;
  stepNumber = 3;
    this.response.speak("Do you want a salad?")
      .listen("Do you want a salad?");
    this.emit(':responseReady');
},

};

// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
  // Include the AWS Alexa Library.
  const Alexa = require("alexa-sdk");

  // Create an instance of the Alexa library and pass it the requested command.
  var alexa = Alexa.handler(event, context);
  
  // Give our Alexa instance instructions for handling commands and execute the request.
  alexa.registerHandlers(handlers);
  alexa.execute();
};
