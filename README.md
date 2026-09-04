# Wizarding Registry Dashboard

A small React dashboard for showing wizard registry data.

The project was built from the provided design and uses the Wizard World API for the table data.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- TanStack Query

## Features

- Dashboard layout with sidebar and top navbar
- KPI cards using static data from the design
- Registry activity chart
- Wizards by specialty chart
- Wizards table using real API data
- Search by wizard name
- 400ms debounce before sending search request
- Client side pagination
- Loading, error, and empty states
- Wizard details modal
- Handles missing first name or last name

## API

The app uses:

```txt
https://wizard-world-api.herokuapp.com/Wizards
```

For search, it sends query params like:

```txt
?FirstName=Harry
?LastName=Potter
```

## How To Run

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Notes

- The API returns all wizards at once, so pagination is handled on the client side.
- When the search value changes, the page resets back to page 1.
- If a wizard has no first name or last name, the UI shows a fallback value instead of breaking.

## What I Would Improve With More Time

- Make the mobile layout better.
- Add more accurate spacing from the Figma file.
- Add tests for search and pagination.
- Improve the chart details and tooltips.
- Add a real filter instead of only the filter button UI.
