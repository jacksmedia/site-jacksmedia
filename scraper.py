import requests
from bs4 import BeautifulSoup

def scrape_youtube_videos(video_urls):
    video_data = []

    for url in video_urls:
        response = requests.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            # video_title = soup.find('yt-formatted-string', class_='style-scope ytd-watch-metadata').element.strip()
            # video_length = soup.find('span', class_='ytp-time-duration').element.strip()
            # video_data.append({'title': video_title, 'length': video_length})
            # Inside the for loop
            video_title_element = soup.find('yt-formatted-string', class_='style-scope ytd-watch-metadata')
            video_length_element = soup.find('span', class_='ytp-time-duration')

            if video_title_element or video_length_element:
                if video_title_element:
                    video_title = video_title_element.text.strip()
                else:
                    print(f"Cannot find title of {url}")
                if video_length_element:
                    video_length = video_length_element.text.strip()
                else:
                    print(f"Cannot find length of {url}")
                video_data.append({'title': video_title, 'length': video_length})
            else:
                print(f"Failed to fetch data for {url}")

        else:
            print(f"Failed to fetch {url}")

    return video_data

# List of YouTube video URLs
video_urls = [
    # Add more URLs here
    'https://www.youtube.com/watch?v=X3-gKPNyrTA?t=26',
    'https://youtu.be/50txkOrJn9o?t=87',
    'https://youtu.be/SedzswEwpPw?t=51',
    'https://youtu.be/jOfshreyu4w?t=41',
    'https://youtu.be/3GtFp6sz5zM?t=68',
    'https://youtu.be/cEOS2zoyQw4?t=89',
    'https://youtu.be/HMbT-CPVl2k?t=49',
    'https://youtu.be/enk0bOv-gF8?t=16',
    'https://youtu.be/IyINAjEoTIs?t=85',
    'https://www.youtube.com/watch?v=OPcZlXYcdMA?t=31',
    'https://youtu.be/8wddPSIEpvE?t=61',
    'https://youtu.be/RoIqYtiTLFI?t=18',
    'https://www.youtube.com/watch?v=nmmNWj9YtAw?t=60',
    'https://youtu.be/62a20CiIAlY?t=44',
    'https://youtu.be/EZT8RC0wRbA?t=88',
    'https://youtu.be/tbwbL1pg0HY?t=30',
    'https://youtu.be/Ba0fweKUwIc?t=37',
    'https://youtu.be/_V29hE0_oBE',
    'https://youtu.be/Yzm3fA2HhkQ?t=45',
    'https://www.youtube.com/watch?v=V1HbXt5ZRlg&t=39s',
    'https://youtu.be/ED3_i_xVd_s?t=54',
    'https://youtu.be/FgfT2fOv31E?t=40',
    'https://youtu.be/LZ2oHU-mMJI?t=443',
    'https://youtu.be/Nnd5Slo02us?t=25',
    'https://youtu.be/eBdfCX5XnX4',
    'https://youtu.be/8T39OBNaNzU?t=26'
]

# Scrape video data
scraped_data = scrape_youtube_videos(video_urls)

# Print the scraped data
for video in scraped_data:
    print(f"Title: {video['title']}")
    print(f"Length: {video['length']}")
    print("-" * 20)
