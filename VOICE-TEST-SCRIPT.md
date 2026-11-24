# Sound Steps — Voice Test Script (ground truth)

Use this to check what the app **should** say, by ear or with Claude voice mode.

**How to run the voice-mode test**
1. On the kids' tablet/phone, open Sound Steps (tboy2020.github.io/sound-steps) with volume up.
2. On a *second* phone, open the **Claude app → voice mode**, held near the speaker.
3. Say to voice-Claude: *"I'm going to play a kids' phonics app. Transcribe exactly what you hear, word for word."*
4. Tap through the app. Then screenshot / read back what Claude heard.
5. **Paste that back into this coding chat** and I'll compare it against the table below and flag anything off.

Note: the app uses the **device's own voice**, so it sounds different on iPad vs Android. Test on the device the child will actually use.

---

## 1. Letter Sounds screen
Each letter reads: **"[Letter] says [sound]… [sound]. [Letter] is for [word]."**
Example — S: *"S says sss… sss. S is for sun."*

| Letter | Sound | "is for…" | Letter | Sound | "is for…" |
|---|---|---|---|---|---|
| S | sss | sun | N | nnn | nest |
| A | aaa | apple | M | mmm | moon |
| T | tuh | tree | D | duh | dog |
| I | ih | igloo | G | guh | goat |
| P | puh | pig | O | ah | octopus |
| C | kuh | cat | K | kuh | kite |
| E | eh | egg | U | uh | umbrella |
| R | rrr | rain | H | huh | hat |
| B | buh | ball | F | fff | fish |
| L | lll | lion | J | juh | juice |
| V | vvv | violin | W | wuh | water |
| X | ks | box | Y | yuh | yoyo |
| Z | zzz | zebra | Q | kwuh | queen |

---

## 2. Build a Word screen
Tapping each block says its sound; when all blocks are done it **blends** (slow, joined by "…"), then says the **whole word** + "!".

### ✅ Safe — phonetic respellings (hand-tuned)
| Word | Tap each block | Blend → whole |
|---|---|---|
| cat 🐱 | kuh · aaa · tuh | "kuh… aaa… tuh" → "cat!" |
| sun ☀️ | sss · uh · nnn | "sss… uh… nnn" → "sun!" |
| pig 🐷 | puh · ih · guh | → "pig!" |
| dog 🐶 | duh · ah · guh | → "dog!" |
| hat 🎩 | huh · aaa · tuh | → "hat!" |
| map 🗺️ | mmm · aaa · puh | → "map!" |
| net 🥅 | nnn · eh · tuh | → "net!" |
| bug 🐛 | buh · uh · guh | → "bug!" |
| elephant 🐘 | el · uh · funt | → "elephant!" |
| educator 🧑‍🏫 | ed-yoo · kay · tor | → "educator!" |

### ✅ Now tuned — child SEES the spelling, HEARS a clean sound
(These 13 longer words now have phonetic respellings, so they say correctly on any device.)
| Word | Sees on blocks | Now hears (blend → whole) |
|---|---|---|
| rabbit 🐰 | rab · bit | "rab… bit" → "rabbit!" |
| muffin 🧁 | muf · fin | "muff… in" → "muffin!" |
| sunset 🌅 | sun · set | "sun… set" → "sunset!" |
| robot 🤖 | ro · bot | "roh… bot" → "robot!" |
| pencil ✏️ | pen · cil | "pen… **sill**" → "pencil!" |
| zebra 🦓 | ze · bra | "zee… **bruh**" → "zebra!" |
| tiger 🐯 | ti · ger | "tie… **gur**" → "tiger!" |
| lemon 🍋 | lem · on | "lem… **un**" → "lemon!" |
| banana 🍌 | ba · na · na | "buh… nah… nuh" → "banana!" |
| umbrella ☂️ | um · brel · la | "um… brell… uh" → "umbrella!" |
| butterfly 🦋 | but · ter · fly | "but… tur… fly" → "butterfly!" |
| dinosaur 🦕 | di · no · saur | "die… nuh… **sore**" → "dinosaur!" |
| kangaroo 🦘 | kan · ga · roo | "kang… guh… roo" → "kangaroo!" |

---

## 3. Other spoken lines (to confirm nothing is garbled)
- Welcome owl tap: *"Hi! I'm Hoot the owl. Let's learn to read!"*
- Home: *"What shall we do? Tap letter sounds, or build a word."*
- Build start: *"Let's build this word. Tap each block!"*
- Sound game: *"Which one says… [sound]?"* / correct: *"Yes! [L] says [sound]!"*
- Stickers: *"Here are your stickers! You have [n]."*

If anything you hear doesn't match a row above, tell me the word and what it sounded like — I'll fix the respelling.
