'use client';

import React, { useEffect, useState } from 'react';
import { signOut, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import styles from './dashboard.module.css';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  // Don't render anything until auth state is determined
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading...</p>
      </div>
    );
  }

  // If not logged in, the redirect will happen via useEffect
  // Don't render the dashboard content
  if (!user) {
    return null;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>Hackathon Points</h1>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.welcomeCard}>
          <div className={styles.userInfo}>
            {user?.photoURL && (
              <img 
                src={user.photoURL} 
                alt="Profile" 
                className={styles.avatar}
              />
            )}
            <div>
              <h2 className={styles.welcomeTitle}>
                Welcome back{user?.displayName ? `, ${user.displayName}` : ''}!
              </h2>
              <p className={styles.email}>{user?.email}</p>
            </div>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🏆</div>
            <div className={styles.statContent}>
              <p className={styles.statLabel}>Total Points</p>
              <p className={styles.statValue}>—</p>
              <p className={styles.statSubtext}>Coming soon</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>✅</div>
            <div className={styles.statContent}>
              <p className={styles.statLabel}>Tasks Completed</p>
              <p className={styles.statValue}>—</p>
              <p className={styles.statSubtext}>Coming soon</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>📊</div>
            <div className={styles.statContent}>
              <p className={styles.statLabel}>Rank</p>
              <p className={styles.statValue}>—</p>
              <p className={styles.statSubtext}>Coming soon</p>
            </div>
          </div>
        </div>

        <div className={styles.actionsCard}>
          <h3 className={styles.actionsTitle}>Quick Actions</h3>
          <div className={styles.actionButtons}>
            <button className={styles.actionButton} disabled>
              Add Task
              <span className={styles.badge}>Soon</span>
            </button>
            <button className={styles.actionButton} disabled>
              View Leaderboard
              <span className={styles.badge}>Soon</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
