# COMP 3133 - Lab Test 2: SpaceX Mission Launch List

### App Description
This Angular application is a mission tracking dashboard that consumes the SpaceX REST API. It allows users to browse through all SpaceX launches, view specific mission details, and filter the mission history by launch year. The project demonstrates the use of modern Angular features like Signals, standalone components, and the new @for/@if control flow.

### Features Implemented
* **SpaceX Mission Theme:** Integrates the SpaceX REST API to fetch real-time mission data.
* **Mission List Component:** Displays a list of missions with names, years, and descriptions using the @for block.
* **Mission Details Component:** A detailed view accessible via routing that displays rocket information (name and type) and external links.
* **Mission Filter:** A search feature that dynamically filters the mission list based on the user's input for the launch year.
* **State Management:** Uses **Angular Signals** to handle mission data and filtering logic reactively.
* **Design:** Enhanced UI using **Angular Material** components such as mat-card and mat-form-field.

### Technologies Used
* **Frontend:** Angular (Latest Version)
* **API:** SpaceX REST API
* **UI Library:** Angular Material
* **Deployment:** [Insert Your Vercel or Render Link Here]

### How to Run the Project Locally
1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/YOUR_GITHUB_USERNAME/studentid-lab-test2-comp3133.git](https://github.com/YOUR_GITHUB_USERNAME/studentid-lab-test2-comp3133.git)

2. **Navigate to Folder:**
   ```bash
   cd studentid-lab-test2-comp3133
   
3. **Install Dependencies:**
   ```bash
   npm install
   
4. **Start the Application:**
   ```bash
   ng serve
5. **View in Browser:**
   Open http://localhost:4200/
