# Related Blogs Component

    This component displays a list of related blog posts with thumbnails, categories, titles, dates, and read times. It is designed to be visually stunning, modular, and production-ready for Adobe Experience Manager (AEM) Universal Editor.

    ## Fields

    | Name        | Component Type | Description                                 |
    |-------------|----------------|---------------------------------------------|
    | thumbnail   | Reference      | Upload a thumbnail image for the blog post. |
    | category    | Text           | Category of the blog post.                  |
    | title       | Text           | Title of the blog post.                     |
    | date        | Text           | Publish date of the blog post.             |
    | readTime    | Text           | Estimated read time for the blog post.      |

    ## Sample JSON for Authoring

    ```json
    {
      "items": [
        {
          "thumbnail": "/path/to/image.jpg",
          "category": "Business Loan",
          "title": "Top 20 Profitable Wholesale Business Ideas in India for 2024",
          "date": "28 May 2025",
          "readTime": "12min"
        },
        {
          "thumbnail": "/path/to/image.jpg",
          "category": "Business Loan",
          "title": "Seasonal Strategies to Elevate Your Small Business in 2025",
          "date": "18 Feb 2025",
          "readTime": "4min"
        }
      ]
    }
    ```

    ## Usage Notes

    - Ensure all thumbnail images are optimized for web use.
    - The component is responsive and adapts to different screen sizes.
    - Customize the design tokens (e.g., `--border-color`, `--category-color`) to match your branding.