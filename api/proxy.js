import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // stored on Vercel, not public
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  try {
    const { budget, usageType, ageGroup, additionalNotes } = req.body;

    const prompt = `
You are an expert smartphone recommender.
User details:
- Budget: ₹${budget}
- Usage: ${usageType}
- Age group: ${ageGroup}
- Additional notes: ${additionalNotes}

Recommend 3 best phones available in India (late 2025), with:
1. Model name
2. Price (approx)
3. Why it suits this user
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const answer = completion.choices[0].message.content;
    res.status(200).json({ recommendations: answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
}
