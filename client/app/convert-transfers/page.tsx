"use client";
import { useState } from 'react';

import styles from './page.module.css';

export default function ConvertTransfers() {
  const [activeTab, setActiveTab] = useState<'Before' | 'After'>('Before');

  return (
    <div className={styles.page}>
      <h1>乗り換え変換ツール</h1>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === 'Before' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('Before')}
        >
          Before
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'After' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('After')}
        >
          After
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'Before' && (
  <div>
    <textarea rows={10} cols={50} />
    <br />
    <button onClick={() => {}}>Read</button>
    <button onClick={() => {}}>Convert</button>
  </div>
)}
        {activeTab === 'After' && (
  <div>
    <textarea rows={10} cols={50} />
    <br />
    <button onClick={() => {}}>Copy</button>
  </div>
)}
      </div>
    </div>
  );
}

