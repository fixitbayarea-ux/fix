export const SERVICE_PRICING = {
  'Refrigerator':  { from: 255, repairs: 'Thermostat $150–$200 · ice maker $150–$250 · evaporator fan $120–$200 · door seal $80–$150 · compressor $400–$600', luxury: 'Sub-Zero from $555 · Viking from $325 · Thermador from $495 · Miele from $445 · Built-in from $445' },
  'Freezer':       { from: 255, repairs: 'Defrost heater $120–$200 · thermostat $150–$200 · evaporator fan $120–$200 · door seal $80–$150 · compressor $400–$600', luxury: null },
  'Ice Maker':     { from: 150, repairs: 'Water inlet valve $100–$180 · ice maker assembly $150–$250 · thermostat $100–$180 · water line $80–$150', luxury: null },
  'Washer':        { from: 240, repairs: 'Control board $200–$350 · drum bearing $150–$250 · water pump $120–$200 · door latch $80–$150 · drain pump $120–$200', luxury: null },
  'Dryer':         { from: 235, repairs: 'Heating element $100–$200 · thermal fuse $80–$150 · drum belt $80–$150 · control board $180–$300 · gas valve $150–$250', luxury: null },
  'Dishwasher':    { from: 195, repairs: 'Drain pump $120–$200 · door latch $80–$150 · spray arm $80–$130 · water inlet valve $100–$180 · control board $180–$300', luxury: 'Bosch from $315 · Miele from $395 · Thermador from $315' },
  'Oven':          { from: 230, repairs: 'Igniter $120–$200 · bake element $100–$180 · temperature sensor $100–$180 · control board $200–$350', luxury: 'Viking from $295 · Thermador from $425 · Miele from $640 · Bosch from $315 · Built-in from $395' },
  'Range':         { from: 230, repairs: 'Igniter $120–$200 · bake element $100–$180 · burner assembly $120–$200 · control board $200–$350', luxury: 'Viking from $295 · Thermador from $425 · Wolf from $395' },
  'Stove':         { from: 230, repairs: 'Igniter $100–$180 · burner assembly $120–$200 · gas valve $150–$250 · control board $200–$350', luxury: 'Viking from $295 · Thermador from $445 · Wolf from $395' },
  'Cooktop':       { from: 230, repairs: 'Igniter $100–$180 · burner assembly $120–$200 · induction element $180–$300 · control board $200–$350', luxury: 'Viking from $295 · Thermador from $425' },
  'Wine Cooler':   { from: 195, repairs: 'Compressor $250–$450 · thermostat $120–$200 · fan motor $100–$180 · door seal $80–$150 · control board $180–$300', luxury: null },
  'Wine Refrigerator': { from: 195, repairs: 'Compressor $250–$450 · thermostat $120–$200 · fan motor $100–$180 · door seal $80–$150', luxury: null },
  'Garbage Disposal': { from: 195, repairs: 'Motor repair · jam clearing · leak repair · full replacement. Most repairs completed fast', luxury: null },
  'Commercial':    { from: 445, repairs: 'Refrigerators, freezers, ovens, dishwashers, laundry equipment. Fast turnaround for businesses', luxury: null },
  'Residential':   { from: 195, repairs: 'All major home appliances. Refrigerators, washers, dryers, ovens, dishwashers', luxury: null },
};

export const MAINTENANCE_PRICING = {
  'Refrigerator':  { from: 195, includes: 'Coil cleaning, door seal check, temperature calibration, ice maker inspection, drain cleaning' },
  'Washer':        { from: 195, includes: 'Drum cleaning, belt & bearing inspection, hose check, filter cleaning, balance test' },
  'Dryer':         { from: 195, includes: 'Vent cleaning, drum inspection, heating element check, belt & bearing check, lint trap deep clean' },
  'Dishwasher':    { from: 195, includes: 'Filter cleaning, spray arm check, door seal inspection, water inlet valve test, drain check' },
  'Oven':          { from: 195, includes: 'Burner inspection, igniter test, temperature calibration, door seal check, interior cleaning' },
  'Cooktop':       { from: 195, includes: 'Burner cleaning, igniter test, gas connection check, surface cleaning, control check' },
  'Wine Cooler':   { from: 195, includes: 'Coil cleaning, temperature calibration, door seal check, fan inspection, humidity check' },
};
