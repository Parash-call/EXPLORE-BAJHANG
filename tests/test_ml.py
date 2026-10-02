import os
import sys

ML_DIR = os.path.join(os.path.dirname(__file__), '..', 'ml')
sys.path.insert(0, ML_DIR)

def test_model_files_exist():
    assert os.path.exists(os.path.join(ML_DIR, 'model.pkl')), "model.pkl not found"
    assert os.path.exists(os.path.join(ML_DIR, 'scaler.pkl')), "scaler.pkl not found"
    print("PASS: Model files exist")

def test_model_loadable():
    import pickle
    with open(os.path.join(ML_DIR, 'model.pkl'), 'rb') as f:
        model = pickle.load(f)
    assert model is not None, "Model is None"
    assert hasattr(model, 'predict'), "Model has no predict method"
    print("PASS: Model loads correctly")

def test_scaler_loadable():
    import pickle
    with open(os.path.join(ML_DIR, 'scaler.pkl'), 'rb') as f:
        scaler = pickle.load(f)
    assert scaler is not None, "Scaler is None"
    assert hasattr(scaler, 'transform'), "Scaler has no transform method"
    print("PASS: Scaler loads correctly")

def test_prediction():
    import pickle
    import numpy as np
    with open(os.path.join(ML_DIR, 'model.pkl'), 'rb') as f:
        model = pickle.load(f)
    with open(os.path.join(ML_DIR, 'scaler.pkl'), 'rb') as f:
        scaler = pickle.load(f)
    test_features = np.array([[3000, 225, 29.45, 80.98, 1, 4.5]])
    test_scaled = scaler.transform(test_features)
    prediction = model.predict(test_scaled)
    assert prediction is not None and len(prediction) > 0, "No prediction returned"
    print(f"PASS: Prediction returned {prediction[0]}")

if __name__ == '__main__':
    tests = [v for k, v in globals().items() if k.startswith('test_')]
    for test in tests:
        try:
            test()
        except AssertionError as e:
            print(f"FAIL: {test.__name__} - {e}")
        except Exception as e:
            print(f"ERROR: {test.__name__} - {e}")
