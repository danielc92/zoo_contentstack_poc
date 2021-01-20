import { Entry } from "contentstack";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [entries, setEntries] = useState<{
    data: null | {
      entries: any[];
    };
    error: boolean;
    loading: boolean;
  }>({
    data: null,
    error: false,
    loading: false,
  });

  useEffect(() => {
    setEntries({ ...entries, loading: true });
    fetch(
      "https://eu-cdn.contentstack.com/v3/content_types/daniels_zoo_animal/entries?environment=publish",
      {
        headers: {
          api_key: "blt5fb46dfbc59c25f3",
          access_token: "cs5393e87306d4835587b441d0",
        },
      }
    )
      .then((results) => results.json())
      .then((json) => {
        console.log(json);
        setEntries({ ...entries, data: json, loading: false });
      })
      .catch((error) => {
        console.error(error);
        setEntries({ ...entries, error: true, loading: false });
      });
  }, []);

  const { data, error, loading } = entries;
  return (
    <div className="container">
      <h1>Daniel Corcoran's Zoo App</h1>
      <p>View a list of animals we currently house at our Zoo.</p>
      {error ? (
        <p>We have encountered an error please try again later.</p>
      ) : loading ? (
        <p>Loading please wait...</p>
      ) : data ? (
        <div>
          <p>
            Found <strong>{data.entries.length}</strong> results.
          </p>
          {data.entries.map((d: any) => (
            <div className="zoo-card">
              <img
                src={d.file.url + "?width=800"}
                className="zoo-card__image"
              ></img>
              <div className="zoo-card__content">
                <h3>{d.title}</h3>
                <p>{d.animal_description}</p>
                <p>
                  <strong>Height (cm):</strong> {d.height}.{" "}
                  <strong>Weight (grams):</strong> {d.weight}.
                </p>
                <p>
                  <strong>Birth date:</strong>{" "}
                  {new Date(d.animal_birth_date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Location:</strong> {d.animal_location[0]}
                </p>
                {d.has_discount && (
                  <p className="text--sale">
                    We are currently offering a 20% discount for tickets to
                    visit {d.title}.
                  </p>
                )}
                <p className="text--help">Last updated: {d.updated_at}</p>
              </div>
              {d.has_discount && <div className="sale-badge">Flash Sale</div>}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
