# Week8-Challenge-Repository - TypeScript and OOP: Vehicle Builder Application

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Video](#video)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)

## Description
This application is a commandline prompt driven application that allows me to create, view and manipulate three classes of objects: Car (existing class), Motorbike and Truck.

The application prompts the user to create a new vehicle or select an existing vehicle. After going through the creation process or the selection process, the user is able to perform certain actions with the selected vehicle. The user is returned to the actions menu after each action until they decide to exit the application. The application uses node.js to execute server-side code to execute Typescript to build and manipulate vehicles using OOP techniques. The application is command line driven and uses inquirer to prompt the user.

## Installation
All code is located in the gitHub repository https://github.com/SparkKids/Week08-Challenge-Repository

To install the application download all the code into a root directory. For example: C:/Challenge-08/Main

in a git-bash command prompt cd into the root directory:
cd ~/Challenge-08/Main/
Then run the following npm commands:
npm install
npm run build

These npm commands install all dependencies for the program and build the package for execution

## Usage
The package is run from the command line prompt:
From  ~/Challenge-08/Main/
Enter:
npm run start
This builds, starts the application and displays the user prompts. The user uses the arrow keys to select what function to run. Here is the command line menu:
 Would you like to create a new vehicle or perform an action on an existing vehicle? (Use arrow keys)
❯ Create a new vehicle
  Select an existing vehicle
  
  ### To create a new vehicle, use the arrow keys to highlight "Create a new vehicle" and hit >Enter
  You are then prompted:
  Select a vehicle type (Use arrow keys)
  > Car
  Truck
  Motorbike
  Use the arrow keys to highlight the type of vehicle to wish to create and hit >Enter
  You are then taken to a set of questions for the type of vehicle chosen. Some questions are unique to the vehicle type. For example creating a Motorbike prompts "Does the motorbike have a sidecar? (yes/no)"

  After creating the vehicle, you are then prompted:
  Select an action (Use arrow keys)
> Print details
  Start vehicle
  Accelerate 5 MPH
  Decelerate 5 MPH
  Stop vehicle
  Turn right
  Turn left
  Reverse
  Tow
  Wheelie
  Select or create another vehicle
  Exit

  Some options are not valid on all vehicle types. For example selecting "Tow" for a Motorbike gives the message "Only trucks can perform the tow action." Selecting:
  >Select or create another vehicle brings you back to the initial prompt:
  "Would you like to create a new vehicle or perform an action on an existing vehicle? (Use arrow keys)"
  Selecting "Exit" terminates the program

  ### Choosing "Select an existing vehicle" prompts:
  "Select a vehicle to perform an action on (Use arrow keys)"
  This gives you a list of vehicles to select from
  > 5dksplkbetq4pcenfddi3 -- Ford F-150
  w2bc2ltzdmmy8g6jr0elj9 -- Toyota Camry
  mb8if5vhk45jlq831mpdd -- Harley Davidson Sportster
  610cbnr3rat9mqtayjgdpt -- Honda Fury
  To select a vehicle: Highlight the vehicle you want and hit >Enter
  This brings you to the same "Select an action" that you are brought to after you create a vehicle.

  ## Video 
  Vehicle Builder Video: https://drive.google.com/file/d/1kwYJdK-1ad3FUOKJPpMS253zNmPbfzeK/view

  ## Credits

  Extensive use was made of the BootCamp Xpert Learning Assistant. This AI tool was a valuable learning tool. It helped with debugging and understanding how to write better TypeScript. I also installed GitHub's CoPilot which aided in debugging the code. It often provided helpful code suggestions while I typed (and some suggestions for things that I was not trying to do.)

  I found as I continued coding. I had to rely on the BootCamp Xpert Learning Assistant and CoPilot less often.

  ## License

  This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

  ## Badges
 ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

 