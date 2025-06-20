# Related Blogs Block

This block displays a list of related blog posts with a thumbnail image, title, category, publication date, and estimated read time.

## Fields

| Field Name    | Component Type | Description                          |
| ------------- | ------------- | ------------------------------------ |
| `title`       | Text          | The title of the blog post.         |
| `category`    | Text          | The category or topic of the post.  |
| `date`        | Text          | The publication date of the post.    |
| `readTime`    | Text          | The estimated read time for the post.|
| `image`       | Reference     | The thumbnail image for the post.   |

## Sample JSON for Authoring

```json
{
  "blogItems": [
    {
      "title": "Top 20 Profitable Wholesale Business Ideas in India for 2024",
      "category": "Business Loan",
      "date": "28 May 2025",
      "readTime": "12min",
      "image": "/path/to/image.jpg"
    },
    {
      "title": "Seasonal Strategies to Elevate Your Small Business in 2025",
      "category": "Business Loan",
      "date": "18 Feb 2025",
      "readTime": "4min",
      "image": "/path/to/image.jpg"
    }
  ]
}
```

## Usage Notes

- This block is designed to be modular and reusable across different pages.
- Ensure that images are optimized for web to maintain performance.
- The block is responsive and adapts to different screen sizes.
