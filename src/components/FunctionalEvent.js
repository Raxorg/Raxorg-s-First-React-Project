function FunctionalButton() {
  function handleClick() {
    console.log("Click");
  }
  const handleClick2 = () => {
    console.log("Click 2");
  };
  return (
    <div>
      Functional Event
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click</button>
    </div>
  );
}
export default FunctionalButton;
