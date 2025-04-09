# NamastheReact

This is a practice project for learning React, built using Parcel as the bundler.

## How to Run the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/rnagatarun/namasthe-react.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Chapter-02\ Igniting\ Our\ App
   ```
3. Initialize the project (if `package.json` is not already created):
   ```sh
   npm init
   ```
4. Install dependencies:
   - Install React:
     ```sh
     npm install react
     ```
   - Install ReactDOM:
     ```sh
     npm install react-dom
     ```
   - Install Parcel as a development dependency:
     ```sh
     npm install parcel --save-dev
     ```
5. Start the server:

   5.1 **For Development**:

   ```sh
   npx parcel index.html
   ```

   5.2 **For Production**:
   Build the project for production:

   ```sh
   npx parcel build index.html
   ```

   This will generate optimized files in the `dist` folder, ready for deployment.

6. Open the app in your browser at `http://localhost:1234`.

## Parcel

- **Dev Build**: Provides a fast development build process without unnecessary optimizations.
- **Local Server**: Includes a built-in development server to serve your app locally.
- **HMR (Hot Module Replacement)**: Updates changes instantly in the browser without refreshing the page.
- **File Watching Algorithms**: Efficiently detects file changes using algorithms written in C++.
- **Caching**: Speeds up subsequent builds by caching previously built files.
- **Image Optimization**: Optimizes images during the build process to reduce asset sizes.
- **Minification on Production**: Automatically minifies JavaScript, CSS, and HTML for production builds.
- **Bundling**: Combines all JavaScript, CSS, and other assets into optimized bundles.
- **Compress**: Compresses files (e.g., using gzip or Brotli) for smaller production builds.
- **Consistent Hashing**: Ensures unchanged files retain the same hash, allowing browsers to cache them effectively.
- **Code Splitting**: Automatically splits code into smaller chunks to improve load times.
- **Differential Bundling**: Creates optimized bundles for modern browsers and compatible bundles for older ones.
- **Diagnostics**: Provides detailed error messages and warnings for easier debugging.
- **Reliable Caching**: Ensures that cached files are reused efficiently, reducing redundant downloads and improving performance.
- **Tree Shaking**: Removes unused code from the final bundle, reducing file size and improving performance.

## Notes

- This project uses Parcel as the bundler for React applications.
- Ensure you have Node.js and npm installed before running the project.

## Project Details

- **Name**: NamastheReact
- **Version**: 1.0.0
- **Description**: This is a Namasthe React practice project.
- **Homepage**: [GitHub Repository](https://github.com/rnagatarun/namasthe-react#readme)
- **Author**: NagaTarun
- **License**: ISC

## Repository Information

- **Bugs**: [Report Issues](https://github.com/rnagatarun/namasthe-react/issues)
- **Repository URL**: [GitHub Repository](https://github.com/rnagatarun/namasthe-react)

## Dependencies

### Development Dependencies

- **Parcel**: ^2.14.4

### Runtime Dependencies

- **React**: ^19.1.0
- **React-DOM**: ^19.1.0

## Scripts

- **Test**: Run tests using Jest:
  ```sh
  npm run test
  ```
