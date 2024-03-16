import React from 'react';

function SignInPage() {
  return (
    <div className="container max-w-lg mx-auto bg-gradient-to-b from-white to-blue-50 border border-blue-200 rounded-lg shadow-xl p-8 my-20">
      <div className="heading text-center font-bold text-2xl text-blue-600 mb-8">Sign In</div>
      <form className="form">
        <input
          required
          className="input rounded-lg bg-white border border-blue-200 py-3 px-4 mb-4 w-full"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <input
          required
          className="input rounded-lg bg-white border border-blue-200 py-3 px-4 mb-4 w-full"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <span className="forgot-password block ml-2">
          <a href="#" className="text-blue-600 text-xs ">Forgot Password ?</a>
        </span>
        <input
          className="login-button block bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold mt-6 py-3 px-4 rounded-lg w-full transition duration-300 hover:shadow-md hover:scale-105 transform"
          type="submit"
          value="Sign In"
        />
      </form>
      </div>
      
  );
}

export default SignInPage;
