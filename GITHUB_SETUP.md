# 🚀 GitHub Setup & Vercel Deployment Guide

## ✅ Current Status: Git Repository Ready

Your project is fully prepared and committed to local git. Now follow these steps to push to GitHub and deploy on Vercel.

## 📁 Step 1: Create GitHub Repository

### 1.1 Go to GitHub
1. **Visit [github.com](https://github.com)**
2. **Sign in** to your account **KusalPabasara**
3. **Click the green "New" button** (or the "+" icon in top right)

### 1.2 Create Repository
Fill in these details:
- **Repository name**: `Consult_commerce`
- **Description**: `Professional children's mental health consulting website with Next.js and email integration`
- **Visibility**: ✅ Public (recommended for free Vercel deployment)
- **Initialize repository**: ❌ **DO NOT** check any boxes (README, .gitignore, license)
- **Click "Create repository"**

## 📤 Step 2: Push Local Project to GitHub

After creating the repository, GitHub will show you commands. Use these exact commands:

### 2.1 Add Remote Origin
```bash
cd children-mental-health-consulting
git remote add origin https://github.com/KusalPabasara/Consult_commerce.git
```

### 2.2 Set Default Branch
```bash
git branch -M main
```

### 2.3 Push to GitHub
```bash
git push -u origin main
```

**Note**: You may be prompted to authenticate. Use your GitHub username and personal access token.

## 🔐 Step 3: GitHub Authentication (if needed)

If prompted for credentials:
- **Username**: `KusalPabasara`
- **Password**: Use a **Personal Access Token** (not your GitHub password)

### To create a Personal Access Token:
1. Go to **GitHub Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**
2. **Generate new token** with `repo` permissions
3. **Copy the token** and use it as password

## 🌐 Step 4: Deploy to Vercel from GitHub

### 4.1 Go to Vercel
1. **Visit [vercel.com](https://vercel.com)**
2. **Sign up/Sign in** (use GitHub account for easy integration)

### 4.2 Import Project
1. **Click "New Project"**
2. **Import Git Repository**
3. **Find "Consult_commerce"** in your repositories
4. **Click "Import"**

### 4.3 Configure Deployment
Vercel will auto-detect settings:
- **Framework Preset**: Next.js ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `.next` ✅
- **Install Command**: `npm install` ✅

### 4.4 Deploy
1. **Click "Deploy"**
2. **Wait 2-3 minutes** for build completion
3. **Get your live URL!**

## 🎯 Expected Results

### GitHub Repository
- **URL**: `https://github.com/KusalPabasara/Consult_commerce`
- **Status**: All project files uploaded
- **Branches**: main branch with complete codebase

### Live Website
- **URL**: `https://consult-commerce-xxx.vercel.app` (Vercel will provide exact URL)
- **Features**: All website functionality working live
- **Performance**: Fast loading with global CDN
- **SSL**: Automatic HTTPS security

## 📧 Email Integration Status

✅ **Ready for kusalpabasararcg@gmail.com**
- Form submissions will be logged to console
- Easy to upgrade to actual email sending
- Professional consultation request format

## 🔄 Automatic Deployments

Once connected:
- ✅ **Auto-deploy** on every git push to main branch
- ✅ **Preview deployments** for pull requests
- ✅ **Rollback capabilities** if needed

## 🎉 Success Checklist

After deployment, test these:
- [ ] Homepage loads correctly
- [ ] About page displays therapist information
- [ ] Contact form accepts submissions
- [ ] Form validation works properly
- [ ] Success message appears after submission
- [ ] Mobile responsiveness on phone/tablet
- [ ] All navigation links work

## 🚨 Troubleshooting

### If git push fails:
```bash
git remote -v  # Check if origin is set correctly
git status     # Check if all files are committed
```

### If Vercel build fails:
- Check that `package.json` and `package-lock.json` are included
- Verify Next.js configuration in `next.config.ts`
- Check build logs in Vercel dashboard

## 📞 Final Steps

1. **Test your live website** thoroughly
2. **Share the Vercel URL** with your client
3. **Optional**: Set up custom domain in Vercel dashboard
4. **Optional**: Configure actual email sending service

---

## 🎯 Quick Command Summary

```bash
# Navigate to project
cd children-mental-health-consulting

# Add GitHub remote
git remote add origin https://github.com/KusalPabasara/Consult_commerce.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**Your professional website will be live in under 10 minutes!** 🚀