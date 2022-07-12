# CRA Template with Docker Compose

Create a React App with `npx create-react-app <project_name>`

Delete the node_modules from the local repo since it will automatically be craeted by docker

Set up without Docker Compose  
`docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>`


`-v /app/node_modules` is used to bookmark the node_modules and not map this folder with anything else

Set up with Docker Compose
docker-compose up