function Profile(props) {
  const { name, lastname } = props;
  const nameDesc = "Name: " + name;
  return (
    <p>
      {nameDesc} {lastname}
      {props.children}
    </p>
  );
}
export default Profile;
