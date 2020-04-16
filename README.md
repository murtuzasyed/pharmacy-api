## Pharmacy API

Simple API to retrieve nearest pharmacy.

## Prerequisite

Download and Install,

- NodeJS >= 10.16.0
- npm >= 6.11.2

### Steps to install on Mac using Terminal and HomeBrew

- Open terminal
- Type `brew install node`
- To verify if installation was successful, type `node -v` for `node` and `npm -v` for `npm` in the terminal

### Steps to install on Ubuntu using package manager

- Open terminal
- Type `sudo apt install nodejs`
- Type `sudo apt install npm`
- To verify if installation was successful, type `nodejs -v`

### Install dependencies

In the root directory of the project, open terminal the following and hit enter

- `npm install`

### Launch the API

1. Open Terminal on Mac or Command Prompt on windows and navigate this folder.
2. Install npm dependencies using `npm install`
3. Build the content using `npm run build`
4. Launch the api using `npm run start`
5. Open any browser and in the search box enter a URL that matches the below pattern to retrieve the nearest pharmacy.

```
http://localhost:7000/pharmacies/coordinates/<latitude,longtitude>
```
