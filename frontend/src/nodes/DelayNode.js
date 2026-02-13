import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode, NodeField, NodeInput } from './BaseNode';

export const DelayNode = ({ id, data, selected }) => {
  const [delay, setDelay] = useState(data?.delay || 1000);

  const handles = [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'output' }
  ];

  return (
    <BaseNode id={id} label="Delay" handles={handles} selected={selected}>
      <NodeField label="Milliseconds">
        <NodeInput 
          type="number" 
          value={delay} 
          onChange={(e) => setDelay(e.target.value)}
          min="0"
          step="100"
        />
      </NodeField>
    </BaseNode>
  );
};
