

# Users
default_user = User.create(username:"default", password:"no")

# Encounters
cave_encounter = Encounter.create(encounter_name:"Cave Entrance", encounter_desc:"You follow along a rocky tunnel, a faint light appears at the end of the tunnel. As you step out from the threshold of the tunnel into the cavernous room, the light seems to be coming from an opening in the ceiling. There appears to be a chasm between where you are and the exit tunnel of the room. What will you do?", encounter_class:"Terrain", skills_required:"", sneak_diff:0, user_id:default_user.id)

lone_goblin_encounter = Encounter.create(encounter_name:"Lone Goblin", encounter_desc:"As you move through the complex of rooms and caverns, you hear a whispering voice on the wind. Upon closer inspection, you see a lone goblin staring off into the darkness, muttering to itself about treachery and secrets. What will you do?", encounter_class:"Combat", skills_required:"", sneak_diff:5, user_id:default_user.id)

# Enemies
lone_goblin = Enemy.create(enemy_name:"Lone Goblin", enemy_desc:"A scrawny, pale goblin. Its clothing is tattered, and it only appears to have a dagger as its weapon.", enemy_class:"Fodder", enemy_health:3, enemy_armor:0, enemy_speed:20, enemy_sneak:5, encounter_id:lone_goblin_encounter.id)

# Traps
pitfall_trap = Trap.create(trap_name:"Pitfall", trap_desc:"A pitfall spans the majority of the room.", trap_class:"Terrain", trap_search_diff: 5, encounter_id: cave_encounter.id)  

# Searches
see_walkway = Search.create(search_name:"See Walkway", search_desc: "You see a thin bridge of stone on the farside of the room, you are able to cross safely there.", search_diff:5, encounter_id: cave_encounter.id)

see_knapsack = Search.create(search_name:"See Knapsack", search_desc:"You see the light catch on something metallic, there a appears to be a knapsack lodged under some rubble. You are able to free the knapsack.", search_diff:10, encounter_id:lone_goblin_encounter.id)

# Characters
knight = Character.create(char_name:"Knight", char_desc:"An armored tank, a force to be reckoned with.", char_health: 10, char_armor:7, char_speed: 20, char_sneak: 0, user_id:default_user.id)
rogue = Character.create(char_name:"Rogue", char_desc:"A sneak-thief, keep your coin-purse close.", char_health: 7, char_armor:5, char_speed: 30, char_sneak: 10, user_id:default_user.id)
mage = Character.create(char_name:"Mage", char_desc:"A cunning mage, abundantly resourceful, but frail as a twig.", char_health: 3, char_armor:0, char_speed: 25, char_sneak: 3, user_id:default_user.id)

# Skills


# Knight Skills
fortitude = Skill.create(skill_name:"Fortitude", skill_desc:"You're hardier than others, raises Health", skill_class:"Utility", character_id: knight.id)
athleticism = Skill.create(skill_name:"Atheleticism", skill_desc:"You've trained your body well, gain Speed, and a bonus to avoiding certain traps", skill_class:"Utility", character_id: knight.id)

# Rogue Skills
skulker = Skill.create(skill_name:"Skulker", skill_desc:"You know how to move silently and undetected, raises Stealth", skill_class:"Utility", character_id: rogue.id)
pickpocket = Skill.create(skill_name:"Pickpocket", skill_desc:"Your touch is light, you're able to pickpocket most humanoid creatures upon a successful Stealth check.", skill_class:"Utility", character_id:rogue.id)

# Mage Skills
spellcasting = Skill.create(skill_name:"Spellcasting", skill_desc:"You are a master of the arcane, you are able to cast spells and learn them from spell tomes.", skill_class:"Utility", character_id: mage.id)

# Items

gold_ring = Item.create(item_name:"Ring of Gold", item_desc:"A thin gold wedding band. Might be worth something.", item_class:"Ring", character_id:nil, search_id:see_knapsack.id)

# Knight Items
full_plate_armor = Item.create(item_name:"Full-Plate Armor", item_desc:"A sturdy, well-smithed set of steel full-plate armor. Increases Armor", item_class:"Armor", character_id: knight.id)
steel_longsword = Item.create(item_name:"Steel Longsword", item_desc:"A well-forged, sleek, steel longsword. Increases Attack. The edge is sharp- OUCH", item_class:"Weapon", character_id: knight.id)

# Rogue Items
iron_dagger = Item.create(item_name:"Iron Dagger", item_desc:"A blunt, chipped iron dagger. Not great for much. Slightly increases Attack", item_class:"Weapon", character_id: rogue.id)
tattered_cloak = Item.create(item_name:"Tattered Cloak", item_desc:"An old, tarnished black cloak. The cloth is tattered and pitiful. Increases Stealth", item_class:"Cloak", character_id: rogue.id)

# Mage Items
mages_staff = Item.create(item_name:"Mage's Staff", item_desc:"A long, gnarled stick of yew. Enables ability to spellcast.", item_class:"Staff", character_id: mage.id)
ring_of_levitation = Item.create(item_name:"Ring of Levitation", item_desc:"A fine silver ring with a large emerald inlaid on the top. When you put it on, you feel much lighter. Grants Levitation for a single encounter.", item_class:"Ring", character_id: mage.id)

# Spells 

# Mage Spells
fireblast = Spell.create(spell_name:"Fireblast", spell_desc:"You hurl a mighty ball of fire. Deals damage to groups of enemies.", spell_class:"Destruction", character_id: mage.id)
sleep_spell = Spell.create(spell_name:"Sleep", spell_desc:"You place a group of enemies under a hypnotic trance. All enemies who fail the check fall completely asleep. Increases Stealth check success chance for encounter.", character_id:mage.id)