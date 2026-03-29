/**
 * Expanded service-page content: comparisonTable, symptomsChecklist, diagnosisSteps
 * Keyed by appliance slug used in each *RepairPage component.
 * Easy to extend — just add a new key.
 */

const SERVICE_CONTENT = {

  /* ═══════════════════════ REFRIGERATOR ═══════════════════════ */
  Refrigerator: {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Thermostat replacement', price: 295 },
        { repair: 'Ice maker repair', price: 295 },
        { repair: 'Evaporator fan motor', price: 285 },
        { repair: 'Door seal / gasket', price: 250 },
        { repair: 'Compressor start relay', price: 265 },
        { repair: 'Control board', price: 350 },
      ],
      luxury: [
        { brand: 'Sub-Zero', from: 555 },
        { brand: 'Viking', from: 450 },
        { brand: 'Thermador', from: 495 },
        { brand: 'Miele', from: 445 },
        { brand: 'Built-in models', from: 500 },
      ],
    },
    comparisonTable: {
      title: 'Refrigerator Repair vs. Replacement \u2014 How to Decide',
      intro: 'Not every breakdown means you need a new refrigerator. Use this guide to make a cost-effective decision.',
      rows: [
        { situation: 'Age under 8 years', repair: true, replace: false, note: 'Most components are still within their expected lifespan \u2014 repair is almost always the better investment.' },
        { situation: 'Repair cost under 50% of new fridge', repair: true, replace: false, note: 'If the repair bill stays under half the cost of a comparable new unit, repairing makes financial sense.' },
        { situation: 'Compressor failure on 12+ year unit', repair: false, replace: true, note: 'Compressor replacement runs $600\u2013$900. On an aging unit, that money is better put toward a newer, more efficient model.' },
        { situation: 'Cosmetic damage only', repair: true, replace: false, note: "Dents, scratches, or a cracked handle don't affect performance. Keep the fridge and fix what matters." },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Not cooling', meaning: 'Usually points to a faulty thermostat, failed compressor start relay, or dirty condenser coils restricting heat dissipation.' },
      { symptom: 'Ice maker not working', meaning: 'Commonly caused by a frozen water supply line, defective inlet valve, or a faulty ice maker module that needs replacement.' },
      { symptom: 'Water dispenser broken', meaning: 'Often traced to a clogged water filter past its replacement date or a failed dispenser control board.' },
      { symptom: 'Loud clicking or humming', meaning: 'Typically indicates a compressor struggling to start, a failing start relay, or condenser fan motor bearings wearing out.' },
      { symptom: 'Frost buildup inside', meaning: 'Signals a defrost system failure \u2014 the defrost heater, timer, or thermostat may need replacement.' },
      { symptom: 'Leaking water on floor', meaning: 'Most often caused by a clogged defrost drain, cracked drain pan, or a loose water supply line connection.' },
      { symptom: 'Compressor running constantly', meaning: 'The fridge is working overtime to compensate \u2014 usually due to worn door gaskets, low refrigerant, or a failing compressor.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full Diagnostic Inspection', description: 'Our technician tests every critical component \u2014 thermostat, compressor, evaporator fan, condenser coils, defrost system, and door seals. We use professional-grade multimeters and temperature probes to pinpoint the exact failure, not just the symptom.' },
      { step: 2, title: 'Parts Sourcing & Transparent Quote', description: 'Once we identify the problem, you receive a written estimate on the spot. We stock common parts (thermostats, relays, fan motors, gaskets) on our truck for same-visit repair. Specialty parts for Sub-Zero, Viking, or Thermador are typically available next business day.' },
      { step: 3, title: 'Professional Repair & Verification', description: 'We complete the repair, then run the refrigerator through a full test cycle \u2014 verifying temperature in both the fridge and freezer compartments, checking airflow, and confirming the compressor cycles correctly. Every repair is backed by our 180-day warranty.' },
    ],
  },

  /* ═══════════════════════ WASHER ═══════════════════════ */
  Washer: {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Control board', price: 350 },
        { repair: 'Door latch (front-load)', price: 250 },
        { repair: 'Drain pump', price: 295 },
        { repair: 'Drive belt', price: 250 },
        { repair: 'Door boot/gasket replacement', price: 310 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Washer Repair vs. Replacement \u2014 How to Decide',
      intro: 'A broken washer is disruptive, but replacement isn\u2019t always the answer. Here\u2019s how to decide.',
      rows: [
        { situation: 'Age under 8 years', repair: true, replace: false, note: 'Modern washers are designed to last 10\u201314 years. A single repair on a younger unit almost always pays for itself.' },
        { situation: 'Repair cost under 50% of a new washer', repair: true, replace: false, note: 'If the fix is less than half the price of a comparable new machine, repairing is the smarter financial move.' },
        { situation: 'Drum bearing failure on 10+ year unit', repair: false, replace: true, note: 'Bearing replacement runs $350\u2013$550 with labor. On an older washer, that cost approaches a new entry-level machine.' },
        { situation: 'Minor leak or drain issue', repair: true, replace: false, note: 'Hose replacements, pump swaps, and drain cleanouts are affordable fixes that restore full function quickly.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Won\u2019t start or power on', meaning: 'Often a faulty door latch switch, blown thermal fuse, or a failed control board preventing the cycle from initiating.' },
      { symptom: 'Not draining', meaning: 'Usually caused by a clogged drain pump filter, kinked drain hose, or a failed drain pump motor.' },
      { symptom: 'Excessive vibration or shaking', meaning: 'Typically points to worn shock absorbers, unbalanced drum suspension springs, or an unevenly loaded tub.' },
      { symptom: 'Leaking water', meaning: 'Most commonly traced to a cracked door boot seal (front-load), worn inlet hoses, or a faulty water pump.' },
      { symptom: 'Not spinning', meaning: 'Indicates a worn drive belt, failed lid switch (top-load), or a burned-out motor coupling.' },
      { symptom: 'Clothes still wet after cycle', meaning: 'The spin cycle isn\u2019t reaching full speed \u2014 usually a drive belt, clutch assembly, or drain issue.' },
      { symptom: 'Error codes on display', meaning: 'Electronic washers display fault codes that point to specific component failures. Our technicians read and diagnose all major brand codes.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full Diagnostic Inspection', description: 'We test the door latch, control board, motor, pump, inlet valves, and suspension components. Professional leak detection and electrical testing pinpoint the root cause \u2014 not just the visible symptom.' },
      { step: 2, title: 'Parts Sourcing & Transparent Quote', description: 'You receive a written estimate before any work begins. Common parts (pumps, belts, door seals, inlet valves) are stocked on our truck. Brand-specific parts for LG, Samsung, or Miele ship next business day.' },
      { step: 3, title: 'Professional Repair & Verification', description: 'After the repair, we run a complete wash cycle to verify fill, agitation, drain, and spin performance. We check for leaks at every connection point. Every repair is backed by our 180-day warranty.' },
    ],
  },

  /* ═══════════════════════ DRYER ═══════════════════════ */
  Dryer: {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Heating element', price: 265 },
        { repair: 'Thermal fuse', price: 250 },
        { repair: 'Drum belt', price: 250 },
        { repair: 'Control board', price: 350 },
        { repair: 'Gas valve (gas dryers)', price: 325 },
        { repair: 'Drum rollers', price: 275 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Dryer Repair vs. Replacement \u2014 How to Decide',
      intro: 'Dryers are mechanically simpler than washers, which means repairs are often very cost-effective.',
      rows: [
        { situation: 'Age under 10 years', repair: true, replace: false, note: 'Dryers typically last 12\u201315 years. Most single-component failures on younger units cost well under $400 to fix.' },
        { situation: 'Heating element or igniter failure', repair: true, replace: false, note: 'These are among the most common dryer repairs and typically cost $150\u2013$350 \u2014 far less than a new dryer.' },
        { situation: 'Drum bearing failure on 12+ year unit', repair: false, replace: true, note: 'Bearing replacement labor is significant on older dryers. Combined with the unit\u2019s age, replacement becomes more sensible.' },
        { situation: 'Minor noise or belt issue', repair: true, replace: false, note: 'Belt and roller replacements are straightforward, affordable repairs that extend dryer life by years.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Not heating', meaning: 'The most common dryer complaint. Usually a burned-out heating element, blown thermal fuse, or faulty gas igniter (gas dryers).' },
      { symptom: 'Takes too long to dry', meaning: 'Often caused by a clogged lint trap, restricted vent duct, or a failing heating element that isn\u2019t reaching full temperature.' },
      { symptom: 'Drum not spinning', meaning: 'Typically a broken drive belt, worn drum rollers, or a failed motor \u2014 all common and repairable issues.' },
      { symptom: 'Loud squealing or thumping', meaning: 'Points to worn drum support rollers, a frayed belt, or dry drum bearing \u2014 these worsen quickly if ignored.' },
      { symptom: 'Shuts off mid-cycle', meaning: 'Usually a tripped thermal fuse (from vent blockage) or an overheating motor. Vent inspection is critical.' },
      { symptom: 'Burning smell', meaning: 'Lint buildup near the heating element or in the exhaust vent \u2014 a fire hazard that needs immediate attention.' },
      { symptom: 'Won\u2019t start at all', meaning: 'Often a faulty door switch, broken start switch, or a failed thermal fuse cutting power to the dryer.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full Diagnostic Inspection', description: 'We test the heating element, thermal fuse, gas igniter (if applicable), belt, drum rollers, motor, and exhaust vent. Airflow measurements identify hidden vent restrictions that cause most "not heating" complaints.' },
      { step: 2, title: 'Parts Sourcing & Transparent Quote', description: 'Written estimate before any work. We carry heating elements, thermal fuses, belts, rollers, and igniters for all major brands. Specialty parts ship next business day.' },
      { step: 3, title: 'Professional Repair & Verification', description: 'After repair, we run a full heat cycle and measure exhaust temperature and airflow at the vent outlet. We verify the drum spins smoothly and the dryer reaches proper operating temperature. Backed by our 180-day warranty.' },
    ],
  },

  /* ═══════════════════════ DISHWASHER ═══════════════════════ */
  Dishwasher: {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Drain pump', price: 285 },
        { repair: 'Door latch assembly', price: 250 },
        { repair: 'Water inlet valve', price: 285 },
        { repair: 'Control board', price: 385 },
      ],
      luxury: [
        { brand: 'Bosch', from: 315 },
        { brand: 'Miele', from: 395 },
        { brand: 'Thermador', from: 315 },
      ],
    },
    comparisonTable: {
      title: 'Dishwasher Repair vs. Replacement \u2014 How to Decide',
      intro: 'Dishwashers are one of the most cost-effective appliances to repair. Here\u2019s when it makes sense.',
      rows: [
        { situation: 'Age under 7 years', repair: true, replace: false, note: 'Most dishwasher components are designed for 9\u201312 years of use. Early failures are almost always worth repairing.' },
        { situation: 'Not draining or cleaning well', repair: true, replace: false, note: 'Pump, spray arm, and filter issues are affordable fixes that restore full cleaning performance.' },
        { situation: 'Control board failure on 10+ year unit', repair: false, replace: true, note: 'Control boards cost $250\u2013$400. On an older dishwasher, that approaches the cost of a solid new unit.' },
        { situation: 'Door latch or gasket issue', repair: true, replace: false, note: 'Latch and seal replacements are among the cheapest dishwasher repairs \u2014 $80\u2013$200 typically.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Not cleaning dishes properly', meaning: 'Usually caused by a clogged spray arm, worn wash pump, low water temperature, or a dirty filter restricting water flow.' },
      { symptom: 'Won\u2019t drain', meaning: 'Commonly a blocked drain hose, failed drain pump, or a clogged air gap causing water to back up in the tub.' },
      { symptom: 'Leaking from the bottom', meaning: 'Often a cracked door gasket, loose hose clamp, or a worn pump seal allowing water to escape during the wash cycle.' },
      { symptom: 'Not filling with water', meaning: 'Points to a faulty water inlet valve, a tripped float switch, or a kinked supply line reducing water flow.' },
      { symptom: 'Dishes come out wet', meaning: 'The heating element or vent fan may be failing, or the rinse aid dispenser is empty or malfunctioning.' },
      { symptom: 'Strange odor', meaning: 'Typically food debris trapped in the filter, drain area, or door gasket folds. A thorough cleaning and filter check resolves most odor complaints.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full Diagnostic Inspection', description: 'We inspect the wash pump, drain pump, spray arms, inlet valve, door latch, gasket, heating element, and control board. We run a diagnostic cycle to isolate the failing component.' },
      { step: 2, title: 'Parts Sourcing & Transparent Quote', description: 'Written estimate provided on the spot. Common parts (pumps, inlet valves, gaskets, spray arms) are truck-stocked. Bosch, Miele, and other premium brand parts ship next business day.' },
      { step: 3, title: 'Professional Repair & Verification', description: 'After repair, we run a complete wash cycle and check for leaks, proper drainage, water temperature, and spray arm rotation. Every repair is backed by our 180-day warranty.' },
    ],
  },

  /* ═══════════════════════ OVEN ═══════════════════════ */
  Oven: {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Igniter (gas)', price: 285 },
        { repair: 'Bake element', price: 265 },
        { repair: 'Temperature sensor', price: 265 },
        { repair: 'Control board', price: 350 },
        { repair: 'Door hinge', price: 250 },
        { repair: 'Convection fan motor', price: 295 },
      ],
      luxury: [
        { brand: 'Viking', from: 450 },
        { brand: 'Thermador', from: 495 },
        { brand: 'Miele', from: 640 },
        { brand: 'Wolf', from: 395 },
      ],
    },
    comparisonTable: {
      title: 'Oven Repair vs. Replacement \u2014 How to Decide',
      intro: 'Ovens are built to last, and most repairs cost significantly less than a replacement.',
      rows: [
        { situation: 'Age under 12 years', repair: true, replace: false, note: 'Ovens routinely last 15\u201320 years. Component failures within the first 12 years are almost always worth fixing.' },
        { situation: 'Heating element or igniter failure', repair: true, replace: false, note: 'The most common oven repair. Bake and broil elements cost $150\u2013$300 to replace \u2014 a fraction of a new oven.' },
        { situation: 'Control board failure on 15+ year unit', repair: false, replace: true, note: 'Electronic control boards run $300\u2013$500. On a very old unit, investing in a new oven with modern features is often wiser.' },
        { situation: 'Door hinge or glass issue', repair: true, replace: false, note: 'Door components are inexpensive and easy to replace. No reason to discard a working oven over a broken hinge.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Not heating at all', meaning: 'Usually a burned-out bake element, faulty igniter (gas), or a tripped thermal fuse cutting power to the heating circuit.' },
      { symptom: 'Uneven cooking', meaning: 'Often caused by a failing convection fan motor, a damaged bake element with a hot spot, or a miscalibrated thermostat.' },
      { symptom: 'Temperature inaccurate', meaning: 'The oven temperature sensor (thermistor) or thermostat has drifted. Calibration or sensor replacement fixes this.' },
      { symptom: 'Self-clean cycle won\u2019t work', meaning: 'Typically a faulty door lock motor or a failed control board that can\u2019t engage the high-heat cleaning mode.' },
      { symptom: 'Gas smell when off', meaning: 'A gas leak from the supply valve or connection. Turn off the gas supply and call for immediate service.' },
      { symptom: 'Oven light not working', meaning: 'May be a burned-out bulb, but if the socket is corroded or the wiring is damaged, the socket assembly needs replacement.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full Diagnostic Inspection', description: 'We test bake and broil elements, igniters, temperature sensors, thermostats, control boards, and door latch mechanisms. For gas ovens, we perform a gas leak check at all connections.' },
      { step: 2, title: 'Parts Sourcing & Transparent Quote', description: 'Written estimate before any work begins. We stock heating elements, igniters, sensors, and thermostats for all major brands. Control boards and specialty parts ship next business day.' },
      { step: 3, title: 'Professional Repair & Verification', description: 'After repair, we verify temperature accuracy with a calibrated probe, test all heating modes (bake, broil, convection), and confirm even heat distribution. Backed by our 180-day warranty.' },
    ],
  },

  /* ═══════════════════════ RANGE ═══════════════════════ */
  Range: {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Igniter (gas)', price: 285 },
        { repair: 'Bake element', price: 265 },
        { repair: 'Burner assembly', price: 325 },
        { repair: 'Control board', price: 350 },
        { repair: 'Surface element (electric)', price: 265 },
        { repair: 'Oven sensor', price: 265 },
      ],
      luxury: [
        { brand: 'Viking', from: 450 },
        { brand: 'Thermador', from: 495 },
        { brand: 'Wolf', from: 395 },
      ],
    },
    comparisonTable: {
      title: 'Range Repair vs. Replacement \u2014 How to Decide',
      intro: 'Ranges combine cooktop and oven in one unit. Most failures affect only one section and are very repairable.',
      rows: [
        { situation: 'Age under 12 years', repair: true, replace: false, note: 'Ranges last 15\u201320 years. A single burner or element failure is an easy, cost-effective repair.' },
        { situation: 'One burner not working', repair: true, replace: false, note: 'Individual burner components (igniters, switches, elements) cost $100\u2013$250 to replace.' },
        { situation: 'Multiple system failures simultaneously', repair: false, replace: true, note: 'If both the cooktop and oven sections have major failures, combined repair costs may approach replacement value.' },
        { situation: 'Cosmetic or knob damage', repair: true, replace: false, note: 'Knobs, grates, and drip pans are inexpensive replacement parts that don\u2019t justify a new range.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Burner won\u2019t ignite (gas)', meaning: 'Usually a clogged igniter port, faulty spark module, or a worn igniter that isn\u2019t generating a strong enough spark.' },
      { symptom: 'Electric element not heating', meaning: 'Often a burned-out surface element, failed infinite switch, or a loose wiring connection at the terminal block.' },
      { symptom: 'Oven not reaching temperature', meaning: 'Points to a faulty bake igniter (gas) or burned-out bake element (electric), or a miscalibrated oven sensor.' },
      { symptom: 'Gas smell when burners are off', meaning: 'A gas leak at the supply valve, burner tube, or connection fitting. Turn off gas and call for immediate service.' },
      { symptom: 'Oven door won\u2019t close properly', meaning: 'Worn or broken door hinges, a warped door frame, or a misaligned latch mechanism preventing a proper seal.' },
      { symptom: 'Uneven flame on gas burner', meaning: 'Typically food debris or grease buildup in the burner ports. A thorough cleaning often restores even flame distribution.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full Diagnostic Inspection', description: 'We test all burners, igniters, heating elements, switches, oven sensors, and the control board. Gas ranges get a full leak check at every connection point.' },
      { step: 2, title: 'Parts Sourcing & Transparent Quote', description: 'Written estimate on the spot. We stock igniters, elements, switches, and common sensors. Premium brand parts for Wolf, Viking, or Thermador are available next business day.' },
      { step: 3, title: 'Professional Repair & Verification', description: 'After repair, we test every burner for proper ignition and flame pattern, verify oven temperature accuracy, and confirm all controls function correctly. Backed by our 180-day warranty.' },
    ],
  },

  /* ═══════════════════════ STOVE ═══════════════════════ */
  Stove: {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Igniter', price: 265 },
        { repair: 'Burner assembly', price: 325 },
        { repair: 'Gas valve', price: 295 },
        { repair: 'Control board', price: 350 },
        { repair: 'Surface element', price: 265 },
      ],
      luxury: [
        { brand: 'Viking', from: 450 },
        { brand: 'Thermador', from: 495 },
        { brand: 'Wolf', from: 395 },
      ],
    },
    comparisonTable: {
      title: 'Stove Repair vs. Replacement \u2014 How to Decide',
      intro: 'Stoves are durable appliances. Most common failures are straightforward and affordable to repair.',
      rows: [
        { situation: 'Age under 12 years', repair: true, replace: false, note: 'Stoves have long lifespans. Single-component failures within 12 years are almost always worth repairing.' },
        { situation: 'Single burner or element issue', repair: true, replace: false, note: 'Replacing one burner component costs $100\u2013$250 \u2014 a fraction of a new stove.' },
        { situation: 'Major gas valve failure on 15+ year unit', repair: false, replace: true, note: 'Gas valve replacements are expensive. On a very old stove, upgrading to a newer, safer model is often the best choice.' },
        { situation: 'Knob, grate, or drip pan damage', repair: true, replace: false, note: 'These are inexpensive replacement parts. No reason to replace the entire stove.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Burner won\u2019t light', meaning: 'Commonly a clogged igniter, faulty spark module, or a worn-out igniter electrode that needs replacement.' },
      { symptom: 'Weak or uneven flame', meaning: 'Food debris or grease buildup in the burner ports. Cleaning or port replacement restores proper flame distribution.' },
      { symptom: 'Electric element stays on high', meaning: 'A stuck infinite switch that can\u2019t regulate power. The switch needs replacement to restore temperature control.' },
      { symptom: 'Clicking sound but no ignition', meaning: 'The spark module is firing, but the igniter isn\u2019t positioned correctly or the gas flow is obstructed.' },
      { symptom: 'Gas smell when off', meaning: 'A gas leak from the valve or supply line. Turn off gas supply immediately and call for service.' },
      { symptom: 'Surface element cracked or damaged', meaning: 'A cracked coil or glass-top element needs replacement to avoid electrical hazards. Don\u2019t use the damaged burner.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full Diagnostic Inspection', description: 'We inspect all burners, igniters, gas valves, elements, switches, and wiring connections. Gas stoves receive a full safety and leak inspection.' },
      { step: 2, title: 'Parts Sourcing & Transparent Quote', description: 'Written estimate before any work. We carry igniters, elements, switches, and burner components for all major brands on our service truck.' },
      { step: 3, title: 'Professional Repair & Verification', description: 'After repair, we test each burner for proper ignition, flame quality, and temperature regulation. All gas connections are leak-tested. Backed by our 180-day warranty.' },
    ],
  },

  /* ═══════════════════════ COOKTOP ═══════════════════════ */
  Cooktop: {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Igniter (gas)', price: 265 },
        { repair: 'Burner assembly', price: 325 },
        { repair: 'Induction element', price: 350 },
        { repair: 'Control board', price: 350 },
      ],
      luxury: [
        { brand: 'Viking', from: 450 },
        { brand: 'Thermador', from: 495 },
      ],
    },
    comparisonTable: {
      title: 'Cooktop Repair vs. Replacement \u2014 How to Decide',
      intro: 'Built-in cooktops are designed to last and are more cost-effective to repair than replace.',
      rows: [
        { situation: 'Age under 10 years', repair: true, replace: false, note: 'Built-in cooktops last 15+ years. Single burner or element failures are simple, affordable repairs.' },
        { situation: 'One burner not working', repair: true, replace: false, note: 'Individual burner repairs cost $100\u2013$300. No need to replace the entire cooktop for one faulty zone.' },
        { situation: 'Cracked glass-top surface', repair: false, replace: true, note: 'A cracked glass-ceramic surface is a safety hazard and usually costs nearly as much to replace as a new cooktop.' },
        { situation: 'Control knob or switch issue', repair: true, replace: false, note: 'Switches and knobs are inexpensive, replaceable parts that restore full control.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Burner won\u2019t ignite (gas)', meaning: 'Clogged igniter port, faulty spark module, or a worn igniter electrode. Cleaning or replacement resolves most cases.' },
      { symptom: 'Induction zone not detecting cookware', meaning: 'The cookware may not be induction-compatible, or the induction coil or sensor beneath the glass is failing.' },
      { symptom: 'Electric element not heating', meaning: 'A burned-out radiant element, failed infinite switch, or a loose terminal connection under the cooktop.' },
      { symptom: 'Cracked glass surface', meaning: 'A safety hazard that requires immediate replacement of the glass-ceramic top. Avoid using the affected zone until repaired.' },
      { symptom: 'Inconsistent temperature', meaning: 'The temperature sensor or control switch is failing, preventing the element from maintaining the selected heat level.' },
      { symptom: 'Sparking continuously', meaning: 'A stuck spark igniter switch (often caused by moisture or food spills) sending continuous spark signals to the igniter.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full Diagnostic Inspection', description: 'We test each burner zone, igniter, element, sensor, and control switch. Induction cooktops receive coil-by-coil testing. Gas models get a full leak and combustion safety check.' },
      { step: 2, title: 'Parts Sourcing & Transparent Quote', description: 'Written estimate on the spot. We stock igniters, elements, and switches for common models. Glass-top replacements and premium brand parts are available next business day.' },
      { step: 3, title: 'Professional Repair & Verification', description: 'After repair, we verify each burner zone heats correctly, test temperature regulation, and confirm all controls respond properly. Backed by our 180-day warranty.' },
    ],
  },

  /* ═══════════════════════ FREEZER ═══════════════════════ */
  Freezer: {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Defrost heater', price: 285 },
        { repair: 'Thermostat', price: 295 },
        { repair: 'Evaporator fan motor', price: 285 },
        { repair: 'Door seal / gasket', price: 250 },
        { repair: 'Start relay', price: 265 },
        { repair: 'Temperature control board', price: 325 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Freezer Repair vs. Replacement \u2014 How to Decide',
      intro: 'Standalone freezers are simple machines. Most repairs are affordable and extend unit life significantly.',
      rows: [
        { situation: 'Age under 10 years', repair: true, replace: false, note: 'Chest and upright freezers can last 15\u201320 years. Repairs within the first decade are almost always worthwhile.' },
        { situation: 'Thermostat or defrost issue', repair: true, replace: false, note: 'These are common, inexpensive repairs ($150\u2013$350) that restore normal freezing performance.' },
        { situation: 'Compressor failure on 15+ year unit', repair: false, replace: true, note: 'Compressor replacement is the most expensive freezer repair. On a very old unit, a new energy-efficient model saves more long-term.' },
        { situation: 'Door gasket worn', repair: true, replace: false, note: 'A new door seal costs $80\u2013$180 and prevents frost buildup and compressor overwork.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Not freezing cold enough', meaning: 'Usually a faulty thermostat, low refrigerant charge, or dirty condenser coils preventing proper heat exchange.' },
      { symptom: 'Frost buildup on walls', meaning: 'A defrost system failure \u2014 the defrost heater, timer, or thermostat isn\u2019t cycling properly to prevent ice accumulation.' },
      { symptom: 'Compressor running non-stop', meaning: 'The freezer can\u2019t maintain set temperature. Common causes: worn door gasket, failed thermostat, or low refrigerant.' },
      { symptom: 'Unusual loud noises', meaning: 'Points to failing evaporator fan motor bearings, a loose condenser fan blade, or compressor wear.' },
      { symptom: 'Water pooling on floor', meaning: 'A clogged defrost drain line or cracked drain pan. Auto-defrost models are especially prone to this.' },
      { symptom: 'Food thawing or soft', meaning: 'The temperature is rising above 0\u00b0F. Requires immediate diagnosis to prevent food spoilage \u2014 could be compressor, thermostat, or sealed system issue.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full Diagnostic Inspection', description: 'We test the compressor, thermostat, defrost heater, evaporator fan, condenser coils, and door gasket seal. Temperature readings at multiple points confirm whether the freezer reaches and holds the correct temperature.' },
      { step: 2, title: 'Parts Sourcing & Transparent Quote', description: 'Written estimate before we start. We carry thermostats, defrost components, fan motors, and gaskets for all major brands. Compressor parts ship next business day if needed.' },
      { step: 3, title: 'Professional Repair & Verification', description: 'After repair, we monitor the freezer through a full cooling cycle, verifying it reaches 0\u00b0F and the compressor cycles off normally. All repairs backed by our 180-day warranty.' },
    ],
  },

  /* ═══════════════════════ ICE MAKER ═══════════════════════ */
  'Ice Maker': {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Water inlet valve', price: 265 },
        { repair: 'Ice maker assembly', price: 295 },
        { repair: 'Thermostat', price: 265 },
        { repair: 'Water line', price: 250 },
        { repair: 'Ejector motor', price: 275 },
        { repair: 'Control module', price: 325 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Ice Maker Repair vs. Replacement \u2014 How to Decide',
      intro: 'Standalone and built-in ice makers are precision appliances. Here\u2019s when repair makes sense.',
      rows: [
        { situation: 'Age under 7 years', repair: true, replace: false, note: 'Ice makers last 8\u201312 years. Component failures within the first 7 years are well worth repairing.' },
        { situation: 'Water inlet valve or filter issue', repair: true, replace: false, note: 'Valve and filter replacements cost $80\u2013$200 \u2014 inexpensive fixes that restore full ice production.' },
        { situation: 'Compressor failure on 10+ year unit', repair: false, replace: true, note: 'Compressor work on a standalone ice maker is expensive relative to the unit\u2019s value. A new machine is often smarter.' },
        { situation: 'Low ice production', repair: true, replace: false, note: 'Often a water supply issue, dirty condenser, or thermostat calibration \u2014 all affordable fixes.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'No ice production', meaning: 'Commonly a frozen water line, faulty inlet valve, or a stuck ice maker module that\u2019s not cycling.' },
      { symptom: 'Small or hollow ice cubes', meaning: 'Indicates low water pressure to the ice maker, a partially clogged water filter, or an inlet valve not opening fully.' },
      { symptom: 'Ice tastes bad or smells', meaning: 'Usually an old water filter (should be replaced every 6 months) or food odors absorbed from the freezer compartment.' },
      { symptom: 'Leaking water around unit', meaning: 'A cracked water supply line, loose connection, or overfilled ice bin pushing water out of the fill area.' },
      { symptom: 'Ice maker making loud noise', meaning: 'The water inlet valve may be failing, or the ice ejector arm motor is struggling to release frozen cubes.' },
      { symptom: 'Ice bin overflowing', meaning: 'The optical sensor or shut-off arm that detects a full bin is misaligned or malfunctioning.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full Diagnostic Inspection', description: 'We test the water inlet valve, supply line pressure, thermostat, ice maker module, ejector mechanism, and condenser (standalone units). Every component in the ice-making cycle is checked.' },
      { step: 2, title: 'Parts Sourcing & Transparent Quote', description: 'Written estimate on the spot. We stock inlet valves, water filters, thermostats, and ice maker modules. Specialty parts for Sub-Zero, Scotsman, or U-Line ship next business day.' },
      { step: 3, title: 'Professional Repair & Verification', description: 'After repair, we verify proper water flow, run a full ice-making cycle, and confirm the unit produces correctly sized, clean-tasting ice. Backed by our 180-day warranty.' },
    ],
  },

  /* ═══════════════════════ WINE COOLER ═══════════════════════ */
  'Wine Cooler': {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Thermostat', price: 285 },
        { repair: 'Fan motor', price: 265 },
        { repair: 'Door seal', price: 250 },
        { repair: 'Control board', price: 350 },
        { repair: 'Temperature sensor', price: 265 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Wine Cooler Repair vs. Replacement \u2014 How to Decide',
      intro: 'Wine coolers protect a valuable investment. Here\u2019s how to decide between repair and replacement.',
      rows: [
        { situation: 'Age under 8 years', repair: true, replace: false, note: 'Quality wine coolers last 10\u201315 years. Thermostat and fan failures in younger units are well worth repairing.' },
        { situation: 'Thermostat or fan issue', repair: true, replace: false, note: 'These are the most common wine cooler repairs ($150\u2013$350) and fully restore temperature control.' },
        { situation: 'Compressor failure on older thermoelectric unit', repair: false, replace: true, note: 'Thermoelectric coolers are often more cost-effective to replace than repair when the cooling module fails.' },
        { situation: 'Door seal or hinge issue', repair: true, replace: false, note: 'Gasket and hinge replacements are simple, low-cost fixes that maintain proper insulation.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Not cooling to set temperature', meaning: 'Typically a faulty thermostat, dirty condenser coils, or a failing compressor or thermoelectric module.' },
      { symptom: 'Temperature fluctuating', meaning: 'Often caused by a failing temperature sensor, a door gasket not sealing properly, or a condenser fan not running.' },
      { symptom: 'Excessive vibration', meaning: 'Wine coolers should minimize vibration to protect wine. Worn compressor mounts or an unleveled unit are common causes.' },
      { symptom: 'Condensation on glass door', meaning: 'Usually a failing anti-condensation heater (in dual-zone models) or a worn door gasket allowing humid air inside.' },
      { symptom: 'Interior light not working', meaning: 'A burned-out LED strip or a faulty door switch. LED strips should be replaced promptly to avoid excessive heat buildup.' },
      { symptom: 'Loud humming or buzzing', meaning: 'Points to a compressor working harder than normal, possibly due to dirty condenser coils or low refrigerant.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full Diagnostic Inspection', description: 'We test the compressor or thermoelectric module, thermostat, temperature sensors, condenser coils, evaporator fan, and door gasket. Dual-zone units receive independent testing of each temperature zone.' },
      { step: 2, title: 'Parts Sourcing & Transparent Quote', description: 'Written estimate before any work. We source parts for all major wine cooler brands including Sub-Zero, EuroCave, Vinotemp, and U-Line. Common components are available same-day.' },
      { step: 3, title: 'Professional Repair & Verification', description: 'After repair, we monitor temperature stability across all zones, verify the compressor cycles correctly, and check vibration levels. Your wine collection stays protected. Backed by our 180-day warranty.' },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     MAINTENANCE PAGES
     ═══════════════════════════════════════════════════════════════ */

  'Refrigerator Maintenance': {
    pricingTable: {
      diagnostic: 60,
      from: 255,
      rows: [
        { repair: 'Condenser coil cleaning', price: 255 },
        { repair: 'Door gasket replacement', price: 255 },
        { repair: 'Water line inspection', price: 265 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Maintenance vs. Waiting for a Breakdown',
      intro: 'Preventive maintenance costs a fraction of emergency repair. Here\u2019s the comparison.',
      rows: [
        { situation: 'Annual coil cleaning ($85)', repair: true, replace: false, note: 'Prevents compressor strain that leads to $600\u2013$900 compressor replacement.' },
        { situation: 'Door gasket replacement ($120)', repair: true, replace: false, note: 'A worn seal forces the compressor to overwork, increasing energy bills by 10\u201315%.' },
        { situation: 'Thermostat calibration ($65)', repair: true, replace: false, note: 'Prevents food spoilage from incorrect temperatures and extends component life.' },
        { situation: 'Skipping maintenance entirely', repair: false, replace: true, note: 'Neglected refrigerators fail 3\u20135 years earlier. Emergency repairs average $350\u2013$650.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Higher energy bills', meaning: 'Dirty condenser coils or worn gaskets force the compressor to run longer, consuming more electricity.' },
      { symptom: 'Food spoiling faster', meaning: 'Temperature inconsistencies from a miscalibrated thermostat or failing door seal.' },
      { symptom: 'Frost buildup in freezer', meaning: 'Defrost system needs inspection \u2014 the heater, timer, or thermostat may be drifting.' },
      { symptom: 'Fridge running louder', meaning: 'Condenser fan or evaporator fan bearings wearing out. Cleaning and lubrication can extend life.' },
      { symptom: 'Water pooling under fridge', meaning: 'Clogged drain line or cracked drain pan \u2014 a routine maintenance item that prevents mold.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full System Inspection', description: 'We check thermostat calibration, compressor cycling, condenser coil condition, evaporator fan operation, door gasket seals, and defrost system function.' },
      { step: 2, title: 'Cleaning & Calibration', description: 'We clean condenser coils, clear drain lines, inspect and clean the ice maker, replace the water filter if needed, and recalibrate the thermostat for optimal temperature.' },
      { step: 3, title: 'Report & Recommendations', description: 'You receive a written report of findings with recommendations for any parts that should be replaced soon. We flag potential issues before they become emergencies.' },
    ],
  },

  'Washer Maintenance': {
    pricingTable: {
      diagnostic: 60,
      from: 215,
      rows: [
        { repair: 'Inlet hose replacement', price: 255 },
        { repair: 'Drain pump filter cleaning', price: 215 },
        { repair: 'Belt & bearing inspection', price: 250 },
        { repair: 'Door seal replacement (front-load)', price: 255 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Maintenance vs. Waiting for a Breakdown',
      intro: 'Washing machine maintenance prevents flooding, mold, and expensive repairs.',
      rows: [
        { situation: 'Annual hose inspection ($85)', repair: true, replace: false, note: 'Burst hoses are the #1 cause of washer-related flooding. Replacement hoses cost far less than water damage.' },
        { situation: 'Drum cleaning every 3 months ($75)', repair: true, replace: false, note: 'Prevents mold, mildew, and odors \u2014 especially in front-load washers.' },
        { situation: 'Drain pump filter cleaning ($65)', repair: true, replace: false, note: 'A clogged filter causes slow draining and pump strain. Cleaning extends pump life by years.' },
        { situation: 'Skipping maintenance entirely', repair: false, replace: true, note: 'Neglected washers develop bearing failures ($350+) and pump failures ($285+) within 6\u20138 years.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Musty smell from washer', meaning: 'Mold growing in the door gasket folds, drum, or detergent dispenser. Needs thorough cleaning.' },
      { symptom: 'Clothes not getting clean', meaning: 'Detergent buildup, clogged spray jets, or a worn agitator reducing wash effectiveness.' },
      { symptom: 'Washer vibrating excessively', meaning: 'Suspension springs or shock absorbers wearing out. Leveling and inspection needed.' },
      { symptom: 'Slow to fill or drain', meaning: 'Inlet screens or drain filter clogged with sediment and debris.' },
      { symptom: 'Rubber particles on clothes', meaning: 'Door boot seal deteriorating. Needs cleaning or replacement before it tears completely.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full System Inspection', description: 'We check hoses for bulging or cracks, inspect the drain pump filter, test the door latch, examine suspension components, and check for leaks at all connection points.' },
      { step: 2, title: 'Cleaning & Service', description: 'We clean the drum, door gasket folds, detergent dispenser, drain pump filter, and inlet screens. Front-load washers get a deep clean cycle to eliminate mold and odors.' },
      { step: 3, title: 'Report & Recommendations', description: 'Written report with findings. We flag worn hoses, weakening door seals, and components approaching end of life so you can plan ahead.' },
    ],
  },

  'Dryer Maintenance': {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Vent cleaning & inspection', price: 250 },
        { repair: 'Professional dryer cleaning', price: 290 },
        { repair: 'Belt & roller replacement', price: 265 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Maintenance vs. Waiting for a Breakdown',
      intro: 'Dryer maintenance prevents fires, saves energy, and extends equipment life.',
      rows: [
        { situation: 'Annual vent cleaning ($95)', repair: true, replace: false, note: 'Clogged vents cause 15,000+ house fires per year. Regular cleaning is the #1 dryer safety measure.' },
        { situation: 'Belt & roller check ($75)', repair: true, replace: false, note: 'Catching a fraying belt before it snaps prevents drum damage and emergency service calls.' },
        { situation: 'Heating element inspection ($65)', repair: true, replace: false, note: 'A failing element wastes energy and extends dry times. Early detection saves on utility bills.' },
        { situation: 'Skipping maintenance entirely', repair: false, replace: true, note: 'Blocked vents cause thermal fuse failures ($250+) and create serious fire hazards.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Clothes taking longer to dry', meaning: 'Almost always a restricted vent or clogged lint screen reducing airflow.' },
      { symptom: 'Dryer hot to the touch', meaning: 'Exhaust heat not venting properly. Check vent for blockage immediately \u2014 fire risk.' },
      { symptom: 'Burning smell during use', meaning: 'Lint accumulation near heating element. Needs immediate professional cleaning.' },
      { symptom: 'Loud thumping or squealing', meaning: 'Drum rollers or belt wearing out. Maintenance can extend their life before replacement is needed.' },
      { symptom: 'Lint on clothes after drying', meaning: 'Lint screen damaged or lint trap housing has gaps allowing lint to recirculate.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full System Inspection', description: 'We inspect the entire exhaust vent from dryer to exterior wall, test heating element performance, check belt and drum roller condition, and verify gas connections (gas dryers).' },
      { step: 2, title: 'Deep Cleaning', description: 'We clean the exhaust vent, lint trap housing, interior lint buildup around the heating element, and the exterior vent hood. Airflow measurements confirm proper venting.' },
      { step: 3, title: 'Report & Recommendations', description: 'Written report with vent airflow measurements, component condition notes, and recommendations for parts approaching end of life.' },
    ],
  },

  'Dishwasher Maintenance': {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Filter & spray arm cleaning', price: 250 },
        { repair: 'Drain line clearing', price: 265 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Maintenance vs. Waiting for a Breakdown',
      intro: 'Dishwasher maintenance keeps dishes clean and prevents leaks.',
      rows: [
        { situation: 'Monthly filter cleaning ($65)', repair: true, replace: false, note: 'Clogged filters are the #1 cause of poor cleaning performance and bad odors.' },
        { situation: 'Annual gasket inspection ($55)', repair: true, replace: false, note: 'A failing gasket leaks during every cycle. Catching it early prevents water damage to cabinetry.' },
        { situation: 'Drain line clearing ($75)', repair: true, replace: false, note: 'Prevents standing water, odors, and drain pump strain that leads to pump failure ($285+).' },
        { situation: 'Skipping maintenance entirely', repair: false, replace: true, note: 'Neglected dishwashers develop pump failures, control board corrosion, and leak damage within 5\u20137 years.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Dishes still dirty after cycle', meaning: 'Clogged filter, blocked spray arm jets, or low water temperature reducing cleaning effectiveness.' },
      { symptom: 'Standing water in bottom', meaning: 'Drain filter or drain hose partially clogged. Needs cleaning to restore proper drainage.' },
      { symptom: 'Bad odor when opening door', meaning: 'Food debris trapped in filter, door gasket folds, or spray arm nozzles.' },
      { symptom: 'White film on glassware', meaning: 'Hard water mineral deposits. Rinse aid dispenser may need refilling or adjustment.' },
      { symptom: 'Spots of rust inside', meaning: 'Rack tine coating worn through. Rack repair or replacement prevents rust from spreading to dishes.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full System Inspection', description: 'We inspect the filter, spray arms, door gasket, water inlet valve, drain pump, heating element, and rinse aid dispenser.' },
      { step: 2, title: 'Cleaning & Service', description: 'We deep-clean the filter assembly, clear spray arm nozzles, clean the door gasket, flush the drain line, and test water temperature and fill levels.' },
      { step: 3, title: 'Report & Recommendations', description: 'Written findings with component condition notes. We flag worn gaskets, weakening spray arms, and parts approaching replacement age.' },
    ],
  },

  'Oven Maintenance': {
    pricingTable: {
      diagnostic: 60,
      from: 250,
      rows: [
        { repair: 'Burner & igniter inspection', price: 255 },
        { repair: 'Gas connection safety check', price: 250 },
        { repair: 'Heating element test', price: 255 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Maintenance vs. Waiting for a Breakdown',
      intro: 'Oven and range maintenance ensures accurate cooking and gas safety.',
      rows: [
        { situation: 'Annual temperature calibration ($65)', repair: true, replace: false, note: 'An oven off by 25\u00b0F ruins baking results. Calibration restores accuracy.' },
        { situation: 'Gas connection safety check ($75)', repair: true, replace: false, note: 'Detects micro-leaks at fittings before they become dangerous. Essential for gas ovens and ranges.' },
        { situation: 'Door seal inspection ($55)', repair: true, replace: false, note: 'A worn seal lets heat escape, increasing cook times and energy waste by up to 20%.' },
        { situation: 'Skipping maintenance entirely', repair: false, replace: true, note: 'Igniter failures ($285), element burnouts ($265), and gas leaks are preventable with annual checks.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Uneven baking results', meaning: 'Temperature sensor drift or a failing convection fan. Calibration or sensor replacement fixes this.' },
      { symptom: 'Longer preheat times', meaning: 'Igniter weakening (gas) or heating element degrading (electric). Still works but nearing failure.' },
      { symptom: 'Gas odor when oven is off', meaning: 'Gas leak at valve or connection. Turn off gas supply and call for immediate service.' },
      { symptom: 'Oven door not sealing tightly', meaning: 'Hinges loosening or gasket wearing. Heat loss increases cook times and energy bills.' },
      { symptom: 'Self-clean not working', meaning: 'Door lock mechanism or high-limit thermostat may be failing.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full System Inspection', description: 'We test all burners, igniters, heating elements, temperature sensors, door seals, and gas connections. Temperature accuracy is verified with a calibrated probe.' },
      { step: 2, title: 'Cleaning & Calibration', description: 'We clean burner ports, inspect igniter condition, calibrate the thermostat, lubricate door hinges, and perform a gas leak check at all connections.' },
      { step: 3, title: 'Report & Recommendations', description: 'Written findings covering component condition, temperature accuracy, and any parts approaching end of life.' },
    ],
  },

  'Cooktop Maintenance': {
    pricingTable: {
      diagnostic: 60,
      from: 45,
      rows: [
        { repair: 'Igniter testing & cleaning', price: 250 },
        { repair: 'Gas connection check', price: 250 },
        { repair: 'Control knob & switch test', price: 45 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Maintenance vs. Waiting for a Breakdown',
      intro: 'Cooktop maintenance keeps burners efficient and prevents safety hazards.',
      rows: [
        { situation: 'Burner port cleaning ($65)', repair: true, replace: false, note: 'Clogged ports cause uneven flame and hot spots. Regular cleaning maintains even heat distribution.' },
        { situation: 'Gas connection safety check ($75)', repair: true, replace: false, note: 'Detects leaks before they become dangerous. Critical for all gas cooktops.' },
        { situation: 'Glass surface inspection ($55)', repair: true, replace: false, note: 'Catching micro-cracks early prevents electrical hazards on glass-ceramic cooktops.' },
        { situation: 'Skipping maintenance entirely', repair: false, replace: true, note: 'Neglected gas burners develop carbon buildup that damages igniters ($265+) and valves ($295+).' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Uneven or yellow flame', meaning: 'Burner ports clogged with food debris or grease. Cleaning restores proper blue flame.' },
      { symptom: 'Clicking but no ignition', meaning: 'Igniter electrode dirty or misaligned. Cleaning and adjustment usually resolves it.' },
      { symptom: 'Burner takes long to heat', meaning: 'Partially blocked gas flow or a weakening electric element approaching failure.' },
      { symptom: 'Scratches on glass surface', meaning: 'Improper cleaning technique. We can recommend proper care products and methods.' },
      { symptom: 'Knobs feel loose', meaning: 'Valve stem or knob shaft wearing. Should be inspected to prevent gas control issues.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full System Inspection', description: 'We test each burner zone, inspect igniters, check gas connections, examine the glass surface (if applicable), and test all control switches and knobs.' },
      { step: 2, title: 'Cleaning & Service', description: 'We deep-clean burner ports, clean and align igniters, perform a gas leak check, and inspect wiring connections under the cooktop.' },
      { step: 3, title: 'Report & Recommendations', description: 'Written report covering burner condition, igniter health, gas connection integrity, and any components needing attention.' },
    ],
  },

  'Wine Cooler Maintenance': {
    pricingTable: {
      diagnostic: 60,
      from: 149,
      rows: [
        { repair: 'Condenser coil cleaning', price: 75 },
        { repair: 'Door seal inspection', price: 55 },
        { repair: 'Temperature calibration', price: 65 },
        { repair: 'Fan & vibration check', price: 65 },
        { repair: 'Humidity level assessment', price: 55 },
        { repair: 'Full maintenance check (all above)', price: 149 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Maintenance vs. Waiting for a Breakdown',
      intro: 'Your wine collection is an investment. Maintenance protects it.',
      rows: [
        { situation: 'Annual coil cleaning ($75)', repair: true, replace: false, note: 'Dirty coils cause temperature fluctuations that damage wine. A $75 cleaning protects bottles worth thousands.' },
        { situation: 'Door seal check ($55)', repair: true, replace: false, note: 'A worn seal lets humid air in, causing condensation and label damage. Early detection prevents collection loss.' },
        { situation: 'Temperature calibration ($65)', repair: true, replace: false, note: 'Even 2\u20133\u00b0F drift can affect wine aging. Annual calibration maintains optimal storage conditions.' },
        { situation: 'Skipping maintenance entirely', repair: false, replace: true, note: 'A compressor failure in an unchecked unit can cost $495+ to repair \u2014 plus spoiled wine.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Temperature fluctuating', meaning: 'Dirty condenser coils, failing fan motor, or worn door seal preventing stable conditions.' },
      { symptom: 'Condensation on glass door', meaning: 'Anti-condensation heater failing or door gasket not sealing properly.' },
      { symptom: 'Vibration or humming', meaning: 'Compressor mounts loosening or unit not level. Vibration disturbs wine sediment and aging.' },
      { symptom: 'Interior light flickering', meaning: 'LED strip or door switch failing. Excessive heat from a failing light can affect nearby bottles.' },
      { symptom: 'Musty odor inside', meaning: 'Mold forming from humidity imbalance. Needs cleaning and humidity level adjustment.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Full System Inspection', description: 'We check compressor operation, temperature accuracy across all zones, door seal integrity, condenser coil condition, fan operation, and vibration levels.' },
      { step: 2, title: 'Cleaning & Calibration', description: 'We clean condenser coils, verify temperature in each zone, inspect and clean the door gasket, check humidity levels, and ensure the unit is level and vibration-free.' },
      { step: 3, title: 'Report & Recommendations', description: 'Written report with temperature readings, component condition, and recommendations for optimal wine storage conditions.' },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     COMMERCIAL PAGES
     ═══════════════════════════════════════════════════════════════ */

  'Commercial Refrigerator': {
    pricingTable: {
      diagnostic: 100,
      from: 250,
      rows: [
        { repair: 'Walk-in cooler compressor', price: 650 },
        { repair: 'Reach-in thermostat', price: 295 },
        { repair: 'Evaporator fan motor', price: 325 },
        { repair: 'Door gasket (walk-in)', price: 350 },
        { repair: 'Condenser fan motor', price: 295 },
        { repair: 'Digital controller', price: 395 },
        { repair: 'Defrost heater', price: 285 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Repair vs. Replacement \u2014 Commercial Refrigeration',
      intro: 'Commercial units are expensive to replace. Most repairs extend life by years.',
      rows: [
        { situation: 'Unit under 10 years old', repair: true, replace: false, note: 'Commercial refrigeration is built to last 15\u201320 years. Single-component failures are almost always worth repairing.' },
        { situation: 'Compressor failure on newer unit', repair: true, replace: false, note: 'Commercial compressor replacement ($650\u2013$1,200) is significant but far less than a $5,000\u2013$15,000 new unit.' },
        { situation: 'Multiple system failures on 15+ year unit', repair: false, replace: true, note: 'When compressor, controls, and seals all need work, combined costs may approach replacement value.' },
        { situation: 'Refrigerant leak (repairable)', repair: true, replace: false, note: 'Leak detection and repair ($350\u2013$600) saves the entire system. Only replace if the leak is in an inaccessible location.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Walk-in not holding temperature', meaning: 'Compressor failure, low refrigerant, dirty condenser coils, or failed evaporator fan \u2014 requires emergency priority service.' },
      { symptom: 'Reach-in freezing up', meaning: 'Defrost system failure: timer, heater element, or termination thermostat not cycling properly.' },
      { symptom: 'Compressor short-cycling', meaning: 'Start relay, overcharge/undercharge, dirty condenser, or faulty thermostat causing rapid on-off cycling.' },
      { symptom: 'Display case condensation', meaning: 'Anti-sweat heaters failing or door gaskets not sealing. Affects product visibility and food safety.' },
      { symptom: 'Digital controller error codes', meaning: 'Sensor failure, defrost issue, or compressor fault. Our tech reads all major brand codes on-site.' },
      { symptom: 'Rising energy bills', meaning: 'System working harder due to dirty coils, worn seals, or low refrigerant. A tune-up often cuts costs 15\u201325%.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Emergency Diagnostic', description: 'We arrive with diagnostic equipment to test compressor operation, refrigerant pressures, electrical components, defrost systems, and temperature accuracy. Walk-in cooler emergencies get priority scheduling.' },
      { step: 2, title: 'Parts & Written Quote', description: 'We stock common commercial parts (fan motors, thermostats, defrost components) on our truck. Compressors and controllers for True, Beverage-Air, Turbo Air, and Hoshizaki are available next business day.' },
      { step: 3, title: 'Repair & Verification', description: 'After repair, we monitor temperature recovery, verify compressor cycling, and confirm the unit reaches and holds the required temperature. All commercial repairs include our 180-day warranty.' },
    ],
  },

  'Commercial Washer': {
    pricingTable: {
      diagnostic: 100,
      from: 295,
      rows: [
        { repair: 'Commercial drain pump', price: 395 },
        { repair: 'Bearing & seal kit', price: 495 },
        { repair: 'Control board', price: 450 },
        { repair: 'Door lock assembly', price: 325 },
        { repair: 'Water inlet valve', price: 295 },
        { repair: 'Drive motor', price: 550 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Repair vs. Replacement \u2014 Commercial Washers',
      intro: 'Commercial washers handle heavy loads daily. Here\u2019s when repair makes sense.',
      rows: [
        { situation: 'Unit under 8 years old', repair: true, replace: false, note: 'Commercial washers last 10\u201315 years with proper maintenance. Most single repairs pay for themselves quickly.' },
        { situation: 'Bearing or seal failure', repair: true, replace: false, note: 'Bearing kits ($495) restore the machine to like-new condition. Far cheaper than $3,000\u2013$8,000 replacement.' },
        { situation: 'Multiple failures on aging unit', repair: false, replace: true, note: 'If motor, bearings, and electronics all need work, the cumulative cost may justify a new machine.' },
        { situation: 'Control board or pump issue', repair: true, replace: false, note: 'Individual component repairs ($295\u2013$450) are straightforward and extend machine life significantly.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Not draining completely', meaning: 'Clogged drain pump filter, failed pump motor, or kinked drain hose. Common in high-volume laundry operations.' },
      { symptom: 'Excessive vibration', meaning: 'Worn shock absorbers or unbalanced drum. Heavy commercial loads accelerate suspension wear.' },
      { symptom: 'Door won\u2019t lock', meaning: 'Failed door lock actuator or interlock switch. Machine won\u2019t start until the door lock is replaced.' },
      { symptom: 'Water temperature wrong', meaning: 'Mixing valve or inlet valve failure. Hot/cold supply not blending correctly for selected cycle.' },
      { symptom: 'Error codes flashing', meaning: 'Electronic fault codes indicate specific component failures. Our tech diagnoses all commercial washer brands.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Commercial Diagnostic', description: 'We test the motor, pump, bearings, door lock, inlet valves, control board, and all sensors. Vibration testing identifies suspension issues.' },
      { step: 2, title: 'Parts & Written Quote', description: 'We carry common commercial washer parts. Specialty components for Speed Queen, Maytag Commercial, and UniMac are available next business day.' },
      { step: 3, title: 'Repair & Verification', description: 'After repair, we run a complete cycle testing fill, wash, drain, and spin. We verify proper operation under load. 180-day warranty on all repairs.' },
    ],
  },

  'Commercial Dryer': {
    pricingTable: {
      diagnostic: 100,
      from: 295,
      rows: [
        { repair: 'Heating element / gas burner', price: 395 },
        { repair: 'Drum bearing & seal', price: 450 },
        { repair: 'Control board', price: 425 },
        { repair: 'Belt & tension assembly', price: 325 },
        { repair: 'Gas valve assembly', price: 395 },
        { repair: 'Exhaust blower motor', price: 375 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Repair vs. Replacement \u2014 Commercial Dryers',
      intro: 'Commercial dryers take heavy abuse. Most component failures are repairable.',
      rows: [
        { situation: 'Unit under 10 years old', repair: true, replace: false, note: 'Commercial dryers last 12\u201318 years. Heating element and belt repairs keep them running efficiently.' },
        { situation: 'Heating element or gas burner', repair: true, replace: false, note: 'The most common commercial dryer repair ($395). Restores full heating performance.' },
        { situation: 'Drum bearing failure', repair: true, replace: false, note: 'Bearing replacement ($450) is cost-effective compared to $4,000\u2013$10,000 for a new commercial dryer.' },
        { situation: 'Multiple failures on 15+ year unit', repair: false, replace: true, note: 'When motor, bearings, and controls all need work, a newer, more efficient machine is the better investment.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Not heating', meaning: 'Gas valve, igniter, or heating element failure. The #1 commercial dryer service call.' },
      { symptom: 'Long dry times', meaning: 'Restricted exhaust vent, lint buildup in the cabinet, or a weakening heating element.' },
      { symptom: 'Loud banging or squealing', meaning: 'Drum rollers, bearings, or belt wearing out from heavy commercial use.' },
      { symptom: 'Shuts off mid-cycle', meaning: 'Thermal fuse tripping from overheating \u2014 usually a vent restriction or failed blower motor.' },
      { symptom: 'Gas smell during operation', meaning: 'Gas valve or connection issue. Shut down the dryer and call for immediate service.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Commercial Diagnostic', description: 'We test the heating system, gas connections, drum bearings, belt condition, blower motor, and exhaust airflow. Temperature and airflow are measured at the vent outlet.' },
      { step: 2, title: 'Parts & Written Quote', description: 'We stock common commercial dryer parts including heating elements, igniters, belts, and thermal fuses. Heavy-duty parts for Speed Queen and Maytag Commercial ship next day.' },
      { step: 3, title: 'Repair & Verification', description: 'After repair, we run a full heat cycle, measure exhaust temperature, and verify proper drum rotation and airflow. 180-day warranty on all commercial dryer repairs.' },
    ],
  },

  'Commercial Oven': {
    pricingTable: {
      diagnostic: 100,
      from: 295,
      rows: [
        { repair: 'Gas valve assembly', price: 425 },
        { repair: 'Igniter / pilot assembly', price: 350 },
        { repair: 'Thermostat / temperature control', price: 375 },
        { repair: 'Convection fan motor', price: 395 },
        { repair: 'Door hinge & gasket', price: 295 },
        { repair: 'Control board', price: 450 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Repair vs. Replacement \u2014 Commercial Ovens',
      intro: 'Commercial ovens are built heavy-duty. Most repairs are far cheaper than replacement.',
      rows: [
        { situation: 'Unit under 12 years old', repair: true, replace: false, note: 'Commercial ovens last 15\u201325 years. Individual component repairs are almost always worthwhile.' },
        { situation: 'Igniter or gas valve failure', repair: true, replace: false, note: 'Common repairs ($350\u2013$425) that restore full heating. A fraction of a $5,000\u2013$20,000 new oven.' },
        { situation: 'Temperature control issues', repair: true, replace: false, note: 'Thermostat replacement or calibration ($375) restores cooking accuracy.' },
        { situation: 'Structural damage or firebox cracks', repair: false, replace: true, note: 'Major structural issues compromise safety. Replacement is the responsible choice.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Not reaching temperature', meaning: 'Igniter weakening, gas valve not opening fully, or thermostat calibration drift.' },
      { symptom: 'Uneven cooking', meaning: 'Convection fan motor failing, baffle damage, or hot spots from igniter position issues.' },
      { symptom: 'Pilot keeps going out', meaning: 'Thermocouple failure, draft issues, or gas pressure inconsistency.' },
      { symptom: 'Gas smell when oven is off', meaning: 'Gas valve not seating completely. Shut off gas and call immediately.' },
      { symptom: 'Door not closing tightly', meaning: 'Worn hinges or gasket in a high-use commercial environment. Heat loss increases cook times and energy costs.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Commercial Diagnostic', description: 'We test igniters, gas valves, thermostats, convection motors, safety controls, and door seals. Gas pressure and temperature accuracy are measured with professional instruments.' },
      { step: 2, title: 'Parts & Written Quote', description: 'We carry common commercial oven parts. Components for Vulcan, Garland, Blodgett, and other restaurant brands are available next business day.' },
      { step: 3, title: 'Repair & Verification', description: 'After repair, we verify temperature accuracy, test all heating modes, check gas connections for leaks, and confirm proper door seal. 180-day warranty.' },
    ],
  },

  'Commercial Dishwasher': {
    pricingTable: {
      diagnostic: 100,
      from: 295,
      rows: [
        { repair: 'Wash pump motor', price: 450 },
        { repair: 'Drain pump', price: 350 },
        { repair: 'Heating element / booster', price: 395 },
        { repair: 'Door gasket & latch', price: 295 },
        { repair: 'Spray arm assembly', price: 325 },
        { repair: 'Control board', price: 425 },
      ],
      luxury: [],
    },
    comparisonTable: {
      title: 'Repair vs. Replacement \u2014 Commercial Dishwashers',
      intro: 'Commercial dishwashers run dozens of cycles daily. Most failures are repairable.',
      rows: [
        { situation: 'Unit under 8 years old', repair: true, replace: false, note: 'Commercial dishwashers last 10\u201315 years. Component repairs keep them running through heavy use.' },
        { situation: 'Pump or heating element', repair: true, replace: false, note: 'Pump and heater repairs ($350\u2013$450) restore wash performance. Far less than $4,000\u2013$12,000 replacement.' },
        { situation: 'Sanitizing temp not reached', repair: true, replace: false, note: 'Booster heater or thermostat repair ensures health code compliance at a fraction of replacement cost.' },
        { situation: 'Multiple major failures', repair: false, replace: true, note: 'When pump, heater, and controls all fail on an aging unit, a new energy-efficient machine often saves more long-term.' },
      ],
    },
    symptomsChecklist: [
      { symptom: 'Dishes not clean', meaning: 'Wash pump weakening, spray arms clogged, or water temperature too low for proper sanitization.' },
      { symptom: 'Not draining', meaning: 'Drain pump failure, clogged drain screen, or blocked drain hose. Common in high-volume kitchens.' },
      { symptom: 'Water not hot enough', meaning: 'Booster heater failure. Sanitization requires 180\u00b0F final rinse \u2014 a health code requirement.' },
      { symptom: 'Leaking from door', meaning: 'Door gasket worn from hundreds of daily open/close cycles. Needs replacement.' },
      { symptom: 'Machine won\u2019t start cycle', meaning: 'Door interlock switch, control board, or fill valve failure preventing cycle initiation.' },
    ],
    diagnosisSteps: [
      { step: 1, title: 'Commercial Diagnostic', description: 'We test the wash pump, drain pump, heating element, booster heater, fill valve, door latch, and control board. Water temperature is measured at wash and rinse stages.' },
      { step: 2, title: 'Parts & Written Quote', description: 'We carry common commercial dishwasher parts. Components for Hobart, Jackson, CMA, and Ecolab are available next business day.' },
      { step: 3, title: 'Repair & Verification', description: 'After repair, we run a complete wash cycle, verify sanitization temperature reaches 180\u00b0F, check for leaks, and confirm proper drain function. 180-day warranty.' },
    ],
  },


};

export default SERVICE_CONTENT;
