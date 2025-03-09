import { useState, useEffect, useRef } from "react";
import "./App.css";
import { CatImage } from "./components/CatImage.tsx";

const API_URL: string = "http://localhost:5000";

function App() {
  const [cats, setCats] = useState<string[]>([]);
  const loaderRef = useRef(null);

  const loadMoreCats = async () => {
    // const newCats = Array.from(
    //   { length: 30 },
    //   // () => `https://cataas.com/cat?&t=${crypto.randomUUID()}`
    //   () => `http://127.0.0.1:5000/images?&t=${crypto.randomUUID()}`
    //   // () => `http://127.0.0.1:5000/images/json/1?&t=${crypto.randomUUID()}`
    // );
    // console.log(newCats);
    // setCats((prevCats) => [...prevCats, ...newCats]);

    // const newCats: string[] = [];
    // fetch("http://127.0.0.1:5000/images/json/1").then((response) =>
    //   newCats.push(response.json().url)
    // );
    // setCats((prevCats) => [...prevCats, ...newCats]);

    // const newCats: string[] = [];
    // for (let i = 0; i < 10; i++) {
    //   const response = await fetch("http://127.0.0.1:5000/images/json/1", {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //   });
    //   const data = await response.json();
    //   const newCatUrl = data.url;
    //   newCats.push(newCatUrl);
    // }

    const newCats: string[] = [];
    // const res_json = await fetch("http://127.0.0.1:5000/images/json/10").then(
    const res_json = await fetch(
      // "http://192.168.0.102:5000/images/json/10"
      // "http://localhost:5000/images/json/10"
      API_URL + "/images/json/10"
    ).then((res) => res.json());
    // console.log(res_json);
    setCats((prevCats) => [...prevCats, ...res_json.urls]);

    // newCats = res_json.urls;

    // setCats((prevCats) => [...prevCats, ...newCats]);
  };

  // Intersection Observer - sprawdza, czy użytkownik dotarł do końca listy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCats(); // Załaduj więcej kotów
        }
      },
      { threshold: 0.5, rootMargin: "500px" }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Początkowe załadowanie kotów
  useEffect(() => {
    console.log("loading for first time");
    loadMoreCats();
  }, []);

  return (
    <>
      <div className="gallery-container">
        <h1>Cat</h1>
        {/* <a href="/upload">Uplaod</a> */}
        <div className="gallery">
          {cats.map((url, index) => (
            <CatImage key={index} url={url} id={index} />
          ))}
        </div>
        <div
          ref={loaderRef}
          style={{ height: 20, background: "transparent" }}
        />{" "}
        {/* Loader */}
      </div>
    </>
  );
}

export default App;
