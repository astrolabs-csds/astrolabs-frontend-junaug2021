// import Button from './Button.js';
import Card from './Card.js';
import NavBar from './NavBar.js';
import Hero from './Hero.js'

const travelLocations = [
  {
    image: "https://images.unsplash.com/photo-1628887391400-0c8cc8f3fac1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Berchtesgaden, Germany",
    description: "Lovely travel destination",
    buttonLabel: "Visit",
    buttonLink: "https://..."
  },
  {
    image: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Florence, Italy",
    description: "Lovely travel destination",
    buttonLabel: "Visit",
    buttonLink: "https://..."
  },
  {
    image: "https://images.unsplash.com/photo-1623674587543-9c7564de99d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    title: "Giza, Egypt",
    description: "Lovely travel destination",
    buttonLabel: "Visit",
    buttonLink: "https://..."
  },
  {
    image: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0cmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Petra, Jordan",
    description: "Lovely travel destination",
    buttonLabel: "Visit",
    buttonLink: "https://..."
  }
]

function App() {
  return (
    <div>
      <NavBar logo="BTA"/>
      <Hero 
        title="Bootstrap Travel Agency"
        description="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
        buttonLabel1="Book Now"
        buttonLabel2="Learn More"
      />

      <div className="container">
        <div className="row">
            {
              travelLocations.map(
                (location) => {
                  return (
                    <div className="col-12 col-md-3 mb-3">
                      <Card 
                        image={location.image}
                        title={location.title}
                        description={location.description}
                        buttonLabel={location.buttonLabel}
                        buttonLink={location.buttonLink}
                      />
                    </div>
                  )
                }
              )
            }
        </div>
      </div>


    </div>
  );
}

export default App;
