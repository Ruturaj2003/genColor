import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const [colors, setColors] = useState(new Values('#f4c3d2').all(10));
  console.log(colors);
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <main>
      <ToastContainer position="top-right"></ToastContainer>
      <Form addColor={addColor}></Form>
      <ColorList colors={colors}></ColorList>
    </main>
  );
};
export default App;
