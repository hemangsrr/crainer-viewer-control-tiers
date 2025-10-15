# Crainer's Viewer Control Tiers

A Minecraft-themed web application that displays viewer control tiers for stream donations and memberships. Built with Node.js and Express, designed to be hosted on Render.

## Features

- 🎮 **Minecraft-themed design** with custom fonts and decorative elements
- 🟡 **Yellowish color scheme** matching Minecraft aesthetics
- 📱 **Responsive design** that works on all devices
- ⚡ **Animated tier cards** with hover effects
- 🎨 **Five distinct tiers** with unique styling and effects

## Project Structure

```
crainer-viewer-control-tiers/
├── server.js                 # Express server
├── package.json             # Node.js dependencies
├── public/                  # Static files
│   ├── index.html          # Main HTML page
│   ├── styles.css          # Minecraft-themed styling
│   └── script.js           # Dynamic tier rendering
├── minecraft-font/         # Minecraft font files
├── minecraft-ten-font/     # Additional Minecraft font
└── tiers.md               # Tier data reference
```

## Local Development

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or navigate to the repository:
```bash
cd crainer-viewer-control-tiers
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Deploying to Render

### Step 1: Prepare Your Repository

1. Make sure all files are committed to your Git repository
2. Push your code to GitHub, GitLab, or Bitbucket

### Step 2: Create a Render Account

1. Go to [render.com](https://render.com)
2. Sign up for a free account (you can use your GitHub account)

### Step 3: Deploy the Web Service

1. **Click "New +"** in the Render dashboard
2. Select **"Web Service"**
3. **Connect your repository:**
   - Click "Connect account" for GitHub/GitLab/Bitbucket
   - Authorize Render to access your repositories
   - Select the `crainer-viewer-control-tiers` repository

4. **Configure the service:**
   - **Name:** `crainer-viewer-tiers` (or any name you prefer)
   - **Region:** Choose the closest to your audience
   - **Branch:** `main` (or your default branch)
   - **Root Directory:** Leave blank (unless your project is in a subdirectory)
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Select "Free" (or paid plan for better performance)

5. **Click "Create Web Service"**

### Step 4: Wait for Deployment

- Render will automatically build and deploy your application
- This usually takes 2-5 minutes
- You can watch the deployment logs in real-time

### Step 5: Get Your URL

- Once deployed, Render will provide a URL like: `https://crainer-viewer-tiers.onrender.com`
- Your site is now live and accessible to anyone!

## Using the Site with StreamElements

### Setting Up the Bot Command

1. Go to your StreamElements dashboard
2. Navigate to **Chatbot** → **Custom Commands**
3. Create a new command:
   - **Command:** `!tiers`
   - **Response:** `Check out all viewer control tiers here: [YOUR-RENDER-URL]`
   - **User Level:** Everyone
   - **Cooldown:** 10 seconds (recommended)

### Example Command Response

```
!tiers - Check out all the chaos you can unleash: https://crainer-viewer-tiers.onrender.com 💰🎮
```

## Updating Tiers

To update the tier information:

1. Edit the `public/script.js` file
2. Modify the `tiers` array with new prices, effects, or descriptions
3. Commit and push your changes
4. Render will automatically redeploy (if auto-deploy is enabled)

Alternatively, update `tiers.md` for reference and manually sync the changes to `script.js`.

## Customization

### Changing Colors

Edit `public/styles.css` and modify:
- Background gradients in the `body` selector
- Tier-specific colors in `.tier-card.tier-X` classes
- Border and shadow colors

### Changing Fonts

The project uses Minecraft fonts from the `minecraft-font` and `minecraft-ten-font` directories. To use different fonts:
1. Add your font files to the appropriate directory
2. Update the `@font-face` rules in `styles.css`

### Adding More Tiers

1. Add new tier data to the `tiers` array in `public/script.js`
2. Add corresponding CSS styling in `public/styles.css` (e.g., `.tier-card.tier-6`)

## Troubleshooting

### Site not loading on Render

- Check the deployment logs for errors
- Ensure `package.json` has the correct start script
- Verify that the port is set to `process.env.PORT`

### Fonts not displaying

- Make sure font files are in the correct directories
- Check that the server is serving static files from the font directories
- Verify font paths in CSS are correct

### Free Render plan limitations

- Free plans spin down after 15 minutes of inactivity
- First load after inactivity may take 30-60 seconds
- Consider upgrading to a paid plan for instant loads

## Support

For issues or questions:
- Check the Render documentation: [render.com/docs](https://render.com/docs)
- Review deployment logs in the Render dashboard
- Ensure all dependencies are listed in `package.json`

## License

This project is licensed under the MIT License.

---

**Made with ⚡ for Crainer's Stream Community**
