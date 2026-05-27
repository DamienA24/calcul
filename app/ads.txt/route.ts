export const dynamic = "force-static";

export async function GET() {
  return new Response(
    "google.com, pub-1608938195475222, DIRECT, f08c47fec0942fa0\n",
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  );
}
