/* File containing the questions and answers for the quiz, formatted as an array of objects. 
Each object should have the following properties.
text: The text of the question itself. 
answers: another array of objects, representing the possible answers. 
  There are must be exactly four, and there is no validation of that. There 
  probably should be. Each of them must have a text property, representing
  the possible answer. One and only one must have an additional property, correct,
  set to the boolean value true. That represents the corrent answer to the question.
  Again, there's no validation thats there's only one value. There should be. 
  Note that the ordsr of the answer is randomized, so you can't do anything like
  "both a and c". A "no-random" proerty might be worthwhile. 
image: The filename of an optional image to be displayed with the question. I've only tested this with a simple
  filename. I think a url, or a relative path on the server, should work.
value: A required field, though again, no validation, but there should be. How many points the question is worth;
  tougher questions are worth more. There's no boundary checking; there should be. 
*/

var questions =  [
  {
    text : "What is Superman's secret identity?",
    answers : [ { text: 'Mild-mannered reporter Clark Kent',
                  correct: true },
                  { text: 'Millionaire Bruce Wayne'  },
                  { text: 'President Richard Nixon' },
                  { text: 'Radio announcer Billy Batson' }
              ],
    image : "woodchuck.jpg",
    value : 1,
  },

  {
    text : "What is Spider-Man's secret identity?",
    answers : [ { text: 'Indusrialist Tony Stark' },
                  { text: 'Newspaper editor J. Jonah Jameson'  },
                  { text: 'Student Peter Parker',  correct: true  },
                  { text: 'Latverian Monarch Victor von Doom' }
              ],
    value : 2,
  },

  {
    text : "What is 'Mazing-Man's secret identity?",
    answers : [ { text: 'Slightly deranged Queens resident Sigfried Horatio Hunch III',
                  correct: true },
                  { text: 'Extremely Deranged former District Attorney Harvey Dent'  },
                  { text: 'Beyond Deranged Irwin Schwab'  },
                  { text: 'a typical WDI student' }
              ],
    value : 3,
  },

  {
    text : 'This is an arbitrary filler for testing purposes. Select sny answer; it may or may not be correct.',
    answers : [ { text: 'Boom',
                  correct: true },
                  { text: 'Boom' },
                  { text: 'Boom' },
                  { text: 'Boom' }
              ],
    value : 0,          

  },

]
