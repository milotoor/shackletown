#!/usr/bin/env python3
import os
import requests
from bs4 import BeautifulSoup

# List of crew members and their Wikipedia URLs
make_url = lambda name: f"https://en.wikipedia.org/wiki/{name}"
crew_members = {
    "ernest_shackleton": make_url("Ernest_Shackleton"),
    "frank_wild": make_url("Frank_Wild"),
    "frank_worsley": make_url("Frank_Worsley"),
    "lionel_greenstreet": make_url("Lionel_Greenstreet"),
    "tom_crean": make_url("Tom_Crean_(explorer)"),
    "alfred_cheetham": make_url("Alfred_Cheetham"),
    "hubert_hudson": make_url("Hubert_Hudson"),
    "lewis_rickinson": make_url("Lewis_Rickinson"),
    "alexander_kerr": make_url("Alexander_Kerr"),
    "alexander_macklin": make_url("Alexander_Macklin"),
    "james_mcilroy": make_url("James_McIlroy_(surgeon)"),
    "james_wordie": make_url("James_Wordie"),
    "leonard_hussey": make_url("Leonard_Hussey"),
    "reginald_james": make_url("Reginald_W._James"),
    "robert_clark": make_url("Robert_Clark_(zoologist)"),
    "frank_hurley": make_url("Frank_Hurley"),
    "george_marston": make_url("George_Marston_(artist)"),
    "thomas_orde_lees": make_url("Thomas_Orde-Lees"),
    "harry_mcnish": make_url("Harry_McNish"),
    "charles_green": make_url("Charles_Green_(cook)"),
    "walter_how": make_url("Walter_How"),
    "william_bakewell": make_url("William_Lincoln_Bakewell"),
    "timothy_mccarthy": make_url("Timothy_McCarthy_(sailor)"),
    "thomas_mcleod": make_url("Thomas_McLeod_(sailor)"),
    "john_vincent": make_url("John_Vincent_(sailor)"),
    "ernest_holness": make_url("Ernest_Holness"),
    "william_stephenson": make_url("William_Stephenson_(sailor)"),
    "perce_blackborow": make_url("Perce_Blackborow")
}

# Directory to save images
output_dir = "public/crew"
os.makedirs(output_dir, exist_ok=True)

def download_image(url, file_path):
    response = requests.get(url)
    if response.status_code == 200:
        with open(file_path, 'wb') as file:
            file.write(response.content)
        print(f"Image saved to {file_path}")
    else:
        print(f"Failed to download image from {url}, {response}")

def scrape_image_url(wikipedia_url):
    response = requests.get(wikipedia_url)
    soup = BeautifulSoup(response.content, 'html.parser')
    # Find the first image in the infobox
    infobox = soup.find('table', {'class': 'infobox'})
    if infobox:
        image = infobox.find('img')
        if image:
            return "https:" + image['src']
    return None

for name, url in crew_members.items():
    image_url = scrape_image_url(url)
    if image_url:
        file_extension = image_url.split('.')[-1]
        file_path = os.path.join(output_dir, f"{name}.{file_extension}")
        download_image(image_url, file_path)
    else:
        print(f"No image found for {name}")
