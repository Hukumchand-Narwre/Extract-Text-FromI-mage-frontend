# Problem Statement

Typing out text from images is a hassle, slowing down work and causing errors. This project uses Azure OCR to make life easier. Upload an image, get the text – no more manual typing, just quick and accurate results. It's all about saving time and improving accuracy for everyone who deals with text from images

## Target Customers

- Individuals who deal with paperwork and need to extract text from documents regularly.
- Individuals who may find it challenging to type or prefer a more convenient method for extracting text from images.
- People involved in data entry tasks, especially those dealing with information from scanned documents or images.

## Demo

URL - https://extract-text-from-image.netlify.app/

## Project Summary

Integrating Azure Cloud for the storage of images was a new experience, and I had to navigate through Azure's documentation to understand the process of setting up and configuring Azure Storage.

Working with OCR technology for the first time posed challenges in terms of understanding the API documentation, handling image formats, and interpreting the output.

Developing the backend in Node.js required addressing challenges related to routing, handling HTTP requests, and integrating with the Azure Storage and OCR services.

**Component Tree Diagram**
![Untitled-2023-10-29-1048](https://github.com/Hukumchand-Narwre/Extract-Text-FromI-mage-frontend/assets/85044429/ee2f2c55-acb2-40ca-b73c-5cfa80f54aa1)

# Technologies Used

- **React.js:** React is a popular JavaScript library used for building user interfaces. It allows developers to create reusable components and to efficiently update the UI in response to changes in application state.
  
- **Azure Blob Storage:** Blob Storage is designed for serving images or documents directly to a browser.
  
- **Azure OCR:** Azure OCR, or Optical Character Recognition, is a powerful tool for automatically converting images of text into machine-readable data.
  
- **Express.js:** Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js

## Local Installation Guide

Follow these steps to set up the project on your local machine:

- **Prerequisites -**
Ensure you have Node.js installed:

You can download and install Node.js from https://nodejs.org/

**Installation steps**
- **1. Clone the repository**
```bash
git clone https://github.com/Hukumchand-Narwre/TextCapture-Pro.git
```
- **2. Navigate to project directory**
```bash
cd TextCapture-Pro
```
- **3. Install dependencies**
```bash
npm install
```
- **4. Configure environment variables:**
Create the .env file in root directory of the project  and create the following variables.
```bash
AZURE_KEY = 
AZURE_ENDPOINT =

AZURE_ENDPOINT_AI_LANGUAGE = 
AZURE_KEY_AI_LANGUAGE = 
```
Update the variables with your keys.
- **5. Run the project**
```bash
 npm run dev
```

