import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const [colors, setColors] = useState(new Values('#f4c3d2').all(10));
  console.log(colors);
  toast.error('gg');
  toast.success('Well Played');
  return (
    <main>
      <ToastContainer position="top-right"></ToastContainer>
      <Form></Form>
      <ColorList colors={colors}></ColorList>
    </main>
  );
};
export default App;
