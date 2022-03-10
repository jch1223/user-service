import Login from '../components/auth/LogIn';

function Home() {
  return (
    <div className="flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full">
        <div>
          <h1 className="text-center text-3xl font-extrabold">Log In</h1>
        </div>

        <Login />
      </div>
    </div>
  );
}

export default Home;
