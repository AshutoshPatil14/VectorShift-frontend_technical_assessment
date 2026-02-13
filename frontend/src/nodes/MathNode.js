import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode, NodeField, NodeSelect } from './BaseNode';

export const MathNode = ({ id, data, selected }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  const handles = [
    { type: 'target', position: Position.Left, id: 'a', style: { top: '30%' } },
    { type: 'target', position: Position.Left, id: 'b', style: { top: '70%' } },
    { type: 'source', position: Position.Right, id: 'result' }
  ];

  return (
    <BaseNode id={id} label="Math" handles={handles} selected={selected}>
      <NodeField label="Operation">
        <NodeSelect value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </NodeSelect>
      </NodeField>
    </BaseNode>
  );
};
