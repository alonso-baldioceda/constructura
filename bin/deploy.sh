# Get the AWS_BUCKET_NAME value as a variable $AWS_BUCKET_NAME
AWS_BUCKET_NAME=$(grep GATSBY_AWS_BUCKET_NAME .env.production | cut -d '=' -f2);
AWS_CLOUDFRONT_ID=$(grep GATSBY_AWS_CLOUDFRONT_ID .env.production | cut -d '=' -f2);

# Clean the cache, run build and deploy the public directory and exclude the uploads folder.

npm run clean \
&& npm run build \
&& aws s3 rm s3://$AWS_BUCKET_NAME/ --recursive \
&& aws s3 sync public s3://$AWS_BUCKET_NAME/ --acl public-read
# && aws cloudfront create-invalidation \
#   --distribution-id $AWS_CLOUDFRONT_ID \
#   --paths "/*"
