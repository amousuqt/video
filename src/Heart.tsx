import "./createHeart.css";
import Video from "./video";

function Heart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💗";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
  return (
    <div>
      <Video />
      {/* <h1>Click my heart</h1>
      <a href="https://github.com/amousuqt/video">
        <img src="https://i.ibb.co/VxxhYth/heart-removebg-preview.png" />
      </a> */}
    </div>
  );
}

setInterval(Heart, 300);

export default Heart;
