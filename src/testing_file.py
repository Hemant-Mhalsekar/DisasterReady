import re
from flask import Flask
import langdetect
from flask_cors import CORS
from twikit import Client, TooManyRequests
import time
from datetime import datetime
import csv
from configparser import ConfigParser
from random import randint
import pandas as pd

import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer



app = Flask(__name__)
CORS(app)

MINIMUM_TWEETS = 40
QUERY = "#Naturaldisaster"



#login
config = ConfigParser()
config.read('config.ini')
username = '@Duma530287'
password = "dxima3va"
email = "dxima3v@jagomail.com"

#auth
client = Client(language='en-US')

"""
client.login(auth_info_1=username, auth_info_2=email, password=password)
client.save_cookies(" cookies1.json")
print("done?")
"""

def get_tweets(tweets):

    if tweets is None:
        print(f"{datetime.now()} - Getting Tweets...")
        tweets = client.search_tweet(QUERY, product="Top")
    else:
        wait_time = randint(5,10)
        print(f"Getting tweet after {wait_time}")
        time.sleep(wait_time)
        print(f"{datetime.now()} - Getting Next Tweets...")
        tweets = tweets.next()
    return tweets



client.load_cookies('cookies.json')

tweet_count = 0
tweets = None
all_tweets = []
while tweet_count < MINIMUM_TWEETS:
    tweets = get_tweets(tweets)

    if not tweets:
        print(f"{datetime.now()} -- no more tweets")
        break

    for tweet in tweets:
        tweet_count+=1
        tweet_data = [tweet_count, tweet.user.name, str(tweet.text), tweet.created_at, tweet.retweet_count, tweet.favorite_count, tweet.user.location, tweet.user.is_blue_verified]
        all_tweets.append(tweet_data)

print(f"{tweet_count} <--- Got this many tweets" )

english = []


def is_english_tweet(tweet_text):
    # Basic English character set and common special characters
    english_pattern = r"^[a-zA-Z0-9\s\.,!?@#$%^&*()_+=-\[\]{}|\\:;'\"/<>?]+$"
    return re.match(english_pattern, tweet_text) is not None



for i in all_tweets:
    if is_english_tweet(i[2]) and i[7] == True:
        english.append(i)







@app.route('/', methods=['GET'])
def processed_tweets():
    return english



if __name__ == '__main__':
    app.run(debug=True)








