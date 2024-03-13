export const SearchForm = ({ onHandleSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const input = e.currentTarget;
    onHandleSubmit(input.elements.text.value);
    input.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <button type="submit">Search</button>
    </form>
  );
};
