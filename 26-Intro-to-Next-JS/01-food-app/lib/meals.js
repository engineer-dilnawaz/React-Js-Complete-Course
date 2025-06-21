import { S3 } from "@aws-sdk/client-s3";
import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const s3 = new S3({
  region: "us-east-1",
});

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //all is use to fetch all rows data from db and .run() is used to write data and .get() is used to get single row

  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // const extension = meal.image.name.split(".").pop();
  // const fileName = `${meal.slug}.${extension}`;

  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  // const bufferImage = await meal.image.arrayBuffer();

  // stream.write(Buffer.from(bufferImage), (error) => {
  //   if (error) {
  //     throw new Error("Saving image failed!");
  //   }
  // });

  // meal.image = `/images/${fileName}`;

  // S3 Bucket Code
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: "dilnawaz-nextjs-project-images",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  meal.image = fileName;
  // S3 Bucket Code

  // instructions
  db.prepare(
    `
      INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
  ).run(meal);
}
