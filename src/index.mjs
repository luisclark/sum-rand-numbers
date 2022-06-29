import rand from "./rand.mjs";

(async () => {
  const loop = 10;
  const result = await Promise.all(
    Array(loop)
      .fill(0)
      .map(() => rand())
  );
  console.log(result);
})();
