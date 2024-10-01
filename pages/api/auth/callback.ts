import { supabase } from "@/utils/supabase/component";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { searchParams } = new URL(req.url as string);

  const code = searchParams.get("code");

  if (!code) return res.status(400).send("No code provided");

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("Error retrieving session", error);
    return res.status(400).send("Error processing OAuth callback");
  }

  // You can now redirect the user or do further processing (e.g., setting cookies)
  res.redirect("/"); // Redirect to a protected page after successful login
}
