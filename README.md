# Coursework for "Learn A-Frame And Get Ready For WebVR"

This contains the projects used for the course [Learn A-Frame And Get Ready For WebVR](https://www.udemy.com/course/learn-a-frame-and-get-ready-for-webvr/).

The vendor directory contains course materials provided by the teacher.

## Setting up SSL for local development

The WebXR api requires pages are served over ssl. Installing locally assuming a host named `slartibartfast.local`

    > brew install mkcert
    > mkdir -p certs
    > cd certs
    > mkcert localhost slartibartfast.local 127.0.0.1 ::1 # Generate the certs
    > mkcert -install # Install the certs into the system

And then run the server via:

    > npx http-server --ssl --cert certs/localhost+3.pem --key certs/localhost+3-key.pem -a slartibartfast.local
