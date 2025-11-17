# Hackathon Points System

A web application for tracking hackathon participant progress and points.

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (name it "Hackathon Points")
3. Enable **Authentication**:
   - Go to Authentication → Sign-in method
   - Enable **Google** sign-in
   - Enable **Email/Password** sign-in
4. Get your Firebase config:
   - Go to Project Settings → Your apps → Web app
   - Copy the configuration object
5. Update `lib/firebase.ts` with your Firebase configuration

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Create a Test User

**Option A: Google Sign-In**
- Just click "Continue with Google" on the login page

**Option B: Email/Password**
1. Go to Firebase Console → Authentication → Users
2. Click "Add user"
3. Enter email and password (e.g., `test@example.com` / `password123`)
4. Use these credentials to log in

## 📁 Project Structure

```
hackathon-points/
├── app/
│   ├── login/              # Login page
│   ├── dashboard/          # User dashboard
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home (redirects to login)
│   └── globals.css         # Global styles
├── lib/
│   └── firebase.ts         # Firebase configuration
└── package.json
```

## 🎯 Current Features

- ✅ User authentication (Google & Email/Password)
- ✅ Protected routing
- ✅ User dashboard with profile info
- ✅ Logout functionality

## 🔜 Coming Soon (Next Phases)

- [ ] Firebase Firestore integration
- [ ] Points tracking system
- [ ] Task completion logging
- [ ] Admin panel
- [ ] Leaderboard
- [ ] Real-time updates

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with TypeScript
- **Authentication:** Firebase Auth
- **Styling:** CSS Modules
- **Deployment:** Ready for Vercel

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 Environment Variables

If you want to use environment variables instead of hardcoding Firebase config:

1. Create `.env.local` file
2. Add your Firebase config:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```
3. Update `lib/firebase.ts` to use `process.env.NEXT_PUBLIC_*`

## 🐛 Troubleshooting

**"Module not found" errors:**
```bash
npm install
```

**Port already in use:**
```bash
npm run dev -- -p 3001
```

**Firebase auth not working:**
- Check that you've enabled the sign-in methods in Firebase Console
- Make sure your Firebase config is correct in `lib/firebase.ts`
- Check browser console for specific error messages

## 📚 Next Steps

After login is working, proceed to **Phase 2: User Dashboard Structure** from the roadmap!
