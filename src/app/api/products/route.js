
export async function GET() {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/shop/products`);
    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    return new Response(JSON.stringify({ error: "Proxy failed" }), {
      status: 500,
    });
  }
}
