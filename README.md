# 💌 A Special Date Proposal

A beautifully crafted, responsive, single-page website to playfully ask someone on a date. Designed with a hand-drawn cinematic 90s Polaroid aesthetic and subtle FC Barcelona undertones.

## ✨ Features

- **Retro Vintage Aesthetics:** Custom CSS utilizing dynamic gradients, grain textures, coffee stains, and the playful `Patrick Hand` font.
- **Heartfelt Slideshow Progression:** Tells a little story using cute cat placeholders (powered by Cataas) before popping the big question.
- **Barça Fan Quiz Gate:** Ensures they prove their allegiance by correctly typing `messi` before seeing the customized proposal.
- **The "Unclickable" No:** An interactive script detects hover (`onmouseover`) and mobile taps (`ontouchstart`) to instantly teleport the 'No' button randomly across the screen. They literally cannot refuse! 😂
- **Spectacular "Yes" Celebration:** Bursts out 25 floating kisses, 50 raining confetti pieces, and pulsating floating hearts to celebrate a successful "Yes".
- **Completely Mobile Responsive:** Fully optimized for all screen sizes and mobile touch events (using `100dvh` and event listener dampening) so it works perfectly on Android & iOS.
- **Hidden Bengali Easter Egg:** Deep in the developer console lies a romantic phrase specifically hidden for the recipient.

## 📂 File Structure

- `index.html` — The main structure, elements, and layout.
- `style.css` — All custom visual designs, animations, responsive media queries, and layout constraints.
- `script.js` — The logic running the slideshow, input validations, the teleporting button, and the celebration effects.

## 🚀 How to Share With Her

You only have local files right now. To send this to her as a real link she can just tap on her phone, you should host it for free online! 

### Recommended approach (GitHub Pages / Netlify / Vercel Drop):
The easiest way if you don't want to use GitHub is **Netlify Drop**:
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Simply drag and drop the entire `heart2` folder from your desktop onto the website.
3. Netlify will instantly generate a live, public link (e.g., `https://something-random.netlify.app`).
4. You can edit the site name in Netlify's settings to something cuter (e.g., `https://for-you-only.netlify.app`).
5. Send her the link via text or WhatsApp!

## 🛠️ Personalizing

If you want to swap out the cat placeholders for actual pictures:
Open the `script.js` file and replace the URLs inside the `slides` array with your own real image URLs or local file paths (like `./images/photo1.jpg`).
