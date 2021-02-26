const Food = ({ values }) => {
  return (
    <ul>
      {values.map((value) => (
        <li key={value.id}>{value.name}</li>
      ))}
    </ul>
  );
};

export default Food;
