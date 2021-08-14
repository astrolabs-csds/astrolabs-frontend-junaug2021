function Button(props) {
    return (
      <a 
        href={props.link}
        style={ {"width": props.width} } 
        className="btn btn-primary">{props.children}</a>
    )
}

export default Button;