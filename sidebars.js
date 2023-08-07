// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  learnSidebar: [
    {
      type: 'doc', 
      label: 'About',
      id: 'learn/about'
    }
  ],
  apiSidebar: [
    {
      type: 'doc',
      label: 'API Reference',
      id: 'api/apiReference',
    },
    {
      type: 'category',
      label: 'Objects',
      items: [
        {
          type: 'doc',
          label: 'Persona',
          id: 'api/objects/persona'
        },
        {
          type: 'doc',
          label: 'Skill',
          id: 'api/objects/skill'
        },
        {
          type: 'doc',
          label: 'Trait',
          id: 'api/objects/trait'
        },
        {
          type: 'doc',
          label: 'Item',
          id: 'api/objects/item'
        }
      ]
    },
    {
      type: 'category',
      label: 'Queries',
      items: [
        {
          type: 'category',
          label: 'Personas',
          items: [
            {
              type: 'doc',
              label: 'allPersonas',
              id: 'api/queries/personas/allPersonas'
            },
            {
              type: 'doc',
              label: 'personaById',
              id: 'api/queries/personas/personaById'
            },
            {
              type: 'doc',
              label: 'personaByName',
              id: 'api/queries/personas/personaByName'
            },
            {
              type: 'doc',
              label: 'personaFusionById',
              id: 'api/queries/personas/personaFusionById'
            },
            {
              type: 'doc',
              label: 'personaFusionByName',
              id: 'api/queries/personas/personaFusionByName'
            },
            {
              type: 'doc',
              label: 'personaRecipesById',
              id: 'api/queries/personas/personaRecipesById'
            },
          ]
        },
        {
          type: 'category',
          label: 'Skills',
          items: [
            {
              type: 'doc',
              label: 'allSkills',
              id: 'api/queries/skills/allSkills'
            },
            {
              type: 'doc',
              label: 'skillById',
              id: 'api/queries/skills/skillById'
            },
            {
              type: 'doc',
              label: 'skillByName',
              id: 'api/queries/skills/skillByName'
            }
          ]
        },
        {
          type: 'category',
          label: 'Items',
          items: [
            {
              type: 'doc',
              label: 'allItems',
              id: 'api/queries/items/allItems'
            },
            {
              type: 'doc',
              label: 'itemById',
              id: 'api/queries/items/itemById'
            },
            {
              type: 'doc',
              label: 'itemByName',
              id: 'api/queries/items/itemByName'
            }
          ]
        },
        {
          type: 'category',
          label: 'Traits',
          items: [
            {
              type: 'doc',
              label: 'allTraits',
              id: 'api/queries/traits/allTraits'
            }
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
