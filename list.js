const client = require("./client")

async function init(params) {
    // await client.lpush("messages", "good");
    // await client.lpush("messages", "boy");
    // await client.lpush("messages", "do ");
    // await client.lpush("messages", "always");
    // await client.lpush("messages", "nice");
    // await client.lpush("messages", "to");
    // await client.lpush("messages", "people");

    // const result = await client.blpop("messages", );
    const result = await client.xadd("temp", 60);

    console.log("result -----> ", result);
}

init()