# Remote control

Assignment: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/remote-control/assignment.md

## How to download and install application:

### 1. Clone repository:
```
git clone https://github.com/dumbus/remote-control.git
```
### 2. Change active directory:
```
cd remote-control
```
### 3. Change repository branch:
```
git checkout remote-control
```
### 4. Install dependencies:
```
npm install
```

## How to run application:

Run the application in a development mode:
* App served @ `http://localhost:8181` with nodemon
```
npm run start:dev
```

Run the application in a production mode:
* App served @ `http://localhost:8181` without nodemon
```
npm run start
```

After you started an application, open `http://localhost:8181` to see Remote control task page

## Important notes:
When you start an application, you will see messages:
```
Start http server on localhost:8181
```
```
Start websocket server on localhost:8080
```
> Connect to **localhost:8181** to see the Remote control task page

After you connect to **localhost:8181**, you will see a message in console:
```
Client connected on port: ${WEBSOCKET_PORT}
```
After you disconnect from Remote control task page, you will see a message in console:
```
Websocket connection was closed
```