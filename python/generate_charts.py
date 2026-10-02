import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')
VIS_DIR = os.path.join(os.path.dirname(__file__), '..', 'visualizations')
os.makedirs(VIS_DIR, exist_ok=True)

def destination_chart():
    df = pd.read_csv(os.path.join(DATA_DIR, 'destinations.csv'))
    fig, axes = plt.subplots(1, 2, figsize=(14, 6))
    type_counts = df['type'].value_counts()
    axes[0].barh(type_counts.index, type_counts.values, color='#2e86c1')
    axes[0].set_title('Destinations by Type')
    axes[0].set_xlabel('Count')
    muni_counts = df['municipality'].value_counts()
    axes[1].pie(muni_counts.values, labels=muni_counts.index, autopct='%1.1f%%', startangle=90)
    axes[1].set_title('Destinations by Municipality')
    plt.tight_layout()
    plt.savefig(os.path.join(VIS_DIR, 'destination_chart.png'), dpi=150)
    plt.close()
    print("Created destination_chart.png")

def tourism_chart():
    dest = pd.read_csv(os.path.join(DATA_DIR, 'destinations.csv'))
    hotels = pd.read_csv(os.path.join(DATA_DIR, 'hotels_homestays.csv'))
    guides = pd.read_csv(os.path.join(DATA_DIR, 'local_guides.csv'))
    fig, axes = plt.subplots(1, 3, figsize=(16, 5))
    axes[0].bar(['Destinations', 'Hotels', 'Guides'], [len(dest), len(hotels), len(guides)], color=['#2e86c1', '#27ae60', '#8e44ad'])
    axes[0].set_title('Tourism Resources Overview')
    axes[0].set_ylabel('Count')
    axes[1].hist(dest['rating'], bins=10, color='#f39c12', edgecolor='white')
    axes[1].set_title('Destination Rating Distribution')
    axes[1].set_xlabel('Rating')
    axes[2].hist(hotels['rating'], bins=10, color='#27ae60', edgecolor='white')
    axes[2].set_title('Hotel Rating Distribution')
    axes[2].set_xlabel('Rating')
    plt.tight_layout()
    plt.savefig(os.path.join(VIS_DIR, 'tourism_chart.png'), dpi=150)
    plt.close()
    print("Created tourism_chart.png")

def route_chart():
    df = pd.read_csv(os.path.join(DATA_DIR, 'routes.csv'))
    fig, axes = plt.subplots(1, 2, figsize=(14, 6))
    diff_counts = df['difficulty'].value_counts()
    colors = {'easy': '#27ae60', 'moderate': '#f39c12', 'hard': '#e74c3c', 'very_hard': '#922b21'}
    axes[0].bar(diff_counts.index, diff_counts.values, color=[colors.get(d, '#888') for d in diff_counts.index])
    axes[0].set_title('Routes by Difficulty')
    axes[0].set_ylabel('Count')
    axes[1].scatter(df['distance_km'], df['elevation_gain'], c=[colors.get(d, '#888') for d in df['difficulty']], s=100, alpha=0.7)
    axes[1].set_title('Distance vs Elevation Gain')
    axes[1].set_xlabel('Distance (km)')
    axes[1].set_ylabel('Elevation Gain (m)')
    plt.tight_layout()
    plt.savefig(os.path.join(VIS_DIR, 'route_chart.png'), dpi=150)
    plt.close()
    print("Created route_chart.png")

def culture_chart():
    df = pd.read_csv(os.path.join(DATA_DIR, 'culture_festivals.csv'))
    fig, axes = plt.subplots(1, 2, figsize=(14, 6))
    type_counts = df['type'].value_counts()
    axes[0].pie(type_counts.values, labels=type_counts.index, autopct='%1.1f%%', startangle=90)
    axes[0].set_title('Festivals by Type')
    top = df.nlargest(10, 'attendance')[['festival_name', 'attendance']]
    axes[1].barh(top['festival_name'], top['attendance'], color='#e74c3c')
    axes[1].set_title('Top 10 Festivals by Attendance')
    axes[1].set_xlabel('Attendance')
    plt.tight_layout()
    plt.savefig(os.path.join(VIS_DIR, 'culture_chart.png'), dpi=150)
    plt.close()
    print("Created culture_chart.png")

if __name__ == '__main__':
    print("Generating visualizations...")
    destination_chart()
    tourism_chart()
    route_chart()
    culture_chart()
    print("All charts generated!")
