from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
import json
from .models import Hero

# To make setting up our Django server with RESTful routes 
# easier we will be making use of Django's class based views.
 
class Heroes(View):
    def get(self, request):
        return JsonResponse({'status': 'ok', 'heroes': list(Hero.objects.values().all())})
    def post(self, request):
        our_data = json.loads(request.body.decode())
        Hero.objects.create(name=our_data["name"], abilities=our_data['abilities'])
        return JsonResponse({'status': 'ok'})
 
class HeroDetails(View):
    def get(self, request, hero_id):
        return JsonResponse({'status': 'ok'})
    def post(self, request, hero_id):
        our_data = json.loads(request.body.decode())
        print(our_data, type(our_data))
        return JsonResponse({'status': 'ok'})
    # displays the hero number we get from the url  
    # def get(self, request, hero_id):
    #     return JsonResponse({'status': hero_id})
    def put(self, request, hero_id):
        return JsonResponse({'status': 'ok'})
    def delete(self, request, hero_id):
        return JsonResponse({'status': 'ok'})


        # send back a json response dictionatry and parse through them as well
        # use these vs angulars front end validations 