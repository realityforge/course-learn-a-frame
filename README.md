# Coursework for "Learn A-Frame And Get Ready For WebVR"

This contains the projects used for the course [Learn A-Frame And Get Ready For WebVR](https://www.udemy.com/course/learn-a-frame-and-get-ready-for-webvr/).

The vendor directory contains course materials provided by the teacher.

## Development on the Quest

Firstly you need to setup port forwarding in chrome devtools. See the
[Access Local Servers](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/local-server)
and [Get Started with Remote Debugging Android Devices](https://developers.google.com/web/tools/chrome-devtools/remote-debugging)
articles. This will allow accessing your dev server as `localhost:port` from your Quest that is not subject to
the HTTPS restriction. Also look into [remote debugging](https://developer.oculus.com/documentation/oculus-browser/browser-remote-debugging/)
to use chrome devtools across a wireless connection.

Then we can just run `cd src && npx http-server` to start a server useable by the quest.
