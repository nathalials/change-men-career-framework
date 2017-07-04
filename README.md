# ui-components-react
React UI Components that leverage and modify the ui-primitives-react package

Examples:

* PageTable
* TextInputFormItem
* ConfirmationDialog
* Typography

[![Build Status](https://travis.ibm.com/Watson-IoT/ui-components-react.svg?token=q2bbpaQDcDsR2zbKmTQ7)](https://travis.ibm.com/Watson-IoT/ui-components-react)

### Local Setup

##### Clone the repository

Use Github Desktop or your tool of choice.

##### Log in to NPM Enterprise

1) Ensure you have the latest Node LTS version installed (ex. 6.9.0): https://nodejs.org/en/download/

```
npm set config @ibm:registry http://173.192.225.82:8080
npm login --scope=@ibm
npm set config @watson-iot:registry https://npm-registry.whitewater.ibm.com
npm login --scope=@watson-iot
```

2) When prompted for login information, use your github ID (ex. bboyd) and w3 ID password.

Example:

```
~/Projects/ui-components-react> npm login --scope=@ibm
Username: bboyd
Password: <my password>
Email: (this IS public) bboyd@us.ibm.com
Logged in as bboyd to scope @ibm on http://173.192.225.82:8080.
```

3) Run `npm install`.  This will fail, but will show a URL to use in order to authenticate your session.

```
~/Projects/ui-components-react> npm i
npm ERR! Darwin 16.0.0
npm ERR! argv "/Users/bboyd/.nvm/versions/node/v6.5.0/bin/node" "/Users/bboyd/.nvm/versions/node/v6.5.0/bin/npm" "i" 
npm ERR! node v6.5.0
npm ERR! npm  v3.10.3
npm ERR! code E401

npm ERR! visit https://github.ibm.com/login/oauth/authorize?redirect_uri=https%3A%2F%2Fnpm.whitewater.ibm.com%2Fauth%2Foauth2%2Fcallback&scope=user&state=462778ac-5b0e-454e-9535-8d824d312c7e&response_type=code&client_id=632f6ba99bfdaf940fe8 to validate your session : @watson-iot/ui-primitives-react
```

4) Visit the URL in a browser window.

##### Install dependencies

`npm i`

##### Start the react-storybook dev environment

`npm run start`

Open [`localhost:6006`](http://localhost:6006) to view the component storybook.

### Task Management
1. Download ZenHub for Chrome browser extension: https://chrome.google.com/webstore/detail/zenhub-for-github-enterpr/ieaikbgidbgbjmcbpoopkghkominpgam

### How to publish

1. Edit package.json and change `version` attribute (use [`semver`](http://semver.org/) rules);
2. Run `git tag <version>` (example git tag 1.11.17)
3. Run (once) `npm adduser --scope=@watson-iot --registry=https://npm-registry.whitewater.ibm.com` and fill the required fields once to login on NPMe;
4. Run `npm publish`, the first time an 'error' will be shown with a URL that you have to visit to validate the session;

(If you have questions, ask @bboyd first)
# change-men
