/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP: 'tanstack-router';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
