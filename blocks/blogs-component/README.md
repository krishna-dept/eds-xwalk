# Blogs Component

This block displays a list of blog posts with thumbnails, titles, publication dates, read times, descriptions, and categories. It is highly customizable and supports responsive layouts.

## Model Fields

| Field Name  | Component Type | Description                                  |
|-------------|----------------|----------------------------------------------|
| `title`     | Text           | Title of the blog post.                      |
| `date`      | Text           | Publication date of the blog post.           |
| `readTime`  | Text           | Estimated read time for the blog post.       |
| `image`     | Reference      | Thumbnail image for the blog post.           |
| `description`| Rich Text      | Short description or excerpt of the blog post.|
| `category`  | Text           | Category of the blog post.                   |

## Sample JSON for Authoring

```json
{
  "title": "Seasonal Strategies to Elevate Your Small Business in 2025",
  "date": "18 Feb 2025",
  "readTime": "4min",
  "image": "/path/to/image.jpg",
  "description": "<p>Learn how to leverage seasonal trends to grow your small business in 2025.</p>",
  "category": "Business Loan"
}
```

## Usage Notes

- The block supports responsive grid layouts.
- Authors can customize the number of columns via the configuration fields.
- Each blog item is rendered as a semantic `<article>` element for better accessibility.