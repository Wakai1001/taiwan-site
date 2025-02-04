'use strict';

document.addEventListener("DOMContentLoaded", function () {
  // Create modal elements
  const modal = document.createElement("div");
  modal.id = "modal";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100vw";
  modal.style.height = "100vh";
  modal.style.backgroundColor = "#0180BE";
  modal.style.display = "none";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.flexDirection = "column";
  modal.style.padding = "20px";
  modal.style.boxSizing = "border-box";
  modal.style.textAlign = "center";

  // Close button
  const closeButton = document.createElement("img");
  closeButton.src = "close-icon.png"; // ここに×マークの画像を指定
  closeButton.alt = "Close";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.width = "30px";
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", function () {
      modal.style.display = "none";
  });

  // Image placeholder
  const image = document.createElement("img");
  image.src = "ningxia-night-market.jpg"; // 画像のパスを指定
  image.alt = "寧夏路夜市";
  image.style.maxWidth = "90%";
  image.style.height = "auto";
  image.style.borderRadius = "10px";

  // Text content
  const text = document.createElement("p");
  text.textContent = "寧夏路夜市は台湾伝統の屋台料理やB級グルメがメインの夜市です。特に大同区の圓環付近には懐かしいグルメがたくさん集まっているので、思う存分味わいましょう。また、ここの夜市は歩道と車道が分かれているので、食事やショッピングに便利です。食の夜市とも言われる寧夏路夜市には毎日、大勢の人々が訪れています。";
  text.style.color = "#fff";
  text.style.fontSize = "16px";
  text.style.maxWidth = "90%";

  // Append elements
  modal.appendChild(closeButton);
  modal.appendChild(image);
  modal.appendChild(text);
  document.body.appendChild(modal);

  // Create button to open modal
  const button = document.createElement("button");
  button.textContent = "寧夏夜市";
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
  button.addEventListener("click", function () {
      modal.style.display = "flex";
  });
  document.body.appendChild(button);

  // Responsive styling for mobile
  const style = document.createElement("style");
  style.textContent = `
      @media (max-width: 375px) {
          #modal {
              padding: 10px;
          }
          p {
              font-size: 14px;
          }
          img {
              max-width: 100%;
          }
      }
  `;
  document.head.appendChild(style);
});
