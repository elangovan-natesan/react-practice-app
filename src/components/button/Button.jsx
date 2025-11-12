export default function Button({ label, handleClick }) {
  return (
    <>
      <button
        className="btn btn-primary mt-3"
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        {label}
      </button>
    </>
  );
}
