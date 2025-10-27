// Ball x Pit — Evolutions Browser
// All content and comments are in English as requested.

// --- Data: Base weapons ---
const BASE_ITEMS = [
  'Bleed', 'Brood Mother', 'Burn', 'Cell', 'Charm', 'Dark', 'Earthquake', 'Egg Sack',
  'Freeze', 'Ghost', 'Iron', 'Laser (Horizontal)', 'Laser (Vertical)', 'Light', 'Lightning',
  'Poison', 'Vampire', 'Wind'
];

// Pseudo group for any laser variant
const LASER_ANY = 'Laser (H or V)';

// --- Icons mapping ---
const ICONS = {
  'Assassin': 'assassin.png',
  'Black Hole': 'black_hole.png',
  'Bleed': 'bleed.png',
  'Blizzard': 'blizzard.png',
  'Bomb': 'bomb.png',
  'Brood Mother': 'brood_mother.png',
  'Burn': 'burn.png',
  'Cell': 'cell.png',
  'Dark': 'dark.png',
  'Earthquake': 'earthquake.png',
  'Egg Sack': 'egg_sac.png',
  'Flash': 'flash.png',
  'Flicker': 'flicker.png',
  'Freeze': 'freeze.png',
  'Freeze Ray': 'freeze_ray.png',
  'Frozen Flame': 'frozen_flame.png',
  'Ghost': 'ghost.png',
  'Glacier': 'glacier.png',
  'Hemorrhage': 'hemorrhage.png',
  'Holy Laser': 'holy_laser.png',
  'Inferno': 'inferno.png',
  'Iron': 'iron.png',
  'Laser Beam': 'laser_beam.png',
  'Laser (Horizontal)': 'laser_h.png',
  'Laser (Vertical)': 'laser_v.png',
  [LASER_ANY]: 'laser_h.png',
  'Leech': 'leech.png',
  'Light': 'light.png',
  'Lightning': 'lightning.png',
  'Lightning Rod': 'lightning_rod.png',
  'Maggot': 'maggot.png',
  'Magma': 'magma.png',
  'Mosquito King': 'mosquito_king.png',
  'Mosquito Swarm': 'mosquito_swarm.png',
  'Noxious': 'noxious.png',
  'Nuclear Bomb': 'nuclear_bomb.png',
  'Overgrowth': 'overgrowth.png',
  'Phantom': 'phantom.png',
  'Poison': 'poison.png',
  'Radiation Beam': 'radiation_beam.png',
  'Sacrifice': 'sacrifice.png',
  'Sandstorm': 'sandstorm.png',
  'Shotgun': 'shotgun.png',
  'Soul Sucker': 'soul_sucker.png',
  'Spider Queen': 'spider_queen.png',
  'Storm': 'storm.png',
  'Sun': 'sun.png',
  'Swamp': 'swamp.png',
  'Vampire': 'vampire.png',
  'Vampire Lord': 'vampire_lord.png',
  'Virus': 'virus.png',
  'Wind': 'wind.png',
  'Wraith': 'wraith.png',
  // Missing icons fallback
  'Berserk': 'no_icon.png',
  'Incubus': 'no_icon.png',
  'Succubus': 'no_icon.png',
  'Lovestruck': 'no_icon.png',
  'Voluptuous Egg Sac': 'no_icon.png',
  'Satan': 'no_icon.png',
  'Nosferatu': 'no_icon.png',
  // Passive items and results (placeholders)
  "Diamond HD": 'no_icon.png',
  "Sapphire HD": 'no_icon.png',
  "Ruby HD": 'no_icon.png',
  "Emerald HD": 'no_icon.png',
  "Baby Rattle": 'no_icon.png',
  "War Horn": 'no_icon.png',
  "Breastplate": 'no_icon.png',
  "Corrupted Onion": 'no_icon.png',
  "Reacher's Spear": 'no_icon.png',
  "Deadeye's Amulet": 'no_icon.png',
  "Ethereal Cloak": 'no_icon.png',
  "Ghostly Corset": 'no_icon.png',
  "Everflowing Goblet": 'no_icon.png',
  "Vampiric Sword": 'no_icon.png',
  "Crown of Thorns": 'no_icon.png',
  "Spiked Collar": 'no_icon.png',
  "Fleet Feet": 'no_icon.png',
  "Radiant Feather": 'no_icon.png',
  "Deadeye's Cross": 'no_icon.png',
  "Cornucopia": 'no_icon.png',
  "Odiferous Shell": 'no_icon.png',
  "Gracious Impaler": 'no_icon.png',
  "Phantom Regalia": 'no_icon.png',
  "Soul Reaver": 'no_icon.png',
  "Tormentor's Mask": 'no_icon.png',
  "Wings of the Anointed": 'no_icon.png',
};

// --- Recipes dataset ---
// Ingredients can be base weapons or evolved; LASER_ANY indicates either horizontal or vertical laser.
const ALL_RECIPES_RAW = [
  // Bleed tree
  { result: 'Leech', ingredients: ['Bleed', 'Brood Mother'] },
  { result: 'Berserk', ingredients: ['Bleed', 'Charm'] },
  { result: 'Sacrifice', ingredients: ['Bleed', 'Dark'] },
  { result: 'Hemorrhage', ingredients: ['Bleed', 'Iron'] },
  { result: 'Vampire Lord', ingredients: ['Bleed', 'Vampire'] },

  // Brood Mother tree
  { result: 'Maggot', ingredients: ['Brood Mother', 'Cell'] },
  { result: 'Spider Queen', ingredients: ['Brood Mother', 'Egg Sack'] },
  { result: 'Mosquito King', ingredients: ['Brood Mother', 'Vampire'] },

  // Burn tree
  { result: 'Berserk', ingredients: ['Burn', 'Charm'] },
  { result: 'Magma', ingredients: ['Burn', 'Earthquake'] },
  { result: 'Frozen Flame', ingredients: ['Burn', 'Freeze'] },
  { result: 'Bomb', ingredients: ['Burn', 'Iron'] },
  { result: 'Sun', ingredients: ['Burn', 'Light'] },
  { result: 'Inferno', ingredients: ['Burn', 'Wind'] },

  // Cell tree
  { result: 'Overgrowth', ingredients: ['Cell', 'Earthquake'] },
  { result: 'Radiation Beam', ingredients: ['Cell', LASER_ANY] },
  { result: 'Voluptuous Egg Sac', ingredients: ['Cell', 'Maggot'] }, // advanced
  { result: 'Virus', ingredients: ['Cell', 'Poison'] },

  // Charm tree
  { result: 'Incubus', ingredients: ['Charm', 'Dark'] },
  { result: 'Lovestruck', ingredients: ['Charm', 'Light'] },
  { result: 'Lovestruck', ingredients: ['Charm', 'Lightning'] },
  { result: 'Succubus', ingredients: ['Charm', 'Vampire'] },

  // Dark tree
  { result: 'Sacrifice', ingredients: ['Dark', 'Bleed'] },
  { result: 'Incubus', ingredients: ['Dark', 'Charm'] },
  { result: 'Phantom', ingredients: ['Dark', 'Ghost'] },
  { result: 'Assassin', ingredients: ['Dark', 'Iron'] },
  { result: 'Flicker', ingredients: ['Dark', 'Light'] },
  { result: 'Black Hole', ingredients: ['Dark', 'Sun'] }, // advanced
  { result: 'Vampire Lord', ingredients: ['Dark', 'Vampire'] },
  { result: 'Noxious', ingredients: ['Dark', 'Wind'] },

  // Earthquake tree
  { result: 'Magma', ingredients: ['Earthquake', 'Burn'] },
  { result: 'Overgrowth', ingredients: ['Earthquake', 'Cell'] },
  { result: 'Glacier', ingredients: ['Earthquake', 'Freeze'] },
  { result: 'Swamp', ingredients: ['Earthquake', 'Poison'] },
  { result: 'Sandstorm', ingredients: ['Earthquake', 'Wind'] },

  // Egg Sack tree
  { result: 'Spider Queen', ingredients: ['Egg Sack', 'Brood Mother'] },
  { result: 'Shotgun', ingredients: ['Egg Sack', 'Iron'] },
  { result: 'Mosquito Swarm', ingredients: ['Egg Sack', 'Vampire'] },

  // Freeze tree
  { result: 'Wraith', ingredients: ['Freeze', 'Ghost'] },
  { result: 'Blizzard', ingredients: ['Freeze', 'Lightning'] },
  { result: 'Freeze Ray', ingredients: ['Freeze', LASER_ANY] },
  { result: 'Blizzard', ingredients: ['Freeze', 'Wind'] },
  { result: 'Frozen Flame', ingredients: ['Freeze', 'Burn'] },
  { result: 'Glacier', ingredients: ['Freeze', 'Earthquake'] },

  // Ghost tree
  { result: 'Phantom', ingredients: ['Ghost', 'Dark'] },
  { result: 'Wraith', ingredients: ['Ghost', 'Freeze'] },
  { result: 'Assassin', ingredients: ['Ghost', 'Iron'] },
  { result: 'Virus', ingredients: ['Ghost', 'Poison'] },
  { result: 'Soul Sucker', ingredients: ['Ghost', 'Vampire'] },

  // Iron tree
  { result: 'Hemorrhage', ingredients: ['Iron', 'Bleed'] },
  { result: 'Bomb', ingredients: ['Iron', 'Burn'] },
  { result: 'Assassin', ingredients: ['Iron', 'Dark'] },
  { result: 'Shotgun', ingredients: ['Iron', 'Egg Sack'] },
  { result: 'Lightning Rod', ingredients: ['Iron', 'Lightning'] },

  // Laser tree
  { result: 'Radiation Beam', ingredients: [LASER_ANY, 'Cell'] },
  { result: 'Freeze Ray', ingredients: [LASER_ANY, 'Freeze'] },
  { result: 'Laser Beam', ingredients: [LASER_ANY, 'Light'] },
  { result: 'Radiation Beam', ingredients: [LASER_ANY, 'Poison'] },
  { result: 'Holy Laser', ingredients: ['Laser (Horizontal)', 'Laser (Vertical)'] },

  // Light tree
  { result: 'Sun', ingredients: ['Light', 'Burn'] },
  { result: 'Lovestruck', ingredients: ['Light', 'Charm'] },
  { result: 'Flicker', ingredients: ['Light', 'Dark'] },
  { result: 'Laser Beam', ingredients: ['Light', LASER_ANY] },
  { result: 'Flash', ingredients: ['Light', 'Lightning'] },

  // Lightning tree
  { result: 'Lovestruck', ingredients: ['Lightning', 'Charm'] },
  { result: 'Blizzard', ingredients: ['Lightning', 'Freeze'] },
  { result: 'Lightning Rod', ingredients: ['Lightning', 'Iron'] },
  { result: 'Flash', ingredients: ['Lightning', 'Light'] },
  { result: 'Storm', ingredients: ['Lightning', 'Wind'] },

  // Poison tree
  { result: 'Virus', ingredients: ['Poison', 'Cell'] },
  { result: 'Swamp', ingredients: ['Poison', 'Earthquake'] },
  { result: 'Virus', ingredients: ['Poison', 'Ghost'] },
  { result: 'Radiation Beam', ingredients: ['Poison', LASER_ANY] },
  { result: 'Noxious', ingredients: ['Poison', 'Wind'] },
  { result: 'Nuclear Bomb', ingredients: ['Poison', 'Bomb'] }, // advanced

  // Vampire tree
  { result: 'Vampire Lord', ingredients: ['Vampire', 'Bleed'] },
  { result: 'Mosquito King', ingredients: ['Vampire', 'Brood Mother'] },
  { result: 'Succubus', ingredients: ['Vampire', 'Charm'] },
  { result: 'Vampire Lord', ingredients: ['Vampire', 'Dark'] },
  { result: 'Mosquito Swarm', ingredients: ['Vampire', 'Egg Sack'] },
  { result: 'Soul Sucker', ingredients: ['Vampire', 'Ghost'] },

  // Wind tree
  { result: 'Inferno', ingredients: ['Wind', 'Burn'] },
  { result: 'Noxious', ingredients: ['Wind', 'Dark'] },
  { result: 'Sandstorm', ingredients: ['Wind', 'Earthquake'] },
  { result: 'Blizzard', ingredients: ['Wind', 'Freeze'] },
  { result: 'Storm', ingredients: ['Wind', 'Lightning'] },
  { result: 'Noxious', ingredients: ['Wind', 'Poison'] },

  // Achievement / Advanced-only multi evolutions
  { result: 'Satan', ingredients: ['Incubus', 'Succubus'] },
  { result: 'Nosferatu', ingredients: ['Vampire Lord', 'Mosquito King', 'Spider Queen'] },
];

// --- Passive evolutions dataset ---
const PASSIVE_RECIPES = [
  { result: "Deadeye's Cross", ingredients: ["Diamond HD", "Sapphire HD", "Ruby HD", "Emerald HD"], type: 'passive' },
  { result: 'Cornucopia', ingredients: ['Baby Rattle', 'War Horn'], type: 'passive' },
  { result: 'Odiferous Shell', ingredients: ['Breastplate', 'Corrupted Onion'], type: 'passive' },
  { result: 'Gracious Impaler', ingredients: ["Reacher's Spear", "Deadeye's Amulet"], type: 'passive' },
  { result: 'Phantom Regalia', ingredients: ['Ethereal Cloak', 'Ghostly Corset'], type: 'passive' },
  { result: 'Soul Reaver', ingredients: ['Everflowing Goblet', 'Vampiric Sword'], type: 'passive' },
  { result: "Tormentor's Mask", ingredients: ['Crown of Thorns', 'Spiked Collar'], type: 'passive' },
  { result: 'Wings of the Anointed', ingredients: ['Fleet Feet', 'Radiant Feather'], type: 'passive' },
];

// --- Descriptions (embedded) ---
const DESCRIPTIONS = {
  'Assassin': 'Passes through the front of enemies, but not the back. Backstabs deal 30% bonus damage.',
  'Black Hole': 'Instantly kills the first non-boss enemy that it hits, but destroys itself afterwards. Has a 7 second cooldown before it can be shot again.',
  'Bleed': 'Inflicts 2 stacks of bleed. Bleeding enemies receive 1 damage per stack when hit by a ball (Max 8 stacks).',
  'Blizzard': 'Freezes all enemies within a 2 tile radius for 0.8 seconds, dealing 1-50 damage.',
  'Bomb': 'Explodes when hitting an enemy, dealing 150-300 damage to nearby enemies. Has a 3 second cooldown before it can be shot again.',
  'Brood Mother': 'Has a 25% chance of birthing a baby ball each time it hits an enemy.',
  'Burn': 'Add 1 stack of burn on hit for 3 seconds (max 3 stacks). Burnt units are dealt 4-8 damage per stack per second.',
  'Cell': 'Splits into a clone on hit 2 times.',
  'Dark': 'Deals 3.0x damage but destroys itself after hitting an enemy. Has a 3 second cooldown before it can be shot again.',
  'Earthquake': 'Deals 5-13 damage to nearby units in a 3x3 tile square.',
  'Egg Sack': 'Explodes into 2-4 baby balls on hitting an enemy. Has a 3 second cooldown before it can be shot again.',
  'Flash': 'Damage all enemies on screen for 1-3 damage after hitting an enemy and blind them for 2 seconds.',
  'Flicker': 'Deals 1-7 damage to every enemy on screen every 1.4 seconds.',
  'Freeze': 'Has a 4% chance to freeze enemies for 5.0 seconds. Frozen enemies receive 25% more damage.',
  'Freeze Ray': 'Emits a freeze ray when hitting an enemy, dealing 20-50 to all enemies in its path, with a 10% chance of freezing them for 10.0 seconds.',
  'Frozen Flame': 'Add 1 stack of frostburn on hit for 20 seconds (max 4 stacks). Frostburnt units are dealt 8-12 damage per stack per second and receive 25% more damage from other sources.',
  'Ghost': 'Passes through enemies.',
  'Glacier': 'Releases glacial spikes over time that deal 15-30 to enemies that touch them and freeze them for 2.0 seconds. This ball and its glacial spikes also deal 6-12 damage to nearby units.',
  'Hemorrhage': 'Inflicts 3 stacks of bleed. When hitting an enemy with 12 stacks of bleed or more, consumes all stacks of bleed to deal 20% of their current health.',
  'Holy Laser': 'Deals 24-36 damage to all enemies in the same row and column.',
  'Inferno': 'Applies 1 stack of burn every second to all enemies within a 2 tile radius. Burn lasts for 6 seconds, dealing 3-7 damage per stack per second.',
  'Iron': 'Deals double damage but moves 40% slower.',
  'Laser Beam': 'Emit a laser beam on hit that deals 30-42 damage and blinds enemies for 8 seconds.',
  'Laser (Horizontal)': 'Deals 9-18 damage to all enemies in the same row.',
  'Laser (Vertical)': 'Deals 9-18 damage to all enemies in the same column.',
  'Laser (H or V)': 'Deals 9-18 damage to all enemies in the same line.',
  'Leech': 'Attaches up to 1 leech onto enemies it hits, which adds 2 stacks of bleed per second (Max 24 stacks).',
  'Light': 'Blinds enemies on hit for 3 seconds. Blinded units have a hard time detecting you and have a 50% chance of missing when they attack.',
  'Lightning': 'Deals 1-20 damage to up to 3 nearby enemies.',
  'Lightning Rod': 'Plants a lightning rod into enemies it hits. These enemies are struck by lightning every 3.0 seconds, dealing 1-30 damage to up to 8 nearby enemies.',
  'Maggot': 'Infest enemies on hit with maggots. When they die, they explode into 1-2 baby balls.',
  'Magma': 'Emits lava blobs over time. Enemies who walk into lava blobs are dealt 15-30 damage and gain 1 stack of burn (max 3 stacks). Burn lasts for for 3 seconds, dealing 3-8 damage per stack per second. This ball and its lava blobs also deal 6-12 damage to nearby units.',
  'Mosquito King': 'Spawns a mosquito each time it hits an enemy. Mosquitos attack a random enemy, dealing 80-120 damage each. If a mosquito kills an enemy, they steal 1 health.',
  'Mosquito Swarm': 'Explodes into 3-6 mosquitos. Mosquitos attack random enemies, dealing 80-120 damage each. If a mosquito kills an enemy, they steal 1 health.',
  'Noxious': 'Passes through enemies and applies 3 stacks of poison to nearby enemies within a 2 tile radius. Poison lasts for 4 seconds and each stack deals 1-3 damage per second.',
  'Nuclear Bomb': 'Explodes when hitting an enemy, dealing 300-500 damage to nearby enemies and applying 1 stack of radiation to everyone present indefinitely (max 5 stacks). Each stack of radiation increases damage received by 10%. Has a 3 second cooldown.',
  'Overgrowth': 'Applies 1 stack of overgrowth. Upon reaching 3, consume all stacks and deal 150-200 damage to all enemies in a 3x3 tile square.',
  'Phantom': 'Curse enemies on hit. Cursed enemies are dealt 100-200 damage after being hit 5 times.',
  'Poison': 'Applies 1 stack of poison on hit (max 5 stacks). Poison lasts for 6 seconds and each stack deals 1-4 damage per second.',
  'Radiation Beam': 'Emit a radiation beam on hit that deals 24-48 damage and applies 1 stack of radiation (max 5 stacks). Radiation lasts for 15 seconds and cause enemies to receive 10% more damage from all sources per stack.',
  'Sacrifice': 'Inflicts 4 stacks of bleed (Max 15 stacks) and applies curse to hit enemies. Cursed enemies are dealt 50-100 after being hit 5 times.',
  'Sandstorm': 'Goes through enemies and is surrounded by a raging storm dealing 10-20 damage per second and blinding nearby enemies for 3 seconds.',
  'Shotgun': 'Shoots 3-7 iron baby balls after hitting a wall. Iron baby balls move at 200% speed but are destroyed upon hitting anything.',
  'Soul Sucker': 'Passes through enemies and saps them, with a 30% chance of stealing 1 health and reducing their attack damage by 20%. Lifesteal chance only applies once per enemy.',
  'Spider Queen': 'Has a 25% chance of birthing an Egg Sac each time it hits an enemy.',
  'Storm': 'Emits lightning to strike nearby enemies every second, dealing 1-40 damage.',
  'Sun': 'Blind all enemies in view and add 1 stack of burn every second (max 5 stacks). Burn lasts for 6 seconds and deals 6-12 damage per stack per second.',
  'Swamp': 'Leaves behind tar blobs over time. Enemies who walk into tar blobs are dealt 15-30, are slowed by 50% for 7 seconds and gain 1 stack of poison (max 8 stacks). Each stack of poison deals 1-3 damage per second. This ball and its tar blobs also deal 6-12 damage to nearby units.',
  'Vampire': 'Each hit has a 4.5% chance of healing 1 health.',
  'Vampire Lord': 'Each hit inflicts 3 stacks of bleed. Heals 1 health and consumes all stacks when hitting an enemy with at least 10 stacks of bleed.',
  'Virus': 'Applies 1 stack of disease to units it hits (max 8 stacks). Disease lasts for 6 seconds. Each stack of disease deals 3-6 damage per second and diseased units have a 15% chance of passing a stack to undiseased nearby enemies each second.',
  'Wind': 'Passes through enemies and slows them down by 30% for 5 seconds, but deals 25% less damage.',
  'Wraith': 'Freezes any enemy it passes through for 0.8 seconds.',
};

// --- Catalog building & classification ---
function isBase(name) {
  return BASE_ITEMS.includes(name);
}

function isLaserVariant(name) {
  return name === 'Laser (Horizontal)' || name === 'Laser (Vertical)';
}

function ingredientMatches(ingredient, selected) {
  if (ingredient === LASER_ANY && isLaserVariant(selected)) return true;
  if (isLaserVariant(ingredient) && selected === LASER_ANY) return true; // rarely used
  return ingredient === selected;
}

function recipeKey(recipe) {
  const ing = [...recipe.ingredients].map((n) => (isLaserVariant(n) ? LASER_ANY : n)).sort();
  return `${ing.join(' + ')} = ${recipe.result}`;
}

function classifyRecipe(recipe) {
  const allBase = recipe.ingredients.every((n) => (n === LASER_ANY ? true : isBase(n)));
  const isHoly = recipe.result === 'Holy Laser'; // both ingredients are base variants
  const advanced = !allBase || recipe.ingredients.length > 2;
  return advanced && !isHoly ? 'advanced' : 'evolution';
}

function buildCatalog() {
  const seen = new Set();
  const simple = [];
  const advanced = [];

  for (const r of ALL_RECIPES_RAW) {
    const key = recipeKey(r);
    if (seen.has(key)) continue;
    seen.add(key);
    const kind = classifyRecipe(r);
    if (kind === 'evolution') simple.push(r); else advanced.push(r);
  }

  // Build items catalog
  const items = new Map();

  // Base items
  for (const b of BASE_ITEMS) {
    items.set(b, { name: b, type: 'base' });
  }

  // Add pseudo laser group for display
  items.set(LASER_ANY, { name: LASER_ANY, type: 'group' });

  // Evolved items
  for (const r of [...simple, ...advanced]) {
    if (!items.has(r.result)) {
      const type = classifyRecipe(r) === 'evolution' ? 'evolution' : 'advanced';
      items.set(r.result, { name: r.result, type });
    }
    for (const ing of r.ingredients) {
      if (!items.has(ing)) {
        const t = isBase(ing) || ing === LASER_ANY ? (ing === LASER_ANY ? 'group' : 'base') : 'evolution';
        items.set(ing, { name: ing, type: t });
      }
    }
  }

  // Integrate passives
  const passiveResults = [];
  for (const pr of PASSIVE_RECIPES) {
    const key = recipeKey(pr);
    if (seen.has(key)) continue;
    seen.add(key);
    passiveResults.push(pr);
    if (!items.has(pr.result)) items.set(pr.result, { name: pr.result, type: 'passive' });
    for (const ing of pr.ingredients) {
      if (!items.has(ing)) items.set(ing, { name: ing, type: 'passive' });
    }
  }

  return { items, simple, advanced, passives: passiveResults };
}

// --- Rendering helpers ---
function iconFor(name) {
  return `icons/${ICONS[name] || 'no_icon.png'}`;
}

function descFor(name) {
  return DESCRIPTIONS[name] || '???';
}

// Break long descriptions into lines at sentence boundaries
function formatDesc(text) {
  if (!text) return '???';
  return text
    .trim()
    // Insert a newline after punctuation that likely ends a sentence
    .replace(/([.!?])\s+/g, '$1\n');
}

function pillLabel(type) {
  if (type === 'base') return 'Base';
  if (type === 'evolution') return 'Evolution';
  if (type === 'advanced') return 'Advanced Evolution';
  if (type === 'passive') return 'Passive';
  if (type === 'group') return 'Variant Group';
  return '—';
}

function pillClassForType(type) {
  if (type === 'base') return 'pill pill-base';
  if (type === 'evolution') return 'pill pill-evo';
  if (type === 'advanced') return 'pill pill-adv';
  if (type === 'passive') return 'pill pill-passive';
  return 'pill';
}

function makeCard(name, type) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.name = name;

  const iconWrap = document.createElement('div');
  iconWrap.className = 'card-icon-wrap';
  const img = document.createElement('img');
  img.className = 'card-icon';
  img.src = iconFor(name);
  img.alt = `${name} icon`;
  iconWrap.appendChild(img);

  const nm = document.createElement('p');
  nm.className = 'card-name';
  nm.textContent = name;

  const pills = document.createElement('div');
  pills.className = 'card-pills';
  const pill = document.createElement('span');
  pill.className = pillClassForType(type);
  pill.textContent = pillLabel(type);
  pills.appendChild(pill);

  card.appendChild(iconWrap);
  card.appendChild(nm);
  card.appendChild(pills);

  card.addEventListener('click', () => selectItem(name));
  return card;
}

function makeMiniCard(nameLike) {
  const name = nameLike === 'LASER_ANY' ? LASER_ANY : nameLike;
  const mc = document.createElement('div');
  mc.className = 'mini-card';
  mc.dataset.name = name;
  const img = document.createElement('img');
  img.className = 'mini-icon';
  img.src = iconFor(name);
  img.alt = `${name} icon`;
  const lbl = document.createElement('span');
  lbl.className = 'mini-name';
  lbl.textContent = name;
  mc.appendChild(img);
  mc.appendChild(lbl);
  mc.addEventListener('click', () => selectItem(name));
  return mc;
}

function renderRecipeRow(recipe) {
  const row = document.createElement('div');
  row.className = 'recipe-row';

  // Ingredients (support 2 or 3)
  recipe.ingredients.forEach((ing, idx) => {
    const name = isLaserVariant(ing) ? LASER_ANY : ing;
    row.appendChild(makeMiniCard(name));
    if (idx < recipe.ingredients.length - 1) {
      const plus = document.createElement('span');
      plus.className = 'sep';
      plus.textContent = '+';
      row.appendChild(plus);
    }
  });

  const eq = document.createElement('span');
  eq.className = 'sep';
  eq.textContent = '=';
  row.appendChild(eq);

  row.appendChild(makeMiniCard(recipe.result));
  return row;
}

// --- UI state ---
let CATALOG = null;
let SELECTED = null;

function selectItem(name) {
  SELECTED = name;
  const info = CATALOG.items.get(name) || { name, type: 'evolution' };

  // Main card
  document.getElementById('selected-icon').src = iconFor(name);
  document.getElementById('selected-name').textContent = name;
  const pillEl = document.getElementById('selected-type');
  pillEl.textContent = pillLabel(info.type);
  pillEl.className = pillClassForType(info.type);
  document.getElementById('selected-desc').textContent = formatDesc(descFor(name));

  // Lists
  const usedWrap = document.getElementById('used-as-ingredient');
  const createsWrap = document.getElementById('creates-this');
  usedWrap.innerHTML = '';
  createsWrap.innerHTML = '';

  // Used as ingredient: find recipes where selected appears in ingredients
  const allRecipes = [...CATALOG.simple, ...CATALOG.advanced, ...CATALOG.passives];
  const seenKeys = new Set();
  for (const r of allRecipes) {
    const matches = r.ingredients.some((ing) => ingredientMatches(ing, name) || (ing === LASER_ANY && name === LASER_ANY));
    if (matches) {
      const key = recipeKey(r);
      if (seenKeys.has(key)) continue;
      seenKeys.add(key);
      usedWrap.appendChild(renderRecipeRow(r));
    }
  }

  // Creates this weapon: recipes whose result equals selected
  const seenKeys2 = new Set();
  for (const r of allRecipes) {
    if (r.result === name) {
      const key = recipeKey(r);
      if (seenKeys2.has(key)) continue;
      seenKeys2.add(key);
      createsWrap.appendChild(renderRecipeRow(r));
    }
  }

  // Smooth scroll to Selected Blueprint section
  const blueprint = document.getElementById('site-header');
  if (blueprint) blueprint.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderSections() {
  // Base grid
  const baseGrid = document.getElementById('base-grid');
  BASE_ITEMS.sort().forEach((b) => baseGrid.appendChild(makeCard(b, 'base')));

  // Evolutions grid (cards of results)
  const evoGrid = document.getElementById('evolutions-grid');
  const evoResults = Array.from(new Set(CATALOG.simple.map((r) => r.result))).sort();
  evoResults.forEach((name) => evoGrid.appendChild(makeCard(name, 'evolution')));

  // Advanced grid (cards of results)
  const advGrid = document.getElementById('advanced-grid');
  const advResults = Array.from(new Set(CATALOG.advanced.map((r) => r.result))).sort();
  advResults.forEach((name) => advGrid.appendChild(makeCard(name, 'advanced')));

  // Passives grid (cards of results)
  const passiveGrid = document.getElementById('passives-grid');
  const passiveResults = Array.from(new Set(CATALOG.passives.map((r) => r.result))).sort();
  passiveResults.forEach((name) => passiveGrid.appendChild(makeCard(name, 'passive')));
}

function init() {
  CATALOG = buildCatalog();
  renderSections();
  // Default selection
  selectItem('Bleed');
}

document.addEventListener('DOMContentLoaded', init);