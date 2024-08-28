from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import joblib
import os
import numpy as np
from sklearn.preprocessing import StandardScaler


app = Flask(__name__)
CORS(app)

#BREAST CANCER MODEL
bc_model_path = os.path.join(os.path.dirname(__file__), 'brcancermodel.joblib')

#DIABETES MODEL
diabetes_model_path = os.path.join(os.path.dirname(__file__), 'diabetes.pkl')

#HEART DISEASE MODEL
hd_model_path = os.path.join(os.path.dirname(__file__), 'heartmodel.pkl')

#PARKINSON'S DISEASE MODEL
pr_model_path = os.path.join(os.path.dirname(__file__), 'parkinsons_model.pkl')

#PREDICTING BREAST CANCER
@app.route("/predict_breastcancer", methods=["POST"])
def predict_breastcancer():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No input data provided"}), 400

        with open(bc_model_path, 'rb') as file:
            loaded_model = joblib.load(file)
            input_data = [
                int(data["age"]),
                int(data["meno"]),
                int(data["size"]),
                int(data["grade"]),
                int(data["nodes"]),
                int(data["pgr"]),
                int(data["er"]),
                int(data["hormon"]),
                int(data["rfstime"]),
            ]
            input_data_np=np.asarray(input_data)
            input_data_reshaped=input_data_np.reshape(1,-1)
            prediction = loaded_model.predict(input_data_reshaped)[0]
            result="Alive without Recurrence (Breast cancer recurrence is when the symptoms rerturn after initial treatment)" if prediction==0 else "Recurrence or Death (Breast cancer recurrence is when the symptoms rerturn after initial treatment)"
        return jsonify({"prediction": result})
    except Exception as e:
        print("📢[breastcancer.py:36]: ", e)
        return jsonify({"error": str(e)}), 500


#PREDICTING DIABETES
@app.route("/predict_diabetes", methods=["POST"])
def predict_diabetes():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No input data provided"}), 400

        with open(diabetes_model_path, "rb") as file:
            loaded_model = pickle.load(file)
            input_data = [
                int(data["pregnancies"]),
                float(data["glucose"]),
                float(data["bloodPressure"]),
                float(data["skinThickness"]),
                float(data["insulin"]),
                float(data["bmi"]),
                float(data["diabetesPedigree"]),
                int(data["age"]),
            ]
            prediction = loaded_model.predict([input_data])[0]
            result="This person is not Diabetic." if prediction==0 else "This person is Diabetic."
        return jsonify({"prediction": result})
    except Exception as e:
        print("📢[diabetes.py:36]: ", e)
        return jsonify({"error": str(e)}), 500
    
#PREDICTING HEART DISEASE
@app.route("/predict_heartdisease", methods=["POST"])
def predict_heartdisease():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No input data provided"}), 400

        with open(hd_model_path, "rb") as file:
            loaded_model = pickle.load(file)
            input_data = [
                 int(data["age"]),
                int(data["sex"]),
                int(data["cp"]),
                int(data["testbps"]),
                int(data["cholesterol"]),
                int(data["fbs"]),
                int(data["restcg"]),
                int(data["thalach"]),
                int(data["exang"]),
                float(data["oldpeak"]),
                int(data["slope"]),
                int(data["ca"]),
                int(data["thal"]),
            ]
            prediction = loaded_model.predict([input_data])[0]
            result = "This person does not have Heart Disease." if prediction == 0 else "This person has Heart Disease."
        return jsonify({"prediction": result})
    except Exception as e:
        print("📢[diabetes.py:36]: ", e)
        return jsonify({"error": str(e)}), 500


#PREDICTING PARKINSONS DISEASE
@app.route("/predict_parkinsons", methods=["POST"])
def predict_parkinsons():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No input data provided"}), 400

        with open(pr_model_path, "rb") as file:
            loaded_model = pickle.load(file)
            input_data = [
                float(data["mdvpFoHz"]),
                float(data["mdvpFhiHz"]),
                float(data["mdvpFloHz"]),
                float(data["mdvpJitterPercent"]),
                float(data["mdvpJitterAbs"]),
                float(data["mdvpRAP"]),
                float(data["mdvpPPQ"]),
                float(data["jitterDDP"]),
                float(data["mdvpShimmer"]),
                float(data["mdvpShimmerdB"]),
                float(data["shimmerAPQ3"]),
                float(data["shimmerAPQ5"]),
                float(data["mdvpAPQ"]),
                float(data["shimmerDDA"]),
                float(data["nhr"]),
                float(data["hnr"]),
                float(data["rpde"]),
                float(data["dfa"]),
                float(data["spread1"]),
                float(data["spread2"]),
                float(data["d2"]),
                float(data["ppe"])
            ]
            prediction = loaded_model.predict([input_data])[0]
            result="This person does not have Parkinson's Disease." if prediction==0 else "This person has Parkinson's Disease."
        return jsonify({"prediction": result})
    except Exception as e:
        print("📢[parkinsons.py:36]: ", e)
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)


