# pp-card-stragey-web
pp card strategy website (wip)

1. press the green "code" button on the repo page
2. copy the HTTPS link
3. In your terminal in the directory you want the project to be type:
> git clone https://github.com/ThaddG/pp-card-stragey-web.git
4. In the terminal in the directory of the project type:
> yarn install
5. Create a ".env.local" file in the root directory (where package.json is) and add these (vite) firebase variables:
> - VITE_APP_FIREBASE_API_KEY=
> - VITE_APP_FIREBASE_AUTH_DOMAIN=
> - VITE_APP_FIREBASE_PROJECT_ID=
> - VITE_APP_FIREBASE_STORAGE_BUCKET=
> - VITE_APP_FIREBASE_MESSAGING_SENGER_ID=
> - VITE_APP_FIREBASE_APP_ID=
6. Ask thadd for the firebase variable data or look for it yourself in the console
7. To then run the app, in the terminal type:
> yarn dev
8. Go to the localhost link it provides, default is :3000 unless it's already being used
