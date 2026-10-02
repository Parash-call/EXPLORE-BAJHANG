import pandas as pd
import os
import numpy as np

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

def load_all_data():
    data = {}
    for f in ['destinations.csv', 'routes.csv', 'hotels_homestays.csv', 'local_guides.csv']:
        path = os.path.join(DATA_DIR, f)
        if os.path.exists(path):
            data[f.replace('.csv', '')] = pd.read_csv(path)
    return data

def recommend_destinations(preferences=None):
    data = load_all_data()
    dest = data['destinations']

    if preferences:
        if 'difficulty' in preferences:
            dest = dest[dest['difficulty'] == preferences['difficulty']]
        if 'min_rating' in preferences:
            dest = dest[dest['rating'] >= preferences['min_rating']]
        if 'type' in preferences:
            dest = dest[dest['type'] == preferences['type']]

    return dest.sort_values('rating', ascending=False).head(5).to_dict('records')

def recommend_route(difficulty='moderate'):
    data = load_all_data()
    routes = data['routes']
    filtered = routes[routes['difficulty'] == difficulty]
    return filtered.sort_values('rating', ascending=False).head(3).to_dict('records')

def recommend_hotel(budget='budget'):
    data = load_all_data()
    hotels = data['hotels_homestays']
    filtered = hotels[hotels['price_range_np'] == budget]
    return filtered.sort_values('rating', ascending=False).head(3).to_dict('records')

def recommend_guide(expertise='Trekking'):
    data = load_all_data()
    guides = data['local_guides']
    filtered = guides[guides['expertise'].str.contains(expertise, case=False, na=False)]
    return filtered.sort_values('rating', ascending=False).top_3 if hasattr(filtered, 'top_3') else filtered.sort_values('rating', ascending=False).head(3).to_dict('records')

def plan_itinerary(days=5, interest='adventure'):
    data = load_all_data()
    result = {'destinations': [], 'routes': [], 'hotels': [], 'guides': []}

    if interest == 'adventure':
        result['destinations'] = recommend_destinations({'difficulty': 'hard', 'min_rating': 4.0})
        result['routes'] = recommend_route('hard')
    elif interest == 'culture':
        result['destinations'] = recommend_destinations({'type': 'religious'})
    elif interest == 'nature':
        result['destinations'] = recommend_destinations({'type': 'national_park'})

    result['hotels'] = recommend_hotel('budget')
    result['guides'] = recommend_guide('Trekking')

    return result

if __name__ == '__main__':
    print("=== Bajhang Tourism Recommender ===\n")

    print("Top Destinations for Adventure:")
    for d in recommend_destinations({'difficulty': 'hard', 'min_rating': 4.0}):
        print(f"  - {d['name']} (Rating: {d['rating']})")

    print("\nTop Moderate Routes:")
    for r in recommend_route('moderate'):
        print(f"  - {r['route_name']} ({r['distance_km']}km, {r['duration_days']} days)")

    print("\nBudget Hotels:")
    for h in recommend_hotel('budget'):
        print(f"  - {h['name']} (Rating: {h['rating']})")

    print("\nTrekking Guides:")
    for g in recommend_guide('Trekking'):
        print(f"  - {g['name']} ({g['experience_years']} yrs, Rating: {g['rating']})")

    print("\n5-Day Adventure Itinerary:")
    plan = plan_itinerary(5, 'adventure')
    print(f"  Destinations: {len(plan['destinations'])}")
    print(f"  Routes: {len(plan['routes'])}")
    print(f"  Hotels: {len(plan['hotels'])}")
    print(f"  Guides: {len(plan['guides'])}")
