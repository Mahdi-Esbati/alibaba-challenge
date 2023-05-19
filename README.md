# Alibaba Code Challenge

### CAUTION: Please read all of the provided documentation carefully to get familiar with the project

## Checklist

- [x] Base UI
- [x] Responsive UI
- [x] Dark Theme
- [x] API Implementation
- [x] Design System Implementation
- [x] Advanced Search And Filtering
- [x] Web Workers And Performance Improvements
- [ ] Unit Tests
- [ ] Sort Implementation

## Introduction

This repository contains my solution for the Alibaba's Frontend Engineer interview code challenge.

## Git

- The branches and commit names are prefixed with `feat` and `fix` to improve readability
- Every feature needs to have it's own branch and a merge request must be created for the feature

## Bundler

- This project uses `Vite` as it's bundler
- Why Vite? It provides insane build performance alongside clean boilerplates
- Why not `Create React App`? It lacks the customization of Vite and is deprecated by the community

## Project structure

- This project uses a `Fractal` directory structure, It means that every directory can have it's dependencies inside itself to avoid cluttering the project
- The `App.tsx` is the starting point of the app, it contains the routes and general definitions

## Styling

- This project uses `CSS` and `CSS Modules` for the styling.
- Why not `SASS`? It has it's own benefits but the modern CSS combined with CSS Variables can get the work done
- Why not `TailwindCSS`? I made a challenge to myself to not use any third party library other than `React` for this project to test my abilities
- The theming part of the App (including the dark mode) is done by utilizing `CSS Variables` and every color, font, spacing, padding and margin is calculated by the base variables. this makes the project fully flexible and you can modify it very easily

## APIs

- This project does not use any thirdparty library for it's API's. everything is built around `Fetch` api
- The API's are consisted of 3 parts:
  1- HttpService
  2- useAPI hook
  3- ApiRequestObjects

  ### HttpService

  The HTTPService is the base building block of the API's. It accepts an `ApiRequestObject` as a parameter and runs the desired http request.

  ### What are ApiRequestObjects?

  They are simple javascript objects containing the `endpoint`, the request `method` and other optional properties. they essentially describe the request in a declarative way.
  Here is a sample request object:

  ```typescript
  const getCountryListAPI: ApiRequestObject<object, CountryListResponse> = {
    endpoint: `all/folan`,
    method: 'GET',
  };
  ```

  ### useAPI hook

  The `useAPI` hook is a utility to help the developer use the HTTPService in a declarative way. It accepts the `APIRequestObject` and handles the request on itself.

  ```typescript
  const { request, pending, data } = useAPI({
    apiRequestObject: getCountryListAPI,
    fetchOnMount: true,
    successCallback: (data) => {},
    failedCallback: (error) => {},
  });
  ```

  You can either get the response by using the `data` variable or by calling the async `request` function.
  There is a third way, you can pass a callback to the `successCallback` function and do some work when the request is done.

## Fuzzy String Search And The Use Of Web Workers

The project includes a `fuzzyStringSearch` function that enables fuzzy string matching for improved search functionality. This function leverages web workers to enhance performance and responsiveness.

The `fuzzyStringSearch` function compares a search string against an array of strings and returns the matching results. It takes advantage of techniques like partial matching.

To achieve improved performance, the `fuzzyStringSearch` function offloads the search process to a _web worker_. Web workers allow the search to be performed in the background without blocking the main thread, ensuring a smooth user experience.

Since the Web Workers rely on a messaging pattern to communicate with the normal code, the code had to be rewritten in a async way.
