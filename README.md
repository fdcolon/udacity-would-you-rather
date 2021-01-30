# Would You Rather App

**Would You Rather** is a project requested by Udacity in order to get the second grade for the **React Nanodegree Program**. It is focused in develop an app that allows the user to **Sign In** (by a list of existing users), answer/check polls, create new polls in the form: *Would you rather [option A] or [option B] ?*, and verify the Leaderboard.

## Installation

Clone the GitHub repository and use `yarn` to install the dependencies.

```
> git clone https://github.com/fdcolon/udacity-would-you-rather.git
> cd would-you-rather
> yarn install 
```

**Note:** If you don't have `yarn` installed in your computer, please type the following in your terminal:

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

The first time the app is running and while no new user be added, the users dropdown will contain four users:
  1. **Ghost User**, which is a fake user created with the purpose of emulate an invalid access.
  2. **Sarah Edo**, one of the existing users from the fake database.
  3. **Tyler McGinnis**, the second user from the fake database.
  4. **John Doe**, the third and last valid user from the fake database.

![](https://github.com/fdcolon/udacity-would-you-rather/blob/main/public/login-02.png)

**Note:** The `Sign In` button will be enabled ONLY when a user is selected.

Once you select a valid user and click on the `Sign In` button, you will be able to access the `Home` page.

### Home Page

## License

This App is Copyright © 2021 Fernando Daniel Colon Gonzalez and thoughtbot. It is free software, and may be redistributed under the terms specified in the [LICENSE](https://github.com/fdcolon/udacity-would-you-rather/blob/main/LICENSE) file.