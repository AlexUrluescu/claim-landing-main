FROM node:21-alpine AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:21-alpine AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM node:21-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app ./
COPY --from=builder /app/runtime/run.sh /usr/bin/run.sh

RUN npm install next &&\
    chmod +x /usr/bin/run.sh

USER nextjs

EXPOSE 3000

ENV PORT 3000

ENTRYPOINT [ "run.sh" ]