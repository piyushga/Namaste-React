const User = (props) => {
  const { name } = props;
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Frankfurt</h3>
      <h3>Contact: piyush2783garg@gmail.com</h3>
    </div>
  );
};

export default User;
