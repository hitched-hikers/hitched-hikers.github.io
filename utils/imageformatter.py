import sys
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--urls", type=str)
d = vars(parser.parse_args())
if "urls" in d.keys():
    google_drive_urls = [s.strip() for s in d["urls"].split(", ")]

for url in google_drive_urls:
    image_id = url.replace("https://drive.google.com/file/d/",
                           "")
    image_id = image_id.replace("/view\?usp\=drive_link", "")
    print(f"<Image fit=\"cover\" src={{imageUrlFormatter(\"{image_id}\")}} />")
