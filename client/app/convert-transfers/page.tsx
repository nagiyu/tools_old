import { useState } from 'react';
import styles from './page.module.css';

export default function ConvertTransfers() {
  const [activeTab, setActiveTab] = useState<'Before' | 'After'>('Before');

  return (
    <div className={styles.page}>
      <h1>乗り換え変換ツール</h1>
      <div className={styles.tabs}>
        <button
          className={activeTab === 'Before' ? styles.activeTab : ''}
          onClick={() => setActiveTab('Before')}
        >
          Before
        </button>
        <button
          className={activeTab === 'After' ? styles.activeTab : ''}
          onClick={() => setActiveTab('After')}
        >
          After
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'Before' && <div>{/* Before tab content goes here */}</div>}
        {activeTab === 'After' && <div>{/* After tab content goes here */}</div>}
      </div>
    </div>
  );
}

