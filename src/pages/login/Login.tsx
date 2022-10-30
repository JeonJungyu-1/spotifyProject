import { useEffect, useState } from "react";

const CLIENT_ID = "90b84ea4836b42a889af2ed042e1f2d3";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export default function Login() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const hash: string = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  return (
    <div className="container">
      {!token ? (
        <a
          className="login"
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
}
