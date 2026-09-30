# 📚 Library Management System

A simple web-based Library Management System for tracking borrowed books. Built with HTML, CSS, and vanilla JavaScript, no frameworks or backend required.

## Features

- Record a borrowed book with the title, borrower's name, borrow date, and return date
- View all records in a table
- Color-coded status: **Borrowed** (red) and **Returned** (green)
- Mark a book as returned with one click
- Form validation so no field is left empty

## Technologies Used

- **HTML5**: page structure
- **CSS3**: styling and layout (CSS Grid)
- **JavaScript (ES6)**: logic and DOM manipulation

## Project Structure

```
library-management-system/
├── index.html    # Page structure and form
├── style.css     # Styling
├── script.js     # Borrow/return logic
└── README.md
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/library-management-system.git
   ```
2. Open the project folder.
3. Open `index.html` in any web browser. No installation or server needed.

## How to Use

1. Enter the **book title** and the **borrower's name**.
2. Pick the **borrow date** and **return date**.
3. Click **Borrow Book** to add the record to the table.
4. When the book comes back, click **Return** in that row. The status changes to *Returned*.

## Known Limitations

- Data is stored in memory only, so records are lost when the page is refreshed.
- There is no check that the return date is after the borrow date.

## Future Improvements

- Save records with `localStorage` or a database
- Search and filter by title or borrower
- Overdue book alerts
- Edit and delete records
- User login for librarians

## Author

Your Name: [GitHub Profile](https://github.com/your-username)

## License

This project is for educational purposes.
