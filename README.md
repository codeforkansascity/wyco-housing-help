# wyco-housing-help
Welcome to our project! Our goal is to provide an easily accessible search utility for residents of Wyandotte County, KS to find properties within the county's land bank. Currently, the only resource made available to residents is an interactive map, which, while helpful, is not entirely accessible to the average user. We want to allow residents to enter their requirements, and receive a list of relevant properties. They can then decide to apply, or contact the land bank for further information.
## Structure
This project currently consists of a React.js frontend application, and a Flask backend application. All user interface related functionality is handled on the frontend, while the backend handles storing submitted data and authentication. The two will communicate via a REST api.
## To Contribute
To contribute to this project, push any local changes into a new branch, and submit a pull request for the group to review before merging.
### Frontend
#### Getting Started
1. To get started, clone the `frontend` branch into a local folder. 
2. Open the folder `frontend` in your favorite code editor, and run 'npm install' in a new terminal to install the project's dependencies found in the `node_modules` folder.
3. Once all dependencies are installed, run `npm start` to open the app in development mode. The app supports hot reloading, so all changes are automatically included without having to recompile.
4. Happy coding!
#### File Structure
The app is structured to have each piece of functionality separated into its own component, ie all navigation related concerns will be in the `navigation` component, and the search related concerns will be in the `search` component. Each component lives in its own folder, inside an index.jsx file to allow for simplified imports. State management notes coming soon.
### Backend
#### Getting Started
To be determined after discussion.
## Resources
Our design reference for the app's frontend can be found at [figma.com](https://www.figma.com/file/4B3GCWQLxLZl0iDSDUiBKA/WyCo-Land-Bank-App?node-id=0%3A1)
