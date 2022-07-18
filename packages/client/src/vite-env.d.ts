/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_AUTH_DOMAIN: string;
    readonly VITE_FIREBASE_PROJECT_ID: string;
    readonly VITE_FIREBASE_STORAGE_BUCKET: string;
    readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
    readonly VITE_FIREBASE_APP_ID: string;
    readonly VITE_API_BASE_URL: string;
    readonly VITE_API_CRYPTO_SECRET_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// Children
interface Child {
    children: React.ReactNode;
}

interface StringObject {
    [key: string]: string;
}
