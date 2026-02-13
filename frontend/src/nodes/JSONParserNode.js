import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const JSONParserNode = ({ id, selected }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'output' }
  ];

  return (
    <BaseNode id={id} label="JSON Parser" handles={handles} selected={selected}>
      <div style={{ fontSize: '12px' }}>
        Parses input string into a JSON object.
      </div>
    </BaseNode>
  );
};
