I used Git as a control version system.
The way I named my branches followed the git-flow rules.
Branch master: production,
Branch develop: development, and from develop each feature/

I created Pull Request to check changes on my own code before merge each branch feature/ to develop. Travis helped me to ensure the CI.

.eslintrc.js was incluyed to this project in order to have clean code. I used the command ```npm run fixLint```before to each commit.

I worked with the KISS principle in mind, so I didn't fetch to data, but was other option

I used sass mixins in order to not have duplicated code. And sass variables in order to make easy to other person change all styles quickly if he wants.

I used react intersection observer in order to load 20 more results when user do scroll. Next step to improve would be unmount that results which are outside of viewport in order to not render heavy to browser.