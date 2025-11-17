# Security Setup Guide

## CRITICAL: Immediate Actions Required

Your Firebase credentials were previously hardcoded in the source code and committed to Git. Follow these steps **immediately** to secure your application:

---

## 1. Regenerate Firebase API Keys

Since your old Firebase credentials are now in your Git history, you **must** regenerate them:

### Steps to Regenerate:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **hackathon-points**
3. Click the gear icon ⚙️ > **Project settings**
4. Scroll down to **Your apps** section
5. Find your web app (App ID: `1:935477175877:web:4e3d82ab5f02abea56a52c`)
6. Click **Delete this app** (or create a new web app)
7. Create a new web app with a fresh configuration
8. Copy the new configuration values to your `.env.local` file

### Update .env.local with new values:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_new_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_new_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=hackathon-points
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_new_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_new_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_new_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_new_measurement_id
```

---

## 2. Set Up Firebase Security Rules

### Firestore Security Rules

If you're using Firestore, add these rules in Firebase Console > Firestore Database > Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Points collection - users can read their own, admins can write
    match /points/{pointId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null &&
        (get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }

    // Leaderboard - read-only for authenticated users
    match /leaderboard/{entry} {
      allow read: if request.auth != null;
      allow write: if false; // Only server-side writes
    }
  }
}
```

### Firebase Authentication Settings

1. Go to **Authentication** > **Sign-in method**
2. Enable **Email/Password** authentication
3. Enable **Google** authentication
4. Configure authorized domains:
   - Add your production domain (e.g., `yourdomain.com`)
   - `localhost` should already be there for development

### Storage Rules (if using Firebase Storage)

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.resource.size < 5 * 1024 * 1024; // 5MB limit
    }
  }
}
```

---

## 3. Remove Credentials from Git History

Your old credentials are in Git history. You have two options:

### Option A: Use BFG Repo-Cleaner (Recommended)

```bash
# Download BFG from https://rpo.github.io/bfg-repo-cleaner/
# Then run:
bfg --replace-text passwords.txt
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force
```

**passwords.txt** should contain:
```
AIzaSyC0uKuZCN97hDDlFVSb2Q5RRUdB2M0i9Kc
1:935477175877:web:4e3d82ab5f02abea56a52c
```

### Option B: Use git-filter-repo

```bash
git filter-repo --path hackathon-points/lib/firebase.ts --invert-paths
# Then restore the file with new environment variable version
git push --force
```

### Option C: Nuclear Option (Fresh Start)

If this is a new project, consider creating a fresh repository:

```bash
# Create new repo without history
git checkout --orphan new-main
git add -A
git commit -m "Initial commit with secure Firebase config"
git branch -D main
git branch -m main
git push -f origin main
```

---

## 4. Review Firebase Console for Suspicious Activity

Check for unauthorized access:

1. **Authentication** > **Users** - Look for unfamiliar accounts
2. **Firestore** > **Data** - Check for unexpected data
3. **Analytics** > **Events** - Review unusual activity
4. **Usage and Billing** - Check for unexpected quota usage

---

## 5. Set Up Monitoring & Alerts

### Firebase App Check (Recommended)

Protect your backend resources from abuse:

1. Go to **App Check** in Firebase Console
2. Enable App Check for your web app
3. Use reCAPTCHA v3 for web apps

### Budget Alerts

1. Go to **Google Cloud Console** > **Billing** > **Budgets & alerts**
2. Set up budget alerts to prevent unexpected costs
3. Set limits on Firebase quota usage

---

## 6. Additional Security Best Practices

### Add CORS Configuration

If using Cloud Functions, restrict CORS to your domains only.

### Use Firebase Admin SDK for Sensitive Operations

Never perform sensitive operations client-side. Use Cloud Functions with Admin SDK.

### Enable MFA (Multi-Factor Authentication)

For admin accounts, enable 2FA in Firebase Authentication settings.

### Regular Security Audits

- Review security rules monthly
- Monitor authentication logs
- Check for dependency vulnerabilities: `npm audit`

---

## 7. Development Environment Setup

For new team members:

1. Clone the repository
2. Copy `.env.example` to `.env.local`
3. Request Firebase credentials from project admin
4. Never commit `.env.local` to Git

---

## 8. Verify Security Setup

Run this checklist:

- [ ] New Firebase credentials generated
- [ ] Old Firebase app deleted from console
- [ ] `.env.local` file contains new credentials
- [ ] `.env.local` is in `.gitignore`
- [ ] Firestore security rules configured
- [ ] Firebase Authentication enabled (Email + Google)
- [ ] Authorized domains configured
- [ ] Git history cleaned of old credentials
- [ ] Suspicious activity reviewed
- [ ] Budget alerts set up
- [ ] App Check enabled (optional but recommended)

---

## Emergency Contact

If you suspect a security breach:

1. **Immediately disable** Firebase Authentication in the console
2. Rotate all credentials
3. Review all Firestore data for unauthorized changes
4. Contact Firebase Support: https://firebase.google.com/support

---

## Resources

- [Firebase Security Rules Guide](https://firebase.google.com/docs/rules)
- [Firebase App Check](https://firebase.google.com/docs/app-check)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Git Secrets](https://github.com/awslabs/git-secrets) - Prevent committing secrets
