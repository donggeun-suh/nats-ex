import { connect, StringCodec } from "nats";


// to create a connection to a nats-server:
const nc = await connect({ servers: "localhost:4222" });

const sc = StringCodec();

await nc.publish("hello", sc.encode("world!!"));
await nc.publish("hello", sc.encode("again!!"));

await nc.drain();
