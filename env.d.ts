/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RESOURCE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
