# How to run this application locally on your machine

Open the folder in you favorite text editor and run the commands

## In the root of the folder create a .env.local file and add the following environment variables

```
STORYBLOK_CONTENT_DELIVERY_API_TOKEN

ALGOLIA_APP_ID

ALGOLIA_API_ADMIN_TOKEN

ALGOLIA_INDEX_NAME

NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_TOKEN

NEXT_PUBLIC_ALGOLIA_APP_ID

```

- STORYBLOK_CONTENT_DELIVERY_API_TOKEN - Your storybloc account access token

- ALGOLIA_APP_ID - Your algolia app id

- ALGOLIA_API_ADMIN_TOKEN - Your algolia api admin token

- ALGOLIA_INDEX_NAME - Your algolia index name (Please make sure it is called Event)

- NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_TOKEN - Your algolia search only access token

- NEXT_PUBLIC_ALGOLIA_APP_ID - Your algolia app id

## After adding the environment variables run the following commands in you terminal (Make sure you are in the actual folder)

```
npm install

npm run dev

```
