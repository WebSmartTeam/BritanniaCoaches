# Service Images Structure

Add your service-specific images to these folders:

## Folder Structure:
```
/public/images/services/
├── corporate/          # Corporate transport images
├── school-trips/       # School trip images  
├── wedding/           # Wedding transport images
├── airport/           # Airport transfer images
├── day-trips/         # Day trip images
├── long-distance/     # Long distance travel images
```

## Image Guidelines:
- Use high-quality images (1920x1080 or similar)
- Preferred format: `.webp` or `.jpg`
- Name images descriptively (e.g., `corporate-meeting-transport.webp`)
- Main card image should be named `main.webp` in each folder

## Current Service Cards:
1. **Corporate Transport** → `/services/corporate/`
2. **School Trips** → `/services/school-trips/`
3. **Wedding Transport** → `/services/wedding/`
4. **Airport Transfers** → `/services/airport/`
5. **Day Trips** → `/services/day-trips/`
6. **Long Distance** → `/services/long-distance/`

Once you add images, update the Services.tsx file to use the specific images from these folders.