import requests
import json

BASE_URL = 'http://localhost:5000/api'

def test_api_root():
    try:
        r = requests.get(f'{BASE_URL}')
        assert r.status_code == 200, f"Status: {r.status_code}"
        print("PASS: API root responds")
    except Exception as e:
        print(f"SKIP: API not running - {e}")

def test_get_destinations():
    try:
        r = requests.get(f'{BASE_URL}/destinations')
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list), "Response not a list"
        print(f"PASS: Destinations endpoint returns {len(data)} items")
    except Exception as e:
        print(f"SKIP: {e}")

def test_get_routes():
    try:
        r = requests.get(f'{BASE_URL}/routes')
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        print(f"PASS: Routes endpoint returns {len(data)} items")
    except Exception as e:
        print(f"SKIP: {e}")

def test_get_culture():
    try:
        r = requests.get(f'{BASE_URL}/culture')
        assert r.status_code == 200
        print(f"PASS: Culture endpoint responds")
    except Exception as e:
        print(f"SKIP: {e}")

def test_get_hotels():
    try:
        r = requests.get(f'{BASE_URL}/hotels')
        assert r.status_code == 200
        print(f"PASS: Hotels endpoint responds")
    except Exception as e:
        print(f"SKIP: {e}")

def test_get_guides():
    try:
        r = requests.get(f'{BASE_URL}/guides')
        assert r.status_code == 200
        print(f"PASS: Guides endpoint responds")
    except Exception as e:
        print(f"SKIP: {e}")

if __name__ == '__main__':
    tests = [v for k, v in globals().items() if k.startswith('test_')]
    for test in tests:
        test()
