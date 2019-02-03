from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
import json
from .models import Hero

# To make setting up our Django server with RESTful routes 
# easier we will be making use of Django's class based views.
 
class Heroes(View):
    # grabs all the hero objects and returns them in a list
    def get(self, request):
        return JsonResponse({'status': 'ok', 'heroes': list(Hero.objects.values().all())})

    # takes our information in json and creates a hero object with it in our database and then sends back the updated list
    def post(self, request):
        our_data = json.loads(request.body.decode())
        Hero.objects.create(name=our_data["name"], abilities=our_data['abilities'])
        return JsonResponse({'status': 'ok', 'heroes': list(Hero.objects.values().all())})
 
class HeroDetails(View):
    # gets information from json and finds the hero in the database we are looking to update and updates it with 
    # the new information that was sent through.
    def put(self, request, hero_id):
        our_data = json.loads(request.body.decode())
        Hero.objects.filter(id=hero_id).update(name=our_data["name"], abilities=our_data['abilities'])
        return JsonResponse({'status': 'ok', 'heroes': list(Hero.objects.values().all())})

    # filters hero by id in the database and deletes that hero object and sends back our updated list
    def delete(self, request, hero_id):
        Hero.objects.filter(id=hero_id).delete()
        return JsonResponse({'status': 'ok', 'heroes': list(Hero.objects.values().all())})