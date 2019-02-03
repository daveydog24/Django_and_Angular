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

    # takes our information in json and creates a hero object with it in our database
    def post(self, request):
        our_data = json.loads(request.body.decode())
        Hero.objects.create(name=our_data["name"], abilities=our_data['abilities'])
        return JsonResponse({'status': 'ok'})
 
class HeroDetails(View):
    def get(self, request, hero_id):
        print("in HERODETAILS GET method")
        return JsonResponse({'status': 'ok'})

    def post(self, request, hero_id):
        print("in HERODETAILS POST method")
        our_data = json.loads(request.body.decode())
        print(our_data, type(our_data))
        return JsonResponse({'status': 'ok'})

    def put(self, request, hero_id):
        return JsonResponse({'status': 'ok'})

    # filters hero by id in the database and deletes that hero object
    def delete(self, request, hero_id):
        Hero.objects.filter(id=hero_id).delete()
        return JsonResponse({'status': 'deleted'})