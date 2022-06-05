FROM node:16

COPY build /app

EXPOSE 80

ENTRYPOINT npx -y serve -n -p 80 /app
