export const environment = {
  production: false,
  appwrite: {
    endpoint: import.meta.env['VITE_APPWRITE_ENDPOINT'] ?? '',
    projectId: import.meta.env['VITE_APPWRITE_PROJECT_ID'] ?? '',
    databaseId: import.meta.env['VITE_APPWRITE_DATABASE_ID'] ?? '',
    eventsCollectionId: import.meta.env['VITE_APPWRITE_EVENTS_COLLECTION_ID'] ?? ''
  }
} as const;
