# freeCodeCamp JAMStack

This is the project from [freeCodeCamp's JAMStack course](https://www.youtube.com/watch?v=A_l0qrPUJds)

Demo URL - https://elastic-einstein-bc4b9c.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d004427-e5ad-4d9a-b68b-c4b90dcbd3eb/deploy-status)](https://app.netlify.com/sites/elastic-einstein-bc4b9c/deploys)

## Prerequisites

This code will make use of a browser API which can only be used when accessed over a secure HTTPS connection. To configure your local development environment to serve requests over HTTPS you'll need to first create a certificate for local testing, and ensure that you rlocal machine trusts that cert. The confioguration of browsersync in Eleventy is [shown in the video](https://youtu.be/A_l0qrPUJds?t=157m40s)

- [Generate a free certificate for localhost](https://letsencrypt.org/docs/certificates-for-localhost/)
- [Trusting your local certificate](https://www.youtube.com/watch?time_continue=75&v=TGrX8XgSuZ4)

By default, [sites on Netlify are automatically configured with a free certifcate](https://docs.netlify.com/domains-https/https-ssl/?utm_source=github&utm_medium=fcc-examples-pnh&utm_campaign=devex#certificate-service-types) provided by LetsEncrypt, so no additional steps will be reuired in the CI/CD and hosting environments.

## Local development

To work on this example locally, you can clone the repository and start editing, although there are a few pre-requisites:

- [NodeJS and NPM](https://nodejs.org/)
- A free [Netlify account](https://www.netlify.com?utm_source=github&utm_medium=fcc-examples-pnh&utm_campaign=devex)
- A free [newsapi.org](https://newsapi.org/) API key
- A free [openweathermap.org](https://openweathermap.org/) API key

```bash
# clone the repo
git clone https://github.com/ivanovyordan/fcc-jamstack

# move into the working directory and install dependencies
cd fcc-jamstack
npm install

# add your secrets
cp .env.example .env
open .env

# build and start the local development server
npm start

# just run the build
npm run build
```

## Clone and deploy

If you wanted to quickly clone this repository and deploy it as a new site on [Netlify](https://www.netlify.com) you can click the button below for a rapid start. This will give you a ready-made CI/CD pipeline linked to your git commits.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ivanovyordan/fcc-jamstack).
