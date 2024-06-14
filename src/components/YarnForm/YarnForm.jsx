import { useDispatch } from 'react-redux';

export default function YarnForm() {
  const dispatch = useDispatch();

  const upload = () => {
    dispatch({ type: 'SEND_UPLOAD' });
  };

  return (
    <>
      <h1>Add New Yarn</h1>
      <form onSubmit={upload}>
        {/* <input placeholder='Brand'></input>
        <input placeholder='Quantity'></input>
        <input placeholder='Fiber Content'></input>
        <input placeholder='Weight'></input>
        <input placeholder='Grams/skein'></input>
        <input placeholder='Color'></input> */}
        <input placeholder='Description' />
        <button type='submit'>Submit</button>
      </form>
      <h2>Yarn List</h2>
    </>
  );
}
