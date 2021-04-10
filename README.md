# node-facilities

To install

```
    npm install

```

Dev Mode

```
    npm run dev
```

Test Mode

```

    npm run test

```

Docker

```

    docker run -d -e PORT=8080 -e COLLECTION=facilities -e SUBCOLLECTION=facilities -e GOOGLE_APPLICATION_CREDENTIALS=gcloud/key.json -p 8080:8080 --name rest-server node-api_facilities

```

Important, you must have a SA account to reply dev and test.
