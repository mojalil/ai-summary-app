# AI Meeting Summary - SummitAI

![Next.js Version](https://img.shields.io/badge/next.js-14.0.0-blue.svg)
![Tailwind CSS Version](https://img.shields.io/badge/tailwindcss-^2.2.19-blueviolet)
![Pinecone](https://img.shields.io/badge/pinecone-integrated-green)
![OpenAI](https://img.shields.io/badge/openai-integrated-red)
![Supabase](https://img.shields.io/badge/supabase-integrated-orage)
![NextAuth.js](https://img.shields.io/badge/nextauth.js-integrated-yellowgreen)

AI Meeting Summary App is a next-generation tool designed to revolutionize the way individuals and teams manage their meeting content. It allows users to upload notes, audio, and video, then leverages advanced AI technology to provide concise summaries, transcripts, and the ability to query meeting notes. The app streamulates productivity by offering features such as storing, exporting, emailing, and sharing summaries.

![ai-summary-app-main](https://github.com/mojalil/ai-summary-app/assets/10572843/b97378fc-e97a-483e-a48a-5c7c60557ecc)

## Features

- **Add Notes**: Users can easily add text notes, upload audio, and video files.
- **AI-Generated Summaries**: Utilize OpenAI to generate accurate and concise summaries of your meetings.
- **Transcription**: Automatically transcribe audio and video to text.
- **Interactive Querying**: Ask questions about your meeting notes and get immediate answers.
- **Storage**: Safely store different summaries for later reference.
- **Export**: Export summaries in various formats.
- **Email**: Directly email summaries to your team or stakeholders.
- **Share**: Seamlessly share your summaries with collaborators.

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```
node.js
npm or yarn
```

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

Clone the repository:

```bash
git clone https://github.com/motypes/ai-meeting-summary-app.git
```

Navigate to the project directory:

```bash
cd ai-meeting-summary-app
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Set up your environment variables:

```env
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXTAUTH_URL=your_nextauth_url
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This application is configured to deploy on Vercel, providing a seamless deployment experience:

```bash
vercel deploy
```

## Built With

- [Next.js 14](https://nextjs.org/) - The React framework for production.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [Vercel](https://vercel.com/) - Platform for front-end frameworks and static sites.
- [Pinecone](https://www.pinecone.io/) - Scalable vector database for building ML applications.
- [OpenAI](https://openai.com/) - AI models for natural language processing.
- [Supabase](https://supabase.io/) - An open-source Firebase alternative providing a database and backend-as-a-service.
- [NextAuth.js](https://next-auth.js.org/) - Complete open-source authentication for Next.js applications.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/motypes/ai-meeting-summary-app/tags).

## Authors

Built with ❤️ by [motypes](https://twitter.com/motypes)

See also the list of [contributors](https://github.com/motypes/ai-meeting-summary-app/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
