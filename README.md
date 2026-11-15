# CSS Add to Cart UI — Runnable Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-add-to-cart-ui/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Recreated from the supplied 16.73-second, 540 × 960 screen recording.

## UI shown in the video
The screen title is **CSS Add to Cart UI**. It presents five button animation demos:
1. Sliding Cart Animation
2. Gradient Fill Button
3. Success Tick Animation
4. Shine Sweep Animation
5. Expanding Bubble Cart

The design uses a near-black/navy background, dark rounded demo cards, blue code text and an orange outline around the gallery.

## Readable CSS fragments transcribed from the recording

```css
.btn1:hover::before {
  left: 185px;
}

.btn2:hover::before {
  width: 100%;
}

.btn3:hover .done {
  transform: translate(-50%, -50%);
}

.btn4:hover::before {
  left: 300px;
}

.btn5:hover .circle {
  width: 240px;
}
```

The screen also shows the selectors and values above. The `.btn3` transform line is slightly clipped in the recording after `-50%,`; the second `-50%` is inferred to complete the centered translate.

## Added to make the demo runnable
- Full HTML structure and complete styling for all five effects
- Click/tap interaction to toggle each button's added state
- Demo cart counter
- Copy CSS button
- Responsive layout

The video does not show the complete original source, so all code beyond the readable fragments is reconstructed as a working recreation. The cart counter is front-end demo behavior; it is not connected to a real e-commerce backend.

## Run
Extract the ZIP and open `index.html` in a modern browser. No package installation or build process is needed.

## Files
- `index.html`
- `style.css`
- `script.js`
- `README.md`

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
