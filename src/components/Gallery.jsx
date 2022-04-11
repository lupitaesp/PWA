


export default function Gallery() {
    return (
      <>
        <main>
          <h2>Collage</h2>
          <div>
            <img src={process.env.PUBLIC_URL + '/1.jpeg'} alt="imagen-prueba" height="250px"/>
            <img src={process.env.PUBLIC_URL + '/2.jpeg'} alt="imagen-prueba" height="250px"/>
          <div>
            <img src={process.env.PUBLIC_URL + '/3.jpeg'} alt="imagen-prueba" height="250px"/>
            <img src={process.env.PUBLIC_URL + '/4.jpeg'} alt="imagen-prueba" height="250px"/>
          </div>
          </div>
        </main>
      </>
    );
  }