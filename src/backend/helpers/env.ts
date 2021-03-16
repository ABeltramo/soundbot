import {load} from 'ts-dotenv';

const schema = {
    LOG_LEVEL: {
        type: String,
        default: "info"
    },
    PORT: {
        type: Number,
        default: 3000
    },
    ORIGIN: {
        type: String,
        default: "http://localhost:3000"
    },
    SOUNDS_FOLDER: {
        type: String,
        default: "./data/sounds"
    },
    DB_CLIENT: {
        type: String,
        default: "sqlite3"
    },
    DB_SQLITE_FILENAME: {
        type: String,
        default: "./data/db.sqlite"
    },
    OAUTH_KEY: String,
    OAUTH_SECRET: String,
    BOT_TOKEN: String
};

export const env = load(schema, "conf.env");