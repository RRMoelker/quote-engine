# quote-ai-local

Web service that transforms a given quote to a style from another author.
The service packages requests and forwards them to a LM studio server (started independently) with a pre-downloaded LLM.

# Design decisions

* This only performs minor transformations before and after calling the LLM.
* For this example there is no linting, testing, etc.

# Install

This service requires LM studio with a specific model downloaded.

Download [LM studio from here](https://lmstudio.ai/).

Download the `"lmstudio-community/Meta-Llama-3-8B-Instruct-GGUF"` through the UI.

And initialize the `lms` service used by the [LM Studio SDK by following this guide](https://lmstudio.ai/docs/lmstudio-sdk/quick-start).

To install the dependencies of this Node service itself run

    npm install

# Run

First start the LM studio server

    lms server start

Then run the code in this project

    npm start



# LM studio, original `lms create` README  

#### Created with LM Studio scaffold: node-typescript

Welcome to your new project! This scaffold is a starting point for building an AI-enabled Node.js project with [LM Studio](https://lmstudio.ai/) SDK. To interact with LM Studio, you should start the LM Studio local server with the command:

```bash
lms server start
```

## Getting Started

### Development

The source code resides in the `src/` directory. For development purposes, you can run the project using:

```start
npm start
```

### Building for Production

To prepare your project for production, compile the TypeScript code to JavaScript using:

```bash
npm run build
```

This will compile the TypeScript code in the `src/` directory to JavaScript in the `dist/` directory.

### Community & Help

- [lmstudio.js GitHub](https://github.com/lmstudio-ai/lmstudio.js)
- [Documentation](https://lmstudio.ai/docs/welcome)
- [Discord](https://discord.gg/6Q7Xn6MRVS)
- [Twitter](https://twitter.com/LMStudioAI)
