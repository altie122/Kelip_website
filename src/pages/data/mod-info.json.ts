export async function GET() {
  return new Response(
    JSON.stringify({
      "title": "Kelip",
      "description": "A Minecraft mod that adds a bunch of random but possibly useful features and items to the game.",
      "image": "https://kelip.altie122.xyz/KelipOpenBeta.png",
      "links": [
        {
          "name": "CurseForge",
          "link": "https://www.curseforge.com/minecraft/mc-mods/kelip",
          "image": "https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/compact-minimal/available/curseforge_46h.png"
        },
        {
          "name": "Modrinth",
          "link": "https://modrinth.com/mod/kelip",
          "image": "https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/compact-minimal/available/modrinth_46h.png"
        }
      ],
      "wiki": "https://kelip.altie122.xyz",
      "version": "1.0.0-b.1"
    })
  )
}