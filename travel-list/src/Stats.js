export default function Stats({ list }) {
  if (!list.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }
  const nItems = list?.length;
  const npacked = list?.reduce((acc, cur) => acc + (cur.packed ? 1 : 0), 0);
  const Y = (npacked / nItems).toFixed(2) * 100;
  return (
    <footer className="stats">
      {Y !== 100 ? (
        <em>
          🧳 You have {nItems} items on your list, and have already packed {Y}%
          percent of your luggage{" "}
        </em>
      ) : (
        <em>You are ready to go!</em>
      )}
    </footer>
  );
}
