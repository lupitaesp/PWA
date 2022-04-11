
export default function Home() {
    return (
      <>
        <main>
          <p>Conoce un poco de mi.</p>
          <img src={process.env.PUBLIC_URL + '/lupita.jpeg'} alt="imagen-prueba" height="400px" width="250px"/>
          <h2>Lupita Espinoza </h2>
        </main>
      </>
    );
  }