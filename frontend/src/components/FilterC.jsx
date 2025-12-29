const CategoryFilter = ({ categories, selectedCategory, onChange }) => {
  return (
    <select
      className="form-select"
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
