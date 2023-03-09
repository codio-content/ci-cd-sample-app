# ci-cd-sample-app-v2

# Release build

```parcel build src/index.html```

# Development build

```parcel src/index.html```

# Quality check

```eslint src/*.js```

# Run unit tests

```jest```

# Deployment

```parcel build src/index.html --public-url /ci-cd-sample-app-v1 && gh-pages -d dist```
