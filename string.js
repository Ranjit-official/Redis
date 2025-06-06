const client = require("./client");

async function init() {
    await client.set("msg:3", "hey this is from node");
    await client.expire("msg:3", 10);
    const result = await client.get("msg:3");
    console.log("Result----> :", result);
}

init();