import { forwardRef } from 'react';
import { Handle } from 'reactflow';
import './nodes.css';

export const BaseNode = ({ id, label, children, handles = [], style = {}, selected }) => {
  return (
    <div className={`base-node ${selected ? 'selected' : ''}`} style={style}>
      {/* Handles */}
      {handles.map((h, idx) => (
        <Handle
          key={`${id}-handle-${idx}`}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          className="node-handle"
          style={h.style}
        />
      ))}

      {/* Header */}
      <div className="node-header">
        <span>{label}</span>
      </div>

      {/* Content */}
      <div className="node-content">
        {children}
      </div>
    </div>
  );
};

export const NodeField = ({ label, children }) => (
  <div className="node-field">
    {label && <span className="node-field-label">{label}</span>}
    {children}
  </div>
);

export const NodeInput = (props) => (
  <input {...props} className={`node-input ${props.className || ''}`} />
);

export const NodeSelect = (props) => (
  <select {...props} className={`node-select ${props.className || ''}`} />
);

export const NodeTextarea = forwardRef((props, ref) => (
  <textarea {...props} ref={ref} className={`node-textarea ${props.className || ''}`} />
));
