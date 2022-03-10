import Input from './common/Input';

function LogIn() {
  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px">
        <div>
          <Input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="rounded-t-md"
            placeholder="Email address"
          />
        </div>
        <div>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="rounded-b-md"
            placeholder="Password"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Log in
        </button>
      </div>
    </form>
  );
}

export default LogIn;
