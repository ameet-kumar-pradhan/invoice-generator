1. How long did you spend on the coding test?

A: a day and a half

2. What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

A: I would like to use backend to store the user in database with its corresponding saved invoices so later the user can make changes to its invoices.

3. What was the most useful feature that was added by you in the application?

A: the Client side OAuth in React

```js
<GoogleLogin
  clientId={clientId}
  buttonText="Sign In with Google"
  onSuccess={googleOAuth2}
  onFailure={googleOAuth2}
  cookiePolicy="single_host_origin"
  className={style.googleAuthBtn}
/>
```

4. How would you track down a performance issue in production?

A: by checking the network tab to see if all the requests are success and check in console to see any function caught in loop rendering. to check CPU and ram usage for memory leakage.

5. List of all the libraries and packages used to complete the assignement

- froked from https://github.com/HashemKhalifa/webpack-react-boilerplate
- redux
- react-redux
- redux-thunk
- redux-logger
- react-google-login
