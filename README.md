# React Portfolio

This project is my personal portfolio built with [React](https://react.dev/).

**Live Site:** [willkung.com](https://willkung.com)  
**Repo:** [wilku702/react_portfolio](https://github.com/wilku702/react_portfolio)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits.  
You may also see lint errors in the console.

### `npm run build`

Builds the app for production to the `build` (or `dist`) folder.  
The build is optimized and ready to deploy.

### `npm run test`

Launches the test runner in interactive watch mode.

---

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS  
- **Deployment:** AWS Amplify  
- **DNS/Proxy:** Cloudflare (SSL + routing)  

---

## Deployment

### AWS Amplify  
- Builds from the `main` branch  
- Rewrites all routes → `index.html` (SPA support)

### Cloudflare  
- `www.willkung.com` → Amplify domain (CNAME)  
- Root domain redirected to `www` (or vice versa)  
- SSL/TLS set to **Full (Strict)**  

---

## Learn More

- [React Documentation](https://reactjs.org/)  
- [AWS Amplify Hosting](https://docs.amplify.aws/)  
- [Cloudflare Docs](https://developers.cloudflare.com/dns/)  

---

## Contact

- Email: wkung2004@gmail.com  
- LinkedIn: [linkedin.com/in/willkung702](https://www.linkedin.com/in/willkung702)  
- Portfolio: [willkung.com](https://willkung.com)  