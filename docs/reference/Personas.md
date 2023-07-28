---
sidebar_position: 1
---

# Personas

### allPersonas

```jsx showLineNumbers
{
  allPersonas {
    personaId,
    name,
    arcana,
    baseLevel,
    inheritanceType,
    special,
    dlc,
    treasure,
    treasureMods {
      arcana,
      modifier
    },
    stats {
      strength,
      magic,
      endurance,
      agility,
      luck
    },
    affinities {
      phys,
      gun,
      fire,
      ice,
      elec,
      wind,
      psy,
      nuke,
      bless,
      curse
    },
    skills {
      skillId,
      name,
      type,
      effect,
      cost
    },
    trait,
    background,
    fusionQuote,
    normalItem {
      itemId,
      name,
      description
    },
    fusionAlarmItem {
      itemId,
      name,
      description
    },
    normalSkillCard {
      skillId,
      name,
      type,
      effect,
      cost
    },
    fusionAlarmSkillCard {
      skillId,
      name,
      type,
      effect,
      cost
    }
  }
}
```