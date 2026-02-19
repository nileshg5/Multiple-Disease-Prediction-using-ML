from flask import Flask,  request, jsonify
from flask_cors import CORS
import pickle

app=Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def hello_world():
    return "Hi"


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No input data provided'}), 400

        with open('brcancermodel.pkl', 'rb') as file:
            loaded_model = pickle.load(file)
            input_data = [
                data['age'],
                data['meno'],
                data['size'],
                data['grade'],
                data['nodes'],
                data['pgr'],
                data['er'],
                data['hormon'],
                data['rfstime'],
            ]
            prediction = loaded_model.predict([input_data])
        return jsonify({'prediction': prediction[0]})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

 

if __name__=="main":
    app.run(port=5000, debug=True)
    