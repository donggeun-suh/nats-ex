import { connect, StringCodec } from "nats";

const nc = await connect({ servers: "localhost:4222" });
const sc = StringCodec();


await nc.publish("help", sc.encode("test1"));
await nc.publish("help.me", sc.encode("test2"));
await nc.publish("help.you", sc.encode("test3"));
await nc.publish("help.me.system", sc.encode("test4"));
await nc.publish("help.you.system", sc.encode("test5"));
await nc.publish("help.you.you", sc.encode("test6"));

await nc.closed();
