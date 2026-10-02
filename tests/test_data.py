import pandas as pd
import os
import sys

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

def test_destinations_csv_exists():
    assert os.path.exists(os.path.join(DATA_DIR, 'destinations.csv')), "destinations.csv not found"

def test_routes_csv_exists():
    assert os.path.exists(os.path.join(DATA_DIR, 'routes.csv')), "routes.csv not found"

def test_culture_csv_exists():
    assert os.path.exists(os.path.join(DATA_DIR, 'culture_festivals.csv')), "culture_festivals.csv not found"

def test_hotels_csv_exists():
    assert os.path.exists(os.path.join(DATA_DIR, 'hotels_homestays.csv')), "hotels_homestays.csv not found"

def test_guides_csv_exists():
    assert os.path.exists(os.path.join(DATA_DIR, 'local_guides.csv')), "local_guides.csv not found"

def test_facilities_csv_exists():
    assert os.path.exists(os.path.join(DATA_DIR, 'facilities.csv')), "facilities.csv not found"

def test_destinations_not_empty():
    df = pd.read_csv(os.path.join(DATA_DIR, 'destinations.csv'))
    assert len(df) > 0, "destinations.csv is empty"

def test_routes_not_empty():
    df = pd.read_csv(os.path.join(DATA_DIR, 'routes.csv'))
    assert len(df) > 0, "routes.csv is empty"

def test_destinations_ratings_valid():
    df = pd.read_csv(os.path.join(DATA_DIR, 'destinations.csv'))
    assert df['rating'].min() >= 1 and df['rating'].max() <= 5, "Ratings out of range"

def test_destinations_coords_valid():
    df = pd.read_csv(os.path.join(DATA_DIR, 'destinations.csv'))
    assert df['latitude'].min() >= 29 and df['latitude'].max() <= 30, "Latitude out of Bajhang range"

def test_no_duplicates():
    df = pd.read_csv(os.path.join(DATA_DIR, 'destinations.csv'))
    assert df['name'].duplicated().sum() == 0, "Duplicate destination names found"

if __name__ == '__main__':
    tests = [v for k, v in globals().items() if k.startswith('test_')]
    passed = 0
    failed = 0
    for test in tests:
        try:
            test()
            print(f"PASS: {test.__name__}")
            passed += 1
        except AssertionError as e:
            print(f"FAIL: {test.__name__} - {e}")
            failed += 1
    print(f"\nResults: {passed} passed, {failed} failed")
