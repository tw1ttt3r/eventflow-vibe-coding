import { Client, Databases } from 'appwrite';
import { environment } from '@env/environment';

export const appwriteClient = new Client()
  .setEndpoint(environment.appwrite.endpoint || 'https://cloud.appwrite.io/v1')
  .setProject(environment.appwrite.projectId || 'local-development');

export const appwriteDatabases = new Databases(appwriteClient);
