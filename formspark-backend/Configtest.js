import dotenv from 'dotenv';
import path from 'path';

// Explicitly specify path to .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

console.log('Current Working Directory:', process.cwd());
console.log('Full .env Path:', path.resolve(process.cwd(), '.env'));

console.log('AWS Environment Variables:');
console.log('Bucket Name:', process.env.AWS_BUCKET_NAME);
console.log('Region:', process.env.AWS_REGION);
console.log('Access Key ID:', process.env.AWS_ACCESS_KEY_ID ? 'Present' : 'Missing');
console.log('ALL ENV VARS:', process.env);