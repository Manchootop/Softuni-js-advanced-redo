class Request {
    method;
    uri;
    version;
    message;
    response = undefined;
    fulfiled = false;

    constructor(message, uri, version, message) {
        this.message = message;
        this.method = method;
        this.uri = uri;
        this.version = version;
    }
}