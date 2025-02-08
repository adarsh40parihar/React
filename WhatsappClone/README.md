# Real-time Chat Application (WhatsApp Clone)

This project is a real-time chat application inspired by WhatsApp, built using ReactJS, Tailwind CSS, and Firebase. It offers core messaging functionalities, user authentication, and a dynamic user interface.

## Features

* **Real-time Messaging:** Send and receive messages instantly.
* **User Authentication:** Secure user registration, login, and logout using Firebase Authentication.
* **Dynamic UI:**  A responsive and user-friendly interface built with React components and styled with Tailwind CSS.
* **User Profiles:**  View and manage user profiles.
* **Routing:**  Navigation between different sections of the application.
* **"Last Seen" Status:**  Displays the last online time for users.  *(If implemented)*

## Technologies Used

* **ReactJS:** A JavaScript library for building user interfaces.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **Firebase:** A Backend-as-a-Service (BaaS) platform by Google, including:
    * **Firebase Authentication:** For user authentication and management.
    * **Firebase Realtime Database (or Firestore):** For real-time data synchronization and storage. *(Specify which one you used)*

## How it Works

1. **Authentication:** Users authenticate via Firebase Authentication.
2. **Data Storage:** User data and messages are stored in the Firebase database.
3. **Real-time Updates:** Firebase pushes updates to connected clients in real-time when messages are sent or data changes.
4. **UI Rendering:** React components update the UI dynamically to reflect changes in the database.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**

2. **Navigate to the project directory**
   ```bash
   cd WhatsappClone
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Run the development server**
   ```bash
   npm run dev
   ```


## Features

- Real-time messaging
- Chat history
- Last Seen
- Profile picture and information are editable
- User authentication

## Built With

- React.js
- Firebase
- Tailwind 
