import {LMStudioClient} from "@lmstudio/sdk";

async function main() {
    // Create a client to connect to LM Studio, then load a model
    const client = new LMStudioClient();
    const model = await client.llm.load("lmstudio-community/Meta-Llama-3-8B-Instruct-GGUF", {
        config: {gpuOffload: "max"},
        noHup: true, // Keep model in memory after disconnect
    });

    // Predict!
    const character = 'Yoda from star wars'
    const quote = 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.'

    const prediction = model.respond(
        [
            {role: "system", content: `Change the following quote to a version said by ${character}.`},
            {role: "user", content: quote},
        ],
        {
            contextOverflowPolicy: "stopAtLimit",
            maxPredictedTokens: 100,
            // stopStrings: ["\n"],
            // temperature: 0.7,
            // inputPrefix: "Q: ",
            // inputSuffix: "\nA:",
        },
    );
    for await (const text of prediction) {
        process.stdout.write(text);
    }
}

main();