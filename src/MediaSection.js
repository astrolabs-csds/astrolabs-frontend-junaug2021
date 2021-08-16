function MediaSection(props) {
    return (
        <div className="container py-5">
            {
                props.content.map(
                    function(element, index) {

                        let rowOrder = "";
                        
                        // % is the modulo operator.
                        // This operator returns 0 if the number is divisible by 2
                        if( index % 2 === 0) {
                            rowOrder = "";
                        } else {
                            rowOrder = "flex-row-reverse";
                        }

                        return (
                            <div>
                                <hr style={ {"margin": "80px 0px 80px 0px"}} />
                                <div className={"row " + rowOrder}>
                                    <div className="col-12 col-lg-7">
                                        <h3 className="display-4 mt-5">{element.title}</h3>
                                        <p>{element.description}</p>
                                    </div>
                                    <div className="col-12 col-lg-5">
                                        <img src={element.picture} width="100%" />
                                    </div>
                                
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default MediaSection;