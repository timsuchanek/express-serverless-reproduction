# express-serverless-reproduction
Reproduction for `serverless@1.74.1` not preserving file permissions.
https://github.com/prisma/prisma-client-js/issues/751 is blocked by this.

## Reproduction

### Works locally
```bash
yarn
node local.js # open browser at http://localhost:4000
```

### Breaks remote
```bash
yarn sls deploy
```
