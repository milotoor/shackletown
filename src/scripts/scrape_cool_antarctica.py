#!/usr/bin/env python3
import os
import requests
from bs4 import BeautifulSoup
import yaml

output_dir = "public/crew"

# New list to store dictionaries with 'url' and 'name'
crew_data = []

# Read URLs and names from bio.yml files in the public/crew directory
for crew_member in os.listdir(output_dir):
    bio_path = os.path.join(output_dir, crew_member, 'bio.yml')
    if os.path.isfile(bio_path):
        with open(bio_path, 'r') as file:
            bio_data = yaml.safe_load(file)
            url = bio_data.get('links', {}).get('cool_antarctica')
            if url:
                # Use the directory name as the crew member's name
                crew_data.append({'url': url, 'name': crew_member})

# Directory to save images
os.makedirs(output_dir, exist_ok=True)

def download_image(url, file_path):
    response = requests.get(f"https://www.coolantarctica.com/Antarctica%20fact%20file/History/biography/{url}")
    if response.status_code == 200:
        with open(file_path, 'wb') as file:
            file.write(response.content)
        print(f"Image saved to {file_path}")
    else:
        print(f"Failed to download image from {url}")

def scrape_image_url(page_url):
    response = requests.get(page_url)
    soup = BeautifulSoup(response.content, 'html.parser')
    # Find the first image in the <main> section
    main_section = soup.find('div', class_='main')
    if main_section:
        image = main_section.find('img')
        if image:
            return image['src']
    return None

# Mapping of URLs to crew member names from crew.md
crew_mapping = {
    "bakewell_william": "william_bakewell",
    "blackborrow_percy": "perce_blackborow",
    "cheetham_alfred": "alfred_cheetham",
    "clark_robert": "robert_clark",
    "crean_thomas": "tom_crean",
    "green_charles": "charles_green",
    "greenstreet_lionel": "lionel_greenstreet",
    "holness_ernest": "ernest_holness",
    "how_walter": "walter_how",
    "hudson_hubert": "hubert_hudson",
    "hurley_frank": "frank_hurley",
    "hussey_leonard": "leonard_hussey",
    "james_reginald": "reginald_james",
    "kerr_alexander": "alexander_kerr",
    "macklin_alexander": "alexander_macklin",
    "marston_george": "george_marston",
    "mccarthy_timothy": "timothy_mccarthy",
    "mcilroy_james": "james_mcilroy",
    "mcleod_thomas": "thomas_mcleod",
    "mcnish_henry": "harry_mcnish",
    "orde-lees_thomas": "thomas_orde_lees",
    "rickinson_louis": "lewis_rickinson",
    "shackleton_ernest": "ernest_shackleton",
    "stephenson_william": "william_stephenson",
    "vincent_john": "john_vincent",
    "wild_frank": "frank_wild",
    "wordie_james": "james_wordie",
    "worsley_frank": "frank_worsley"
}

for data in crew_data:
    url = data['url']
    crew_name = data['name']
    image_url = scrape_image_url(url)
    if image_url:
        file_extension = image_url.split('.')[-1]
        file_path = os.path.join(output_dir, crew_name, f"01.{file_extension}")
        download_image(image_url, file_path)
    else:
        print(f"No image found for {crew_name}")