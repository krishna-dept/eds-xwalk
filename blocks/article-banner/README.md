# Article Banner Block

This block displays a visually appealing article banner with a title, subtitle, author information, publication date, read time, and an optional logo. It is designed to be used at the top of articles or blog posts.

## Fields

| Field       | Component Type | Description                                      |
|-------------|----------------|--------------------------------------------------|
| `title`     | Text           | The main title of the article.                   |
| `subtitle`  | Text           | A brief subtitle or description for the article. |
| `author`    | Text           | The author of the article.                       |
| `date`      | Text           | The publication date of the article.              |
| `readTime`  | Text           | The estimated read time for the article.        |
| `logo`      | Reference      | The company or author logo.                     |

## Sample JSON

```json
{
  "title": "How to Start a Daycare Business in India: A Step-by-Step Guide",
  "subtitle": "A comprehensive guide to starting a daycare business in India.",
  "author": "Poonawalla Fincorp Team",
  "date": "17 Jun 2025",
  "readTime": "13 min read",
  "logo": "/path/to/logo.jpg"
}
```

## Usage Notes

- The `logo` field is optional and can be left empty if no logo is available.
- The block is fully responsive and adapts to different screen sizes.
- Customize the design using CSS variables for colors, spacing, and typography.