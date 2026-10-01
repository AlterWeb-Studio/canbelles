export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS, DELETE",
      "Access-Control-Allow-Headers": "*",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      const urlObj = new URL(request.url);

      // --- DATA DE CADUCITAT ---
      if (urlObj.pathname === "/caducitat") {

        // 1. MODE MANUAL: si hi ha data fixa al KV, mana ella
        const dataManual = await env.KV_DATA.get("BELLES/DATA_CADUCITAT");
        if (dataManual) {
          return new Response(dataManual, { headers: corsHeaders });
        }

        // 2. MODE AUTOMÀTIC: primer accés + hores
        let primerAcces = await env.KV_DATA.get("BELLES/PRIMER_ACCES");
        if (!primerAcces) {
          primerAcces = new Date().toISOString();
          await env.KV_DATA.put("BELLES/PRIMER_ACCES", primerAcces);
        }

        const HORES_DE_PROVA = 48;
        const caducitat = new Date(
          new Date(primerAcces).getTime() + HORES_DE_PROVA * 60 * 60 * 1000
        );
        return new Response(caducitat.toISOString(), { headers: corsHeaders });
      }

      return new Response("Not found", { status: 404, headers: corsHeaders });

    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: corsHeaders
      });
    }
  }
};