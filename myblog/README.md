
# MyBlog

MyBlog is a simple Django blog application. Users can sign up, create posts, view posts, and delete their own posts. Editing posts is not supported.

## Features

- User registration and login
- Create new blog posts
- View all posts on the homepage
- View detailed post pages
- Delete posts (only by the author)
- Responsive design with Bootstrap 5

## Tech Stack

- Python 3.13
- Django 5.2
- SQLite
- HTML, CSS, Bootstrap 5

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Ivannasmart/portfolio.git

2. Navigate to the MyBlog project folder:

    cd portfolio/projects/MyBlog


3. (Optional) Create a virtual environment:

    python -m venv venv
    source venv/bin/activate   # On Windows use: venv\Scripts\activate


4. Install the required packages:

    pip install -r requirements.txt


5. Apply database migrations:

    python manage.py migrate


6. Run the development server:

    python manage.py runserver


7. Open your browser and visit:

    http://127.0.0.1:8000/

Usage

    - Sign up for a new account or log in with existing credentials.

    - Create new blog posts using the "New Post" button.

    - View posts on the homepage or click on a post title to see details.

    - Delete your own posts using the "Delete" button.

Notes

    - Only the author of a post can delete it.

    - This is a simple demo blog app for learning purposes.