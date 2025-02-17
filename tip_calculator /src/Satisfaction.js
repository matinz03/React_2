export default function Satisfaction({ id, setTip, value, children }) {
  return (
    <>
      {children}
      <select
        id={id}
        className="tipcalc-select"
        value={value}
        onChange={(e) => setTip(Number(e.target.value))}
      >
        <option value={0}>(0%) Not satisfied</option>
        <option value={5}>(5%) Satisfied</option>
        <option value={10}>(10%) Very satisfied</option>
        <option value={20}>(20%) Utmost satisfaction</option>
      </select>
    </>
  );
}
