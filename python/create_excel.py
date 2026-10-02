import pandas as pd
import os

def create_excel():
    data_dir = os.path.join(os.path.dirname(__file__), '..', 'data')
    output_file = os.path.join(data_dir, 'Bajhang_Tourism_Data.xlsx')

    csv_files = {
        'Destinations': 'destinations.csv',
        'Routes': 'routes.csv',
        'Culture_Festivals': 'culture_festivals.csv',
        'Hotels_Homestays': 'hotels_homestays.csv',
        'Local_Guides': 'local_guides.csv',
        'Facilities': 'facilities.csv',
        'Photos': 'photos.csv',
        'Sources': 'sources.csv',
    }

    with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
        for sheet_name, csv_file in csv_files.items():
            file_path = os.path.join(data_dir, csv_file)
            if os.path.exists(file_path):
                df = pd.read_csv(file_path)
                df.to_excel(writer, sheet_name=sheet_name, index=False)
                print(f"  Added sheet: {sheet_name} ({len(df)} rows)")
            else:
                print(f"  Skipped: {csv_file} not found")

    print(f"\nExcel file created: {output_file}")

if __name__ == '__main__':
    create_excel()
