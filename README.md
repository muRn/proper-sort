# Why?

Let's face it: we all use StackOverflow. Often using it is considered a bad practice. To get an answer you'd better read an article, or docs, or even a book about things you have questions about. But sometimes we all just type in the question, read the first answer, copy some piece and not dig too deep, right?

I've noticed several times that an answer with "the best" ![the best mark](https://github.com/muRn/proper-sort/raw/main/best-answer.png) mark is not always the best actually. Sometimes second answer has much more upvotes and is much more relevant. However, it is still below the accepted one and you have to scroll to read it. Question authors [can change their "the best" decision any time](https://stackoverflow.com/help/someone-answers) but most of them simply don't, and worse answer stays on top.

I know JS a little, so I changed this behavior. After enabling the userscript, author's "the best" mark is treated as 10 regular upvotes. Otherwise it doesn't give any advantage. Then all answers are sorted descending by rating. 

Big advantage of my implementation is not bringing any libraries or creating clones of the elements. Script just takes existing elements and rearranges them using vanilla js. It doesn't break any existing StackOverflow's javascript code.

# Installation

1. Install add-on for your browser: [Tampermonkey](https://www.tampermonkey.net/) / [Greasemonkey](https://www.greasespot.net/)
2. [Install the userscript](https://github.com/muRn/proper-sort/raw/main/proper-sort.user.js)

## Examples to try on

https://stackoverflow.com/questions/11302639/delete-forked-repo-from-github

https://stackoverflow.com/questions/34521797/how-to-add-multiple-classes-to-a-reactjs-component

https://stackoverflow.com/questions/27726066/jwt-refresh-token-flow

https://stackoverflow.com/questions/35122376/how-can-i-remove-a-file-from-git-within-intellij-vcs

https://stackoverflow.com/questions/25747499/java-8-difference-between-two-localdatetime-in-multiple-units

https://stackoverflow.com/questions/52704/how-do-i-discard-unstaged-changes-in-git

## todo
1) test with different browsers and extensions since currently tested only with firefox+tampermonkey
2) upload this script to popular userscript repositories: [Userscript.Zone Search](https://www.userscript.zone/), [GreasyFork](https://greasyfork.org/), [OpenUserJS](https://openuserjs.org/)
