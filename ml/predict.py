import pickle
import numpy as np
import os

MODEL_DIR = os.path.dirname(__file__)

def load_model():
    with open(os.path.join(MODEL_DIR, 'model.pkl'), 'rb') as f:
        model = pickle.load(f)
    with open(os.path.join(MODEL_DIR, 'scaler.pkl'), 'rb') as f:
        scaler = pickle.load(f)
    return model, scaler

def predict_difficulty(altitude, area, lat, lon, rating):
    model, scaler = load_model()
    difficulty_map = {0: 'Easy', 1: 'Moderate', 2: 'Hard', 3: 'Very Hard'}

    features = np.array([[altitude, area, lat, lon, 0, rating]])
    features_scaled = scaler.transform(features)
    prediction = model.predict(features_scaled)[0]

    return difficulty_map.get(prediction, 'Unknown')

def predict_route(difficulty_input):
    model, scaler = load_model()
    difficulty_map = {'easy': 0, 'moderate': 1, 'hard': 2, 'very_hard': 3}
    reverse_map = {0: 'Easy', 1: 'Moderate', 2: 'Hard', 3: 'Very Hard'}

    features = np.array([[0, 0, 0, 0, difficulty_map.get(difficulty_input, 0), 4.0]])
    features_scaled = scaler.transform(features)
    prediction = model.predict(features_scaled)[0]

    return reverse_map.get(prediction, 'Unknown')

if __name__ == '__main__':
    print("=== Bajhang Tourism Difficulty Predictor ===\n")

    result = predict_difficulty(altitude=3000, area=225, lat=29.45, lon=80.98, rating=4.5)
    print(f"Prediction for Khaptad-like destination: {result}")

    result2 = predict_difficulty(altitude=1200, area=5, lat=29.51, lon=81.07, rating=4.2)
    print(f"Prediction for Triveni-like destination: {result2}")

    result3 = predict_difficulty(altitude=4200, area=8, lat=29.60, lon=80.93, rating=4.8)
    print(f"Prediction for Api BC-like destination: {result3}")
