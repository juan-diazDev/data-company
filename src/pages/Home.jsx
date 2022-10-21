import LoginForm from '../components/LoginForm';
import '../components/LoginForm/styles.scss';

const Home = () => {
  console.log('hola');

  return (
    <main className="home__main-conatiner">
      <LoginForm />
    </main>
  );
};

export default Home;
