import os 

files = os.listdir("images")

for i, file in enumerate(files):
    file_extension = file.split(".")[-1]
    if ".py" in file:
        continue
    new_file = "images/" + str(i) + "." + file_extension
    os.rename("images/" + file, new_file)