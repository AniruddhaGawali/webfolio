export const prerender = false;

import type { APIRoute } from "astro";
import { neon, NeonDbError } from "@neondatabase/serverless";

const DB_URI = import.meta.env.DB_URI;
const sql = neon(DB_URI);

export const POST: APIRoute = async ({ request }) => {
  try {
    if (request.headers.get("Content-Type") === "application/json") {
      const body = await request.json();

      const { name, wish } = body;

      if (!name || !wish) {
        return new Response("Name or Wish is Missing", { status: 400 });
      }

      try {
        await sql`INSERT INTO wish (name, wish) VALUES (${name}, ${wish})`;
      } catch (error) {
        if (error instanceof NeonDbError) {
          return new Response(error.message, { status: 400 });
        }
        return new Response("Error", { status: 400 });
      }

      return new Response(
        JSON.stringify({
          ...body,
          success: true,
        }),
        {
          status: 200,
        },
      );
    }
    return new Response(null, { status: 400 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
