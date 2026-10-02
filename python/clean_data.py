import pandas as pd
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

def clean_destinations():
    df = pd.read_csv(os.path.join(DATA_DIR, 'destinations.csv'))
    df.dropna(subset=['name', 'latitude', 'longitude'], inplace=True)
    df['name'] = df['name'].str.strip()
    df['rating'] = df['rating'].clip(1.0, 5.0)
    df['latitude'] = df['latitude'].round(4)
    df['longitude'] = df['longitude'].round(4)
    df.drop_duplicates(subset=['name'], inplace=True)
    df.to_csv(os.path.join(DATA_DIR, 'destinations.csv'), index=False)
    print(f"Cleaned destinations: {len(df)} rows")
    return df

def clean_routes():
    df = pd.read_csv(os.path.join(DATA_DIR, 'routes.csv'))
    df.dropna(subset=['route_name', 'start_point'], inplace=True)
    df['route_name'] = df['route_name'].str.strip()
    df['distance_km'] = df['distance_km'].clip(lower=0.5)
    df['duration_days'] = df['duration_days'].clip(lower=0.5)
    df.drop_duplicates(subset=['route_name'], inplace=True)
    df.to_csv(os.path.join(DATA_DIR, 'routes.csv'), index=False)
    print(f"Cleaned routes: {len(df)} rows")
    return df

def clean_culture():
    df = pd.read_csv(os.path.join(DATA_DIR, 'culture_festivals.csv'))
    df.dropna(subset=['festival_name'], inplace=True)
    df['festival_name'] = df['festival_name'].str.strip()
    df['attendance'] = df['attendance'].fillna(0).astype(int)
    df.drop_duplicates(subset=['festival_name'], inplace=True)
    df.to_csv(os.path.join(DATA_DIR, 'culture_festivals.csv'), index=False)
    print(f"Cleaned culture/festivals: {len(df)} rows")
    return df

def clean_hotels():
    df = pd.read_csv(os.path.join(DATA_DIR, 'hotels_homestays.csv'))
    df.dropna(subset=['name'], inplace=True)
    df['name'] = df['name'].str.strip()
    df['rooms'] = df['rooms'].fillna(0).astype(int)
    df['rating'] = df['rating'].clip(1.0, 5.0)
    df.drop_duplicates(subset=['name'], inplace=True)
    df.to_csv(os.path.join(DATA_DIR, 'hotels_homestays.csv'), index=False)
    print(f"Cleaned hotels/homestays: {len(df)} rows")
    return df

def clean_guides():
    df = pd.read_csv(os.path.join(DATA_DIR, 'local_guides.csv'))
    df.dropna(subset=['name'], inplace=True)
    df['name'] = df['name'].str.strip()
    df['experience_years'] = df['experience_years'].clip(lower=1)
    df['rating'] = df['rating'].clip(1.0, 5.0)
    df.drop_duplicates(subset=['name'], inplace=True)
    df.to_csv(os.path.join(DATA_DIR, 'local_guides.csv'), index=False)
    print(f"Cleaned guides: {len(df)} rows")
    return df

def clean_facilities():
    df = pd.read_csv(os.path.join(DATA_DIR, 'facilities.csv'))
    df.dropna(subset=['name'], inplace=True)
    df['name'] = df['name'].str.strip()
    df['rating'] = df['rating'].clip(1.0, 5.0)
    df.drop_duplicates(subset=['name'], inplace=True)
    df.to_csv(os.path.join(DATA_DIR, 'facilities.csv'), index=False)
    print(f"Cleaned facilities: {len(df)} rows")
    return df

if __name__ == '__main__':
    print("Cleaning all data files...")
    clean_destinations()
    clean_routes()
    clean_culture()
    clean_hotels()
    clean_guides()
    clean_facilities()
    print("All data cleaned!")
