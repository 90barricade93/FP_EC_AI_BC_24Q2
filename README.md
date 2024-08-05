<div align="center">
<img src="GROUP 9.png" height="100">
</div>
<div align="center">

[![Latest Release](https://img.shields.io/badge/Latest%20Version-0.0.0-blue?logo=github)](https://github.com/90barricade93/FP_EC_AI_BC_24Q2/commits/main)
![Static Badge](https://img.shields.io/badge/Encode_Club-AI_Bootcamp_24Q2-silver)
![Static Badge](https://img.shields.io/badge/GROUP-09-gold)

</div>

# FP_EC_AI_BC_24Q2 - Final Project - Encode Club AI BootCamp 24Q2 Repository

## Repository Background Information

### AI Bootcamp
By Encode Club and Venture Miner (June 10th - July 25th 2024)

This repository contains the final project from the AI Bootcamp, a 6-week long program designed to introduce students to the best techniques for creating Artificial Intelligence applications. The bootcamp was hands-on and project-based, focusing on the practical applications of AI technology across various industries. Students learned to use the latest generative AI models and tools to build applications capable of understanding and generating texts, images, and other types of content.

### Curriculum Overview

- **Week 1:**- Machine Learning intro- Intro to transformers and GPTs- Using OpenAI APIs- Model configurations- Introduction to prompt engineering

- **Week 2:**- Building a simple chat app with React and Vercel- Generating frontend with AI- Running LLMs on personal hardware- Text generation WebUI and prompt techniques- Building an AI joke generator

- **Week 3:**- Deep dive on GPTs- Model training and fine-tuning- Using Assistants and RAG- Exploring other models- Generating images with AI and intro to stable diffusion

- **Week 4:**- Running diffusion models on personal hardware- Image generation WebUI and prompt techniques- Control meshes and fine-tuning- Image processing and computer vision intro- Using computer vision models

- **Week 5:**- Workshops week with guest lectures and exclusive workshops covering the latest research and practical applications in AI.

- **Week 6:**- Projects week dedicated to building a group project using the concepts learned throughout the bootcamp.

### Project Continuation

Now that the bootcamp is over, we have decided to continue development on our final project. Initially a quick prototype, we are now building a Python backend to handle all AI features while maintaining the Next.js UI for the frontend. 

We still need to plan, discuss, and experiment with both the backend and the UI to enhance the functionality and user experience. As it stands, all content is currently a placeholder.

## Application Background
# SPEC-001: Accessible Learning Platform for the Visually Impaired
The traditional educational content relies heavily on visual elements, which are challenging for visually impaired individuals. This platform aims to provide essential accessibility features to make educational content more inclusive using CV and RAG technologies.

## Requirements

### Must-Haves
1. **Basic Image Analysis:**
   - Use CV to analyze images and convert them to descriptive text.
2. **Basic Text Generation:**
   - Use RAG to generate descriptions for analyzed images.
3. **Voice Integration:**
   - Provide text-to-speech functionality for generated descriptions.
4. **Simple User Interface:**
   - Ensure basic accessibility features like screen reader support.

### Should-Haves
1. **Basic Content Management:**
   - Allow users to upload images.
2. **User Profiles:**
   - Enable basic user registration and login.

### Won't-Haves
1. **Video Analysis:**
   - Focus only on image analysis for the MVP.
2. **Interactive Q&A Support:**
   - This will be postponed for future development.

## Method
We'll use Vercel's Next.js for the front end, our own LLMs for text and voice, and a simplified CV model for image analysis. Additionally, we will integrate AI and OpenAI libraries, Husky for pre-commit styling, and utilize the following resources:
- [oobabooga/text-generation-webui](https://github.com/oobabooga/text-generation-webui) for text generation and RAG.
- [AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) for image analysis.
- OpenAI API for text-to-voice functionality.

## Project Progress

### Features Implemented

#### User Authentication
- **Sign In:** Users can sign in using their email and password.
- **Sign Out:** Authenticated users can sign out from the application.
- **Session Handling:** User session is maintained using next-auth, and appropriate UI elements are shown based on the authentication status.

#### User Registration
- **Registration Form:** A registration form where users can enter their full name, email, and password to create a new account.
- **Form Validation:** Ensures that all required fields are filled out correctly.
- **Database Storage:** New user data is saved in the bootcamp24q2 MongoDB database.

#### Profile Management
- **Profile Page:** Authenticated users can view and update their profile information.
- **Profile Update:** Users can change their name, email, and password. The changes are saved to the database.
- **Form Feedback:** Displays success or error messages based on the outcome of the update operation.

#### Contact Page
- **Contact Form:** Users can send messages by filling out their name, email, and message.
- **Message Storage:** Messages are saved to a MongoDB collection for further review.

#### Personal Page
- **Personalized Learning Page:** Displays a personalized welcome message with the user's full name.
- **Navigation Links:** Provides links to the user's GitHub and LinkedIn profiles.
- **Back Navigation:** Includes a button to navigate back to the personal page from the profile page.

### UI and Navigation
#### Header
- Displays the platform name and tagline.
- Shows user's full name next to the sign-out button when authenticated.
- Navigation links to Home, About, and Contact pages.

#### Footer
- Includes the company logo, name, and navigation links to Home, About, and Contact pages.
- Company information and branding.

### Responsive Design
- **Tailwind CSS:** Utilized for styling to ensure a responsive and visually appealing layout across different devices.

### API Integration
- **User Registration API:** Handles user registration and saves data to MongoDB.
- **User Update API:** Allows users to update their profile information and saves changes to MongoDB.

## Technical Specifications
- **Framework:** Next.js, Streamlit, Vercel
- **Styling:** Tailwind CSS,
- **Authentication:** next-auth
- **Database:** MongoDB (Database: bootcamp24q2)
- **Languages:** 
```
                     - TypeScript for type-safe code
                     - Python for Streamlit, and interaction with LLMs
```

- **Libraries:**    
```
                     - OOBABOOGA/text-generation-webui for text-generation and RAG
                     - AUTOMATIC1111/stable-diffusion-webui for image analysis
```

## Contributing to the Project

We welcome contributions to this project! Before you start, please introduce yourself in our Discord server: [https://discord.gg/NBaC49M5]([https://discord.com/invite/BtxSyMJE]).

Please check out our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get started.

Thank you for your interest in contributing to this project!


## Project Members Group 9 (this section will be removed in 2 weeks)

7gxzzH - [Emmanuel](https://github.com/codehouze) Codehouze

imPS1a - [Serena](https://github.com/BreadFeet) Serena Kim

mIOHa2 - [Abhi](https://https://github.com/AbhishekT-2002) forgetabhi

sBF9oB - [Raymond](https://github.com/90barricade93/) 90barricade93

# Used Bootcamp Sponsors

- MongoDB Inc.

## Support
If you have any questions or need assistance, please contact our support team at [support@accessiblelearningplatform.com](mailto:fake@fake.com).

## Feedback
Your feedback is valuable to us. Please share your experience and suggestions to help us improve the platform.

## License
This project is licensed under the MIT License.

## Conclusion

This project demonstrates ....


Feel free to contribute, suggest improvements, or ask questions. Happy coding!

### Acknowledgements

We would like to thank the [Encode Club AI BootCamp](https://github.com/Encode-Club-AI-Bootcamp) for this opportunity, the [@mpagani](https://github.com/MatheusDaros) for his expertise and guidance and the Sponsors for their workshops!

<div align="center">

![GitHub forks](https://img.shields.io/github/forks/90barricade93/FP_EC_AI_BC_24Q2) &ensp; © GROUP 9 - AI 24Q2 &ensp; ![GitHub stars](https://img.shields.io/github/stars/90barricade93/FP_EC_AI_BC_24Q2) ..

</div>

---

