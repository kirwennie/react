const Search = () => {
    const Stext = "А еще вот это....!"
    const searchS = {
      fontSize: '32px',
      width: 600,
    }
    return (
      <input 
      style = {searchS}
      placeholder={Stext}
      className="MyClass"
      />
    )
  }
  
export default Search;