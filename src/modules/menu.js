import fancyPants from '../fancy-pants.jpg';
import orangeTang from '../orange-tang.jpg';
import surpriseMe from '../surprise-me.jpg';
import sushiPlatter from '../sushi-platter.jpg';
import sushicado from '../sushicado.jpg';
import theBasics from '../the-basics.jpg';
const menu = () => {
  return `
  <div class="menu-info">
    <h2 class="about page-title">Menu</h2>
    <div class="menu-items">
      <div class="item fancyPants">
        <img src="${fancyPants}" alt="fancy pants sushi" srcset="" class="item-img">
        <p class="item-name">Fancy Pants</p>
      </div>
      <div class="item">
        <img src="${orangeTang}" alt="orange tang" srcset="" class="item-img">
        <p class="item-name">Orange-Tang</p>
      </div>
      <div class="item">
        <img src="${surpriseMe}" alt="surprise me" srcset="" class="item-img">
        <p class="item-name">Surprise me</p>
      </div>
      <div class="item">
        <img src="${sushiPlatter}" alt="sushi platter" srcset="" class="item-img">
        <p class="item-name">The Platter</p>
      </div>
      <div class="item">
        <img src="${sushicado}" alt="sushicado" srcset="" class="item-img">
        <p class="item-name">Sushicado</p>
      </div>
      <div class="item">
        <img src="${theBasics}" alt="Basic sushi dish" srcset="" class="item-img">
        <p class="item-name">The Basics</p>
      </div>
    </div>
  </div>
  `
}

export default menu;