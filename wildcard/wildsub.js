import { connect, StringCodec } from "nats";

const nc = await connect({ servers: "localhost:4222" });
const sc = StringCodec();

// subscriptions can have wildcard subjects
const s1 = nc.subscribe("help.*.system");
const s2 = nc.subscribe("help.me.*");
const s3 = nc.subscribe("help.>");

async function printMsgs(s) {
    let subj = s.getSubject();
    console.log(`listening for ${subj}`);
    const c = (13 - subj.length);
    const pad = "".padEnd(c);
    for await (const m of s) {
        console.log(
            `[${subj}]${pad} #${s.getProcessed()} - ${m.subject} ${
                m.data ? " " + sc.decode(m.data) : ""
            }`,
        );
    }
}

printMsgs(s1);
// don't exit until the client closes
await nc.closed();
