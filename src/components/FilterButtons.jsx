const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setFilter("all")}
        className={`py-4 px-6 rounded ${
          filter === "all" ? "text-blue-600" : "text-gray-00"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`py-4 px-6 rounded ${
          filter === "active" ? "text-blue-600" : "text-gray-800"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`py-4 px-6 rounded ${
          filter === "completed" ? "text-blue-600" : "text-gray-800"
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
