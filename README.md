# Would You Rather App

**Would You Rather** is a project requested by Udacity in order to get the second grade for the **React Nanodegree Program**. It is focused in develop an app that allows the user to **Sign In** (by a list of existing users), answer/check polls, create new polls in the form: *Would you rather [option A] or [option B] ?*, and verify the Leaderboard.

## Installation

Clone the GitHub repository and use `yarn` to install the dependencies.

```
> git clone https://github.com/fdcolon/udacity-would-you-rather.git
> cd would-you-rather
> yarn install 
```

> :warning: If you don't have `yarn` installed in your computer, please type the following in your terminal:

```
> npm install --global yarn
```

## Usage

To run the **Would You Rather** app, just type the following into your terminal:

```
> yarn start
```

### Login

Once the app is running, the first view you will see, will be the **Login** page where you will find a navigation bar, a logo, a dropdown menu with the existing users and a Sign In button.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/login-01.png)
**Figure 1** - Login Page

The first time the app is running and while no new user be added, the users dropdown will contain four users:
  1. `Ghost User`, which is a fake user created with the purpose of emulate an invalid access.
  2. `Sarah Edo`, one of the existing users from the fake database.
  3. `Tyler McGinnis`, the second user from the fake database.
  4. `John Doe`, the third and last valid user from the fake database.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/login-02.png)
**Figure 2** - Users List

> :warning: The `Sign In` button will be enabled ONLY when a user is selected.

If you select the `Ghost User`, you will get an error message saying that the user is invalid.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/login-03.png)
**Figure 3** - Invalid Access

Once you select a valid user and click on the `Sign In` button, you will be able to access the `Home` page.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/home-01.png)
**Figure 4** - Home Page

### Navigation Bar

When you accesed the app with a valid user, the `Navigation Bar` will be enabled to navigate through the menus, such as:
    - `Home`, is the main page for logged users which contains two tabs:
        - `Unanswered Questions`, the list of polls that haven't been answered by the logged user.
        - `Answered Questions`, the list of polls that already have been answered by the logged user.
    - `New User`, allows to create new users.
    - `New Question`, allows to create a new poll.
    - `Leader Board`, displays the first three positions based on the total polls answered and created.
    - `User info`, it contains a `Hello` message followed by the logged user's name and his/her avatar.
    - `Logout`, it allows to close the current session.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/navbar-01.png)
**Figure 5** - Navigation Bar

> :rotating_light: If you are not logged in and you try to navigate thorugh the `Navigation Bar`, you will be redirected to the `Login` page.

> :warning: Once you are logged in, please only use the `Navigation Bar` to navigate through the app. You shouldn't type any URL into the browser's address bar or you will be logged out.

#### Home Page

This is the main page for the logged users which contains two tabs: `Unanswered Questions` (**default view**) and `Answered Questions`.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/home-01.png)
**Figure 6** - Unanswered Questions Tab (default view)

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/home-02.png)
**Figure 7** - Answered Questions Tab

If you are in the `Unanswered Questions` and click on the `View Poll` button of a poll, you will be redirected to the poll details where you should select an option and vote by clicking on the `Submit` button.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/poll-details-01.png)
**Figure 8** - Poll Details (vote form)

When you submit your vote, the view will be updated to an informative page that shows the poll details, your vote selection, the total votes and the percentage of votes per option. The option selected by you will be highlighted with a light green background and an award pin with the legend `Your Vote`.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/poll-details-02.png)
**Figure 9** - Poll Details (results view)

Once you voted, you can go back to the `Home` page noticing the `Unanswered Questions` tab has been updated removing the poll you voted from the list and placed it into the `Answered Questions` tab.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/home-03.png)
**Figure 10** - Unanswered Questions Tab without voted poll

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/home-04.png)
**Figure 11** - Answered Questions Tab with the recet voted poll added (3rd position)

> :warning: The polls list in each tab are arranged from the most recently created (top) to the least recently created (bottom).

#### New User

This section allows you to create a new user (if you would like to). The requested fields are:
    - `User ID`
    - `User Name`
    - `User Avatar`

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-user-01.png)
**Figure 12** - New User Form

> :rotating_light: All the fields are mandatory, if any is missing it will be displayed an error message per field and the `Submit` button will be `disabled`.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-user-02.png)
**Figure 13** - New User Form (error messages due missing data)

> :rotating_light: You cannot use an existing `User ID` or `User Name`. Otherwise, an error message will be displayed and the `Submit` button will be `disabled`.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-user-03.png)
**Figure 14** - New User Form (error messages due duplicated data)

Once you completed the form successfully, all the filed will have a green border which indicates everything is **OK**. You will also notice that the `Submit` button will be enabled.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-user-04.png)
**Figure 15** - New User Form (valid form)

Once you submit the form and the new user has been created, it will be displayed a success message. You will also notice that the form has been reset.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-user-05.png)
**Figure 16** - New User Form (success message)

#### New Question

This section allows you to create a new poll and assign it to the user you are logged in with. It is a simple form made up of two text inputs where you need to specify the two options for voting: `Option One` and `Option Two`.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-question-01.png)
**Figure 17** - New Question Form

> :rotating_light: All the fields are mandatory, if any is missing it will be displayed an error message per field and the `Submit` button will be `disabled`.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-question-02.png)
**Figure 18** - New Question Form (error messages due missing data)

> :rotating_light: You cannot use `both` or `neither` as options. Otherwise, an error message will be displayed and the `Submit` button will be `disabled`.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-question-03.png)
**Figure 19** - New Question Form (error messages due invalid values)

Once you completed the form successfully, all the filed will have a green border which indicates everything is **OK**. You will also notice that the `Submit` button will be enabled.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-question-04.png)
**Figure 20** - New Question Form (valid form)

Once you submit the form and the new question has been created, you will be redirected to the `Home` page where you should see your new poll at the very top of the list into the `Unanswered Questions`.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-question-05.png)
**Figure 21** - New Question Form (success message)

#### Leader Board

This section allows you to see the first three positions of the users activity: `Answered Questions` and `Created Questions`. Depending of the users activity, you will see how they are moving.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/leader-board-01.png)
**Figure 22** - Leader Board

#### Logout

If you would like to close the current session and sign in with another user, just click on the Logout button located at the very end (right side) of the navigation bar.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/logout-01.png)
**Figure 23** - Logout

### Login with new users.

If you create a new user, you should be able to see it into the users list in the `Login` page. If you would like to sign in using his/her account, just select the new user and click on the `Sign In` button.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-user-login-01.png)
**Figure 24** - New User Sign In

Once you signed in as the new user, you should see the `Home` page with all the polls into the `Unanswered Questions` tab and his/her details in the `Navigation Bar`.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-user-home-01.png)
**Figure 25** - New User Home Page (first login)

> :warning: If you go to the `Answered Questions` (the very first time you login with the new user), you will get a message letting you know that `You don't have any answered questions`.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-user-home-02.png)
**Figure 26** - New User Home Page - Answered Questions Tab (first login)

> :warning: Similarly, if you go answer all the polls and go to the `Unanswered Questions`, you will get a message letting you know that `You don't have any unanswered questions`.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/new-user-home-03.png)
**Figure 27** - New User Home Page - Unanswered Questions Tab (all polls voted)

> :warning: **Remember**, everytime you vote or create new polls, the `Leader Board` will be updated.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/leader-board-02.png)
**Figure 28** - Leader Board updated after user activity.

### Page Not Found

Currently, because I'm not using `localstorage` or `sessionstorage` to keep the user's session alive, when you try to access to an unexisting poll, you will get a `404` page with a random funny message and a button to go `Back to Home`. Here I share to you two possible views.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/page-not-found-01.png)
**Figure 29** - Page Not Found (option 1).

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/page-not-found-02.png)
**Figure 30** - Page Not Found (option 2).

If you would like to test it, you can use the following URL:
```
http://localhost:3000/questions/vthrdm985a262al8qxabc
```

> :warning: If you provide an valid path to see the details of an exisgint poll, you will be redirected to the `Login` page. This is because remember that everytime you provide a `URL` from the address bar, `React` will render everything from the very beggining and `Redux` will reset all the `store` values. To test it, you can try the following URL
```
http://localhost:3000/questions/vthrdm985a262al8qx3do
```

## Notes

- As part of the challenge (suggestions), I added the behavior for adding `New Users` in a very simple way as you could see into the [New User](#new-user) section.
- As part of the challenge (suggestions), I added the `Loading Bar` behavior.
- In order to be able to save the `New Questions` and the `Question votes` for the new users, I made an update into the `_DATA.js` file in order to receive the users from the `store` instead to only use the existing users from the fake database.

## License

This App is Copyright © 2021 Fernando Daniel Colon Gonzalez and thoughtbot. It is free software, and may be redistributed under the terms specified in the [LICENSE](https://github.com/fdcolon/udacity-would-you-rather/blob/main/LICENSE) file.