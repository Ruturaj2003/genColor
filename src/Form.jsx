import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h4>Color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f4c3d2"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Generate
        </button>
      </form>
    </section>
  );
};
export default Form;
