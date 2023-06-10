import { createClient } from 'contentful';

export default function useContentful(context) {
  
  let client;

  const initClient = async () => {
    while (!context.$config.contentful.accessToken || !context.$config.contentful.spaceId) {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
    }
    client = createClient({
      space: context.$config.contentful.spaceId,
      accessToken: context.$config.contentful.accessToken,
    });
    
  };

  const getEntries = async (options) => {
    if (!client) {
      await initClient();
    }
    const response = await client.getEntries(options);
    return response;
  };

  return { getEntries };
}
