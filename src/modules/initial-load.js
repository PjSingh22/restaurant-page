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
    <a href="https://github.com/BATMANGOO/restaurant-page" target="_blank">
      <img src="../src/github.png" alt="github logo" srcset="" class="github-logo">
    </a>
  </footer>
  `
};

export { header, footer };