export default function rand(min = 1, max = 10000) {
  if (typeof min !== "number" || typeof max !== "number")
    throw new Error("Invalid input");
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
