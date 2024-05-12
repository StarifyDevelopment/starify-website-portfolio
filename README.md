# Starify website :globe_with_meridians:

Official website for Starify Development.

![Website repo banner](./public/rm-banner.png)

## Getting Started :rocket:

### Development :computer:

For development, you need to clone the repository and install the dependencies. You can do that by running the following commands:

```bash
git clone https://github.com/StarifyDevelopment/starify-website
cd starify-website
pnpm install # or npm install
pnpm dev # or npm run dev
```

### Production :package:

For production, you can either build the website locally or use optimized docker images. To build the website locally, run the following commands:

```bash
git clone https://github.com/StarifyDevelopment/starify-website
cd starify-website
npm install # or npm install
npm run build # or npm run build
npm run preview
```

To build and run the docker image, run the following commands:

```bash
git clone https://github.com/StarifyDevelopment/starify-website
cd starify-website
docker build . -t starify/starify-website
docker run -p 8080:8080 starify/starify-website
```

## Contributing :handshake:

If you want to contribute to the website, please keep the code clean and readable. Also, please follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for your commit messages.


