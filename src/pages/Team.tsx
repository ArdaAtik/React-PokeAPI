import { useParams } from "react-router-dom";

export function Team() {
  let params = useParams();
  return <h1>Team id {params.teamId}</h1>;
}
