import {LLMDynamicHandle, LMStudioClient} from "@lmstudio/sdk";

const client = new LMStudioClient();
let model: LLMDynamicHandle;

export const loadModel = async () => {
    model = await client.llm.load("lmstudio-community/Meta-Llama-3-8B-Instruct-GGUF", {
        config: {gpuOffload: "max"},
        noHup: true, // Keep model in memory after disconnect
    });
}

export const predictQuoteCharacter = async (quote: string, character: string): Promise<string> => {
    const maxPredictedTokens = 100;
    const prediction = model.respond(
        [
            {role: "system", content:
                    `Change the following quote to a version said by ${character}. Do not append ${character} to the result and do not add quotation marks.`
            },
            {role: "user", content: quote},
        ],
        {
            contextOverflowPolicy: "stopAtLimit",
            maxPredictedTokens: maxPredictedTokens,
        },
    );
    const { content } = await prediction;
    return content;
}