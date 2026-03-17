"""
Import existing service pages into CMS database
This script reads the existing React components and creates CMS entries
"""

import os
import sys
import asyncio
from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorClient
import uuid

# Add parent directory to path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
DB_NAME = os.environ.get('DB_NAME', 'fixitbay_db')

# Data for existing service pages
SERVICE_PAGES_DATA = [
    {
        "id": "refrigerator-repair",
        "title": "Refrigerator Repair",
        "subtitle": "San Francisco & Bay Area",
        "meta_title": "Refrigerator Repair in San Francisco & Bay Area | FixitBay",
        "meta_description": "Expert refrigerator repair in San Francisco & Bay Area. $60 diagnostic applied to repair. 6-month warranty. Same-day service. Call (760) 543-5733.",
        "h1": "Refrigerator Repair",
        "hero_image": "/images/refrigerator-repair.jpg",
        "intro_paragraphs": [
            "When your refrigerator stops cooling, leaks water, or makes strange noises, FixitBay provides fast, reliable repair service across San Francisco, the Peninsula, and North Bay. Our licensed technicians arrive fully equipped to diagnose and fix most issues on the same visit. We charge a transparent $60 diagnostic fee that's fully applied to your repair cost when you proceed—no hidden charges, just honest service.",
            "Our refrigerator repair process begins with a comprehensive inspection of all major components: compressor, evaporator coils, condenser fan, thermostat, door seals, and defrost system. We test temperature consistency across compartments, check for refrigerant leaks, and inspect electronic controls. Whether you're dealing with cooling failures, ice maker problems, water leaks, or unusual sounds, we have the expertise to restore your appliance quickly.",
            "We service all refrigerator types—French door, side-by-side, top-freezer, bottom-freezer, and built-in models—from leading brands like Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, and more. Our technicians carry common replacement parts and specialized tools, allowing us to complete most repairs during the first visit. Every repair is backed by our 6-month warranty on parts and labor, giving you confidence that the job is done right."
        ],
        "common_problems": [
            {"title": "Not Cooling Properly", "description": "Temperature issues, warm spots, or inconsistent cooling throughout the refrigerator compartments."},
            {"title": "Water Leaking Inside or Outside", "description": "Puddles around the refrigerator, water pooling inside, or dripping from dispensers."},
            {"title": "Ice Maker Not Working", "description": "No ice production, strange noises, ice taste issues, or ice dispenser problems."},
            {"title": "Strange Noises", "description": "Loud humming, clicking, buzzing, or rattling sounds coming from the refrigerator."},
            {"title": "Freezer Issues", "description": "Freezer not freezing, frost buildup, or temperature control problems."}
        ],
        "brands": ["Whirlpool", "GE", "Samsung", "LG", "Frigidaire", "Maytag", "KitchenAid", "Bosch", "Sub-Zero", "Viking", "Thermador", "Miele"],
        "faqs": [
            {
                "question": "How much does refrigerator repair cost in San Francisco & Bay Area?",
                "answer": "Our refrigerator repairs start with a $60 diagnostic visit that's fully applied to your repair cost if you proceed. Most common repairs like thermostat replacement, door seal fixes, or defrost system repairs range from $150-$300. More complex issues like compressor replacement may cost $350-$550. We provide upfront pricing before starting any work—no hidden fees or surprises."
            },
            {
                "question": "Should I repair or replace my refrigerator that's not cooling?",
                "answer": "For refrigerators under 8-10 years old, repair is usually the best choice. Issues like faulty thermostats, clogged defrost drains, worn door gaskets, or failed fans are cost-effective fixes. If your refrigerator is older and the compressor has failed, replacement may be more economical. Our licensed technicians will assess your specific model and provide honest recommendations during the diagnostic visit."
            }
        ],
        "internal_links": ["/", "/service-areas", "/contact", "/washer-repair", "/dryer-repair"],
        "is_published": True
    },
    {
        "id": "washer-repair",
        "title": "Washer Repair",
        "subtitle": "San Francisco & Bay Area",
        "meta_title": "Washer Repair in San Francisco & Bay Area | FixitBay",
        "meta_description": "Professional washer repair in San Francisco & Bay Area. $60 diagnostic applied to repair. 6-month warranty. Same-day service. Call (760) 543-5733.",
        "h1": "Washer Repair",
        "hero_image": "/images/washer-repair.jpg",
        "intro_paragraphs": [
            "When your washing machine won't spin, drain, or start, FixitBay delivers fast, professional repair service throughout San Francisco, the Peninsula, and North Bay. Our licensed and insured technicians diagnose and fix most issues on the same visit, carrying an extensive inventory of common replacement parts in our service vehicles. We charge a transparent $60 diagnostic fee that's fully applied to your repair cost when you proceed—honest pricing from start to finish.",
            "Our washer repair process includes a thorough inspection of all major components and systems. We test functionality, check for underlying issues, and identify the root cause of problems. Whether you're dealing with mechanical failures, electrical issues, or component malfunctions, we have the expertise and parts to restore your washer quickly and professionally.",
            "We service all washer types—front-load, top-load, high-efficiency (HE), and stackable washer/dryer combos. Our technicians are trained on all major brands including Whirlpool, Maytag, GE, Samsung, LG, Bosch, and more. Every repair is backed by our comprehensive 6-month warranty on parts and labor."
        ],
        "common_problems": [
            {"title": "Not Spinning", "description": "Washer won't spin, clothes stay soaking wet, or spin cycle is weak."},
            {"title": "Won't Drain", "description": "Water remains in the drum, drain pump not working, or slow drainage."},
            {"title": "Leaking Water", "description": "Puddles around washer, hose leaks, or door seal failure."},
            {"title": "Won't Fill with Water", "description": "No water entering drum, slow fill, or water inlet valve issues."},
            {"title": "Loud Noises", "description": "Grinding, banging, or squealing sounds during wash or spin cycles."}
        ],
        "brands": ["Whirlpool", "Maytag", "GE", "Samsung", "LG", "Bosch", "Frigidaire", "KitchenAid", "Kenmore"],
        "faqs": [
            {
                "question": "How much does washer repair cost in San Francisco & Bay Area?",
                "answer": "Washer repair costs vary by issue. Common repairs like replacing a door latch, drain pump, or water inlet valve typically range from $150-$280. More complex repairs involving the drum, motor, or transmission may cost $300-$500. Our $60 diagnostic fee is fully applied to your repair cost. We provide clear, upfront pricing before starting any work."
            }
        ],
        "internal_links": ["/", "/service-areas", "/contact", "/refrigerator-repair", "/dryer-repair"],
        "is_published": True
    },
    {
        "id": "dryer-repair",
        "title": "Dryer Repair",
        "subtitle": "San Francisco & Bay Area",
        "meta_title": "Dryer Repair in San Francisco & Bay Area | FixitBay",
        "meta_description": "Professional dryer repair in San Francisco & Bay Area. $60 diagnostic applied to repair. 6-month warranty. Same-day service. Call (760) 543-5733.",
        "h1": "Dryer Repair",
        "hero_image": "/images/dryer-repair.jpg",
        "intro_paragraphs": [
            "When your dryer won't heat, start, or tumble, FixitBay provides fast, reliable repair service across San Francisco, the Peninsula, and North Bay. Our licensed technicians arrive fully equipped to diagnose and fix most issues on the same visit. We charge a transparent $60 diagnostic fee that's fully applied to your repair cost when you proceed.",
            "Our dryer repair process includes a thorough inspection of all major components: heating element, thermal fuse, thermostat, motor, belt, and control board. We test functionality, check for underlying issues, and identify the root cause of problems.",
            "We service both gas and electric dryers from all major brands. Every repair is backed by our comprehensive 6-month warranty on parts and labor."
        ],
        "common_problems": [
            {"title": "Not Heating", "description": "Dryer runs but clothes stay wet, no heat, or takes multiple cycles to dry."},
            {"title": "Won't Start", "description": "Dryer won't turn on, door won't close, or no power to unit."},
            {"title": "Not Tumbling", "description": "Drum won't spin, belt broken, or motor failure."},
            {"title": "Loud Noises", "description": "Squealing, thumping, grinding, or rattling sounds during operation."},
            {"title": "Overheating", "description": "Dryer gets too hot, shuts off mid-cycle, or burns clothes."}
        ],
        "brands": ["Whirlpool", "Maytag", "GE", "Samsung", "LG", "Bosch", "Frigidaire", "KitchenAid"],
        "faqs": [
            {
                "question": "How much does dryer repair cost in San Francisco & Bay Area?",
                "answer": "Dryer repair costs depend on the issue. Common repairs like replacing a heating element, thermal fuse, or belt typically range from $150-$280. More complex repairs involving the motor or control board may cost $280-$450. Our $60 diagnostic fee is fully credited toward your repair."
            }
        ],
        "internal_links": ["/", "/service-areas", "/contact", "/refrigerator-repair", "/washer-repair"],
        "is_published": True
    },
    {
        "id": "dishwasher-repair",
        "title": "Dishwasher Repair",
        "subtitle": "San Francisco & Bay Area",
        "meta_title": "Dishwasher Repair in San Francisco & Bay Area | FixitBay",
        "meta_description": "Professional dishwasher repair in San Francisco & Bay Area. $60 diagnostic applied to repair. 6-month warranty. Same-day service. Call (760) 543-5733.",
        "h1": "Dishwasher Repair",
        "hero_image": "/images/dishwasher-repair.jpg",
        "intro_paragraphs": [
            "When your dishwasher won't drain, clean, or start, FixitBay provides fast, professional repair service throughout San Francisco, the Peninsula, and North Bay. Our licensed technicians diagnose and fix most issues on the same visit.",
            "We service all major dishwasher brands and models. Every repair is backed by our comprehensive 6-month warranty on parts and labor.",
            "Our transparent pricing starts with a $60 diagnostic fee that's fully applied to your repair cost when you proceed."
        ],
        "common_problems": [
            {"title": "Won't Drain", "description": "Water stays in bottom, drain pump failure, or clogged filter."},
            {"title": "Not Cleaning Dishes", "description": "Dishes come out dirty, spray arms clogged, or detergent dispenser broken."},
            {"title": "Leaking Water", "description": "Puddles on floor, door seal worn, or cracked tub."},
            {"title": "Won't Start", "description": "No power, door latch broken, or control panel unresponsive."}
        ],
        "brands": ["Bosch", "KitchenAid", "Whirlpool", "GE", "Samsung", "LG", "Miele"],
        "faqs": [
            {
                "question": "How much does dishwasher repair cost in San Francisco & Bay Area?",
                "answer": "Dishwasher repair costs vary by issue. Common repairs like replacing a drain pump, door latch, or heating element typically range from $150-$280. More complex repairs may cost $280-$450."
            }
        ],
        "internal_links": ["/", "/service-areas", "/contact", "/refrigerator-repair", "/oven-repair"],
        "is_published": True
    },
    {
        "id": "oven-repair",
        "title": "Oven Repair",
        "subtitle": "San Francisco & Bay Area",
        "meta_title": "Oven Repair in San Francisco & Bay Area | FixitBay",
        "meta_description": "Professional oven repair in San Francisco & Bay Area. $60 diagnostic applied to repair. 6-month warranty. Same-day service. Call (760) 543-5733.",
        "h1": "Oven Repair",
        "hero_image": "/images/oven-repair.jpg",
        "intro_paragraphs": [
            "When your oven won't heat, reach temperature, or start, FixitBay provides fast, professional repair service throughout San Francisco, the Peninsula, and North Bay.",
            "We service both gas and electric ovens, ranges, and cooktops. Our technicians are trained to work with all major brands and follow strict safety procedures.",
            "Every repair is backed by our comprehensive 6-month warranty on parts and labor."
        ],
        "common_problems": [
            {"title": "Not Heating", "description": "Oven won't reach temperature, no heat, or uneven heating."},
            {"title": "Temperature Issues", "description": "Oven too hot or too cold, inaccurate temperature, or poor calibration."},
            {"title": "Burners Not Working", "description": "Gas burners won't ignite, electric elements not heating, or weak flame."},
            {"title": "Igniter Problems", "description": "Gas oven igniter glows but won't light, weak igniter, or delayed ignition."}
        ],
        "brands": ["GE", "Whirlpool", "Frigidaire", "Bosch", "Samsung", "LG", "Thermador", "Viking"],
        "faqs": [
            {
                "question": "How much does oven repair cost in San Francisco & Bay Area?",
                "answer": "Oven repair costs vary by issue. Common repairs like replacing an igniter, heating element, or temperature sensor typically range from $150-$300. More complex repairs may cost $300-$500."
            }
        ],
        "internal_links": ["/", "/service-areas", "/contact", "/refrigerator-repair", "/dishwasher-repair"],
        "is_published": True
    },
    {
        "id": "ice-maker-repair",
        "title": "Ice Maker Repair",
        "subtitle": "San Francisco & Bay Area",
        "meta_title": "Ice Maker Repair in San Francisco & Bay Area | FixitBay",
        "meta_description": "Professional ice maker repair in San Francisco & Bay Area. $60 diagnostic applied to repair. 6-month warranty. Same-day service. Call (760) 543-5733.",
        "h1": "Ice Maker Repair",
        "hero_image": "/images/ice-maker-repair.jpg",
        "intro_paragraphs": [
            "When your ice maker stops making ice, leaks water, or jams, FixitBay provides fast, reliable repair service across San Francisco, the Peninsula, and North Bay.",
            "We service ice makers in all major refrigerator brands plus standalone ice maker units.",
            "Every repair is backed by our comprehensive 6-month warranty on parts and labor."
        ],
        "common_problems": [
            {"title": "Not Making Ice", "description": "No ice production, ice maker stopped working, or very slow ice production."},
            {"title": "Water Leaking", "description": "Water leaks around ice maker, dripping from dispenser, or puddles in freezer."},
            {"title": "Ice Tastes Bad", "description": "Ice has strange taste, smells bad, or tastes like plastic."},
            {"title": "Dispenser Not Working", "description": "Ice won't dispense, dispenser motor failure, or mechanical jam."}
        ],
        "brands": ["GE", "Whirlpool", "Samsung", "LG", "Frigidaire", "Sub-Zero", "Scotsman"],
        "faqs": [
            {
                "question": "How much does ice maker repair cost in San Francisco & Bay Area?",
                "answer": "Ice maker repair costs vary by issue. Common repairs like replacing a water inlet valve, ice maker assembly, or water filter typically range from $150-$280."
            }
        ],
        "internal_links": ["/", "/service-areas", "/contact", "/refrigerator-repair", "/freezer-repair"],
        "is_published": True
    }
]

async def import_pages():
    """Import all service pages into MongoDB"""
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]
    
    print(f"📦 Импорт страниц услуг в базу данных...")
    print(f"Подключение к: {MONGO_URL}")
    print(f"База данных: {DB_NAME}\n")
    
    # Clear existing service pages
    deleted = await db.service_pages.delete_many({})
    print(f"🗑️  Удалено существующих записей: {deleted.deleted_count}\n")
    
    success_count = 0
    for page_data in SERVICE_PAGES_DATA:
        try:
            # Add timestamps
            page_data['created_at'] = datetime.utcnow()
            page_data['updated_at'] = datetime.utcnow()
            
            # Insert into database
            await db.service_pages.insert_one(page_data)
            print(f"✅ Импортировано: {page_data['title']}")
            success_count += 1
            
        except Exception as e:
            print(f"❌ Ошибка при импорте {page_data.get('title', 'Unknown')}: {str(e)}")
    
    print(f"\n✅ Успешно импортировано: {success_count}/{len(SERVICE_PAGES_DATA)} страниц")
    client.close()

if __name__ == "__main__":
    asyncio.run(import_pages())
