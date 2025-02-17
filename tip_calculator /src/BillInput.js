export default function BillInput({bill, setBill, children}) {
  return (
    <>
      {children}
      <input
        id="bill-input"
        className="tipcalc-input"
        type="text"
        placeholder="Bill value"
        value={bill?bill:null}
        onChange={(e) => setBill(e.target.value)}
      />
    </>
  );
}