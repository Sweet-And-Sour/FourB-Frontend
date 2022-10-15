FROM node:16

ARG FRONTEND_WORKDIR

WORKDIR ${FRONTEND_WORKDIR}

COPY . .

RUN yarn
CMD ["yarn", "dev"]