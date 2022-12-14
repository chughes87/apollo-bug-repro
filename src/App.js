// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS_A = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const GET_LOCATIONS_B = gql`
  query GetLocations {
    locations {
      id
      name
      description
    }
  }
`;

function DisplayLocationsA() {
  const { loading, error, data } = useQuery(GET_LOCATIONS_A);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <DisplayLocationsB />
      {data.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img
            width="400"
            height="250"
            alt="location-reference"
            src={`${photo}`}
          />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </>
  );
}

function DisplayLocationsB() {
  const { loading, error, data } = useQuery(GET_LOCATIONS_B);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DisplayLocationsA />
    </div>
  );
}
