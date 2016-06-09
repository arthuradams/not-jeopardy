# not-jeopardy

This implements the trivia game listed as one of the possible choices for the assignment.

## Technologies used

HTML and CSS to define page, JavaScript (including JQuery) to add functionality

## User Stories
### Bronze
| As a user  | I want to  |
|---|---|
|  Read a trivia question | Try to come up with an answer  |
| Submit an answer to the question  | interact with the game rather than “watch Jeopardy”  |
|  See if my answer is correct | Have a reason to play the game  |
|  See my score |  Have a way to compete with other players |

All of the bronze user stories were imolemented. 

### Silver 
| As a user  | I want to  |
|---|---|
| Have a timed score	 | Get rewarded for quick answers|
|  Have a score based on difficulty |	get a bigger reward for tougher questions |
|   Select difficulty level |	Have a challenge appropriate to my skill and desires |
|   Select increasing difficulty |	Start easy and work my way up   |
|   See questions that include images	| Have a flashier looking game, and answer “who is this person?” type questions   |

Timed scoring was not implemented. I'd like to learn how to do it properly, but I focused on the 'low-hanging fruit' first. 

Difficulty based scoring was implemented, though with values that are prettty arbitrary. Selecting difficulty is not there. 

Image display was implemented, though I realized really doing images properly would require work with scaling them to fit a box, and lots of Photoshop fun to make them look "pretty", 

Why is there a picture of a woodchuck with the Superman question? Because the question was originally, "how much wood could a woodchuck chuck..." and I kept the image because it amused me. 
### Gold
| As a user  | I want to  |
|---|---|
|  Add new questions |	outsmart my friends and crush my enemies! |
| Win actual prizes |	Escape crushing poverty |

None of these were implemented. Add new questions is nice to have, but making them persist is beyond this prohect's scope. 
Actual prizes is listed for the amusement value. 

## Future Enhancements
* Timer based scoring. I just need to look at the timer app we worked with previously and fit it in here. 
* Make it "prettier". There's a lot of ways it could just look nicer.
  * The color scheme is best described as "colors I thought of while writing the code." 
  * Better borders, margins, background colors.
  * Better handling of the optional image. There'a a wide range of things to improve that. Part of the issue is that it was the last major feature I added. 
  * Add image support for the answers. 
* An actual database of questions would be a huge enhancement. 
  * Loading a .js file consisting of an array of questions works when you have three questions to show the app works. It would be absurdly slow for the thousands of questions a real game would require. 
  * A database would allow for easy implementation of the user's preferences for difficulty -- do a query to return the ID's of all questions where difficulty is less than 5, and use that to randomly select the questions. The addition of a category field would allow the user to play Sports trivia, for instance.
  * Outside the questions, a database would allow saving user preferences, high scores, etc. 
