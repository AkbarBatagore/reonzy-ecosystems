#!/usr/bin/env python3
"""
RE-ONZY ECOSYSTEMS - Project Structure Validator
This script helps verify all files are in place
"""

import os
import json

def check_structure():
    """Validate project structure"""
    
    base_path = os.path.dirname(os.path.abspath(__file__))
    
    required_files = {
        'Core': [
            'index.html',
            'css/style.css',
            'css/fonts.css',
            'js/script.js',
            'data/apps.json',
        ],
        'Documentation': [
            'README.md',
            'COMPLETION_SUMMARY.md',
            'PROJECT_STRUCTURE.md',
            'QUICK_START.md',
            'AI-NOTES/README.md',
            'AI-NOTES/SESSION_LOG.md',
            'AI-NOTES/PROMPTS_USED.md',
            'AI-NOTES/CODEBASE_NOTES.md',
            'AI-NOTES/BUG_FIXES.md',
            'AI-NOTES/DEPLOYMENT_GUIDE.md',
        ],
        'Pages': [
            'pages/home.html',
            'pages/list.html',
            'pages/workstation.html',
        ]
    }
    
    required_folders = {
        'Assets': [
            'img/slideshow',
            'img/icon-apps',
        ],
        'Code': [
            'css',
            'js',
            'pages',
            'data',
            'AI-NOTES',
        ]
    }
    
    print("=" * 60)
    print("RE-ONZY ECOSYSTEMS - Project Structure Check")
    print("=" * 60)
    
    # Check files
    print("\n📄 CHECKING FILES:\n")
    for category, files in required_files.items():
        print(f"🔍 {category}:")
        for file in files:
            file_path = os.path.join(base_path, file)
            if os.path.exists(file_path):
                size = os.path.getsize(file_path)
                print(f"  ✅ {file} ({size} bytes)")
            else:
                print(f"  ❌ {file} (MISSING)")
    
    # Check folders
    print(f"\n📁 CHECKING FOLDERS:\n")
    for category, folders in required_folders.items():
        print(f"🔍 {category}:")
        for folder in folders:
            folder_path = os.path.join(base_path, folder)
            if os.path.exists(folder_path):
                count = len(os.listdir(folder_path)) if os.path.isdir(folder_path) else 0
                print(f"  ✅ {folder}/ ({count} items)")
            else:
                print(f"  ❌ {folder}/ (MISSING)")
    
    # Check app data
    print(f"\n📊 CHECKING DATA:\n")
    try:
        with open(os.path.join(base_path, 'data/apps.json'), 'r') as f:
            data = json.load(f)
            apps_count = len(data.get('apps', []))
            print(f"✅ apps.json contains {apps_count} applications")
    except Exception as e:
        print(f"❌ Error reading apps.json: {e}")
    
    print("\n" + "=" * 60)
    print("✅ Project Structure Check Complete!")
    print("=" * 60)
    print("\n📌 Next Steps:")
    print("1. Add 12 slideshow images to img/slideshow/")
    print("2. Add app icons to img/icon-apps/")
    print("3. Update data/apps.json with real application data")
    print("4. Open index.html in browser with local server")
    print("\n💡 For more info, read: README.md")

if __name__ == '__main__':
    check_structure()
