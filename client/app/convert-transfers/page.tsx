import React from 'react';

"use client";
import { useState } from 'react';
import { Tabs, Button, Textarea } from '@mantine/core';

import styles from './page.module.css';

export default function ConvertTransfers() {
  const [activeTab, setActiveTab] = useState<'Before' | 'After'>('Before');

  const [beforeText, setBeforeText] = useState('');
  const [afterText, setAfterText] = useState('');

  // Read button handler: read clipboard and set beforeText
  const handleRead = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setBeforeText(text);
      setActiveTab('Before');
    } catch (error) {
      console.error('Failed to read clipboard:', error);
    }
  };

  // Convert button handler: currently no conversion, just copy beforeText to afterText
  const handleConvert = () => {
    setAfterText(beforeText);
    setActiveTab('After');
  };

  // Copy button handler: copy afterText to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(afterText);
    } catch (error) {
      console.error('Failed to write clipboard:', error);
    }
  };

  return (
    <div className={styles.page}>
      <h1>乗り換え変換ツール</h1>
      <Tabs value={activeTab} onChange={(value) => setActiveTab(value as 'Before' | 'After')}>
        <Tabs.List>
          <Tabs.Tab value="Before">Before</Tabs.Tab>
          <Tabs.Tab value="After">After</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Before">
          <Textarea rows={10} value={beforeText} onChange={(event) => setBeforeText(event.currentTarget.value)} />
          <Button onClick={handleRead}>Read</Button>
          <Button onClick={handleConvert}>Convert</Button>
        </Tabs.Panel>

        <Tabs.Panel value="After">
          <Textarea rows={10} value={afterText} readOnly />
          <Button onClick={handleCopy}>Copy</Button>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

