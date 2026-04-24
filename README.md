# The AI Argument landing page

This is a static, deployable webpage for **The AI Argument**. Upload the whole folder to any static host such as Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a standard web server.

## Files

- `index.html` - page structure and content
- `styles.css` - visual design, responsive layout and palette
- `script.js` - small mobile navigation script
- `assets/` - host illustration crops, source photos, colour palette and reference mockup

## Embed notes

The Buzzsprout iframe uses the public episode player for EP96.

The YouTube section is built as an embed slot. I used the channel URL you supplied, but YouTube usually requires either a specific video ID or the channel uploads playlist ID for a fully reliable embed. To make the latest YouTube episode exact, replace the iframe `src` in `index.html` with this format:

```html
https://www.youtube.com/embed/YOUTUBE_VIDEO_ID
```

or, for an uploads playlist:

```html
https://www.youtube.com/embed/videoseries?list=UPLOADS_PLAYLIST_ID
```

## Colour palette

- Coral: `#F97068`
- Deep navy: `#0B2027`
- Off-white: `#EAEAE1`
- Steel blue: `#37718E`
- Teal: `#49BEAA`
- Yellow: `#F9DC67`


Updated hybrid version: original page copy restored, newer host visuals swapped in, and the latest YouTube episode embed pointed at the requested video.

YouTube embed fix: added `referrerpolicy="strict-origin-when-cross-origin"` to the YouTube iframe and a matching meta referrer tag to help avoid YouTube Error 153. If a host platform overrides this with `Referrer-Policy: no-referrer`, set the platform/header policy to `strict-origin-when-cross-origin`.
