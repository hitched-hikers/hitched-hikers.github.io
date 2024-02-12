import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--url", type=str)
d = vars(parser.parse_args())
if "url" in d.keys():
    google_drive_url = d["url"]

image_id = google_drive_url.replace("https://drive.google.com/file/d/", "")
image_id = image_id.replace("/view?usp=drive_link", "")

print(f"<img src="https://drive.google.com/thumbnail?id={image_id}&sz=w1024" />")
