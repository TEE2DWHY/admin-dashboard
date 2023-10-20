// styling
import "../../styles/auth.css";
const SignUp = () => {
  return (
    <>
      <div className="sign-up">
        <div className="signup-header">
          <h1>Get Started</h1>
          <p>Welcome to AppStack's Dashboard.</p>
        </div>
        <form>
          <div>
            <label htmlFor="firstName">First Name </label>
            <input type="text" placeholder="FirstName" required />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="LastName" required />
          </div>
          <div>
            <label htmlFor="email">Last Name</label>
            <input type="email" placeholder="JohnDoe@gmail.com" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" required />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
