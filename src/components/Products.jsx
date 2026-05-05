
import { useState } from "react";

export default function Products({ products, addToCart }) {
  const [search, setSearch] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="بحث..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map(p => (
          <div key={p.id} className="card" onClick={() => addToCart(p)}>
            <h4>{p.name}</h4>
            <p>{p.price} ر.س</p>
          </div>
        ))}
      </div>
    </div>
  );
}
