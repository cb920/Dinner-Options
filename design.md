# Dinner Options - Program Design
The Dinner Option Skill’s purpose is to help the user decide on what they should have for dinner based on their answers to a series of
questions. This is achieved by using a series of if statements. Based on the user’s answer to the previous question, the if statement will
determine what question will be asked next. This sequence will continue until the user answers all of the questions and Alexa will 
instantly tell the user what they should have for dinner based on their answers to the series of questions that they were asked. 

To start the program, there is a Launch Request that will execute if no intent is found.

To keep track of the answers to each of the questions, I created variables for the step number (question number), if the user wants to eat 
meat, if they want to eat-in or takeout, and if they want a large meal or a small meal.

First, the Into Intent, the Eat-In Intent, and the Takeout Intent were created. The Intro Intent starts off the skill by asking the user 
if they would like to eat-in or takeout. The Eat-in Intent executes if the user answers that they want to eat-in to the previous question.
The Takeout Intent executes if the user answers that they want to takeout to the previous question.

Next, I created the Yes Intent and the No Intent. The purpose of the Yes Intent and No Intent is to execute when the user answers either 
yes or no to any question. In order to keep track of the current question and the answers to the previous questions, the variables had to 
be manipulated. Within both the Yes Intent and the No Intent are a number of if statements that keep track of the question that the user 
is answering yes and no to. For example, within the Yes Intent, one of the if statements is  

    else if (stepNumber == 2 && takeout == true && meat == true) 

This if statement will execute if the user is answering the second question (stepNumber = 2), the user answered that they want to takeout (takeout = true), and the user wants meat for dinner (meat = true).

Within each if statement the four variables, takeout, stepNumber, meat, and large, are set to their proper value based on the users 
answers to the previous questions.

After this I created the final two intents, Large Intent and Small Intent. The Large Intent is executed when the user answers that they 
want a large meal for dinner. The Small Intent is executed when the user answers that they want a small meal for dinner.

The diagram below illustrates the progression of the Dinner Options Alexa Skill.

![alexa skill 1](https://user-images.githubusercontent.com/39415727/41203776-bbdbdb28-6ca9-11e8-85cb-0e8a039f16c9.jpg)
