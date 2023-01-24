import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
  const { username = "ibrahim" } = useParams(); // path parameter
  console.log(username);
  return (
    <div>
      <h1>ShowGithubUser: {username}</h1>
      <GithubUser username={username} />
      {/* <Outlet /> */}
    </div>
  );
}

// const some = useParams();
// console.log(some.username);
