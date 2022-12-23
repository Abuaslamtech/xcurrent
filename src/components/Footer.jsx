const Footer = () => {
  let blog = document.getElementById("blog");
  let home = document.getElementById("home");
  let cont = document.getElementById("cont");

  function handleBlogClick() {
    home.classList.remove("clicked");
    blog.classList.add("clicked");
    cont.classList.remove("clicked");
  }
  function handleHomeClick() {
    home.classList.add("clicked");
    blog.classList.remove("clicked");
    cont.classList.remove("clicked");
  }
  function handleContClick() {
    home.classList.remove("clicked");
    blog.classList.remove("clicked");
    cont.classList.add("clicked");
  }
  return (
    <footer>
      <div id="blog" className="blog" onClick={handleBlogClick}>
        Blog
      </div>
      <div id="home" className="home clicked" onClick={handleHomeClick}>
        Home
      </div>
      <div id="cont" className="about" onClick={handleContClick}>
        Contact
      </div>
    </footer>
  );
};

export default Footer;
