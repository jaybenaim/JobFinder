---
title: JobFinder
description: Compile all your job applications in one place
date: "2022-04-07"
repository: /jaybenaim/JobFinder
published: false
---

Job crawler where a user can compile a list of jobs from multiple job platforms, and real-time job boards including Indeed, LinkedIn, and RemoteOK

![Preview](https://jaybenaim.github.io/new-portfolio/img/hacker-hunter.jpg)

## Features

- **Automated Job Refreshing:** Keep your job listings up to date with automated job refreshing.
- **Live Search:** Search for jobs in real-time and save them to your favorites.

## Built with

JobFinder is built using the following technologies:

### Front-end

- [Angular](https://angular.io/): A platform for building mobile and desktop web applications.

### Back-end

- [Cheerio](https://cheerio.js.org/): A fast, flexible, and lean implementation of core jQuery for the server. Used for getting recent job postings from multiple platforms.
- [Firebase](https://firebase.google.com/): A cloud-based platform by Google that provides services for building and managing web and mobile applications. We are using Firebase's Firestore as the database for storing stock prices so we can grab them incrementally.

### Authentication

- [Firebase Authentication](https://firebase.google.com/docs/auth): Firebase's authentication service that provides easy-to-use authentication for our web app. We support authentication with email & password and OAuth providers like Google.
