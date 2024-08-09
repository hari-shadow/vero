# Vero

## Overview

**Vero** is a web application designed to help users who feel unsafe by allowing them to capture and save a live stream directly to their Google Drive with a single click. This feature provides a way to create a record of events if users need to provide evidence or protect themselves later. The name **Vero** is derived from Latin, meaning "true," which reflects the app’s aim to offer genuine and reliable evidence.

<img src="https://github.com/hari-shadow/vero/blob/c33d823959619f75a630e340fd1147bfd461ad99/assets/vero_user_interface.png" alt="Flow of the project" width="600"/>

## Current Status

I am currently exploring Java and SQL, and this project is a learning journey for me. I have a basic understanding of the tech stack required but don't yet have complete knowledge or experience in all aspects of the project. I have started implementing the core features, including the frontend, and am eager to learn more about the backend tech stacks required to complete the application.

## Features

- Capture a live stream and save it directly to Google Drive.
- Simple and user-friendly interface.

## Tech Stack

- **Frontend:**
  - HTML/CSS
  - JavaScript
  - (Optional) React or Vue.js for advanced UI

- **Backend:**
  - Java
  - Spring Boot
  - RESTful APIs

- **Database:**
  - MySQL

- **Storage Integration:**
  - Google Drive API

- **Live Streaming:**
  - RTMP Server (e.g., Nginx with RTMP module)
  - Google Drive API for uploading the video

## Architecture

### Flow Diagram
<img src="https://github.com/hari-shadow/vero/blob/2f113108432a8eddb9afa347e5ead28557eac5fd/assets/vero_flowdiagram.png" alt="Flow of the project" width="600"/>

### Components

1. **User Interface (Frontend):**  
    - Basic UI for users to start recording the stream.
    - Built with HTML, CSS, and JavaScript.
    - Optionally use React or Vue.js for a more dynamic interface.

2. **API Request:**   
    - Handles communication between the frontend and backend.

3. **Backend Processing:**   
    - Spring Boot application for handling API requests.
    - Manages the recording and uploading of the video to Google Drive.

4. **RTMP Server:** 
    - Records the live stream.
    - Processes the video data for uploading.

5. **Google Drive Integration:** 
    - Manages uploading the recorded video to Google Drive.
    - Requires OAuth credentials for access.

6. **User Feedback:**
    - Provides responses to the frontend regarding the status of the recording and upload.

## Getting Started

### Prerequisites

- Basic knowledge of Java and SQL.
- Java 11 or higher
- Spring Boot
- MySQL
- Node.js (using React.js)
- Google Drive API credentials

## Contributing

As I am still learning, I would greatly appreciate any help or contributions to this project. If you are a beginner like me or have some knowledge about the tech stack involved and are willing to volunteer, please reach out. Let’s collaborate and learn together!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions, feedback, or if you are interested in collaborating, please contact me at hariharanlaligam@gmail.com or [<img height="30" width="30"  src="https://img.icons8.com/?size=100&id=oWiuH0jFiU0R&format=png&color=000000" />](https://t.me/iamhariharansridhar) 
