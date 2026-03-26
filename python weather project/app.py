import requests as req
from flask import Flask,render_template,redirect,request

app=Flask(__name__)

def get_weather(city):
    result=req.get("https://api.openweathermap.org/data/2.5/weather",
    params={
        "q":city,
        "appid":"API_KEY",
        "units":"metric"
    }
    )

    all_json=result.json()

    weather=all_json['main']['temp']

    return weather

@app.route('/',method=['GET', 'POST'])
def home():
    weather=None
    if request.method=="GET":
        return render_template('home.html',weather=[])
    
    elif request.method=="POST":
        city=request.form['city']
        weather=get_weather(city)
        
        return render_template('home.html',weather=get_weather(city))
    
# @app.route('/about', methods=['GET','POST'])
# def about():
#     return render_template('about.html')

    
    app.run(debug=True, port=5000)

