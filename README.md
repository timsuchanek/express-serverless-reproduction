# express-serverless-reproduction
Reproduction for `serverless@1.74.1` not preserving file permissions

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
