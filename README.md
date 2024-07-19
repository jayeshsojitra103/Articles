# Setup Instructions

## Clone the Repository:
`git clone https://github.com/jayeshsojitra103/Articles`

### Install Dependencies:

`npm install`

## Development
 **Start the development server:**

Start the development server: `npm start`.

This will open the application in your browser, typically at `http://localhost:3000`.

## API
The application utilizes a dummy API to fetch articles:

**URL:** `https://dummy-rest-api.specbee.site/api/v1/news`

## Technologies Used

- React
- TypeScript
- Redux (for state management)
- SASS/SCSS, Boostrap (for styling)

## Features
- Fetches and displays articles related to US Stocks.
- **Mobile-responsive**: Adapts to different screen sizes.
- **Sorting**: Sort articles by date (latest/oldest) or title (ascending/descending).
- **Filtering**: Filter articles by category and authors.
- **Pagination**: View articles in pages (5 articles per page).
- **Loading State**: Displays a loading indicator while fetching data.
- **Error Handling**: Handles API errors gracefully and displays appropriate messages.
- **Placeholder Image**: Uses a placeholder image if an article's image is unavailable.


## Usage
- The application displays a list of articles upon startup.
- Use the checkbox in the Filters section to sort and filter articles.
- The application automatically handles loading and displaying any errors encountered.