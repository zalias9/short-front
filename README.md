Clone this repository.

```
git clone https://github.com/zalias9/short-frontend.git
cd short-frontend
```

You must add a `.env.local` file in the root folder (Where this README.md file is located). The .env file should contain the following environment variables.

```
REACT_APP_FRONTEND=http://localhost:3000
REACT_APP_BACKEND=http://localhost:8080
```

Those are the default backend and frontend endpoints.

Then,

```
npm i
npm start
```

You can visit the site now at `http://localhost:3000`

**NOTE: The first time you run the app, you will see a perpetually loading table in the "Top N Visits" Components. You can still use the "Shorten" function. Once you have added at least one short Url, it will load the data.**

**NOTE: The shortener will NOT ACCEPT URLs without a TLD (Must have .com etc). `localhost` and `localhost:3000` etc. won't be accepted**
