# Arctura Analytics Limited – Brand Guide (Summary)

Colors
- Midnight (`--midnight`): #0D1B2A
- Arctura (`--arctura`): #0066CC
- Arctura Light (`--arctura-light`): #3398FF
- Glacier (`--glacier`): #F5F9FF
- Slate (`--slate`): #94A388

Typography
- Headings: Montserrat Bold (`--font-headings`)
- Body: Open Sans Regular (`--font-body`)

Logo usage
- Use the dark logo (`/brand/logo-dark.svg`) on dark or colored backgrounds.
- Use the light logo (`/brand/logo-light.svg`) on white or very light backgrounds.
- Maintain clear space around the logo of at least 1× the “A” height.
- Do not distort, recolor, add effects, or place over low-contrast backgrounds.

Implementation notes
- Tailwind exposes brand colors via `theme.colors.{midnight,arctura,arcturaLight,glacier,slate}`.
- Accent gradient uses `--arctura` → `--arctura-light` (see `.gradient`).
- Switch themes by toggling `.theme-light` or `.theme-dark` on `<html>`.

