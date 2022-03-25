import sushiPhoto from '../sushi-photo.jpg';

const home = () => {
  return `
    <div class="landing-info">
      <img src="${sushiPhoto}" alt="sushi-photo" srcset="" />
      <div class="info">
        <h2 class="about">About Us</h2>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipiscing elit varius, ultricies nec erat blandit sapien lectus condimentum, conubia facilisis porta diam nascetur bibendum imperdiet. Habitant justo fermentum mollis taciti magnis litora enim dictum varius, accumsan mus gravida tellus nullam tempor lacus egestas quis porta, nisi nibh aptent amet sit dolor in integer. </p>
      </div>
    </div>
 `;
}

export default home;