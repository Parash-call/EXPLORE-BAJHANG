import pandas as pd
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

def export_from_excel():
    excel_file = os.path.join(DATA_DIR, 'Bajhang_Tourism_Data.xlsx')
    if not os.path.exists(excel_file):
        print("Excel file not found. Run create_excel.py first.")
        return

    xls = pd.ExcelFile(excel_file)
    export_map = {
        'Destinations': 'destinations.csv',
        'Routes': 'routes.csv',
        'Culture_Festivals': 'culture_festivals.csv',
        'Hotels_Homestays': 'hotels_homestays.csv',
        'Local_Guides': 'local_guides.csv',
        'Facilities': 'facilities.csv',
        'Photos': 'photos.csv',
        'Sources': 'sources.csv',
    }

    for sheet_name, csv_file in export_map.items():
        if sheet_name in xls.sheet_names:
            df = pd.read_excel(excel_file, sheet_name=sheet_name)
            output_path = os.path.join(DATA_DIR, csv_file)
            df.to_csv(output_path, index=False)
            print(f"Exported {sheet_name} -> {csv_file} ({len(df)} rows)")
        else:
            print(f"Skipped {sheet_name}: not in Excel file")

def export_combined():
    csv_files = [
        'destinations.csv', 'routes.csv', 'culture_festivals.csv',
        'hotels_homestays.csv', 'local_guides.csv', 'facilities.csv'
    ]

    combined = {}
    for f in csv_files:
        path = os.path.join(DATA_DIR, f)
        if os.path.exists(path):
            df = pd.read_csv(path)
            combined[f.replace('.csv', '')] = len(df)

    output = os.path.join(DATA_DIR, 'export_summary.csv')
    summary = pd.DataFrame(list(combined.items()), columns=['Dataset', 'Row_Count'])
    summary.to_csv(output, index=False)
    print(f"\nExport summary saved to {output}")
    print(summary.to_string(index=False))

if __name__ == '__main__':
    print("Exporting data...\n")
    export_from_excel()
    export_combined()
    print("\nExport complete!")
