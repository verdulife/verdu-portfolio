const db = await Deno.openKv();

const user = "verdu";
const result = await db.set(["username"], user);
const username = await db.get(["username"]);
console.log(username);
