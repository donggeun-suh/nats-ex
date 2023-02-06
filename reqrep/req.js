import { connect, Empty, StringCodec } from "nats";

// create a connection
const nc = await connect({ servers: "localhost:4222" });

// create an encoder
const sc = StringCodec();

// the client makes a request and receives a promise for a message
// by default the request times out after 1s (1000 millis) and has
// no payload.
await nc.request("admin.stop", Empty, { timeout: 3000 })
    .then((m) => {
        console.log(`got response: ${sc.decode(m.data)}`);
    })
    .catch((err) => {
        console.log(`problem with request: ${err.message}`);
    });

