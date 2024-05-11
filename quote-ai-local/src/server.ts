import express from "express";
import cors from "cors";
import {predictQuoteCharacter} from "./prediction";

export const startServer = () => {
    const app = express();
    app.use(cors()); // Allow CORS with default open policy
    app.use(express.json()); // Json body parsing
    const port = 9090;

    app.post('*', async (req, res) => {
        let quote, character;
        try {
            const jsonObject: any = req.body;
            quote = jsonObject.quote;
            character = jsonObject.character;
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
        }

        const prediction = await predictQuoteCharacter(quote, character);

        res.json({quote: prediction});
    });

    // Actually start the server
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}
