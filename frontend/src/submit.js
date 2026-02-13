import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }), shallow);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      
      // Basic modal/alert implementation as requested
      const message = `
        Pipeline Analysis:
        - Nodes: ${result.num_nodes}
        - Edges: ${result.num_edges}
        - Is DAG: ${result.is_dag ? 'Yes' : 'No'}
      `;
      alert(message); // Using alert for simplicity, but could be a toast/modal
    } catch (error) {
      console.error('Error submitting pipeline:', error);
      alert('Failed to submit pipeline. Is the backend running?');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
      <button 
        onClick={handleSubmit}
        style={{
          padding: '10px 24px',
          background: '#6366f1',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => e.target.style.background = '#4f46e5'}
        onMouseOut={(e) => e.target.style.background = '#6366f1'}
      >
        Submit Pipeline
      </button>
    </div>
  );
}
