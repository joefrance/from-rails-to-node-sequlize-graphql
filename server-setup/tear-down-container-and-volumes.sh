# Stop the container
echo 'Stopping the from-rails-to-node-sequlize-graphql-postgres container...'
docker stop from-rails-to-node-sequlize-graphql-postgres

# Remove the container
echo 'Removing the from-rails-to-node-sequlize-graphql-postgres container...'
docker rm from-rails-to-node-sequlize-graphql-postgres

# Remove the server-setup_from-rails-to-node-sequlize-graphql-volume volume
echo 'Removing the server-setup_from-rails-to-node-sequlize-graphql-volume volume...'
docker volume rm server-setup_from-rails-to-node-sequlize-graphql-volume

echo 'Complete!'