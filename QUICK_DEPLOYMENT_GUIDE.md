# 🚀 Quick Deployment Guide - Vario Redirect Update

## 📍 Current Situation
- ✅ Code changes are **ready and committed** locally
- ✅ `/vario` route will redirect to `https://getearnly.com`
- ⏳ Need to deploy to Cloudflare Pages

---

## 🎯 Fastest Deployment Method

Since the `earnly-ai` Cloudflare Pages project **doesn't have GitHub connected**, you have **2 options**:

### Option 1: Connect GitHub and Auto-Deploy (Recommended for Future)

**Steps:**
1. Go to: `https://dash.cloudflare.com`
2. Login with: `joechai9632@gmail.com`
3. Navigate: **Workers & Pages** → `earnly-ai` project
4. Click: **Settings** → **Builds & deployments**
5. Click: **Connect to Git**
6. Select: **GitHub**
7. Authorize: Cloudflare to access your GitHub
8. Select Repository: `7gmnmsbwzx-ship-it/earnly-ai-2.0`
9. Configure:
   - **Production branch**: `main`
   - **Build command**: `npm install && npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
10. Click: **Save**

After this setup, **any push to `main` branch will auto-deploy**.

---

### Option 2: Manual File Upload (Fastest Right Now)

Since we can't push to GitHub directly, we need to manually update the code in Cloudflare:

#### Step-by-Step Manual Update:

**Step 1: Build the Project Locally**
```bash
cd /home/user/earnly-ai-2.0
npm install
npm run build
```

**Step 2: Upload via Wrangler CLI**
```bash
cd /home/user/earnly-ai-2.0
npx wrangler pages deploy dist --project-name earnly-ai
```

Let me try this now...

---

## ⚡ Alternative: Direct Code Edit (If Available)

Some Cloudflare Pages projects allow direct code editing:

1. Go to: `https://dash.cloudflare.com`
2. Navigate: Workers & Pages → `earnly-ai`
3. Look for: **Quick Edit** or **Edit Code** button
4. Find: `src/index.tsx` line 1711
5. Replace:
   ```typescript
   // OLD
   app.get('/vario', (c) => {
     return c.html(VarioAISearch())
   })
   
   // NEW
   app.get('/vario', (c) => {
     return c.redirect('https://getearnly.com')
   })
   ```
6. Save and deploy

---

## 📦 Files Changed
- **src/index.tsx** (Line 1711-1713)
- **Commit Message**: `feat: Redirect /vario to new Vario link-in-bio platform at getearnly.com`

---

## ✅ After Deployment

Test the redirect by visiting:
- `https://earnly-ai.pages.dev/vario` → Should redirect to `https://getearnly.com`
- `https://getearnly.com/vario` → Should redirect to `https://getearnly.com`

---

**Need Help?** Check `VARIO_REDIRECT_UPDATE.md` for detailed instructions.
