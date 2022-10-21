import { Link } from 'react-router-dom';

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  return (
    <>
      <section className="home__logo-conatiner">
        <figure>
          <img src="img/logo.png" alt="text_logo" />
        </figure>
      </section>

      <section className="home__login__main-container">
        <article className="login__title-wraper">
          <h2>
            Login
          </h2>
        </article>

        <form className="login__form__main-container" onSubmit={handleSubmit}>
          <article className="login__form__input">
            <label htmlFor="email">
              Email
              <input type="email" name="email" placeholder="email" />
            </label>
          </article>

          <article className="login__form__input">
            <label htmlFor="name">
              password
              <input type="password" name="password" placeholder="password" />
            </label>
          </article>

          <article className="login__form__singup__link">
            <Link to="/sign-up">No account yet? Click here</Link>
          </article>

          <article>
            <button className="login__form__submit__button" type="submit">
              Continue
            </button>
          </article>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
