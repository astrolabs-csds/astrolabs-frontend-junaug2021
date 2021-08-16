import Card from "./Card"

function CardSection(props) {
    return (
        <div className="container">
            <div className="row">
                {
                props.content.map(
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
    )
}

export default CardSection;