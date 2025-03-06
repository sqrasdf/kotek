from flask import Flask, send_from_directory
from flask_cors import CORS
import os
import random

app = Flask(__name__)
CORS(app)

# @app.route('/upload')
# def upload():
#     return "upload page"

@app.route('/images/<filename>')
def get_image(filename):
    return send_from_directory('images', filename)

@app.route('/images')
def get_random_image():
    random_image = random.choice(os.listdir("images"))
    print(random_image)
    return send_from_directory('images', random_image)

@app.route('/images/json')
def get_json():
    urls = []
    number = 10
    for i in range(number):
        url = "http://127.0.0.1:5000/images/" + random.choice(os.listdir("images"))
        urls.append(url)
    response = {
        "url": urls,
        "number": number
    }
    return response

@app.route('/images/json/1')
def get_json_1():
    d = {
        "url": "http://127.0.0.1:5000/images/" + random.choice(os.listdir("images"))
    }
    return d

@app.route('/images/json/<number>')
def get_json_n(number):
    d = {"urls": []}
    for i in range(int(number)):
        # d["urls"].append("http://127.0.0.1:5000/images/" + random.choice(os.listdir("images")))
        d["urls"].append("http://192.168.0.102:5000/images/" + random.choice(os.listdir("images")))
    # d = {
    #     "url": "http://127.0.0.1:5000/images/" + random.choice(os.listdir("images"))
    # }
    return d

if __name__ == '__main__':
    app.run(debug=True)