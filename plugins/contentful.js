// composables/useContentful.js
import { ref } from 'vue';
import { createClient } from 'contentful';

export default function useContentful(context) {
  let client;

  const initClient = async () => {
    while (!context.$config.contentful.accessToken || !context.$config.contentful.spaceId) {
      console.log('Waiting for environment variables...');
      await new Promise(resolve => setTimeout(resolve, 1000));  // Wait for 1 second
    }
    client = createClient({
      space: context.$config.contentful.spaceId,
      accessToken: context.$config.contentful.accessToken,
    });
    if(process.server) {
      console.log('Contentful client initialized on server');
    }
    else if(process.client) {
      console.log('Contentful client initialized on client');
    } else {
      console.log('Contentful client initialized on unknown process');
    }
    
  };

  const getEntries = async (options) => {
    if (!client) {
      console.log('Initializing Contentful client...');
      await initClient();
    }
    const response = await client.getEntries(options);
    return response;
  };

  return { getEntries };
}
