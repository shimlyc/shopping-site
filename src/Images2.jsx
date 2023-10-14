function Images2(props){
    const{image,title}=props
    return(
        <>
        
        <div className="div2">
            <img  className="image" src={image} alt="" />
            <div>
                <p>{title}</p>
            </div>
        </div>
        
        </>
    )
}
export default Images2