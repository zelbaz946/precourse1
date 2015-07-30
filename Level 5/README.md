#Precourse-Unit-1-Challenge

** BIG NOTE 1: (Read everything here closely) :eyes: If you get stuck, send an email to <a href="mailto: hello@codesmith.io">hello@codesmith.io</a>

** BIG NOTE 2: While completing the challenges, if all tests that previously passed ALL suddenly fail, there is most likely a syntax error in your code. Open Chrome Dev Tool's to locate the cause of the error. To fix this, copy and paste your code into <http://jshint.com> and fix the corrections, then copy and paste your code back into main.js

##How do I get started?

1. Install git <http://git-scm.com/download/mac> if you haven't already

2. Fork this repo (this saves the assessment files to your own github profile)

  - click on fork button on the top right of the page ![Alt text](https://www.dropbox.com/s/1fwcojockkfwxuy/fork.png?dl=1)
  - click on your handle to fork to your own repo (that's the one with your name)

3. Clone the repo (this pulls down the assessment files to your own computer so you can work on them)

  - copy and paste github url from the right side![Alt text](https://www.dropbox.com/s/40vbvkqcpllbaxf/clone.png?dl=1)
  - type in the following line into your command line and insert your copies url as shown below:
  ````
  git clone *github url
  ````

4. Open ```main.js``` in a text editor (Sublime Text 2 is best - but a simple notepad can work) - it should look like this (if you're using Sublime Text): ![](https://www.dropbox.com/s/uc8ea5m59b8ty1q/mainjs.png?dl=1)
5. Open `index.html` in your browser - it should look like this: ![](https://www.dropbox.com/s/pe7ue6oxb83koit/test-view.png?dl=1)

<br>

# What is this?

In `main.js` you can see a list of functions `add`, `subtract` etc. 

We've written code that runs those functions with dummy inputs

e.g. it runs `add` with dummy inputs 5 and 10, that is `add(5,10)`, behind the scenes and we've told the computer, that with that dummy inputs, it should expect to get back ('return') 15. And if it doesn't our page should display Error! (in red)

![](https://www.dropbox.com/s/t5whgmn0ziayzhg/execpted-to-equal.png?dl=1)

We're getting 'Error!' because our function `add` isn't returning anything! (the computer sees that as returning `undefined`)

![](https://www.dropbox.com/s/660gf8tmmggqe4t/dummy-input-output.png?dl=1)

So we get an error! This is because our 'test' for the function `add` with dummy inputs 10 and 5 is expecting the result 15

Let's fix that

![](https://www.dropbox.com/s/efct5wgk2yaozpv/return15.png?dl=1)

So now we're returning 15 from our `add` functoin

![](https://www.dropbox.com/s/jtk2pll9le3hhfv/fixed-test-one.png?dl=1)

As you can see, the first 'test' is now happy and has disappeared - it wanted the function `add` to return 15 (for dummy inputs 5 and 10) and now it is. But we know that's no good really - we're just hacking it (we're not actually adding 5 and 10 - just writing it out). Now we have a problem with the dummy inputs 5 and 6 - our 'test' wants the function to return 11 (5+6)

So let's actually fix this for real

![](https://www.dropbox.com/s/ejx6wdcr67te2xd/return-value1-value2.png?dl=1)

We'll return from our function the two inputs added together:

```
return value1 + value2;
```

And we've passed our 'test'!

![](https://www.dropbox.com/s/xs1kxre3rx25zcf/test-passing.png?dl=1)

Now you go onto the next one


Bonus video on using Git and Github <https://www.youtube.com/watch?v=tRTckrrCME4>

##How do I test if my answer is correct?
- An incredibly useful tool is Chrome Dev Tool's Javascript Console (which can be opened in Chrome by pressing command+option+J). The console allows for developers to type javascript directly into the browser. 
- Test it out by typing in the following to the console:

```
var message = 'Hello From Codesmith!';
console.log(messages);
```

- You can run your self-assessment functions directly in there if you have the `index.html` file open so for example you can test out

```
add(3,5)
```



## What do I do when I am done with the self-assessment

When completed - you're going to commit and push your changes to your github. What does this mean?

Git is like Apple's time machine - it saves older versions of your work (even after you can no longer press undo) - but unlike Time machine that does this automatically, with Git, you have to tell it when you're ready to save a version for posterity - we use `git add .` and `git commit` for this. 

Github is a place online that you can 'push' up all your old versions so your friends and team mates (and the Codesmith team) can see them

That means you need to `git add .` and `git commit` then `git push` your progress (whenever you feel you're proud of the number of sections you've checked off)

1. Navigate to where you downloaded ('cloned') the precourse-unit-1 assessment ![](https://www.dropbox.com/s/6nzozgkc4j92fnu/Screenshot%202015-06-09%2001.08.09.png?dl=1)

2. Check the status of your work by typing ```git status``` in the command line (terminal). This will check whether you have made any changes. Here we've modified precourse-unit-1.md ![](https://www.dropbox.com/s/w3f4ru2j76sp9sm/git-status.png?dl=1)

3. Add your changes to 'prepare' them for saving a version using the command `git add .` ![](https://www.dropbox.com/s/l5lo4kqfp1emwfq/git%20add.png?dl=1)

4. Now check the status - your file you've updated should have turned green! ![](https://www.dropbox.com/s/3cae2hoyte83ia6/git%20status.png?dl=1)

5. Now we have to add a message using `git commit -m "[YOUR MESSAGE]" - your message should say how far you've got ![](https://www.dropbox.com/s/brparrmbo8mqy45/git%20commit.png?dl=1)

6. Now we're going to 'push' your code up to your github.com profile so we (the Codesmith team) can see it ![](https://www.dropbox.com/s/nenq4u54k3jki80/git%20push.png?dl=1)

7. Have a pool party :swimmer: :swimmer: :dancers: :dancers: