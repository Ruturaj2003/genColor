import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';
const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return (
          <SingleColor index={index} color={color} key={nanoid()}></SingleColor>
        );
      })}
    </section>
  );
};
export default ColorList;
