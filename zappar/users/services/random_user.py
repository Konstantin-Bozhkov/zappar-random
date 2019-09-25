import requests
from django.core import serializers

class RandomUser():   

    @classmethod
    def get_random_user(self,gender, nat, results):
        # build the api url
        api = "https://randomuser.me/api/?gender={}&nat={}&results={}".format(gender, nat, results)
        api_request = requests.get(api)   
        random_user = api_request.json()
        return random_user['results']
