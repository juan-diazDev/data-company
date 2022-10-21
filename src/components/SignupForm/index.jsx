import { Link } from 'react-router-dom';
import './styles.scss';

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  return (
    <main className="singup__page__conatiner">
      <section className="signup__logo-conatiner">
        <figure>
          <img src="img/logo.png" alt="text_logo" />
        </figure>
      </section>

      <section className="signup__main-container">
        <article className="signup__title-wraper">
          <h2>
            Signup
          </h2>
        </article>

        <form className="signup__form__main-container" onSubmit={handleSubmit}>
          <article className="signup__form__input" required>
            <label htmlFor="fullname">
              Fullname
              <input type="fullname" name="fullname" placeholder="fullname" />
            </label>
          </article>

          <article className="signup__form__input" required>
            <label htmlFor="email">
              Email
              <input type="email" name="email" placeholder="email" />
            </label>
          </article>

          <article className="signup__form__input" required>
            <label htmlFor="name">
              password
              <input type="password" name="password" placeholder="password" />
            </label>
          </article>

          <article className="signup__form__input">
            What is your role?
            <select name="role" id="role" required>
              <option value="" disabled>Role</option>
              <option name="USER" value="USER">User</option>
              <option name="ADMIN" value="ADMIN">Admin</option>
            </select>
          </article>

          <article className="signup__form__login__link">
            <Link to="/">Already have an account? Click here</Link>
          </article>

          <article>
            <button className="signup__form__submit__button" type="submit">
              Continue
            </button>
          </article>
        </form>
      </section>
    </main>
  );
};

export default SignupForm;
