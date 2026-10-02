import pandas as pd
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

def load_data():
    data = {}
    files = {
        'destinations': 'destinations.csv',
        'routes': 'routes.csv',
        'culture': 'culture_festivals.csv',
        'hotels': 'hotels_homestays.csv',
        'guides': 'local_guides.csv',
        'facilities': 'facilities.csv',
    }
    for key, filename in files.items():
        path = os.path.join(DATA_DIR, filename)
        if os.path.exists(path):
            data[key] = pd.read_csv(path)
    return data

def analyze_destinations(data):
    df = data['destinations']
    print("=== Destination Analysis ===")
    print(f"Total destinations: {len(df)}")
    print(f"Types: {df['type'].value_counts().to_dict()}")
    print(f"Average rating: {df['rating'].mean():.2f}")
    print(f"Altitude range: {df['altitude_m'].min()}m - {df['altitude_m'].max()}m")
    print(f"Municipalities covered: {df['municipality'].nunique()}")
    print()

def analyze_routes(data):
    df = data['routes']
    print("=== Route Analysis ===")
    print(f"Total routes: {len(df)}")
    print(f"Difficulty distribution: {df['difficulty'].value_counts().to_dict()}")
    print(f"Total distance: {df['distance_km'].sum()} km")
    print(f"Average distance: {df['distance_km'].mean():.1f} km")
    print(f"Longest route: {df.loc[df['distance_km'].idxmax(), 'route_name']} ({df['distance_km'].max()} km)")
    print()

def analyze_culture(data):
    df = data['culture']
    print("=== Culture & Festival Analysis ===")
    print(f"Total festivals: {len(df)}")
    print(f"Types: {df['type'].value_counts().to_dict()}")
    print(f"Total attendance: {df['attendance'].sum():,}")
    print(f"Most attended: {df.loc[df['attendance'].idxmax(), 'festival_name']} ({df['attendance'].max():,})")
    print()

def analyze_hotels(data):
    df = data['hotels']
    print("=== Hotels & Homestays Analysis ===")
    print(f"Total accommodations: {len(df)}")
    print(f"Types: {df['type'].value_counts().to_dict()}")
    print(f"Total rooms: {df['rooms'].sum()}")
    print(f"Average rating: {df['rating'].mean():.2f}")
    print()

def analyze_guides(data):
    df = data['guides']
    print("=== Local Guides Analysis ===")
    print(f"Total guides: {len(df)}")
    print(f"Average experience: {df['experience_years'].mean():.1f} years")
    print(f"Average rating: {df['rating'].mean():.2f}")
    print(f"Average price: Rs. {df['price_per_day_np'].mean():.0f}/day")
    print()

def analyze_facilities(data):
    df = data['facilities']
    print("=== Facilities Analysis ===")
    print(f"Total facilities: {len(df)}")
    print(f"Types: {df['type'].value_counts().to_dict()}")
    print(f"Average rating: {df['rating'].mean():.2f}")
    print()

if __name__ == '__main__':
    print("Explore Bajhang - Data Analysis\n")
    data = load_data()
    if not data:
        print("No data files found!")
    else:
        if 'destinations' in data: analyze_destinations(data)
        if 'routes' in data: analyze_routes(data)
        if 'culture' in data: analyze_culture(data)
        if 'hotels' in data: analyze_hotels(data)
        if 'guides' in data: analyze_guides(data)
        if 'facilities' in data: analyze_facilities(data)
    print("Analysis complete!")
