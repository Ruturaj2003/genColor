import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  async function saveToClipBoard() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText('#' + hex);
        toast.success('Color Copied to Clipboard');
      } catch (error) {
        toast.error('Color Not Copied to Clipboard');
      }
    } else {
      toast.error('Could not Add to Clipboard');
    }
  }
  return (
    <article
      onClick={saveToClipBoard}
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: '#' + hex }}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
