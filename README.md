# Personal Site Template

A static one-page portfolio (no build step) ready for GitHub Pages.

## Structure
- `index.html` — page content (all placeholder text/links marked for you to swap)
- `style.css` — styling, light/dark theme via CSS variables
- `script.js` — theme toggle + mobile nav
- `assets/` — put your photo, resume PDF, and project images here

## Customize
1. Replace "Your Name", title, bio, and social links in `index.html`.
2. Swap the `.about__photo-placeholder` div for `<img src="assets/photo.jpg" alt="Your Name">`.
3. Replace project cards with your real projects, images, and links.
4. Update `assets/resume-placeholder.pdf` with your actual résumé (or remove the button).
5. Change the accent color by editing `--accent` in `style.css`.

## Publish to GitHub Pages
1. Create a repo named exactly `<your-github-username>.github.io`.
2. Push these files to the `main` branch of that repo.
3. In the repo's Settings → Pages, set source to `main` / root (usually automatic for this repo name).
4. Your site will be live at `https://<your-github-username>.github.io`.

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
git push -u origin main
```
