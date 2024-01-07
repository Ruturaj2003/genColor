import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';
import { useState } from 'react';
const App = () => {
  const [colors, setColors] = useState(new Values('#f4c3d2').all(10));
  console.log(colors);
  return (
    <main>
      <Form></Form>
      <ColorList colors={colors}></ColorList>
    </main>
  );
};
export default App;
