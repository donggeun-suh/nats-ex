import {connect, Empty, StringCodec} from "nats";

const nc = await connect({servers: "localhost:4222"});
const sc = StringCodec();


await nc.publish("echo", sc.encode("test1"));
await nc.publish("echo", sc.encode("test2"));
await nc.publish("echo", sc.encode("test3"));
await nc.publish("echo", sc.encode("test4"));
await nc.publish("echo", sc.encode("test5"));
await nc.publish("echo", sc.encode("test6"));
await nc.publish("echo", sc.encode("test7"));
await nc.publish("echo", sc.encode("test8"));


await nc.flush();


