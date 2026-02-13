import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode, NodeField, NodeInput } from './BaseNode';

export const ImageNode = ({ id, data, selected }) => {
  const [src, setSrc] = useState(data?.src || '');

  const handles = [
    { type: 'target', position: Position.Left, id: 'trigger' },
    { type: 'source', position: Position.Right, id: 'image' }
  ];

  return (
    <BaseNode id={id} label="Image" handles={handles} selected={selected}>
      <NodeField label="Image URL">
        <NodeInput value={src} onChange={(e) => setSrc(e.target.value)} placeholder="https://..." />
      </NodeField>
      {src && (
        <div style={{ marginTop: '8px', textAlign: 'center' }}>
          <img src={src} alt="Preview" style={{ maxWidth: '100%', borderRadius: '4px', maxHeight: '100px' }} />
        </div>
      )}
    </BaseNode>
  );
};
