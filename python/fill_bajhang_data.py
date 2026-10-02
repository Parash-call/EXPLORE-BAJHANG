import pandas as pd
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

def fill_destinations():
    df = pd.read_csv(os.path.join(DATA_DIR, 'destinations.csv'))
    df['district'] = 'Bajhang'
    df['country'] = 'Nepal'
    df['province'] = 'Sudurpashchim'
    df.to_csv(os.path.join(DATA_DIR, 'destinations.csv'), index=False)
    print(f"Filled {len(df)} destinations with Bajhang data")

def fill_routes():
    df = pd.read_csv(os.path.join(DATA_DIR, 'routes.csv'))
    df['district'] = 'Bajhang'
    df['country'] = 'Nepal'
    df.to_csv(os.path.join(DATA_DIR, 'routes.csv'), index=False)
    print(f"Filled {len(df)} routes with Bajhang data")

def fill_culture():
    df = pd.read_csv(os.path.join(DATA_DIR, 'culture_festivals.csv'))
    df['district'] = 'Bajhang'
    df.to_csv(os.path.join(DATA_DIR, 'culture_festivals.csv'), index=False)
    print(f"Filled {len(df)} festivals with Bajhang data")

def fill_hotels():
    df = pd.read_csv(os.path.join(DATA_DIR, 'hotels_homestays.csv'))
    df['district'] = 'Bajhang'
    df.to_csv(os.path.join(DATA_DIR, 'hotels_homestays.csv'), index=False)
    print(f"Filled {len(df)} hotels/homestays with Bajhang data")

def fill_guides():
    df = pd.read_csv(os.path.join(DATA_DIR, 'local_guides.csv'))
    df['district'] = 'Bajhang'
    df.to_csv(os.path.join(DATA_DIR, 'local_guides.csv'), index=False)
    print(f"Filled {len(df)} guides with Bajhang data")

def fill_facilities():
    df = pd.read_csv(os.path.join(DATA_DIR, 'facilities.csv'))
    df['district'] = 'Bajhang'
    df.to_csv(os.path.join(DATA_DIR, 'facilities.csv'), index=False)
    print(f"Filled {len(df)} facilities with Bajhang data")

if __name__ == '__main__':
    print("Filling Bajhang data into all CSV files...")
    fill_destinations()
    fill_routes()
    fill_culture()
    fill_hotels()
    fill_guides()
    fill_facilities()
    print("Done!")
