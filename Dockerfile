FROM node:lts-alpine AS builder
WORKDIR /app

ARG HASURA_URL
ENV HASURA_URL=$HASURA_URL

ARG JWT_SECRET_KEY
ENV JWT_SECRET_KEY=$JWT_SECRET_KEY

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:lts-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
CMD ["node_modules/.bin/next", "start"]