#!/bin/bash
# Script to add ServiceAreasList import and usage to all maintenance pages

MAINTENANCE_DIR="/app/frontend/src/components/pages/maintenance"

for file in "$MAINTENANCE_DIR"/*Maintenance.js; do
  if [ -f "$file" ]; then
    filename=$(basename "$file")
    echo "Processing: $filename"
    
    # Check if already has ServiceAreasList
    if grep -q "ServiceAreasList" "$file"; then
      echo "  ✅ Already has ServiceAreasList"
      continue
    fi
    
    # Add import after ApplianceRepairPageNew import
    sed -i "/import ApplianceRepairPageNew/a import ServiceAreasList from '../../ServiceAreasList';" "$file"
    
    # Add ServiceAreasList before closing tag
    sed -i 's|    />|    >\n      <ServiceAreasList />\n    </ApplianceRepairPageNew>|' "$file"
    
    echo "  ✅ Added ServiceAreasList"
  fi
done

echo "Done!"
