import { ReactNode } from 'react';

const BaseCode = function ({ children }: { children: ReactNode }) {
  return (
    <pre
      style={{
        whiteSpace: 'pre-wrap',
        fontFamily: 'monospace',
        backgroundColor: '#f5f5f5',
        padding: '10px',
        border: '1px solid #ddd',
        wordBreak: 'break-all',
        borderRadius: '4px',
      }}
    >
      <code>{children}</code>
    </pre>
  );
};

export { BaseCode };
