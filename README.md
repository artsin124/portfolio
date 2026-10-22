# Arth Shalabh Sinha — Portfolio

A personal portfolio built with React and Vite. It has no backend; every page is a static file.

## Run it on your Mac

You need Node.js 18 or newer. Check with `node -v`. If it's missing, install it with `brew install node`.

```bash
cd ~/develop/portfolio
npm install        # first time only
npm run dev        # opens at http://localhost:5173
```

Press `Ctrl + C` in the terminal to stop it.

## Put it online with Vercel (about 10 minutes)

1. **Create a GitHub repo.** On github.com, click **New repository**, name it `portfolio`, leave it empty (no README), and click **Create**.
2. **Push the code.** In the terminal:
   ```bash
   cd ~/develop/portfolio
   git init
   git add .
   git commit -m "First version of my portfolio"
   git branch -M main
   git remote add origin https://github.com/artsin124/portfolio.git
   git push -u origin main
   ```
3. **Deploy.** Go to vercel.com and sign in with GitHub. Click **Add New → Project**, pick `portfolio`, and click **Deploy**. Vercel detects Vite on its own, so you don't need to change any settings.
4. In about a minute you get a link like `portfolio-xxxx.vercel.app`. To get a nicer one, go to **Settings → Domains** and change it to something like `arthsinha.vercel.app`.

From then on, every `git push` updates the live site automatically.

## Where to edit things

| What | File |
| --- | --- |
| Name, tagline, email, social links, résumé | `src/data/site.js` |
| Projects and case studies | `src/data/projects.js` |
| Hackathons, skills, About, Beyond the screen | `src/data/about.js` |
| Colours, fonts, spacing, animations | `src/styles.css` |
| Images | `public/images/` |

### Add your résumé

Put the PDF at `public/arth-sinha-resume.pdf`. Then in `src/data/site.js`, set:

```js
resume: '/arth-sinha-resume.pdf',
```

The "coming soon" labels turn into download buttons.

### Add a repo or demo link to a project

In `src/data/projects.js`, change `repo: null` or `demo: null` to the URL.

## Notes

- Private details in the screenshots are already hidden: Ledgerly amounts, the demo shop in Raay, and an email address.
- Animations switch off for visitors who have "Reduce motion" turned on.
- Case studies use links like `/#/work/raay`, so they work on any static host without extra setup.
