import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--urls", type=str)
d = vars(parser.parse_args())
if "urls" in d.keys():
    google_drive_urls = [s.strip() for s in d["urls"].split(", ")]

print("[", end=" ")
for i in range(len(google_drive_urls)):
    image_id = google_drive_urls[i].replace("https://drive.google.com/file/d/",
                                            "")
    image_id = image_id.replace("/view\?usp\=drive_link", "")

    if i != len(google_drive_urls) - 1:
        print(f"\"{image_id}\", ")
    else:
        print(f"\"{image_id}\" ]")
