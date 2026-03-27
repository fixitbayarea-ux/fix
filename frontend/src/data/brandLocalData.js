/**
 * Unique content for each brand page — models, parts, process.
 * Makes each brand page genuinely different for Google.
 */

const brandLocalData = {
  'Samsung': {
    founded: '1938, South Korea',
    specialty: 'Smart home appliances with Wi-Fi and SmartThings integration',
    popularModels: [
      { type: 'Refrigerator', models: ['Family Hub RF27T5501SR', 'Bespoke RF30BB6600', 'RF28R7551SR French Door'] },
      { type: 'Washer', models: ['WF45R6300AV FlexWash', 'WF50BG8300AV AI-powered', 'WA54CG7150AD Top Load'] },
      { type: 'Dryer', models: ['DVE45R6300V', 'DVG50BG8300A Smart', 'DV50BG8300EA Heat Pump'] },
      { type: 'Dishwasher', models: ['DW80R9950US StormWash', 'DW80CG4051SR AutoRelease'] },
      { type: 'Range', models: ['NX60T8751SS Flex Duo', 'NE63A6711SS Rapid Boil'] },
    ],
    commonIssues: [
      'Ice buildup behind rear panel — defrost system failure common in 2017-2021 French Door models',
      'FlexWash washer drum bearing noise after 3-5 years of use',
      'Family Hub screen black/unresponsive — requires motherboard reset or replacement',
      'Dishwasher flashing "Heavy" and "Smart Auto" simultaneously — control board failure',
    ],
    partsAvailability: 'We stock Samsung OEM compressor relays, ice maker assemblies, door gaskets, washer bearings, and control boards. Specialty parts (Family Hub screens, FlexWash components) sourced within 24-48 hours.',
    warrantyNote: 'Samsung offers extended warranties on specific components (e.g., Digital Inverter compressors: 10 years). We verify your Samsung warranty status before recommending paid repairs.',
    relatedBrands: [
      { name: 'LG', slug: 'lg-appliance-repair' },
      { name: 'Whirlpool', slug: 'whirlpool-appliance-repair' },
      { name: 'GE', slug: 'ge-appliance-repair' },
    ],
  },

  'LG': {
    founded: '1958, South Korea',
    specialty: 'Linear Compressor technology and ThinQ smart home ecosystem',
    popularModels: [
      { type: 'Refrigerator', models: ['LRMVS3006S InstaView', 'LRFXS2503S French Door', 'LRSXS2706V Side-by-Side'] },
      { type: 'Washer', models: ['WM4000HWA TurboWash', 'WM8100HVA Mega Capacity', 'WT7400CW Top Load'] },
      { type: 'Dryer', models: ['DLEX4000W TurboSteam', 'DLHX4072V Heat Pump', 'DLE7400WE Electric'] },
      { type: 'Dishwasher', models: ['LDTH7972S TrueSteam', 'LDFN4542S QuadWash'] },
      { type: 'Range', models: ['LSIL6336F InstaView', 'LRG4115ST Gas'] },
    ],
    commonIssues: [
      'Linear compressor failure — LG extended warranty applies to many models (check eligibility)',
      'InstaView knock-to-see glass panel flickering or not lighting up',
      'TurboWash washer vibrating excessively — spider arm or shock absorber failure',
      'ThinQ Wi-Fi connectivity dropping — usually firmware update needed',
    ],
    partsAvailability: 'We carry LG Linear Compressor kits, TurboWash motors, QuadWash spray arms, and door hinge assemblies. LG parts widely available — most repairs completed on the first visit.',
    warrantyNote: 'LG\'s Linear Compressor has a 10-year limited warranty. We check your model\'s warranty status as part of our diagnostic.',
    relatedBrands: [
      { name: 'Samsung', slug: 'samsung-appliance-repair' },
      { name: 'Whirlpool', slug: 'whirlpool-appliance-repair' },
      { name: 'Bosch', slug: 'bosch-appliance-repair' },
    ],
  },

  'Whirlpool': {
    founded: '1911, Benton Harbor, Michigan',
    specialty: 'Reliable, no-nonsense home appliances with industry-leading durability',
    popularModels: [
      { type: 'Refrigerator', models: ['WRF555SDFZ French Door', 'WRS325SDHZ Side-by-Side', 'WRB322DMBM Bottom Freezer'] },
      { type: 'Washer', models: ['WFW5605MW Front Load', 'WTW5000DW Top Load', 'WFW9620HC Smart'] },
      { type: 'Dryer', models: ['WED5000DW Electric', 'WGD5000DW Gas', 'WED9620HC Smart'] },
      { type: 'Dishwasher', models: ['WDT750SAKZ 3rd Rack', 'WDTA50SAKZ FingerPrint Resistant'] },
      { type: 'Range', models: ['WFG515S0JS Gas', 'WFE505W0HZ Electric', 'WOD51EC0HB Double Oven'] },
    ],
    commonIssues: [
      'Refrigerator not cooling — adaptive defrost system timing issues in post-2018 models',
      'Washer F5 E2 error — door lock assembly failure, very common in WFW series',
      'Dishwasher not drying — vent wax motor or heating element replacement needed',
      'Oven igniter glowing but not lighting — igniter amperage too low to open gas valve',
    ],
    partsAvailability: 'As a mainstream brand, Whirlpool parts are the most widely available. We stock igniters, door locks, water inlet valves, control boards, and belts for the most common models on every service truck.',
    warrantyNote: 'Whirlpool typically offers 1-year limited warranty. Extended plans available through Whirlpool. We honor and work with all Whirlpool warranty programs.',
    relatedBrands: [
      { name: 'Maytag', slug: 'maytag-appliance-repair' },
      { name: 'KitchenAid', slug: 'kitchenaid-appliance-repair' },
      { name: 'GE', slug: 'ge-appliance-repair' },
    ],
  },

  'Sub-Zero': {
    founded: '1945, Madison, Wisconsin',
    specialty: 'Ultra-premium built-in refrigeration with dual compressor systems',
    popularModels: [
      { type: 'Refrigerator', models: ['BI-48S/S Built-In 48"', 'BI-36U Built-In 36"', 'CL3650U/S Classic'] },
      { type: 'Freezer', models: ['BI-36F Built-In Column', 'IC-24FI Integrated Column', 'UC-24F Undercounter'] },
      { type: 'Wine Storage', models: ['BW-30/S 30" Wine Unit', 'UW-24 Undercounter Wine', 'IW-30 Integrated Wine'] },
    ],
    commonIssues: [
      'Dual compressor systems — one side warm while other works fine (evaporator fan or sealed system)',
      'Ice buildup on evaporator — defrost heater or timer failure in BI-48 and BI-36 models',
      'Condenser fan running continuously — dirty condenser coils or fan motor bearing worn',
      'Wine unit temperature fluctuation — thermostat sensor or door gasket seal failure',
    ],
    partsAvailability: 'Sub-Zero parts are specialized. We maintain relationships with factory distributors and stock the most common components: compressor relays, evaporator fans, defrost heaters, thermostat sensors, and door gaskets for 36" and 48" models.',
    warrantyNote: 'Sub-Zero offers a full 2-year warranty and a 5-year sealed system warranty. Units over 20 years old are still repairable — Sub-Zero\'s parts availability is exceptional for a luxury brand.',
    relatedBrands: [
      { name: 'Wolf', slug: 'wolf-appliance-repair' },
      { name: 'Viking', slug: 'viking-appliance-repair' },
      { name: 'Thermador', slug: 'thermador-appliance-repair' },
    ],
  },

  'Wolf': {
    founded: '2000 (by Sub-Zero Group), Madison, Wisconsin',
    specialty: 'Professional-grade cooking with dual-stacked burners and convection systems',
    popularModels: [
      { type: 'Range', models: ['DF48650/S Pro 48" Dual Fuel', 'GR606DG 60" Gas', 'DF36650/S 36" Dual Fuel'] },
      { type: 'Cooktop', models: ['CG365T/S Gas Cooktop', 'CI365T/S Induction', 'CT36E/S Electric'] },
      { type: 'Oven', models: ['SO30TM/S/TH M Series', 'SO30PE/S/PH Convection', 'CSO24TE/S Steam Oven'] },
    ],
    commonIssues: [
      'Dual-stacked burner igniter failure — igniters crack from thermal stress over time',
      'Convection fan motor bearing noise in M Series and Professional ovens',
      'Gas smell without ignition — spark module or gas valve solenoid replacement needed',
      'Steam oven descaling alerts — water pump or steam generator service required',
    ],
    partsAvailability: 'Wolf shares the Sub-Zero distribution network. We stock igniters, spark modules, convection fan motors, and thermocouple sensors. Steam oven components available within 24-48 hours.',
    warrantyNote: 'Wolf provides a 2-year full product warranty. We recommend the Wolf Protection Plan for extended coverage on high-use cooking appliances.',
    relatedBrands: [
      { name: 'Sub-Zero', slug: 'sub-zero-appliance-repair' },
      { name: 'Viking', slug: 'viking-appliance-repair' },
      { name: 'Thermador', slug: 'thermador-appliance-repair' },
    ],
  },

  'Viking': {
    founded: '1987, Greenwood, Mississippi',
    specialty: 'Commercial-style ranges and refrigeration for the home chef',
    popularModels: [
      { type: 'Range', models: ['VGR5366BSS Professional 5 Series', 'VDSC5606GBK Dual Fuel', 'VER5366BSS Electric'] },
      { type: 'Refrigerator', models: ['VCBB5363ERSS Professional', 'VCRB5363RSS Built-In', 'VRFB5363RSS French Door'] },
      { type: 'Dishwasher', models: ['VDWU524SS Professional', 'FDW302WS 300 Series'] },
    ],
    commonIssues: [
      'Range burner not lighting — igniter electrode fouled or cracked (common on 5 Series)',
      'Viking refrigerator running warm — condenser coils clogged in built-in installations',
      'Oven door hinge spring broken — requires specialized replacement jig',
      'Dishwasher not draining — check valve and drain pump issues in Professional series',
    ],
    partsAvailability: 'Viking parts availability has improved significantly. We stock igniters, burner assemblies, hinge springs, and control boards. Refrigeration sealed system parts: 24-48 hours.',
    warrantyNote: 'Viking provides a 1-year full warranty with optional extended coverage. Older Professional series units remain repairable with wide parts availability.',
    relatedBrands: [
      { name: 'Wolf', slug: 'wolf-appliance-repair' },
      { name: 'Thermador', slug: 'thermador-appliance-repair' },
      { name: 'Sub-Zero', slug: 'sub-zero-appliance-repair' },
    ],
  },

  'Bosch': {
    founded: '1886, Stuttgart, Germany',
    specialty: 'Quiet, energy-efficient European engineering for compact kitchens',
    popularModels: [
      { type: 'Dishwasher', models: ['SHPM88Z75N 800 Series', 'SHP65CM5N 500 Series', 'SHPM78Z55N Benchmark'] },
      { type: 'Washer', models: ['WAW285H2UC 800 Series', 'WGA252B0UC 300 Series'] },
      { type: 'Refrigerator', models: ['B36CL80SNS 800 Series', 'B36CT80SNS Counter-Depth'] },
      { type: 'Range', models: ['HGI8056UC Gas 800 Series', 'HII8056U Induction'] },
    ],
    commonIssues: [
      'Dishwasher E24/E25 drain errors — drain pump impeller or check valve failure',
      'Washer E04 door lock error — lock mechanism or control module replacement',
      'Dishwasher not drying — Zeolite drying system or AutoAir door mechanism failure',
      'Refrigerator beeping — door sensor alignment or main control board issue',
    ],
    partsAvailability: 'Bosch uses BSH Home Appliances distribution. We stock drain pumps, door locks, circulation motors, and control boards for 300/500/800 Series dishwashers and washers.',
    warrantyNote: 'Bosch offers a 1-year limited warranty. 800 Series and Benchmark lines may include extended coverage on select components.',
    relatedBrands: [
      { name: 'Thermador', slug: 'thermador-appliance-repair' },
      { name: 'Miele', slug: 'miele-appliance-repair' },
      { name: 'LG', slug: 'lg-appliance-repair' },
    ],
  },

  'GE': {
    founded: '1892, Boston, Massachusetts (now GE Appliances by Haier)',
    specialty: 'Full-line American appliances from budget to GE Profile and Monogram luxury',
    popularModels: [
      { type: 'Refrigerator', models: ['GFE28GYNFS French Door', 'PYE22KYNFS Profile', 'ZIS480DNHSS Monogram'] },
      { type: 'Washer', models: ['GTW465ASNWW Top Load', 'GFW850SPNRS Smart', 'PFW870SSVWW Profile'] },
      { type: 'Range', models: ['JB645RKSS Electric', 'JGBS66REKSS Gas', 'PGB960SEJSS Profile'] },
      { type: 'Dishwasher', models: ['GDT665SSNSS', 'PDT715SGNWW Profile', 'CDT866P2NRS Cafe'] },
    ],
    commonIssues: [
      'GE Profile fridge motherboard failure — "no cooling" despite fans running',
      'Top-load washer agitator dogs worn — clicking noise and poor wash performance',
      'Gas range igniter weak — glows orange but won\'t open safety valve',
      'GE Cafe dishwasher — water inlet valve calcification from hard water',
    ],
    partsAvailability: 'GE parts are the most widely available in the US. We stock igniters, motherboards, agitator assemblies, water valves, and control boards. Even discontinued model parts are typically sourced within 24 hours.',
    warrantyNote: 'GE provides a 1-year warranty. GE Profile and Monogram lines may have extended coverage. GE Cafe includes a 2-year limited warranty.',
    relatedBrands: [
      { name: 'Whirlpool', slug: 'whirlpool-appliance-repair' },
      { name: 'Samsung', slug: 'samsung-appliance-repair' },
      { name: 'Frigidaire', slug: 'frigidaire-appliance-repair' },
    ],
  },

  'Frigidaire': {
    founded: '1918, Fort Wayne, Indiana (now part of Electrolux)',
    specialty: 'Affordable, dependable appliances for everyday use',
    popularModels: [
      { type: 'Refrigerator', models: ['FFSS2615TS Side-by-Side', 'FGHB2868TF Gallery', 'PRMC2285AF Professional'] },
      { type: 'Washer', models: ['FFTW4120SW Top Load', 'EFLS627UTT Front Load'] },
      { type: 'Range', models: ['FFGF3054TS Gas', 'FGEH3047VF Gallery Induction', 'FGGH3047VF Gallery Gas'] },
      { type: 'Dishwasher', models: ['FGID2476SF Gallery', 'FFCD2413US Front Controls'] },
    ],
    commonIssues: [
      'Refrigerator not cooling — adaptive defrost board failure in post-2016 models',
      'Gallery series oven self-clean door latch stuck — motor gear stripped',
      'Washer not draining — drain pump motor seized, often from small items in pump',
      'Freezer icing up — door gasket not sealing properly due to magnetic strip wear',
    ],
    partsAvailability: 'Frigidaire/Electrolux parts are widely available. We stock defrost boards, door gaskets, drain pumps, oven igniters, and self-clean latch motors. Most repairs completed in one visit.',
    warrantyNote: 'Frigidaire provides a 1-year limited warranty. Gallery and Professional lines may have separate extended warranties for sealed systems.',
    relatedBrands: [
      { name: 'GE', slug: 'ge-appliance-repair' },
      { name: 'Whirlpool', slug: 'whirlpool-appliance-repair' },
      { name: 'Kenmore', slug: 'kenmore-appliance-repair' },
    ],
  },

  'KitchenAid': {
    founded: '1919, Troy, Ohio (owned by Whirlpool Corporation)',
    specialty: 'Premium kitchen appliances with iconic design and professional performance',
    popularModels: [
      { type: 'Refrigerator', models: ['KRFC704FPS Counter-Depth', 'KBSD608ESS Built-In', 'KRMF706ESS 36"'] },
      { type: 'Dishwasher', models: ['KDTE334GPS 3rd Rack', 'KDTM404KPS FreeFlex', 'KDTE204KPS Top Controls'] },
      { type: 'Range', models: ['KSEG700ESS Electric', 'KSGB900ESS Gas', 'KSIB900ESS Induction'] },
      { type: 'Mixer', models: ['KSM150PS Artisan (motor/gear repairs)', 'KSM8990 Commercial (gear box service)'] },
    ],
    commonIssues: [
      'Built-in refrigerator compressor overheating — condenser coils hidden behind toe-kick need annual cleaning',
      'Dishwasher ProScrub sprayer arm motor failure — replacement motor assembly needed',
      'Range induction element not detecting cookware — coil module or control board replacement',
      'Stand mixer gear/worm drive stripped — requires gearbox disassembly and replacement',
    ],
    partsAvailability: 'KitchenAid shares Whirlpool\'s distribution network, ensuring excellent parts availability. We stock common components plus specialty items like ProScrub motors, induction coils, and mixer gearbox assemblies.',
    warrantyNote: 'KitchenAid offers a 1-year warranty on most appliances. Built-in refrigerators have a 5-year sealed system warranty.',
    relatedBrands: [
      { name: 'Whirlpool', slug: 'whirlpool-appliance-repair' },
      { name: 'Maytag', slug: 'maytag-appliance-repair' },
      { name: 'Bosch', slug: 'bosch-appliance-repair' },
    ],
  },

  'Maytag': {
    founded: '1893, Newton, Iowa (owned by Whirlpool Corporation)',
    specialty: 'Heavy-duty, long-lasting appliances built for reliability',
    popularModels: [
      { type: 'Washer', models: ['MVW6230HW Top Load', 'MHW5630HW Front Load', 'MVW7232HW Commercial-Grade'] },
      { type: 'Dryer', models: ['MED6230HW Electric', 'MGD5630HW Gas', 'MED7230HW Smart'] },
      { type: 'Dishwasher', models: ['MDB8959SKZ Top Control', 'MDB4949SKZ Front Control'] },
      { type: 'Refrigerator', models: ['MFI2570FEZ French Door', 'MSS25C4MG Side-by-Side'] },
    ],
    commonIssues: [
      'Commercial-grade washer impeller loose — clicking noise during wash, requires impeller hub replacement',
      'Dryer not heating — thermal fuse blown from lint buildup, element or gas valve replacement',
      'PowerWash dishwasher cycle running too long — turbidity sensor or wash motor issue',
      'Refrigerator ice maker cycling constantly — ice level sensor arm or optics board failure',
    ],
    partsAvailability: 'Maytag parts are readily available through Whirlpool\'s network. We stock impellers, thermal fuses, heating elements, wash motors, and control boards for all current and recent models.',
    warrantyNote: 'Maytag offers a 1-year warranty with optional 10-year limited parts warranty on select washer and dryer models.',
    relatedBrands: [
      { name: 'Whirlpool', slug: 'whirlpool-appliance-repair' },
      { name: 'KitchenAid', slug: 'kitchenaid-appliance-repair' },
      { name: 'GE', slug: 'ge-appliance-repair' },
    ],
  },

  'Miele': {
    founded: '1899, Gutersloh, Germany',
    specialty: 'Ultra-premium German engineering — designed to last 20 years',
    popularModels: [
      { type: 'Dishwasher', models: ['G7566 SCVi AutoDos', 'G5266 SCVi', 'G7316 SCU'] },
      { type: 'Washer', models: ['WWH860 WCS TwinDos', 'WXD160 WCS', 'WSD164 WCS'] },
      { type: 'Dryer', models: ['TWD660 WP Heat Pump', 'TXD160 WP', 'TCE630 WP'] },
      { type: 'Oven', models: ['H7860 BP PureLine', 'DGC7860 Steam Combination', 'H2265-1 Classic'] },
    ],
    commonIssues: [
      'AutoDos detergent dispenser clogged — cartridge system cleaning or motor replacement',
      'TwinDos dispenser error — requires recalibration or replacement of dispensing unit',
      'Heat pump dryer F10 filter error — internal lint filter deep clean plus sensor recalibration',
      'Dishwasher intake/drain light flashing — waterproof system activated, float switch or drain pump',
    ],
    partsAvailability: 'Miele parts are sourced through authorized channels. We maintain relationships with Miele\'s US parts distributor. Common components stocked; specialty parts (AutoDos, TwinDos modules) available in 24-48 hours.',
    warrantyNote: 'Miele offers a 1-year warranty with optional Miele Care protection plans (up to 10 years). We coordinate with Miele warranty when applicable.',
    relatedBrands: [
      { name: 'Bosch', slug: 'bosch-appliance-repair' },
      { name: 'Thermador', slug: 'thermador-appliance-repair' },
      { name: 'Sub-Zero', slug: 'sub-zero-appliance-repair' },
    ],
  },

  'Thermador': {
    founded: '1916, Los Angeles, California (now part of BSH with Bosch)',
    specialty: 'Professional-grade luxury cooking with Star Burner technology',
    popularModels: [
      { type: 'Range', models: ['PRG486WDG Pro Grand 48"', 'PRD486WDGU Pro Grand Dual Fuel', 'PRL366WG Pro 36"'] },
      { type: 'Cooktop', models: ['SGSX365TS Gas', 'CIT367TGS Induction', 'CEM367NS Electric'] },
      { type: 'Oven', models: ['POD301W Professional', 'MED302WS Masterpiece', 'PODS302W Steam & Convection'] },
      { type: 'Refrigerator', models: ['T36BT925NS Freedom', 'T24IR905SP Column', 'T36FT820NS French Door'] },
    ],
    commonIssues: [
      'Star Burner not igniting — electrode alignment off or igniter module failure',
      'Freedom Refrigerator column not cooling — sealed system or evaporator fan issue',
      'Professional oven running 25-50°F hot — temperature sensor or control board recalibration',
      'Induction cooktop error E8 — overheated induction coil or fan failure',
    ],
    partsAvailability: 'Thermador shares BSH\'s distribution with Bosch. We stock Star Burner igniters, temperature sensors, control boards, and fan motors. Freedom Refrigerator sealed system parts: 24-48 hours.',
    warrantyNote: 'Thermador offers a 2-year limited warranty. The "One-Two-Free" program may provide free dishwashers or vent hoods with qualifying purchases.',
    relatedBrands: [
      { name: 'Bosch', slug: 'bosch-appliance-repair' },
      { name: 'Wolf', slug: 'wolf-appliance-repair' },
      { name: 'Sub-Zero', slug: 'sub-zero-appliance-repair' },
    ],
  },

  'Kenmore': {
    founded: '1927, exclusively through Sears (parts made by Whirlpool, LG, Electrolux)',
    specialty: 'Value-oriented appliances manufactured by multiple OEMs',
    popularModels: [
      { type: 'Refrigerator', models: ['Kenmore Elite 72483', 'Kenmore 50049 Top Freezer', 'Kenmore 51783 Side-by-Side'] },
      { type: 'Washer', models: ['Kenmore 41262 Front Load', 'Kenmore 22352 Top Load', 'Kenmore Elite 41072'] },
      { type: 'Dryer', models: ['Kenmore 61112 Electric', 'Kenmore 71112 Gas', 'Kenmore Elite 81072'] },
      { type: 'Dishwasher', models: ['Kenmore 13473', 'Kenmore Elite 14793'] },
    ],
    commonIssues: [
      'Identifying the actual manufacturer (first 3 digits of model number) is key to correct parts and diagnosis',
      'Kenmore Elite washer bearing failure — often LG-made, requires LG-specific bearing kit',
      'Kenmore refrigerator not cooling — varies by manufacturer; Whirlpool-made use adaptive defrost, LG-made use linear compressor',
      'Dryer not heating — thermal fuse (most common), gas valve, or heating element depending on OEM',
    ],
    partsAvailability: 'Kenmore parts cross-reference to their OEM manufacturer (Whirlpool, LG, Electrolux). We decode your model number to source the correct parts. Most Kenmore repairs use widely available OEM components.',
    warrantyNote: 'Kenmore warranties vary by retailer and purchase date. Many Kenmore appliances are still under Sears Protection Agreements. We can help determine your coverage status.',
    relatedBrands: [
      { name: 'Whirlpool', slug: 'whirlpool-appliance-repair' },
      { name: 'LG', slug: 'lg-appliance-repair' },
      { name: 'Frigidaire', slug: 'frigidaire-appliance-repair' },
    ],
  },
};

export default brandLocalData;
