# Explore Bajhang - Tourism Data Platform

A comprehensive tourism data collection, analysis, and web platform for **Bajhang District**, Sudurpashchim Province, Nepal.

## Project Overview

Explore Bajhang catalogs tourism destinations, trekking routes, cultural festivals, hotels/homestays, local guides, and facilities in Bajhang district. It includes data processing pipelines, machine learning recommendations, and an interactive web interface.

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React + Vite                        |
| Backend    | Node.js + Express + MongoDB          |
| Data       | Python (pandas, openpyxl)            |
| ML         | scikit-learn, pickle                 |
| Notebooks  | Jupyter Notebook                     |

## Quick Start

### 1. Data Pipeline
```bash
pip install -r requirements.txt
cd python
python create_excel.py
python fill_bajhang_data.py
python clean_data.py
python validate_data.py
python export_csv.py
python analysis.py
```

### 2. Backend
```bash
cd backend
npm install
npm start
```

### 3. Frontend
```bash
cd frontend
npm install
npm run dev
```

### 4. ML Models
```bash
cd ml
python train_model.py
python predict.py
python recommendation.py
```

## Data Sources

- Department of Tourism, Nepal
- Nepal Tourism Board
- Local community organizations in Bajhang
- Field surveys and interviews

## License

MIT
