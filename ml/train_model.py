import pandas as pd
import numpy as np
import pickle
import os
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.metrics import accuracy_score, classification_report

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

def load_training_data():
    dest = pd.read_csv(os.path.join(DATA_DIR, 'destinations.csv'))
    routes = pd.read_csv(os.path.join(DATA_DIR, 'routes.csv'))
    return dest, routes

def prepare_features(dest, routes):
    features = []
    labels = []

    difficulty_map = {'easy': 0, 'moderate': 1, 'hard': 2, 'very_hard': 3}

    for _, row in dest.iterrows():
        feat = [
            row.get('altitude_m', 0),
            row.get('area_sq_km', 0),
            row.get('latitude', 0),
            row.get('longitude', 0),
            difficulty_map.get(row.get('difficulty', 'easy'), 0),
            row.get('rating', 3.0),
        ]
        features.append(feat)
        labels.append(difficulty_map.get(row.get('difficulty', 'easy'), 0))

    for _, row in routes.iterrows():
        feat = [
            row.get('elevation_gain', 0) / 10,
            row.get('distance_km', 0),
            0,
            0,
            difficulty_map.get(row.get('difficulty', 'easy'), 0),
            row.get('rating', 3.0),
        ]
        features.append(feat)
        labels.append(difficulty_map.get(row.get('difficulty', 'easy'), 0))

    return np.array(features), np.array(labels)

def train():
    dest, routes = load_training_data()
    X, y = prepare_features(dest, routes)

    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Model Accuracy: {accuracy * 100:.1f}%")
    print("\nClassification Report:")
    print(classification_report(y_test, y_pred, target_names=['Easy', 'Moderate', 'Hard', 'Very Hard']))

    model_dir = os.path.dirname(__file__)
    with open(os.path.join(model_dir, 'model.pkl'), 'wb') as f:
        pickle.dump(model, f)
    with open(os.path.join(model_dir, 'scaler.pkl'), 'wb') as f:
        pickle.dump(scaler, f)

    print("\nModel saved to model.pkl and scaler.pkl")

if __name__ == '__main__':
    train()
