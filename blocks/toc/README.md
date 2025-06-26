```markdown
# Table of Contents Block

This block provides a Table of Contents (TOC) for a page, allowing users to navigate to specific sections of the content. The TOC is automatically generated based on the headings (h2, h3, h4, etc.) in the content.

## Features

- Automatically generates a TOC from headings in the content.
- Supports nested headings for multi-level TOC.
- Highlights the active TOC item when a section is clicked.
- Smooth scrolling to the target section.

## Model Fields

| Field Name | Component Type | Description                          |
|------------|-----------------|--------------------------------------|
| title      | text            | The title of the Table of Contents. |
| content    | richtext        | The content for the TOC.            |

## Sample JSON

```json
{
  "title": "Table of Contents",
  "content": "<h2>Section 1</h2><p>Content for section 1...</p><h2>Section 2</h2><p>Content for section 2...</p>"
}
```

## Usage Notes

- The TOC is generated from the headings (h2, h3, h4, etc.) in the `content` field.
- Ensure that each heading has a unique `id` attribute for proper linking.
- The TOC will automatically update if the content is changed.
```