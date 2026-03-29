export const SERVICE_PRICING = {
  'Refrigerator':  { from: 250, repairs: 'Thermostat from $295 · Ice maker from $295 · Evaporator fan from $285 · Door seal from $250', luxury: 'Sub-Zero from $555 · Viking from $450 · Thermador from $495 · Miele from $445 · Built-in from $500' },
  'Freezer':       { from: 250, repairs: 'Defrost heater from $285 · Thermostat from $295 · Evaporator fan from $285 · Door seal from $250', luxury: null },
  'Ice Maker':     { from: 250, repairs: 'Water inlet valve from $265 · Ice maker assembly from $295 · Thermostat from $265 · Water line from $250', luxury: null },
  'Washer':        { from: 250, repairs: 'Control board from $350 · Drum bearing from $295 · Water pump from $285 · Door latch from $250 · Drain pump from $285', luxury: null },
  'Dryer':         { from: 250, repairs: 'Heating element from $265 · Thermal fuse from $250 · Drum belt from $250 · Control board from $350 · Gas valve from $295', luxury: null },
  'Dishwasher':    { from: 250, repairs: 'Drain pump from $285 · Door latch from $250 · Spray arm from $250 · Water inlet valve from $265 · Control board from $350', luxury: 'Bosch from $315 · Miele from $395 · Thermador from $315' },
  'Oven':          { from: 250, repairs: 'Igniter from $285 · Bake element from $265 · Temperature sensor from $265 · Control board from $350', luxury: 'Viking from $450 · Thermador from $495 · Miele from $640 · Bosch from $315 · Built-in from $500' },
  'Range':         { from: 250, repairs: 'Igniter from $285 · Bake element from $265 · Burner assembly from $285 · Control board from $350', luxury: 'Viking from $450 · Thermador from $495 · Wolf from $395' },
  'Stove':         { from: 250, repairs: 'Igniter from $265 · Burner assembly from $285 · Gas valve from $295 · Control board from $350', luxury: 'Viking from $450 · Thermador from $495 · Wolf from $395' },
  'Cooktop':       { from: 250, repairs: 'Igniter from $265 · Burner assembly from $285 · Induction element from $350 · Control board from $350', luxury: 'Viking from $450 · Thermador from $495' },
  'Wine Cooler':   { from: 250, repairs: 'Thermostat from $285 · Fan motor from $265 · Door seal from $250 · Control board from $350', luxury: null },
  'Wine Refrigerator': { from: 250, repairs: 'Thermostat from $285 · Fan motor from $265 · Door seal from $250', luxury: null },
  'Commercial':    { from: 445, repairs: 'Refrigerators, freezers, ovens, dishwashers, laundry equipment. Fast turnaround for businesses', luxury: null },
  'Residential':   { from: 250, repairs: 'All major home appliances. Refrigerators, washers, dryers, ovens, dishwashers', luxury: null },
};

export const MAINTENANCE_PRICING = {
  'Refrigerator':  { from: 195, includes: 'Coil cleaning, door seal check, temperature calibration, ice maker inspection, drain cleaning' },
  'Washer':        { from: 195, includes: 'Drum cleaning, belt & bearing inspection, hose check, filter cleaning, balance test' },
  'Dryer':         { from: 195, includes: 'Vent cleaning, drum inspection, heating element check, belt & bearing check, lint trap deep clean' },
  'Dishwasher':    { from: 195, includes: 'Filter cleaning, spray arm check, door seal inspection, water inlet valve test, drain check' },
  'Oven':          { from: 195, includes: 'Burner inspection, igniter test, temperature calibration, door seal check, interior cleaning' },
  'Cooktop':       { from: 195, includes: 'Burner cleaning, igniter test, gas connection check, surface cleaning, control check' },
  'Wine Cooler':   { from: 195, includes: 'Coil cleaning, temperature calibration, door seal check, fan inspection, humidity check' },
};
