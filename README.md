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

**NOTE: The shortener will NOT ACCEPT URLs without a TLD (.com etc). `localhost` and `localhost:3000` etc. won't work be accepted**
