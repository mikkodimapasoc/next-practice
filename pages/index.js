import { useAuth } from "../utils/auth";

export default function Home() {
  const auth = useAuth();

  return auth.user ? (
    <div>
      <p>Email: {auth.user.email}</p>
      <p>UID: {auth.user.uid}</p>
      <p>Name: {auth.user.name}</p>
      <p>provider: {auth.user.provider}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <div>
      <button onClick={(e) => auth.signinWithFacebook()}>
        Sign in with FACEBOOK
      </button>
      <br />
      <br />
      <button onClick={(e) => auth.signinWithGithub()}>
        Sign in with GITHUB
      </button>
      <br />
      <br />
      <button onClick={(e) => auth.signinWithGoogle()}>
        Sign in with GOOGLE
      </button>
    </div>
  );
}
