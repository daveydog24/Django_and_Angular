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
    # def get(self, request, hero_id):
    #     print("in HERODETAILS GET method")
    #     return JsonResponse({'status': 'ok'})

    # def post(self, request, hero_id):
    #     print("in HERODETAILS POST method")
    #     our_data = json.loads(request.body.decode())
    #     print(our_data, type(our_data))
    #     return JsonResponse({'status': 'ok'})

    def put(self, request, hero_id):
        print("in put method")
        our_data = json.loads(request.body.decode())
        print("the data we sent hopefully.....", our_data)

        old_hero = Hero.objects.filter(id=hero_id)
        print("this is our old hero: ", old_hero)

        print("now we will attempt to update...")
        Hero.objects.filter(id=hero_id).update(name=our_data["name"], abilities=our_data['abilities'])
        print("hero should be updated.....")
        new_hero = Hero.objects.filter(id=hero_id)
        print("this should be the new hero with the passed updated information: ", new_hero)

        return JsonResponse({'status': 'ok', 'heroes': list(Hero.objects.values().all())})

    # filters hero by id in the database and deletes that hero object and sends back our updated list
    def delete(self, request, hero_id):
        Hero.objects.filter(id=hero_id).delete()
        return JsonResponse({'status': 'ok', 'heroes': list(Hero.objects.values().all())})