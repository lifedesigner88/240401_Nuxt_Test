export default defineEventHandler((event) => {
    return {
        message: getMethod(event) + " ** Hello world!",
        message2: getQuery(event),
        // http://localhost:3001/api/helloWorld?hello=world&color=blue
    };
})