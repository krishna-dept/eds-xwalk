# Daycare Guide Block

This block is used to create a structured guide for starting a daycare business. It includes fields for the title, subtitle, author, publication date, estimated read time, and a logo image.

## Fields

| Field Name | Component Type | Description                           |
|------------|----------------|---------------------------------------|
| `title`    | Text           | The main title of the guide.          |
| `subtitle` | Text           | A brief subtitle or description.      |
| `author`   | Text           | The author or team name.              |
| `date`     | Text           | The publication date.                  |
| `readTime` | Text           | Estimated reading time.               |
| `logoSrc`  | Reference      | URL or path to the logo image.         |

## Sample JSON for Authoring
```json
{
  "title": "How to Start a Daycare Business in India: A Step-by-Step Guide",
  "subtitle": "A comprehensive guide to starting your daycare business.",
  "author": "Poonawalla Fincorp Team",
  "date": "17 Jun 2025",
  "readTime": "3 min read",
  "logoSrc": "/path/to/logo.png"
}
```

## Usage Notes
- Ensure the logo image is uploaded to the AEM DAM and the path is correctly referenced in the `logoSrc` field.
- The block is designed to be visually appealing and can be used in articles, blogs, or guides.