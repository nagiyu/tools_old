"use client";
import { useState } from 'react';
import { Tabs, Button, Textarea } from '@mantine/core';

import styles from './page.module.css';

export default function ConvertTransfers() {
  const [activeTab, setActiveTab] = useState<'Before' | 'After'>('Before');

  return (
    <div className={styles.page}>
      <h1>乗り換え変換ツール</h1>
      <Tabs value={activeTab} onTabChange={(value) => setActiveTab(value as 'Before' | 'After')}>
        <Tabs.List>
          <Tabs.Tab value="Before">Before</Tabs.Tab>
          <Tabs.Tab value="After">After</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Before">
          <Textarea rows={10} />
          <Button onClick={() => {}}>Read</Button>
          <Button onClick={() => {}}>Convert</Button>
        </Tabs.Panel>

        <Tabs.Panel value="After">
          <Textarea rows={10} />
          <Button onClick={() => {}}>Copy</Button>
        </Tabs.Panel>
)}
        {activeTab === 'After' && (
  <div>
    <textarea rows={10} cols={50} />
    <br />
    <button onClick={() => {}}>Copy</button>
  </div>
)}
      </Tabs>
      </div>
    </div>
  );
}

