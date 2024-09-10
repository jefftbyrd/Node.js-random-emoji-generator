# Node.js Random Emoji Generator

- without any user input: print random emoji

```
node index.js
"🥹"
node index.js
"🦊"
```

- with user input of a correct emoji name: print emoji

```
node index.js smiley
"😊"
```

- with user input of an incorrect emoji name: print error message that emoji doesn't exist

```
node index.js jose
Sorry that emoji doesn't exist
```

## Steps to solve the task

- [ ] figure out how to print an single emoji
- [ ] figure out which library allows me to find a random emoji (extra points if allows me to get an emoji by name)
- [ ] figure out how to receive user input form the command line
- [ ] figure out how to use the text from last step to get the right emoji
- [ ] figure out how to prevent the error to happen when there is no emoji input
- [ ] figure out how show a message when emoji doesn't exist
- [ ] prevent to print a random emoji when user input is provided
