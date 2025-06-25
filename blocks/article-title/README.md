# Article Title Component

The **Article Title Component** is a reusable block for displaying the title, subtitle, author, publication date, estimated read time, and logo image of an article. It is designed to be visually appealing, modular, and author-friendly for use in AEM EDS.

## Fields

| Field Name | Component Type | Description                                |
|------------|----------------|--------------------------------------------|
| `title`    | `text`         | The main title of the article.             |
| `subtitle` | `text`         | A brief subtitle or description.            |
| `author`   | `text`         | The author of the article.                  |
| `date`     | `text`         | The publication date of the article.        |
| `readTime` | `text`         | The estimated read time for the article.    |
| `logo`     | `reference`    | The logo image for the article.             |

## Sample JSON for Authoring

```json
{
  "title": "How to Start a Daycare Business in India: A Step-by-Step Guide",
  "subtitle": "A comprehensive guide to starting a daycare business in India.",
  "author": "Poonawalla Fincorp Team",
  "date": "17 Jun 2025",
  "readTime": "13 min read",
  "logo": "/path/to/logo-image.jpg"
}
```

## Usage Notes

- The component is fully responsive and adapts to different screen sizes.
- All fields are optional, but it is recommended to provide at least the `title` and `logo` for better usability.
- The component uses CSS custom properties for theming, allowing easy customization of colors, fonts, and spacing.
- The logo image is displayed at the top of the component, with a fixed width and height for consistency.