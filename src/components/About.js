import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      {/* <User name={'Piyush (Function)'}/> */}
      <h1>Developer Profile</h1>
      <UserClass name={"Piyush (class)"}/>
    </div>
  );
};

export default About;
