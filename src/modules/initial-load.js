const header = () => {
  return `
  <nav class="nav-bar">
    <h1 class="title">Sushi King Express</h1>
    <div class="links">
      <button class="home">Home</button>
      <button class="menu">Menu</button>
      <button class="contact">Contact</button>
    </div>
  </nav>
  `
};

const footer = () => {
  return `
  <footer>
    <p>By Prabhjot Singh</p>
    <a href="http://">
      Link
      <img src="" alt="">
    </a>
  </footer>
  `
};

const initialLoad = () => {
  const element = document.getElementById('content');
  element.innerHTML += header();
  element.innerHTML += footer();
  return element;
};

export default initialLoad;