import pandas as pd
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

def validate_destinations(df):
    errors = []
    if df['latitude'].min() < 29.0 or df['latitude'].max() > 30.0:
        errors.append("Latitude values outside Bajhang range (29-30)")
    if df['longitude'].min() < 80.5 or df['longitude'].max() > 81.5:
        errors.append("Longitude values outside Bajhang range (80.5-81.5)")
    if df['rating'].min() < 1 or df['rating'].max() > 5:
        errors.append("Rating values outside 1-5 range")
    if df.isnull().any().any():
        errors.append("Contains null values")
    return errors

def validate_routes(df):
    errors = []
    if df['distance_km'].min() < 0:
        errors.append("Negative distance values found")
    if df['duration_days'].min() < 0:
        errors.append("Negative duration values found")
    if df['elevation_gain'].min() < 0:
        errors.append("Negative elevation gain found")
    return errors

def validate_hotels(df):
    errors = []
    if df['rooms'].min() < 0:
        errors.append("Negative room count found")
    if df['capacity'].min() < 0:
        errors.append("Negative capacity found")
    return errors

def validate_guides(df):
    errors = []
    if df['experience_years'].min() < 0:
        errors.append("Negative experience years found")
    if df['price_per_day_np'].min() < 0:
        errors.append("Negative price found")
    return errors

if __name__ == '__main__':
    print("Validating all data files...\n")
    all_valid = True

    files = {
        'destinations.csv': validate_destinations,
        'routes.csv': validate_routes,
        'hotels_homestays.csv': validate_hotels,
        'local_guides.csv': validate_guides,
    }

    for filename, validator in files.items():
        filepath = os.path.join(DATA_DIR, filename)
        if os.path.exists(filepath):
            df = pd.read_csv(filepath)
            errors = validator(df)
            if errors:
                print(f"FAIL {filename}:")
                for e in errors:
                    print(f"  - {e}")
                all_valid = False
            else:
                print(f"PASS {filename}: {len(df)} rows valid")

    if all_valid:
        print("\nAll data validation passed!")
    else:
        print("\nSome validations failed. Check errors above.")
