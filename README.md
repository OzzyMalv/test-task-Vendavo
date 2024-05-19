# MFE Rsbuild

This demos a basic host application loading remote component.

- `container` is the host application (cra-based).
- `gallery_app` standalone application (cra-based).
- `recent_app` standalone application (cra-based).

# How to run 

`pnpm run start`, `node v20.11.0`


# Running Demo

Run `pnpm run start`. This will build and serve  `container` and `gallery_app` `recent_app` on ports 3001 3002 3003 respectively.

- [localhost:3001](http://localhost:3000/) (CONTAINER)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE)
- [localhost:3002](http://localhost:3003/) (STANDALONE REMOTE)

# Task 

Create a web application for browsing, viewing, editing, and managing albums and photos.

### Primary Features
- Users can:
    - Browse albums and photos.
    - View, edit, and rearrange albums and photos.
    - Add or remove photos.
    - Search for albums or photos by title.
    - See creator information for each album.
- Implement virtual scrolling with 20 items per page for efficient pagination.

### Project Structure
- Two separate applications:
    1. **First Application**: Handles routing.
    2. **Second Application**: Implements the described functionality.
- Ensure the second application's code is dynamically loadable into the first without using relative imports.

### Additional Task
- Develop a **Third application** to allow users to access the last 20 photos they recently viewed.
- This functionality should also be dynamically loadable into the first application.

### Technical Requirements
- Use the ReactJS library.
- Fetch data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).
- Structure the project as a monorepo.
- Upload the project to GitHub.
