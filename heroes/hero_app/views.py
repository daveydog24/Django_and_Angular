from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
import json
from .models import Hero
from .models import User


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



# ***************************************************************************************************************
#                                 This should be A GET REQUEST!!!
# ***************************************************************************************************************
class LoginUser(View):
    # CHECKS TO MAKE SURE THE USER IS IN THE DATABSE
    def post(self, request):
        our_data = json.loads(request.body.decode())
        login_email = our_data['loginemail']
        login_password = our_data['loginpassword']

        # should do a try catch method here
        user = list(User.objects.values().all().filter(email=login_email))

        if (user):
            email = user[0]["email"]
            password = user[0]["password"]

            if (login_email == email and login_password == password):
                first_name = user[0]["firstname"]
                last_name = user[0]["lastname"]

                # only want to send back non sensitve information 
                logged_user = {
                    "firstname": first_name,
                    "lastname": last_name,
                    "email": email
                }
                return JsonResponse({'status': 'ok', 'user': logged_user})
        
        return JsonResponse({'status': 'error'})


class GetUsers(View):
    # grabs all the user objects and returns them in a list
    def get(self, request):
        return JsonResponse({'status': 'ok', 'users': list(User.objects.values().all())})

class AddUser(View):
    # ADDS ONE USER TO THE DATABASE
    def post(self, request):
        our_data = json.loads(request.body.decode())
        User.objects.create(firstname=our_data["firstname"], lastname=our_data["lastname"], email=our_data["email"], password=our_data['password'])
        return JsonResponse({'status': 'ok'})
    
class UpdateUser(View):
    # gets information from json and finds the User in the database we are looking to update and updates it with 
    # the new information that was sent through.
    def put(self, request, user_id):
        our_data = json.loads(request.body.decode())
        user = User.objects.filter(id=user_id).update(firstname=our_data["firstname"], lastname=our_data["lastname"], email=our_data["email"], password=our_data['password'])
        return JsonResponse({'status': 'ok'})

class DeleteUser(View):
    # filters hero by id in the database and deletes that hero object and sends back our updated list
    def delete(self, request, user_id):
        User.objects.filter(id=user_id).delete()
        return JsonResponse({'status': 'ok'})
