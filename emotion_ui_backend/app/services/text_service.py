from nltk.sentiment.vader import SentimentIntensityAnalyzer
import nltk
nltk.download('vader_lexicon', quiet=True)

def analyze_text(text: str):
    sia = SentimentIntensityAnalyzer()
    score = sia.polarity_scores(text)

    if score['compound'] >= 0.05:
        return "positive"
    elif score['compound'] <= -0.05:
        return "negative"
    else:
        return "neutral"
