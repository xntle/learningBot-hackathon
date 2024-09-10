# Talkaroo

<img width="1512" alt="Screenshot 2024-09-11 at 2 55 36 AM" src="https://github.com/user-attachments/assets/fda1c0da-7656-453f-98e5-7936d17839f0">

**Talkaroo** is an innovative and friendly chatbot designed to assist both bilingual and monolingual children in their language-learning journey. By making language learning fun and interactive, Talkaroo aims to help children overcome the challenges of mastering new languages, while providing an enjoyable user experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Market Opportunity](#market-opportunity)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [APIs Used](#apis-used)
- [License](#license)

## Introduction

Did you know that only **14% of English Language Learners (ELLs)** in the U.S. achieve reading proficiency by the 4th grade? In contrast, **34% to 40% of their monolingual peers** reach this critical milestone. This gap highlights the unique challenges that bilingual children face in mastering language skills, particularly in academic settings.

<img width="1510" alt="Screenshot 2024-09-11 at 2 55 58 AM" src="https://github.com/user-attachments/assets/46f0bc8d-bdb2-477c-980a-fbf8af8e1cec">

However, the challenge is not limited to bilingual students alone. Monolingual children who are trying to learn new languages often find traditional methods uninspiring and difficult to engage with. That’s where **Talkaroo** steps in.

Talkaroo is more than just a chatbot—it’s a language-learning companion designed to make education engaging and effective for all children, whether they are bilingual or monolingual. By leveraging advanced speech recognition and text-to-speech technology, Talkaroo interacts with children in real-time, providing a lifelike voice that responds to what they say. With support for multiple languages, it helps children practice and improve their language skills, whether they're mastering their first language or learning a new one.

## Features

Talkaroo offers several key benefits:

- **Interactive Conversations**: Engages children in meaningful dialogue, making language practice both fun and immersive.
- **Realistic Voice Responses**: Powered by ElevenLabs, Talkaroo’s lifelike responses make interactions feel natural and engaging.
- **Multi-Language Support**: Whether a child is learning English, Spanish, Vietnamese, or another language, Talkaroo adapts to their needs, helping them become proficient across multiple languages.
- **Speech Recognition**: With OpenAI’s Whisper API, Talkaroo accurately understands spoken language and provides instant feedback, encouraging continuous language use.
- **Personalized Learning**: The more a child interacts with Talkaroo, the more the experience becomes tailored to their unique learning pace and style.

## Market Opportunity

The market for educational technology is growing rapidly, particularly in the field of language learning. Many parents are looking for tools that can supplement traditional education, not just for bilingual children but also for monolingual students eager to learn new languages. 

Talkaroo is perfectly positioned to meet this demand, offering a solution that’s interactive, effective, and enjoyable for all types of learners. By making language learning more accessible and fun, Talkaroo empowers children to develop their language skills, preparing them for success both academically and socially.

## Installation

To run Talkaroo locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/talkaroo-chatbot.git
   cd talkaroo-chatbot
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add the following environment variables:
   ```plaintext
   NEXT_PUBLIC_ELEVENLABS_API_KEY=your-elevenlabs-api-key
   NEXT_PUBLIC_WHISPER_API_KEY=your-whisper-api-key
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the chatbot.

## Usage

- **Record Voice**: Click the microphone icon to start recording your voice, and click again to stop. The chatbot will recognize and process your speech.
- **Text-to-Speech**: After processing your voice input, the chatbot will respond aloud using the ElevenLabs text-to-speech API.
- **Download Recording**: After recording, you can download your voice as an audio file in `.webm` format.

## Technologies

- **Next.js**: React framework for building the chatbot’s front end.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons (FontAwesome)**: Used for adding dynamic icons like the microphone and stop buttons.

## APIs Used

- **ElevenLabs API**: Used for text-to-speech conversion, giving the chatbot a realistic voice.
- **OpenAI Whisper API**: Handles speech recognition, converting spoken words into text for the chatbot to process.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
