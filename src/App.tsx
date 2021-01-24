import React, { useEffect, useState } from "react";
import { CONFIG } from "./contentstack";
import "./App.css";
import { Helmet } from "react-helmet";
import { config } from "process";

interface Banner {
  banner: {
    banner_title: string;
    _metadata: { uid: string };
    banner_subtitle: string;
    variant: string;
  };
}
function App() {
  // animal cards
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

  // page data
  const [page, setPage] = useState<{
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

  const refetchData = (locale: string, content_type: string) => {
    setEntries({ ...entries, loading: true });
    fetch(
      `https://eu-cdn.contentstack.com/v3/content_types/${content_type}/entries?environment=${CONFIG.ENVIRONMENT}&include_fallback=true&locale=${locale}&include[]=author`,
      {
        headers: {
          api_key: CONFIG.API_KEY,
          access_token: CONFIG.DELIVERY_TOKEN,
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
  };

  const refetchPage = (locale: string) => {
    setEntries({ ...entries, loading: true });
    fetch(
      `https://eu-cdn.contentstack.com/v3/content_types/daniels_zoo_page/entries?environment=${CONFIG.ENVIRONMENT}&include_fallback=true&locale=${locale}`,
      {
        headers: {
          api_key: CONFIG.API_KEY,
          access_token: CONFIG.DELIVERY_TOKEN,
        },
      }
    )
      .then((results) => results.json())
      .then((json) => {
        console.log(json);
        setPage({ ...entries, data: json, loading: false });
      })
      .catch((error) => {
        console.error(error);
        setPage({ ...entries, error: true, loading: false });
      });
  };

  useEffect(() => {
    refetchData(CONFIG.LOCALES.FALLBACK_DEFAULT, "daniels_zoo_animal");
    refetchPage(CONFIG.LOCALES.FALLBACK_DEFAULT);
  }, []);

  const { data, error, loading } = entries;
  return (
    <>
      {page.data && (
        <Helmet>
          <title>{page.data.entries[0].meta.page_title}</title>
          <meta
            name="keywords"
            content={page.data.entries[0].meta.single_line.join(",")}
          ></meta>
          <meta
            name="description"
            content={page.data.entries[0].meta.page_description}
          ></meta>
        </Helmet>
      )}

      <div className="container">
        <div className="button-box">
          <button
            onClick={() => {
              refetchData(
                CONFIG.LOCALES.FALLBACK_DEFAULT,
                "daniels_zoo_animal"
              );
              refetchPage(CONFIG.LOCALES.FALLBACK_DEFAULT);
            }}
          >
            English
          </button>
          <button
            onClick={() => {
              refetchData(CONFIG.LOCALES.SPANISH, "daniels_zoo_animal");
              refetchPage(CONFIG.LOCALES.SPANISH);
            }}
          >
            Espanol
          </button>
        </div>

        {page.data && <h1>{page.data.entries[0].title}</h1>}

        {page?.data?.entries[0]?.modular_blocks &&
          page.data.entries[0].modular_blocks.map((block: Banner) => (
            <div
              className={`welcome-banner welcome-banner--${block.banner.variant}`}
            >
              <h3>{block.banner.banner_title}</h3>
              <p>{block.banner.banner_subtitle}</p>
            </div>
          ))}

        <h2>Our animals</h2>

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
                  <p className="text--help">
                    This information was last updated by{" "}
                    <strong>{d.author[0].title}</strong> on {d.updated_at}
                  </p>
                </div>
                {d.has_discount && <div className="sale-badge">Flash Sale</div>}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
