const fs = require('fs');
const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = 'AKIAZ3SASOM5PGK3L36N';
const SECRET = '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';

// The name of the bucket that you have created
const BUCKET_NAME = 'rollingluck-emails';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: 'rollingluck-emails',
        Key: 'emails/text.txt',
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};
uploadFile('text.txt');
