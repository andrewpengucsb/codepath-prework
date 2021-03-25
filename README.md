# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Andrew Peng

Time spent: 4 hours spent in total

Link to project: https://glitch.com/edit/#!/standing-darkened-cappelletti

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Created additonal rules button to display the rules for the game

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![x]http://g.recordit.co/vVIbuyHj3q.gif


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
None

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
While I was adding more features I broke the game and I had some difficulty figuring out what broke and what I did wrong. The game seemed to not continue after about 5 rounds, like I would enter in the combination and nothing would happen.
I initially thought that it was due to my implementation of more than 4 buttons since I had most recently added that and the game seemed to work fine before. But it was not because of that. And so I opened the console after learning of it's
functionality earlier in the lab, and played through the game again, noticing that the console reported back that the next round should have been playing, and from there I knew it was because I had made the playback speed up too much so that
the pattern would be presented to quickly, breaking the game. Luckily it was a very easy fix, just having to reduce the delay from progress*50 to progress*25.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I noticed following the tutorial on the javascript portions, that some would have semicolons and other didn't and was wondering why the variance was there? I ask this since working with java and cpp, they both require the use of semicolons whereas 
python doesn't. Is javascript like python in that right? Or are semicolons a situational thing? After completing my submission, I wondered what is like to develop a website without a tool like glitch. I'm sure its not as easy, but working with glitch were
everything seems so straightforward makes me wonder also why you wouldn't just use something like this. One thing I have always been curious about it why these three separate coding languages, html, css, javascript, work together so well depsite being different
in their own ways? Is it due to glitch or is it because they were made for each other?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours, I would definitely include more of the optional features since I haven't done quite a few of them, and they sound fun. I would also like to make the web page look a little different by adding a minimalist style.
I think adding game modes and selectable difficulty would be cool and would just help to make the game feel more complete, beacause as it stands, to be honest, I don't feel very proud of my work considering I missed the submission deadline, underestimating the time it would take.
But you live and you learn, and I definitely think that I actually learned from this project. I used to think that web development was daunting, having to learn three languages, but every step through this prework, everything made perfect sense and connecting
the three languages was really easy, so either way I believe that I gained some knowledge from doing this.



## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.