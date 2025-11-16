# GitHub Pages Deployment Guide

## Prerequisites

1. A GitHub account
2. Your project repository on GitHub
3. GitHub Pages enabled (instructions below)

## Step 1: Update Repository Name in Vite Config

**IMPORTANT**: Before deploying, update `vite.config.js` to match your repository name.

In `vite.config.js`, change `/scratchWebsite_build/` to match your repository name:

```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```

**Example**: If your repository is `mcm-scratch-club`, change it to:
```javascript
base: process.env.NODE_ENV === 'production' ? '/mcm-scratch-club/' : '/',
```

If your repository name is `username.github.io` (your user/organization page), set it to:
```javascript
base: '/',
```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - **Deploy from a branch**: `gh-pages` (if using manual method)
   - **OR**: **GitHub Actions** (recommended - automatic)
4. Click **Save**

## Step 3: Automatic Deployment (Recommended)

### Using GitHub Actions (Already Configured)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your site.

**To deploy:**

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **The workflow will automatically**:
   - Build your React app
   - Deploy to GitHub Pages
   - Trigger on every push to `main` branch

3. **View your site**:
   - Your site will be available at:
     `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - It may take a few minutes for the first deployment

4. **Check deployment status**:
   - Go to **Actions** tab in your GitHub repository
   - You'll see the deployment workflow running

## Step 4: Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to `package.json`**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **In GitHub Settings → Pages**, set source to `gh-pages` branch

## Troubleshooting

### Routes Not Working (404 Errors)

React Router requires a `404.html` fallback. After deploying, GitHub Pages should redirect all routes to `index.html`. If this doesn't work:

1. Create a `.nojekyll` file in your `dist` folder before deploying
2. Or use a custom 404 page that redirects to `index.html`

### Base Path Issues

- Make sure the `base` path in `vite.config.js` matches your repository name exactly
- Include the leading and trailing slashes: `/repo-name/`
- If deploying to a user/organization page (`username.github.io`), use `/` as base

### Build Fails

- Check Node.js version (should be 18+)
- Ensure all dependencies are installed: `npm install`
- Check for linting errors: `npm run lint`

### Site Not Loading

- Wait 5-10 minutes after first deployment
- Clear browser cache
- Check the Actions tab for deployment errors
- Verify the repository name in `vite.config.js` matches your GitHub repo

## Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in your `public/` folder with your domain:
   ```
   example.com
   ```

2. In GitHub Settings → Pages, add your custom domain

3. Update DNS records with your domain provider

## Useful Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy (if using manual method)
npm run deploy

# Check build output
ls -la dist/
```

## URL Structure

- **Repository page**: `https://username.github.io/repository-name/`
- **User page**: `https://username.github.io/` (requires special repo name)
- **Organization page**: `https://orgname.github.io/` (requires special repo name)

## Notes

- GitHub Pages serves static files only (HTML, CSS, JS)
- React Router works because GitHub Pages redirects to `index.html`
- The site rebuilds automatically on every push to `main` branch (if using GitHub Actions)
- First deployment may take 5-10 minutes, subsequent updates are faster

