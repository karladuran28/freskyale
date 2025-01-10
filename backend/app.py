from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Hello from Flask backend!"})

@app.route('/api/data')
def get_data():
    return jsonify({"data": "Here is some data"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)